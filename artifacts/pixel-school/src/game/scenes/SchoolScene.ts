// The main world scene: builds the school, runs the clock, player, NPCs and interactions.
import Phaser from 'phaser';
import { renderBackground, PLAYER_LOCKER_X, HALL_TV_PX } from '../art/tiles';
import { buildFurnitureTextures } from '../art/furniture';
import { buildCharacterSheet, FRAME_H, FRAME_W, Look, randomLook, SHEET_COLS, SHEET_ROWS } from '../art/characters';
import { DPR } from '../display';
import { buildGrid, MAP_H, MAP_W, ROOMS, roomContaining, SchoolGrid, TILE } from '../data/schoolMap';
import { buildPlacement, Dir, PlacedObject, Seat } from '../data/furniture';
import { buildRoster, DAY_END, DAY_START, GROUP_SCHEDULE, nextClassSlot, Period, periodAt, PERIODS, Person, PLAYER_GROUP, playerSeatIndex, Subject, subjectForRoom, SUBJECTS } from '../data/schedule';
import { buildDailyPlan, bucketToSlot, isWindowOpen, minRequired, TUTORING_THRESHOLD } from '../systems/SelfPaced';
import { BOOK_FACTS, STAFF_LINES, studentLine, TEACHER_TIPS } from '../data/dialogue';
import { Character } from '../entities/Character';
import { NavGrid, findPath, TilePt } from '../systems/Pathfinding';
import { NPC, NPCSystem, World } from '../systems/NPCSystem';
import { Sfx } from '../systems/Audio';
import { clearSave, DAY_NAMES, HomeworkItem, letter, loadSave, newSave, SaveData, StatKey, writeSave } from '../systems/GameState';
import { Hud } from '../ui/Hud';
import { Classroom3D, CLASS_ROOMS } from '../three/Classroom3D';
import { getLesson, Lesson } from '../data/curriculum';
import { Presence, PresenceState, upsertProfile, fetchProfile, getOrCreateFamilyCode, fetchDailyReports, upsertDailyReport, parentGateStatus, signOut } from '../net/multiplayer';
import { ParentDashboard } from '../systems/ParentDashboard';
import { BroadcastPlayer, mandatorySeenToday, markMandatorySeen } from '../systems/BroadcastPlayer';

/** Pop quizzes: at most this many per class period, always exactly 5 questions. */
const MAX_POP_QUIZZES_PER_CLASS = 2;
const POP_QUIZ_QUESTIONS = 5;

type Target =
  | { kind: 'npc'; npc: NPC }
  | { kind: 'obj'; obj: PlacedObject }
  | { kind: 'seat'; seat: Seat };

const fmtTime = (m: number) => {
  const h = Math.floor(m / 60), mm = Math.floor(m % 60);
  return `${((h + 11) % 12) + 1}:${String(mm).padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`;
};

export class SchoolScene extends Phaser.Scene {
  hud!: Hud;
  grid!: SchoolGrid;
  nav!: NavGrid;
  objects: PlacedObject[] = [];
  seats: Seat[] = [];
  world!: World;
  npcs!: NPCSystem;
  people: Person[] = [];
  player!: Character;
  save!: SaveData;
  keys!: Record<string, Phaser.Input.Keyboard.Key>;
  bus!: Phaser.GameObjects.Image;
  arrow!: Phaser.GameObjects.Image;
  seatMark!: Phaser.GameObjects.Image;

  minute = DAY_START;
  lastWholeMinute = DAY_START;
  periodIndex = 0;
  userSpeed = 1;
  fastForward = false;
  running = false;
  dayOver = false;
  autoPath: TilePt[] = [];
  pendingTarget: Target | null = null;
  currentRoom = '';
  target: Target | null = null;
  stepTimer = 0;
  charSheets: Record<string, HTMLCanvasElement> = {};
  bgCanvas!: HTMLCanvasElement;
  propCanvases: Record<string, HTMLCanvasElement> = {};
  hallTv!: Phaser.GameObjects.Image;
  class3d: Classroom3D | null = null;
  prefer2D = false; // while seated: player asked to leave first-person and see the map instead
  standView3D = false; // while standing: player asked to look around in first-person
  userZoom = 1; // manual camera zoom multiplier, adjustable at any time

  // per-day state
  hasBooks = false;
  gotTray = false;
  ateMinutes = 0;
  presence = 0;
  arrivedAt = -1;
  quizzesAsked = 0;
  record = { attended: 0, late: 0, missed: 0, quizRight: 0, quizTotal: 0 };
  cooldowns = new Set<string>();
  talked = new Set<string>();
  dayLog: string[] = [];
  onBus = false;
  busCalled = false;

  // live multiplayer (real accounts, alongside NPCs) — see net/multiplayer.ts
  userId: string | null = null;
  net: Presence | null = null;
  remotePlayers: Map<string, Character> = new Map();
  netBroadcastTimer = 0;

  // Morning broadcast — see systems/BroadcastPlayer.ts
  broadcast!: BroadcastPlayer;
  broadcastStarted = false;
  broadcastMandatoryDone = false;
  broadcastNewsStarted = false;
  /** Bumped by startDay() so a finishing assembly from an earlier day is ignored. */
  broadcastDayToken = 0;

  // Parent-report activity signals (Phase 2) — reset each day in startDay()
  activityIdleSeconds = 0;
  activityQuestionsAsked = 0;
  activitySocialInteractions = 0;
  activityOffAppSeconds = 0;
  private offAppSince = 0;
  /** True once 4+ daily reports have gone unchecked by a linked parent for 2+ days —
   *  blocks the Friday test and class check-ins until the parent catches up. */
  parentGateBlocked = false;
  /** Open parent dashboard (parent accounts only) — torn down with the scene. */
  private parentDash: ParentDashboard | null = null;
  /** Set during teardown so async callbacks resolving after a route change do nothing. */
  private tornDown = false;

  constructor() {
    super('SchoolScene');
  }

  create() {
    this.grid = buildGrid();
    const placement = buildPlacement();
    this.objects = placement.objects;
    this.seats = placement.seats;

    // --- Textures
    this.bgCanvas = renderBackground(this.grid);
    this.textures.addCanvas('bg', this.bgCanvas);
    const furn = buildFurnitureTextures();
    this.propCanvases = furn;
    for (const [k, c] of Object.entries(furn)) this.textures.addCanvas(k, c);
    this.people = buildRoster();
    for (const p of this.people) this.addCharTexture('char_' + p.id, p.look);

    this.add.image(0, 0, 'bg').setOrigin(0, 0).setDepth(0);

    // --- Navigation grid
    this.nav = new NavGrid(MAP_W, MAP_H);
    for (let y = 0; y < MAP_H; y++) for (let x = 0; x < MAP_W; x++) if (this.grid.at(x, y) === 'wall') this.nav.setSolid(x, y, true);
    for (const o of this.objects) {
      if (o.solid) for (let y = o.ty; y < o.ty + o.fh; y++) for (let x = o.tx; x < o.tx + o.fw; x++) this.nav.setSolid(x, y, true);
      if (o.hidden || o.type === 'marker') continue;
      const img = this.add.image(o.tx * TILE + (o.fw * TILE) / 2, (o.ty + o.fh) * TILE, o.type).setOrigin(0.5, 1);
      img.setDepth(o.under ? 1 : (o.ty + o.fh) * TILE - 1);
    }

    // --- World model shared with NPC brains
    const seatsByRoom: Record<string, Seat[]> = {};
    const teacherSeat: Record<string, Seat> = {};
    for (const s of this.seats) {
      if (s.kind === 'teacher') { if (!teacherSeat[s.room]) teacherSeat[s.room] = s; continue; }
      (seatsByRoom[s.room || 'yard'] ??= []).push(s);
    }
    const playerClassSeatIds = new Set<number>();
    GROUP_SCHEDULE[PLAYER_GROUP].forEach((sub) => { const l = seatsByRoom[SUBJECTS[sub].room]; playerClassSeatIds.add(l[playerSeatIndex(l.length)].id); });
    this.world = {
      nav: this.nav, seats: this.seats, seatsByRoom, teacherSeat, minute: DAY_START, day: 1, periodIndex: 0,
      busPresent: true, timeScale: 1, playerSeatId: null, playerClassSeatIds,
    };
    this.npcs = new NPCSystem(this, this.people, this.world);

    // --- Bus, helpers
    this.bus = this.add.image(41 * TILE, 53 * TILE, 'bus').setOrigin(0.5, 1).setDepth(53 * TILE);
    this.arrow = this.add.image(0, 0, 'arrow').setDepth(20000).setVisible(false);
    this.seatMark = this.add.image(0, 0, 'seatMark').setOrigin(0, 0).setDepth(3).setVisible(false);
    this.tweens.add({ targets: this.seatMark, alpha: 0.35, duration: 600, yoyo: true, repeat: -1 });

    // --- Camera
    const cam = this.cameras.main;
    cam.setBounds(0, 0, MAP_W * TILE, MAP_H * TILE);
    cam.setBackgroundColor('#2a4a33');
    cam.setRoundPixels(false);
    this.fitZoom();
    this.scale.on('resize', () => this.fitZoom());

    // --- Input
    const kb = this.input.keyboard!;
    this.keys = kb.addKeys('W,A,S,D,UP,DOWN,LEFT,RIGHT', false) as any;
    kb.on('keydown', (e: KeyboardEvent) => {
      if (!this.running || this.hud.modalOpen || performance.now() - this.hud.lastClose < 250) return;
      if (['e', 'E', ' ', 'Enter'].includes(e.key)) this.action();
      if (e.key === 'm' || e.key === 'M') this.openMap();
      if (e.key === 'f' || e.key === 'F') this.toggleFastForward();
    });
    let downAt: { x: number; y: number } | null = null;
    this.input.on('pointerdown', (p: Phaser.Input.Pointer) => (downAt = { x: p.x, y: p.y }));
    this.input.on('pointerup', (p: Phaser.Input.Pointer) => {
      if (!downAt || !this.running || this.hud.modalOpen) return;
      if (Math.hypot(p.x - downAt.x, p.y - downAt.y) < 12 * DPR) this.tapMove(p.worldX, p.worldY);
      downAt = null;
    });
    // Zoom: mouse wheel (desktop) and two-finger pinch (touch), at any time.
    this.input.on('wheel', (_p: Phaser.Input.Pointer, _o: unknown, _dx: number, dy: number) => {
      if (this.hud.modalOpen) return;
      this.adjustZoom(dy > 0 ? 0.92 : 1.08);
    });
    let pinchDist = 0;
    this.input.on('pointermove', () => {
      const pts = this.input.manager.pointers.filter((pt) => pt.isDown);
      if (pts.length === 2) {
        const d = Phaser.Math.Distance.Between(pts[0].x, pts[0].y, pts[1].x, pts[1].y);
        if (pinchDist > 0) this.adjustZoom(d / pinchDist);
        pinchDist = d;
      } else pinchDist = 0;
    });

    // --- HUD
    this.hud = new Hud(this.game.canvas.parentElement as HTMLElement);
    this.broadcast = new BroadcastPlayer(this.game.canvas.parentElement as HTMLElement);
    // Big wall TV in the main hallway shows the live picture.
    if (this.textures.exists('bcastScreen')) this.textures.remove('bcastScreen');
    const tvTex = this.textures.addCanvas('bcastScreen', this.broadcast.screen.small)!;
    tvTex.setFilter(Phaser.Textures.FilterMode.LINEAR);
    this.hallTv = this.add.image(HALL_TV_PX.x, HALL_TV_PX.y, 'bcastScreen').setOrigin(0, 0).setDisplaySize(HALL_TV_PX.w, HALL_TV_PX.h).setDepth(1);
    this.broadcast.onFrame = () => {
      tvTex.refresh();
      if (this.class3d?.active) this.class3d.setTVFrame(this.broadcast.screen.canvas);
    };
    this.hud.onAction = () => { if (this.running && !this.hud.modalOpen) this.action(); };
    this.hud.onMap = () => this.openMap();
    this.hud.onZoomIn = () => this.adjustZoom(1.2);
    this.hud.onZoomOut = () => this.adjustZoom(1 / 1.2);
    this.hud.onSpeed = () => {
      this.userSpeed = this.userSpeed === 1 ? 2 : this.userSpeed === 2 ? 4 : 1;
      this.hud.setSpeedLabel(this.userSpeed + '×');
    };
    this.hud.onFastForward = () => this.toggleFastForward();
    this.hud.onMenu = () => this.openMenu();
    this.hud.onToggleView = () => {
      if (this.player.seat) this.prefer2D = !!this.class3d?.active;
      else this.standView3D = !this.class3d?.active;
    };
    this.hud.onStandUp = () => { if (this.player.seat) { this.player.standUp(); this.player.face('down'); } };
    this.hud.onTakeTest = () => {
      const per = PERIODS[this.periodIndex];
      if (per.kind !== 'class') return;
      const sub = this.currentClassSubject(per);
      if (sub && this.player.seat?.room === SUBJECTS[sub].room) this.takeUnitTest(sub);
    };
    this.hud.onHomework = () => {
      const items = (Object.keys(this.save.homework) as Subject[])
        .filter((k) => this.save.homework[k])
        .map((k) => ({ subject: k, item: this.save.homework[k]! }));
      this.hud.homeworkPanel(items, (sub) => {
        const item = this.save.homework[sub];
        if (!item) return;
        item.done = true;
        this.save.grades[sub] = Math.min(100, this.save.grades[sub] + 2);
        writeSave(this.save);
        this.refreshHomeworkBadge();
      });
    };
    this.hud.setVisible(false);
    // Parent oversight: track time away from the app (Phase 2 activity signal).
    const onVis = () => {
      if (document.hidden) this.offAppSince = performance.now();
      else if (this.offAppSince) { this.activityOffAppSeconds += (performance.now() - this.offAppSince) / 1000; this.offAppSince = 0; }
    };
    const onBlur = () => { if (!this.offAppSince) this.offAppSince = performance.now(); };
    document.addEventListener('visibilitychange', onVis);
    window.addEventListener('blur', onBlur);
    window.addEventListener('focus', onVis);

    // DOM/audio/3D resources and window listeners live outside Phaser's display list, so tear
    // them down on both shutdown and destroy (each step is idempotent).
    const teardown = () => {
      this.tornDown = true;
      document.removeEventListener('visibilitychange', onVis);
      window.removeEventListener('blur', onBlur);
      window.removeEventListener('focus', onVis);
      this.parentDash?.destroy(); this.parentDash = null;
      this.hud.destroy(); this.net?.destroy(); this.broadcast.destroy(); this.class3d?.destroy(); this.class3d = null;
    };
    this.events.once('shutdown', teardown);
    this.events.once('destroy', teardown);

    // Player placeholder until the creator finishes
    this.player = new Character(this, 'char_' + this.people[0].id, 41 * TILE + 8, 49 * TILE + 13);
    this.player.setVisible(false);
    cam.centerOn(30 * TILE, 30 * TILE);
    this.showTitle();
  }

  private addCharTexture(key: string, look: Look) {
    if (this.textures.exists(key)) this.textures.remove(key);
    const tex = this.textures.addCanvas(key, buildCharacterSheet(look))!;
    for (let i = 0; i < SHEET_COLS * SHEET_ROWS; i++) tex.add(i, 0, (i % SHEET_COLS) * FRAME_W, Math.floor(i / SHEET_COLS) * FRAME_H, FRAME_W, FRAME_H);
    tex.setFilter(Phaser.Textures.FilterMode.LINEAR);
    this.charSheets[key] = tex.getSourceImage() as HTMLCanvasElement;
  }

  private baseZoom = 1;
  private fitZoom() {
    const w = this.scale.width, h = this.scale.height;
    const base = Math.max(2, Math.min(5, Math.round(Math.min(w, h) / DPR / 240)));
    this.baseZoom = Math.round(base * DPR);
    this.applyZoom();
  }

  private applyZoom() {
    this.cameras.main.setZoom(this.baseZoom * this.userZoom);
  }

  /** Zoom in/out at any time, clamped to a sensible range around the fitted base zoom. */
  private adjustZoom(factor: number) {
    this.userZoom = Math.max(0.5, Math.min(2.5, this.userZoom * factor));
    this.applyZoom();
  }

  // ---------------- Live multiplayer ----------------
  /** Any signed-in account shows up live to everyone else, alongside the NPCs.
   *  Never touches lesson content — each viewer still renders their own grade's
   *  board locally (see currentLesson()); presence only carries look/position. */
  private startNetwork() {
    this.net?.destroy();
    this.net = null;
    for (const c of this.remotePlayers.values()) c.destroy();
    this.remotePlayers.clear();
    if (!this.userId) return;
    const uid = this.userId;
    upsertProfile(uid, this.save.name, this.save.schoolGrade, this.save.look).catch(() => {});
    const initial: PresenceState = {
      id: uid, username: this.save.name, grade: this.save.schoolGrade, look: this.save.look,
      x: this.player.x, y: this.player.y, room: this.currentRoom, dir: this.player.dir, pose: this.player.pose, seatId: this.player.seat?.id ?? null,
    };
    const net = new Presence(initial);
    net.onUpdate = (others) => this.syncRemotePlayers(others);
    this.net = net;
  }

  private syncRemotePlayers(others: PresenceState[]) {
    const seen = new Set<string>();
    for (const o of others) {
      seen.add(o.id);
      const key = 'char_net_' + o.id;
      if (!this.textures.exists(key)) this.addCharTexture(key, o.look);
      let c = this.remotePlayers.get(o.id);
      if (!c) {
        c = new Character(this, key, o.x, o.y);
        this.remotePlayers.set(o.id, c);
      }
      const seat = o.seatId != null ? this.seats.find((s) => s.id === o.seatId) : null;
      if (seat) c.sitAt(seat);
      else { c.standUp(); c.setPos(o.x, o.y); c.face(o.dir as Dir); }
      c.sync();
    }
    for (const [id, c] of this.remotePlayers) {
      if (!seen.has(id)) { c.destroy(); this.remotePlayers.delete(id); }
    }
  }

  // ---------------- Game flow ----------------
  private async showTitle(): Promise<void> {
    const existing = loadSave();
    const login = await this.hud.login();
    this.userId = login.userId;

    if (this.userId) {
      const profile = await fetchProfile(this.userId).catch(() => null);
      if (this.tornDown) return;
      if (profile) {
        if (profile.role === 'parent') { await this.runParentMode(this.userId); return; }
      } else {
        const role = await this.hud.chooseRole();
        if (this.tornDown) return;
        if (role === null) return this.backToSignIn();
        if (role === 'parent') {
          await upsertProfile(this.userId, existing?.name || 'Parent', 1, existing?.look ?? randomLook(Math.floor(Math.random() * 9999)), 'parent').catch(() => {});
          if (this.tornDown || !this.userId) return;
          await this.runParentMode(this.userId);
          return;
        }
      }
    }

    const res = await this.hud.creator(existing ? { name: existing.name, look: existing.look, day: existing.day, schoolGrade: existing.schoolGrade } : null);
    if (this.tornDown) return;
    if (!res) return this.backToSignIn();
    this.save = !res.fresh && existing ? existing : newSave(res.name, res.look, res.schoolGrade);
    this.addCharTexture('char_player', this.save.look);
    this.player.destroy();
    this.player = new Character(this, 'char_player', 41 * TILE + 8, 49 * TILE + 13);
    this.cameras.main.startFollow(this.player.sprite, true, 0.18, 0.18);
    this.hud.setVisible(true);
    writeSave(this.save);
    this.startNetwork();
    this.startDay();
    const first = this.save.day === 1 && res.fresh;
    if (first) {
      await this.hud.say('Principal Grant', `Welcome to Maple Grove School, ${this.save.name}! You're in homeroom A. Grab your books from your locker (look for the gold ★), then find your seat in Math before the 8:00 bell.`, [], '#3b3f58');
      await this.hud.say('Tip', 'Follow the yellow arrow to your next goal. Tap the map button to see the whole school and your schedule. Talk to everyone — friendships grow each day!', [], '#6b4fa0');
    }
  }

  /** Exit from the role chooser / character creator: sign out (if signed in) and start over at sign-in. */
  private async backToSignIn(): Promise<void> {
    if (this.userId) { this.userId = null; await signOut().catch(() => {}); }
    if (this.tornDown) return;
    return this.showTitle();
  }

  /** A parent account never enters the game world — it only sees the oversight dashboard. */
  private async runParentMode(userId: string) {
    if (this.tornDown) return;
    this.hud.setVisible(false);
    this.player.setVisible(false);
    this.parentDash?.destroy();
    const dash = new ParentDashboard(this.game.canvas.parentElement as HTMLElement, userId);
    this.parentDash = dash;
    dash.onExit = () => {
      dash.destroy();
      if (this.parentDash === dash) this.parentDash = null;
      this.userId = null;
      this.showTitle();
    };
  }

  private startDay() {
    this.minute = DAY_START;
    this.lastWholeMinute = DAY_START;
    this.periodIndex = 0;
    this.world.day = this.save.day;
    this.world.minute = DAY_START;
    this.world.periodIndex = 0;
    this.world.busPresent = true;
    this.hasBooks = false; this.gotTray = false; this.ateMinutes = 0;
    this.presence = 0; this.arrivedAt = -1; this.quizzesAsked = 0;
    this.record = { attended: 0, late: 0, missed: 0, quizRight: 0, quizTotal: 0 };
    this.cooldowns.clear(); this.talked.clear(); this.dayLog = [];
    this.onBus = false; this.busCalled = false; this.dayOver = false; this.fastForward = false;
    this.broadcast.cancel(); // a new day never inherits yesterday's assembly
    this.broadcast.stopNewsLoop();
    this.broadcastDayToken++;
    this.broadcastStarted = false;
    // Already aired today (real date)? Then nothing waits on it — class seats are open right away.
    this.broadcastMandatoryDone = mandatorySeenToday();
    this.broadcastNewsStarted = false;
    this.activityIdleSeconds = 0; this.activityQuestionsAsked = 0; this.activitySocialInteractions = 0; this.activityOffAppSeconds = 0; this.offAppSince = 0;
    if (this.save.schoolGrade >= 6) {
      const isTestDay = DAY_NAMES[(this.save.day - 1) % 5] === 'Friday';
      this.save.plan = buildDailyPlan(this.save.schoolGrade, this.save.day, isTestDay);
    } else this.save.plan = null;
    this.refreshHomeworkBadge();
    this.player.standUp();
    this.player.setVisible(true);
    this.player.setPos(40 * TILE + 8, 49 * TILE + 13);
    this.player.face('up');
    this.save.energy = Math.max(this.save.energy, 100);
    this.npcs.startDay();
    this.bus.setVisible(true).setX(41 * TILE);
    this.running = true;
    this.hud.toast(`☀️ ${DAY_NAMES[(this.save.day - 1) % 5]} — Day ${this.save.day}`);
    this.refreshHud();
    this.refreshParentGate();
  }

  /** Re-checks whether a parent has fallen behind on reviewing this student's daily
   *  reports (see parentGateStatus). Only applies to signed-in students. */
  private async refreshParentGate() {
    if (!this.userId) { this.parentGateBlocked = false; return; }
    try {
      const reports = await fetchDailyReports(this.userId);
      const gate = parentGateStatus(reports);
      this.parentGateBlocked = gate.blocked;
      if (gate.blocked) this.hud.toast(`⚠️ A parent needs to review ${gate.overdueCount} overdue report(s) before you can test or attend class.`);
    } catch { /* offline / no linked parent yet — don't block on network trouble */ }
  }

  private busArrive() {
    this.bus.setVisible(true).setX(-80);
    this.tweens.add({ targets: this.bus, x: 41 * TILE, duration: 3500, ease: 'Sine.easeOut', onComplete: () => { this.world.busPresent = true; this.hud.toast('🚌 The bus is here!'); } });
  }

  private busLeave() {
    this.world.busPresent = false;
    this.tweens.add({ targets: this.bus, x: MAP_W * TILE + 80, duration: 3500, ease: 'Sine.easeIn' });
  }

  private async endDay(missedBus: boolean) {
    if (this.dayOver) return;
    this.dayOver = true;
    this.running = false;
    this.fastForward = false;
    const s = this.save;
    s.totalDays++;
    const friends = this.people.filter((p) => (s.friendship[p.id] ?? 0) > 0).sort((a, b) => (s.friendship[b.id] ?? 0) - (s.friendship[a.id] ?? 0)).slice(0, 4);
    const r = this.record;
    const dayName = DAY_NAMES[(s.day - 1) % 5];
    if (this.userId) {
      const hwItems = Object.values(this.save.homework).filter((h): h is HomeworkItem => !!h);
      upsertDailyReport({
        student_id: this.userId, day: s.day, report_date: new Date().toISOString().slice(0, 10),
        attended: r.attended, late: r.late, missed: r.missed, quiz_right: r.quizRight, quiz_total: r.quizTotal,
        homework_assigned: hwItems.length, homework_done: hwItems.filter((h) => h.done).length,
        idle_seconds: Math.round(this.activityIdleSeconds), notes_taken: 0,
        questions_asked: this.activityQuestionsAsked, social_interactions: this.activitySocialInteractions,
        off_app_seconds: Math.round(this.activityOffAppSeconds),
      }).catch(() => {});
    }
    await this.hud.panel((p, close) => {
      p.innerHTML = `<div class="msg-title">Report Card</div><h2>${dayName} · Day ${s.day}</h2>
        ${missedBus ? '<p>🚶 You missed the bus and walked home. Long walk!</p>' : '<p>🚌 You rode the bus home. What a day!</p>'}
        <h3>Attendance</h3><p>✅ ${r.attended} classes · ⏰ ${r.late} late · ❌ ${r.missed} missed · 📝 Quizzes ${r.quizRight}/${r.quizTotal}</p>
        <h3>Grades</h3><div class="msg-grid">${(Object.keys(SUBJECTS) as Subject[]).map((k) => `<span>${SUBJECTS[k].name}</span><span>${Math.round(s.grades[k])}%</span><span class="g">${letter(s.grades[k])}</span>`).join('')}</div>
        <h3>Stats</h3><p>📘 Smarts ${s.stats.smarts} · 🏀 Fitness ${s.stats.fitness} · 🎨 Creativity ${s.stats.creativity} · 💬 Friendship ${s.stats.social}</p>
        ${friends.length ? `<h3>Friends</h3><p>${friends.map((f) => `${f.name} <span class="msg-hearts">${'♥'.repeat(Math.ceil((s.friendship[f.id] ?? 0) / 2))}</span>`).join(' · ')}</p>` : '<h3>Friends</h3><p>Talk to classmates tomorrow to make friends!</p>'}
        ${(s.day % 5 === 0) ? '<p>🎉 It\'s the weekend! Rest up for Monday.</p>' : ''}`;
      const b = document.createElement('button');
      b.className = 'msg-btn go';
      b.style.width = '100%'; b.style.marginTop = '10px';
      b.textContent = 'Next day ▶';
      b.onclick = () => { Sfx.good(); close(); };
      p.appendChild(b);
    });
    const wasFriday = s.day % 5 === 0;
    s.day++;
    s.energy = 100;
    writeSave(s);
    if (wasFriday && s.needsTutoring.length) { await this.runTutoringDay(); return; }
    this.startDay();
  }

  // ---------------- Update loop ----------------
  update(_t: number, deltaMs: number) {
    const dt = Math.min(0.05, deltaMs / 1000);
    // Keep the broadcast picture moving while any TV is actually on screen.
    const view = this.cameras.main.worldView;
    const tvOnCamera = !this.class3d?.active && view.right > HALL_TV_PX.x && view.left < HALL_TV_PX.x + HALL_TV_PX.w && view.bottom > HALL_TV_PX.y && view.top < HALL_TV_PX.y + HALL_TV_PX.h;
    this.broadcast.worldViewers = (tvOnCamera ? 1 : 0) + (this.class3d?.active && this.class3d.hasTV ? 1 : 0);
    this.broadcast.tick(_t);
    const paused = !this.running || this.hud.modalOpen > 0;
    const scale = this.fastForward ? 10 : this.userSpeed;
    this.world.timeScale = paused ? 0 : scale;
    this.world.playerSeatId = this.player.seat?.id ?? null;

    if (this.net) {
      this.netBroadcastTimer -= dt;
      if (this.netBroadcastTimer <= 0) {
        this.netBroadcastTimer = 0.35; // cheap local merge; Presence throttles the actual sends
        this.net.update({ x: this.player.x, y: this.player.y, room: this.currentRoom, dir: this.player.dir, pose: this.player.pose, seatId: this.player.seat?.id ?? null });
      }
    }

    if (!paused) {
      this.minute += (dt * scale) / 1.5; // 1.5 real seconds = 1 game minute at 1×
      while (this.lastWholeMinute + 1 <= this.minute) {
        this.lastWholeMinute++;
        this.onMinute();
        if (!this.running) break;
      }
      this.npcs.update(dt);
      this.updatePlayer(dt);
      if (!this.player.moving && !this.player.seat && !this.class3d?.active) this.activityIdleSeconds += dt;
    } else {
      this.npcs.update(0);
      this.player.animate(0);
    }
    this.updateTargetsAndHud();
    this.update3D(dt);
  }

  // ---------------- First-person 3D ----------------
  /** A stand-in "seat" anchored at the player's current tile, used to look
   *  around in first person from wherever they're standing (not just seated). */
  private standAnchor(): Seat {
    return { id: -1, tx: Math.floor(this.player.sprite.x / TILE), ty: Math.floor(this.player.sprite.y / TILE), facing: this.player.dir, room: this.currentRoom, kind: 'stand' };
  }

  /** True whenever a first-person view is offered here — seated OR just standing
   *  in a modeled room — so the player can pop into first/third-person at any point. */
  private can3D() {
    if (!this.running) return false;
    if (this.player.seat) return CLASS_ROOMS.includes(this.player.seat.room);
    return CLASS_ROOMS.includes(this.currentRoom);
  }

  private update3D(dt: number) {
    const avail = this.can3D();
    if (!this.player.seat) this.prefer2D = false;
    if (!avail) this.standView3D = false;
    // Seated: 3D shows automatically (classic behavior) unless the player asked for map view.
    // Standing: 3D is opt-in — the player taps "👀 3D view" to look around from where they stand.
    const want = avail && (this.player.seat ? !this.prefer2D : this.standView3D);
    if (want && !this.class3d?.active) this.enter3D();
    else if (!want && this.class3d?.active) this.exit3D();
    this.hud.setViewMode(!!this.class3d?.active, avail, !!this.player.seat);
    if (this.class3d?.active) this.class3d.update(this.hud.modalOpen ? dt * 0.5 : dt, this.npcs.npcs);
  }

  private enter3D() {
    const seat = this.player.seat ?? this.standAnchor();
    if (!this.class3d) {
      const parent = this.game.canvas.parentElement as HTMLElement;
      this.class3d = new Classroom3D(parent, this.hud.root, { bg: this.bgCanvas, props: this.propCanvases, grid: this.grid, objects: this.objects, looks: Object.fromEntries(this.people.map((p) => [p.id, p.look])) });
      this.class3d.onTapPerson = (id) => { const n = this.npcs.byId(id); if (n && !this.hud.modalOpen) this.talk(n); };
    }
    const room = ROOMS.find((r) => r.id === seat.room)!;
    this.class3d.open(room, seat, this.save.look);
    this.refreshBoard();
    this.game.canvas.style.visibility = 'hidden';
    this.cameras.main.setVisible(false);
  }

  private exit3D() {
    this.class3d?.close();
    this.game.canvas.style.visibility = '';
    this.cameras.main.setVisible(true);
  }

  /** Today's lesson for the seated player's own grade — every other player
   *  physically in the same room renders this call on their own client with
   *  their own schoolGrade, so everyone sees the room but their own board. */
  currentLesson(sub: Subject): Lesson {
    return getLesson(this.save.schoolGrade, sub);
  }

  private refreshBoard(quiz?: { q: string; options: string[]; n: number; total: number }) {
    if (!this.class3d?.active) return;
    if (quiz) { this.class3d.setBoard(`Pop quiz! (${quiz.n}/${quiz.total})`, [quiz.q, ...quiz.options.map((o, i) => `${i + 1})  ${o}`)]); return; }
    const per = PERIODS[this.periodIndex];
    const slot = per.kind === 'class' ? per.slot : nextClassSlot(this.periodIndex);
    const sub = this.isSelfPaced() ? this.currentClassSubject(per) : (slot !== undefined ? this.playerSubject(slot) : undefined);
    const room = this.player.seat?.room;
    if (sub && SUBJECTS[sub].room === room) {
      const lesson = this.currentLesson(sub);
      this.class3d.setBoard(lesson.title, lesson.board.slice(1));
    } else this.class3d.setBoard(`${DAY_NAMES[(this.save.day - 1) % 5]}`, ['Welcome, class!', `Next bell: ${fmtTime(per.end)}`, 'Be kind · Be curious']);
  }

  private raiseHand() {
    const per = PERIODS[this.periodIndex];
    this.player.showEmote('alert', 1500);
    if (per.kind !== 'class') { this.hud.toast("✋ There's no class right now"); return; }
    const sub = this.currentClassSubject(per);
    if (!sub || this.player.seat?.room !== SUBJECTS[sub].room) { this.hud.toast("✋ This isn't a class you're attending right now!"); return; }
    this.activityQuestionsAsked++;
    if (this.quizzesAsked < MAX_POP_QUIZZES_PER_CLASS) { this.quizzesAsked++; this.popQuiz(sub, true); return; }
    if (this.once('hand')) this.gain(sub === 'pe' ? 'fitness' : sub === 'art' || sub === 'music' ? 'creativity' : 'smarts', 1);
    this.hud.say(SUBJECTS[sub].teacher, `Great participation today, ${this.save.name}! Let's give someone else a turn.`, [], '#c0504d');
  }

  private onMinute() {
    const m = this.lastWholeMinute;
    this.world.minute = m;
    const pi = periodAt(m);
    if (pi !== this.periodIndex) this.onPeriodChange(this.periodIndex, pi);
    this.npcs.think();

    const per = PERIODS[this.periodIndex];
    // Energy
    if (m % 4 === 0) this.save.energy = Math.max(0, this.save.energy - 1);
    if (this.save.energy < 20 && m % 7 === 0) this.player.showEmote('sleep');

    // Class attendance & learning
    if (per.kind === 'class') {
      const sub = this.currentClassSubject(per);
      const room = sub ? SUBJECTS[sub].room : undefined;
      if (sub && this.player.seat && this.player.seat.room === room) {
        if (this.arrivedAt < 0) this.arrivedAt = m;
        this.presence++;
        const since = m - per.start;
        if (this.presence % 6 === 0) {
          const stat: StatKey = sub === 'pe' ? 'fitness' : sub === 'art' || sub === 'music' ? 'creativity' : 'smarts';
          this.gain(stat, 1, true);
          this.save.grades[sub] = Math.min(100, this.save.grades[sub] + 0.5);
        }
        if ((since === 14 || since === 32) && this.quizzesAsked < MAX_POP_QUIZZES_PER_CLASS) { this.quizzesAsked++; this.popQuiz(sub); }
      }
    }
    // Eating lunch
    if (per.kind === 'lunch' && this.gotTray && this.player.seat?.room === 'cafeteria' && this.ateMinutes < 10) {
      this.ateMinutes++;
      this.save.energy = Math.min(100, this.save.energy + 5);
      if (this.ateMinutes % 3 === 1) this.player.showEmote('food');
      if (this.ateMinutes === 10) {
        this.hud.toast('😋 Delicious! Energy restored');
        // Lunch buddies at the same table become closer
        const mine = this.player.seat!;
        for (const n of this.npcs.npcs) {
          const s = n.ch.seat;
          if (s && s.room === 'cafeteria' && Math.abs(s.tx - mine.tx) <= 3 && Math.abs(s.ty - mine.ty) <= 2 && n.person.role === 'student') this.addFriend(n.person, 1, true);
        }
      }
    }
    // Bus schedule
    if (m >= DAY_START + 10 && this.world.busPresent && PERIODS[this.periodIndex].kind !== 'dismissal') this.busLeave();
    if (m >= PERIODS[PERIODS.length - 1].start && !this.busCalled) { this.busCalled = true; this.busArrive(); }
    if (m >= DAY_END) {
      if (this.world.busPresent || this.bus.visible) this.busLeave();
      this.endDay(true);
      return;
    }
    if (m % 5 === 0) writeSave(this.save);
    this.refreshHud();
  }

  private onPeriodChange(prev: number, cur: number) {
    const was = PERIODS[prev];
    // Grade the class that just ended (self-paced grades 6-12 grade attendance at sit-time instead — see interact())
    if (was.kind === 'class' && !this.isSelfPaced()) {
      const sub = this.playerSubject(was.slot!);
      const dur = was.end - was.start;
      if (this.presence >= dur * 0.5) {
        const late = this.arrivedAt > was.start + 4;
        this.record.attended++;
        if (late) { this.record.late++; this.hud.toast(`⏰ Late to ${SUBJECTS[sub].name}`); }
        else this.save.grades[sub] = Math.min(100, this.save.grades[sub] + 2);
      } else {
        this.record.missed++;
        this.save.grades[sub] = Math.max(0, this.save.grades[sub] - 5);
        this.hud.toast(`❌ Missed ${SUBJECTS[sub].name}!`);
      }
    }
    this.periodIndex = cur;
    this.world.periodIndex = cur;
    const now = PERIODS[cur];
    this.presence = 0; this.arrivedAt = -1; this.quizzesAsked = 0;
    if (this.player.seat && this.player.seat.room !== 'cafeteria' && now.kind === 'class') this.arrivedAt = now.start;
    this.fastForward = false;
    Sfx.bell();
    if (now.kind === 'class' && !this.broadcastNewsStarted) {
      this.broadcastNewsStarted = true;
      this.broadcast.startNewsLoop(this.save.day, () => this.currentRoom === 'hallway' || this.currentRoom === 'lobby');
    }
    let msg = `🔔 ${now.name}`;
    if (now.kind === 'class' && this.isSelfPaced()) msg += ' — pick from your bulletin-board plan';
    else if (now.kind === 'class') { const sub = this.playerSubject(now.slot!); msg += ` — ${SUBJECTS[sub].name}`; }
    if (now.kind === 'lunch') { msg = '🔔 Lunch time!'; this.gotTray = false; this.ateMinutes = 0; }
    if (now.kind === 'dismissal') msg = '🔔 School\'s out! Catch the bus.';
    if (now.kind === 'clubs') msg = '🔔 Clubs & free time!';
    this.hud.toast(msg);
    this.refreshBoard();
  }

  private playerSubject(slot: number): Subject {
    return GROUP_SCHEDULE[PLAYER_GROUP][slot];
  }

  private playerClassSeat(slot: number): Seat {
    const l = this.world.seatsByRoom[SUBJECTS[this.playerSubject(slot)].room];
    return l[playerSeatIndex(l.length)];
  }

  /** Grades 6-12 are self-paced (see systems/SelfPaced.ts): which subject "counts" right now is
   *  whichever selected subject's room the player is actually sitting in, not a fixed per-slot
   *  subject. Grades 1-5 keep the classic one-subject-per-period-slot behavior untouched. */
  private isSelfPaced() { return this.save.schoolGrade >= 6 && !!this.save.plan; }
  private currentClassSubject(per: Period): Subject | undefined {
    if (this.isSelfPaced()) {
      const room = this.player.seat?.room;
      const sub = room ? subjectForRoom(room) : undefined;
      return sub && this.save.plan!.selected.includes(sub) ? sub : undefined;
    }
    return per.kind === 'class' ? this.playerSubject(per.slot!) : undefined;
  }

  // ---------------- Player ----------------
  private blocked(x: number, y: number) {
    const pts = [[x - 4, y - 4], [x + 4, y - 4], [x - 4, y], [x + 4, y]];
    return pts.some(([px, py]) => this.nav.isSolid(Math.floor(px / TILE), Math.floor(py / TILE)));
  }

  private updatePlayer(dt: number) {
    const k = this.keys, d = this.hud.dirs;
    let vx = 0, vy = 0;
    if (k.LEFT.isDown || k.A.isDown || d.left) vx -= 1;
    if (k.RIGHT.isDown || k.D.isDown || d.right) vx += 1;
    if (k.UP.isDown || k.W.isDown || d.up) vy -= 1;
    if (k.DOWN.isDown || k.S.isDown || d.down) vy += 1;
    const manual = vx !== 0 || vy !== 0;
    if (manual) { this.autoPath = []; this.pendingTarget = null; }
    if (!manual && this.pendingTarget?.kind === 'npc' && this.autoPath.length) {
      const n = this.pendingTarget.npc;
      if (Math.hypot(n.ch.x - this.player.x, n.ch.y - this.player.y) < 20) {
        const t = this.pendingTarget;
        this.autoPath = [];
        this.pendingTarget = null;
        this.faceTarget(t);
        this.interact(t);
      }
    }
    if (!manual && this.autoPath.length) {
      const [tx, ty] = this.autoPath[0];
      const gx = tx * TILE + 8, gy = ty * TILE + 13;
      const dx = gx - this.player.x, dy = gy - this.player.y;
      if (Math.hypot(dx, dy) < 2.5) {
        this.player.setPos(gx, gy);
        this.autoPath.shift();
        if (!this.autoPath.length && this.pendingTarget) {
          const t = this.pendingTarget;
          this.pendingTarget = null;
          this.faceTarget(t);
          this.interact(t);
        }
      } else { vx = Math.sign(dx) * (Math.abs(dx) > 1 ? 1 : 0); vy = Math.sign(dy) * (Math.abs(dy) > 1 ? 1 : 0); }
    }
    if (vx || vy) {
      if (this.player.seat) this.player.standUp();
      const len = Math.hypot(vx, vy);
      const speed = 72 * (this.save.energy < 20 ? 0.7 : 1) * (this.userSpeed > 1 ? 1.25 : 1);
      const mx = (vx / len) * speed * dt, my = (vy / len) * speed * dt;
      let nx = this.player.x + mx, ny = this.player.y;
      if (this.blocked(nx, ny)) nx = this.player.x;
      ny = this.player.y + my;
      if (this.blocked(nx, ny)) ny = this.player.y;
      if (Math.abs(vx) > Math.abs(vy)) this.player.face(vx < 0 ? 'left' : 'right');
      else if (vy) this.player.face(vy < 0 ? 'up' : 'down');
      const movedAny = nx !== this.player.x || ny !== this.player.y;
      this.player.moving = movedAny;
      this.player.setPos(nx, ny);
      if (!movedAny && this.autoPath.length) this.autoPath = []; // stuck; give up
    } else this.player.moving = false;
    if (this.player.animate(dt)) { this.stepTimer++; if (this.stepTimer % 2 === 0) Sfx.step(); }

    // Room banner
    const room = roomContaining(this.player.tileX, this.player.tileY);
    const rid = room?.id ?? (this.player.tileY >= 44 ? 'outside' : '');
    if (rid && rid !== this.currentRoom) {
      this.currentRoom = rid;
      this.hud.roomBanner(room ? room.name : 'Front Courtyard');
      this.broadcast.setViewerVisible(rid === 'hallway' || rid === 'lobby');
      if ((rid === 'hallway' || rid === 'lobby') && !this.broadcastStarted) {
        this.broadcastStarted = true;
        const inHall = () => this.currentRoom === 'hallway' || this.currentRoom === 'lobby';
        if (mandatorySeenToday()) {
          // The assembly only airs once per real day — go straight to the looping news show.
          this.broadcastMandatoryDone = true;
          if (!this.broadcastNewsStarted) { this.broadcastNewsStarted = true; this.broadcast.startNewsLoop(this.save.day, inHall); }
          if (this.isSelfPaced() && !this.save.plan!.locked) void this.goToBulletinBoard();
        } else {
          markMandatorySeen(); // marked at the start so reopening mid-assembly doesn't replay it
          const token = this.broadcastDayToken;
          this.broadcast.playMandatory(this.save.name).then(async () => {
            if (this.tornDown || token !== this.broadcastDayToken) return;
            this.broadcastMandatoryDone = true;
            if (this.isSelfPaced() && !this.save.plan!.locked) await this.goToBulletinBoard();
            this.hud.toast('🔔 Classes starting soon! Grab your backpack & 2-way, then head to class.');
          });
        }
      }
    }
  }

  private tapMove(wx: number, wy: number) {
    const tx = Math.floor(wx / TILE), ty = Math.floor(wy / TILE);
    let target: Target | null = null;
    const npc = this.npcs.npcs.find((n) => n.ch.visible && Math.abs(n.ch.x - wx) < 9 && wy > n.ch.y - 24 && wy < n.ch.y + 3);
    if (npc) target = { kind: 'npc', npc };
    const obj = !target && this.objects.find((o) => o.interact && tx >= o.tx && tx < o.tx + o.fw && ty >= o.ty - (o.hidden ? 1 : 1) && ty < o.ty + o.fh);
    if (obj) target = { kind: 'obj', obj };
    const seat = !target && this.seats.find((s) => s.tx === tx && s.ty === ty && s.kind !== 'teacher');
    if (seat) target = { kind: 'seat', seat };
    let gx = tx, gy = ty;
    if (target?.kind === 'npc') { gx = target.npc.ch.tileX; gy = target.npc.ch.tileY; }
    if (target?.kind === 'obj') {
      // walk to the nearest free tile touching the object
      let best: TilePt | null = null, bd = 1e9;
      const o = target.obj;
      for (let y = o.ty - 1; y <= o.ty + o.fh; y++) for (let x = o.tx - 1; x <= o.tx + o.fw; x++) {
        if (this.nav.isSolid(x, y)) continue;
        const inside = x >= o.tx && x < o.tx + o.fw && y >= o.ty && y < o.ty + o.fh;
        if (inside) continue;
        const dd = Math.abs(x - this.player.tileX) + Math.abs(y - this.player.tileY);
        if (dd < bd) { bd = dd; best = [x, y]; }
      }
      if (best) [gx, gy] = best;
    }
    if (this.player.seat) this.player.standUp();
    let path = findPath(this.nav, this.player.tileX, this.player.tileY, gx, gy);
    if (target?.kind === 'npc' && path && path.length) path = path.slice(0, -1);
    if (path) {
      this.autoPath = path;
      this.pendingTarget = target;
      if (!path.length && target) { this.faceTarget(target); this.interact(target); this.pendingTarget = null; }
    }
  }

  private faceTarget(t: Target) {
    if (t.kind === 'npc') this.player.faceToward(t.npc.ch.x, t.npc.ch.y);
    if (t.kind === 'obj') this.player.faceToward((t.obj.tx + t.obj.fw / 2) * TILE, (t.obj.ty + t.obj.fh / 2) * TILE);
  }

  // ---------------- Interaction ----------------
  private findTarget(): Target | null {
    if (!this.player.visible) return null;
    const dirs: Record<Dir, [number, number]> = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] };
    const [fx, fy] = dirs[this.player.dir];
    const px = this.player.x + fx * 11, py = this.player.y - 3 + fy * 11;
    let best: Target | null = null, bd = 16;
    for (const n of this.npcs.npcs) {
      if (!n.ch.visible) continue;
      const d = Math.hypot(n.ch.x - px, n.ch.y - 4 - py);
      if (d < bd) { bd = d; best = { kind: 'npc', npc: n }; }
    }
    if (best) return best;
    // Seats (free ones only)
    let seatBest: Seat | null = null, seatD = 1e9, onSeat = false;
    if (!this.player.seat) {
      for (const s of this.seats) {
        if (s.kind === 'teacher') continue;
        const cx = s.tx * TILE + 8, cy = s.ty * TILE + 10;
        const dPlayer = Math.hypot(cx - this.player.x, cy - (this.player.y - 3));
        const d = Math.min(Math.hypot(cx - px, cy - py), dPlayer);
        if (d < 14 && d < seatD && !this.npcs.npcs.some((n) => n.ch.seat?.id === s.id)) { seatD = d; seatBest = s; onSeat = dPlayer < 7; }
      }
    }
    let objBest: PlacedObject | null = null, objD = 9;
    for (const o of this.objects) {
      if (!o.interact) continue;
      const x1 = o.tx * TILE, y1 = o.ty * TILE, x2 = (o.tx + o.fw) * TILE, y2 = (o.ty + o.fh) * TILE;
      const dx = Math.max(x1 - px, 0, px - x2), dy = Math.max(y1 - py, 0, py - y2);
      const d = Math.hypot(dx, dy);
      if (d < objD) { objD = d; objBest = o; }
    }
    if (objBest && objD === 0) return { kind: 'obj', obj: objBest };
    if (seatBest && onSeat) return { kind: 'seat', seat: seatBest };
    if (objBest) return { kind: 'obj', obj: objBest };
    if (seatBest) return { kind: 'seat', seat: seatBest };
    return null;
  }

  private labelFor(t: Target | null): string {
    if (this.class3d?.active) return PERIODS[this.periodIndex].kind === 'class' ? 'Raise your hand' : '';
    if (this.player.seat) return 'Stand up';
    if (!t) return '';
    if (t.kind === 'npc') {
      const f = this.save.friendship[t.npc.person.id] ?? 0;
      return `Talk to ${t.npc.person.name}${f ? ' ' + '♥'.repeat(Math.ceil(f / 2)) : ''}`;
    }
    if (t.kind === 'seat') return t.seat.kind === 'stand' ? 'Take your spot' : 'Sit down';
    if (t.obj.interact === 'locker') return t.obj.tx === PLAYER_LOCKER_X ? 'Open your locker ★' : t.obj.label ?? 'Locker';
    return t.obj.label ?? 'Look';
  }

  private action() {
    if (this.class3d?.active) { this.raiseHand(); return; }
    if (this.player.seat) { this.player.standUp(); Sfx.blip(); return; }
    const t = this.findTarget();
    if (t) this.interact(t);
  }

  private once(key: string) {
    const k = key + ':' + this.periodIndex;
    if (this.cooldowns.has(k)) return false;
    this.cooldowns.add(k);
    return true;
  }

  private gain(stat: StatKey, n: number, quiet = false) {
    this.save.stats[stat] += n;
    if (!quiet) this.hud.toast(`+${n} ${({ smarts: '📘 Smarts', fitness: '🏀 Fitness', creativity: '🎨 Creativity', social: '💬 Friendship' } as const)[stat]}`);
    this.refreshHud();
  }

  private addFriend(p: Person, n: number, quiet = false) {
    const f = this.save.friendship[p.id] ?? 0;
    this.save.friendship[p.id] = Math.min(10, f + n);
    this.save.stats.social += n;
    if (!quiet) this.hud.toast(`💛 ${p.name} likes you more`);
  }

  private async interact(t: Target) {
    Sfx.blip();
    const per = PERIODS[this.periodIndex];
    if (t.kind === 'seat') {
      const s = t.seat;
      if (this.npcs.npcs.some((n) => n.ch.seat?.id === s.id)) return;
      if (!this.broadcastMandatoryDone && CLASS_ROOMS.includes(s.room)) {
        this.hud.toast('📺 Watch the morning broadcast in the hallway before heading to class!');
        return;
      }
      if (this.isSelfPaced() && CLASS_ROOMS.includes(s.room)) {
        if (this.parentGateBlocked) {
          this.hud.toast('⚠️ A parent needs to review your overdue reports before you can attend class. Ask them to check the Parent Dashboard.');
          return;
        }
        const sub = subjectForRoom(s.room);
        const plan = this.save.plan!;
        if (!plan.locked) {
          // They closed the bulletin board without picking — ask again now.
          this.save.plan = await this.hud.bulletinBoard(plan);
          writeSave(this.save);
          if (!plan.locked) return;
        }
        if (!sub || !plan.selected.includes(sub)) {
          this.hud.toast(`📌 ${sub ? SUBJECTS[sub].name : 'This class'} isn't on your schedule today — check the bulletin board.`);
          return;
        }
        if (plan.completed.includes(sub)) { this.hud.toast(`✅ You've already finished ${SUBJECTS[sub].name} today!`); return; }
        const slot = per.kind === 'class' ? per.slot : undefined;
        if (slot === undefined || !isWindowOpen(plan, sub, slot)) {
          this.hud.toast(`⏳ ${SUBJECTS[sub].name} isn't in session this period — check your picked time on the bulletin board.`);
          return;
        }
        this.autoPath = [];
        this.player.sitAt(s);
        this.arrivedAt = Math.floor(this.minute);
        if (plan.isTestDay) this.runFridayTest(sub);
        else {
          plan.completed.push(sub);
          this.save.grades[sub] = Math.min(100, this.save.grades[sub] + 1);
          this.maybeAssignHomework(sub);
          writeSave(this.save);
          this.hud.toast(`📖 ${SUBJECTS[sub].name} — checked in! Pop quizzes may come up as you learn.`);
        }
        return;
      }
      this.autoPath = [];
      this.player.sitAt(s);
      if (!this.isSelfPaced() && per.kind === 'class' && s.room === SUBJECTS[this.playerSubject(per.slot!)].room && this.arrivedAt < 0) this.arrivedAt = Math.floor(this.minute);
      if (s.room === 'cafeteria' && per.kind === 'lunch' && !this.gotTray) this.hud.toast('Grab a tray from the lunch line first!');
      return;
    }
    if (t.kind === 'npc') return this.talk(t.npc);
    const o = t.obj;
    const sayObj = (text: string, who = o.label ?? '') => this.hud.say(who, text, [], '#6b5a4a');
    switch (o.interact) {
      case 'locker':
        if (o.tx === PLAYER_LOCKER_X) {
          if (!this.hasBooks) { this.hasBooks = true; Sfx.good(); await sayObj('You spin the combo and grab your books, a pencil case and a snack bar. Ready for class!', 'Your locker ★'); this.save.energy = Math.min(100, this.save.energy + 5); }
          else await sayObj('Your locker. A photo of your friends is taped inside the door.', 'Your locker ★');
        } else await sayObj(`That's someone else's locker. Yours is #${PLAYER_LOCKER_X} with the gold star ★.`, o.label);
        break;
      case 'read': {
        const fact = BOOK_FACTS[Math.floor(Math.random() * BOOK_FACTS.length)];
        await sayObj(`You pull out ${fact}`);
        if (this.once('read')) this.gain('smarts', 1);
        break;
      }
      case 'experiment': {
        const r = await this.hud.experiment();
        if (!r) break; // left before mixing
        this.dayLog.push(r);
        if (this.once('lab')) { this.gain('smarts', 2); if (per.kind === 'class' && this.playerSubject(per.slot!) === 'science') this.save.grades.science = Math.min(100, this.save.grades.science + 1); }
        break;
      }
      case 'food':
        if (per.kind !== 'lunch') await sayObj('Chef Rosa: "The lunch line opens at 10:35, sweetie!"', 'Lunch line');
        else if (this.gotTray) await sayObj('You already have a tray. Find a seat and eat!', 'Lunch line');
        else {
          this.gotTray = true;
          Sfx.good();
          const meals = ['pizza, apple slices and milk', 'tacos, corn and a juice box', 'pasta, salad and a cookie', 'a veggie wrap, grapes and chocolate milk'];
          await this.hud.say('Chef Rosa', `Here you go! Today's tray: ${meals[this.save.day % meals.length]}. Find a seat and enjoy!`, [], '#c0504d');
          this.save.energy = Math.min(100, this.save.energy + 10);
        }
        break;
      case 'vending':
        if (this.once('snack')) { this.save.energy = Math.min(100, this.save.energy + 12); await sayObj('*clunk* You grab a granola bar. +12 energy!'); }
        else await sayObj('You already had a snack this period.');
        break;
      case 'fountain':
        this.save.energy = Math.min(100, this.save.energy + (this.once('water') ? 6 : 0));
        await sayObj('Cold, refreshing water. Ahh!');
        break;
      case 'hoop': {
        const made = await this.hud.hoops(this.save.stats.fitness);
        if (made > 0) this.gain('fitness', made);
        if (per.kind === 'class' && this.playerSubject(per.slot!) === 'pe') this.save.grades.pe = Math.min(100, this.save.grades.pe + made * 0.6);
        break;
      }
      case 'piano': {
        const notes = await this.hud.piano();
        if (notes >= 4) { this.gain('creativity', Math.min(4, Math.ceil(notes / 8))); this.player.showEmote('note'); }
        break;
      }
      case 'drums':
        for (let i = 0; i < 4; i++) this.time.delayedCall(i * 180, () => Sfx.drum());
        this.player.showEmote('note');
        if (this.once('drums')) this.gain('creativity', 1);
        break;
      case 'paint': {
        const strokes = await this.hud.paint();
        if (strokes >= 6) {
          this.gain('creativity', Math.min(5, Math.ceil(strokes / 10)));
          if (per.kind === 'class' && this.playerSubject(per.slot!) === 'art') this.save.grades.art = Math.min(100, this.save.grades.art + 2);
        }
        break;
      }
      case 'sink': await sayObj('You wash your hands. Squeaky clean! ✨'); break;
      case 'trash': await sayObj('You toss some scrap paper in the recycling. The planet thanks you!'); break;
      case 'trophy': await sayObj('Trophies from the Maple Grove Owls: basketball champs, science fair winners and a spelling bee cup from 1998.'); break;
      case 'globe': {
        const places = ['Kenya', 'Brazil', 'Japan', 'Canada', 'Peru', 'Norway', 'India', 'New Zealand', 'Morocco', 'Vietnam'];
        await sayObj(`You spin the globe... it stops on ${places[Math.floor(Math.random() * places.length)]}! Someday...`);
        if (this.once('globe')) this.gain('smarts', 1);
        break;
      }
      case 'skeleton': await sayObj('Mr. Bones grins at you. Why didn\'t the skeleton go to the dance? He had no BODY to go with!'); break;
      case 'computer':
        if (o.label === 'Front office') await this.hud.say('Ms. Patty', STAFF_LINES.office[Math.floor(Math.random() * 3)], [], '#8b6fd1');
        else if (o.label === 'Check-out desk') { await sayObj('Mrs. Lin stamps your library card. You can borrow 3 books this week!'); }
        else await sayObj("That's the teacher's desk. Better not touch the computer!");
        break;
      case 'fountainPark':
        await sayObj('You toss a coin into the fountain and make a wish. 🌟');
        if (this.once('wish')) this.save.energy = Math.min(100, this.save.energy + 3);
        break;
      case 'sign':
        if (o.label === 'School map') this.openMap();
        else await sayObj('MAPLE GROVE SCHOOL — Home of the Owls. Est. 1962.');
        break;
      case 'busstop':
        if (per.kind === 'dismissal' && this.world.busPresent) {
          const k = await this.hud.say('Bus driver', 'Hop on! Ready to head home?', ['Yes, let\'s go home', 'Not yet']);
          if (k === 0) this.boardBus();
        } else if (per.kind === 'dismissal') await sayObj('The bus is pulling in... wait here!');
        else await sayObj('Bus stop. The afternoon bus arrives at 2:40 PM.');
        break;
    }
    this.refreshHud();
  }

  private boardBus() {
    this.onBus = true;
    this.player.setVisible(false);
    this.autoPath = [];
    this.hud.toast('🚌 Riding home...');
    this.time.delayedCall(1200, () => { this.busLeave(); this.time.delayedCall(2600, () => this.endDay(false)); });
  }

  private async talk(n: NPC) {
    const p = n.person;
    const per = PERIODS[this.periodIndex];
    n.talking = true;
    n.ch.moving = false;
    n.ch.faceToward(this.player.x, this.player.y);
    if (!n.ch.seat) n.ch.sync();
    this.player.faceToward(n.ch.x, n.ch.y);
    const f = this.save.friendship[p.id] ?? 0;
    const color = p.role === 'teacher' ? '#c0504d' : p.role === 'staff' ? '#6b5a4a' : '#3d6fb0';
    let line: string;
    if (p.role === 'teacher') {
      const room = SUBJECTS[p.subject!].room;
      const mySub = per.kind === 'class' ? this.playerSubject(per.slot!) : null;
      if (mySub && SUBJECTS[mySub].room === room && !this.player.seat) line = `${this.save.name}, class has started! Please take your seat — it's the one with the yellow marker.`;
      else if (mySub && SUBJECTS[mySub].room !== room && per.kind === 'class') line = `Shouldn't you be in ${SUBJECTS[mySub].name}? Head to the ${ROOMS.find((r) => r.id === SUBJECTS[mySub].room)!.name.split(' · ')[0]}.`;
      else line = TEACHER_TIPS[p.subject!][Math.floor(Math.random() * TEACHER_TIPS[p.subject!].length)];
    } else if (p.role === 'staff') line = STAFF_LINES[p.post!][Math.floor(Math.random() * STAFF_LINES[p.post!].length)];
    else line = studentLine(p, per.kind, f);
    await this.hud.say(p.name, line, [], color);
    if (p.role === 'student') this.activitySocialInteractions++;
    const key = p.id + ':' + this.periodIndex;
    if (!this.talked.has(key)) {
      this.talked.add(key);
      if (!(per.kind === 'class' && p.role === 'student')) this.addFriend(p, 1);
      n.ch.showEmote(f >= 6 ? 'heart' : 'talk');
    }
    n.talking = false;
    this.refreshHud();
  }

  /** A real pop quiz: always exactly POP_QUIZ_QUESTIONS questions, drawn from
   *  the player's own grade-level curriculum bank for this subject. */
  private async popQuiz(sub: Subject, volunteered = false) {
    const teacher = SUBJECTS[sub].teacher;
    this.fastForward = false;
    const bank = this.currentLesson(sub).popQuiz;
    const picks = bank.slice(0, POP_QUIZ_QUESTIONS);
    let right = 0;
    for (let i = 0; i < picks.length; i++) {
      const q = picks[i];
      this.refreshBoard({ q: q.q, options: q.choices, n: i + 1, total: picks.length });
      const intro = i === 0 ? (volunteered ? `Yes, ${this.save.name}? Great — here's a 5-question pop quiz:` : `Pop quiz, ${this.save.name}! (${picks.length} questions)`) : `Question ${i + 1} of ${picks.length}:`;
      const k = await this.hud.say(teacher, `${intro} ${q.q}`, q.choices.map((o, j) => `${j + 1}. ${o}`), '#c0504d');
      if (k < 0) { this.record.quizTotal += picks.length - i; break; } // exited: the rest count as missed
      this.record.quizTotal++;
      if (k === q.correct) { right++; this.record.quizRight++; Sfx.good(); this.player.showEmote('star'); }
      else Sfx.bad();
    }
    const pct = right / picks.length;
    this.save.grades[sub] = Math.max(0, Math.min(100, this.save.grades[sub] + Math.round((pct - 0.5) * 10)));
    if (pct >= 0.5) this.gain(sub === 'pe' ? 'fitness' : sub === 'art' || sub === 'music' ? 'creativity' : 'smarts', 2);
    this.hud.toast(pct === 1 ? `✅ Perfect! ${right}/${picks.length}` : pct >= 0.6 ? `🙂 Nice — ${right}/${picks.length}` : `📚 ${right}/${picks.length} — review your notes!`);
    await this.hud.say(teacher, `You got ${right} out of ${picks.length} correct. ${pct >= 0.8 ? 'Excellent work!' : pct >= 0.5 ? 'Good effort — keep practicing.' : "Let's go over this material again."}`, [], '#c0504d');
    this.refreshBoard();
  }

  /** A longer, graded unit test (distinct from pop quizzes) for the current lesson. */
  async takeUnitTest(sub: Subject): Promise<{ right: number; total: number } | null> {
    const lesson = this.currentLesson(sub);
    if (!lesson.test.length) { this.hud.toast('No unit test available for this lesson yet.'); return null; }
    const teacher = SUBJECTS[sub].teacher;
    let right = 0;
    for (let i = 0; i < lesson.test.length; i++) {
      const q = lesson.test[i];
      this.refreshBoard({ q: q.q, options: q.choices, n: i + 1, total: lesson.test.length });
      const k = await this.hud.say(teacher, `Unit test — question ${i + 1} of ${lesson.test.length}: ${q.q}`, q.choices.map((o, j) => `${j + 1}. ${o}`), '#3d6fb0');
      if (k < 0) break; // exited: unanswered questions count as wrong
      if (k === q.correct) right++;
    }
    const pct = right / lesson.test.length;
    this.save.grades[sub] = Math.max(0, Math.min(100, this.save.grades[sub] + Math.round((pct - 0.5) * 20)));
    this.refreshBoard();
    await this.hud.say(teacher, `Test complete: ${right}/${lesson.test.length} (${Math.round(pct * 100)}%).`, [], '#3d6fb0');
    return { right, total: lesson.test.length };
  }

  /** Friday: every class is a real unit test instead of the normal lesson/quiz flow. Scores
   *  below the tutoring threshold get flagged for Saturday tutoring in the library. */
  private async runFridayTest(sub: Subject) {
    const result = await this.takeUnitTest(sub);
    const plan = this.save.plan;
    if (!result || !plan) return;
    this.save.testScores[sub] = { score: result.right, total: result.total };
    if (!plan.completed.includes(sub)) plan.completed.push(sub);
    const pct = result.total ? result.right / result.total : 1;
    if (pct < TUTORING_THRESHOLD && !this.save.needsTutoring.includes(sub)) this.save.needsTutoring.push(sub);
    writeSave(this.save);
    if (plan.completed.length >= plan.selected.length) {
      this.hud.toast('🔔 All tests complete — early dismissal!');
      this.endDay(false);
    }
  }

  /** Homework for a subject is assigned at least every other day it's attended. Lightweight
   *  tracking — see Hud.homeworkPanel() for the "mark done" UI. */
  private maybeAssignHomework(sub: Subject) {
    const last = this.save.lastHomeworkDay[sub];
    if (last === undefined || this.save.day - last >= 2) {
      this.save.homework[sub] = { assignedDay: this.save.day, done: false };
      this.save.lastHomeworkDay[sub] = this.save.day;
      this.hud.toast(`📓 Homework assigned: ${SUBJECTS[sub].name}`);
    }
    this.refreshHomeworkBadge();
  }

  private refreshHomeworkBadge() {
    const pending = Object.values(this.save.homework).filter((h) => h && !h.done).length;
    this.hud.setHomeworkBadge(this.save.schoolGrade >= 6, pending);
  }

  /** Right after the morning broadcast, self-paced students lock in today's plan at the
   *  bulletin board before they can head anywhere else. */
  private async goToBulletinBoard() {
    const [bx, by] = [23, 27];
    const path = findPath(this.nav, this.player.tileX, this.player.tileY, bx, by);
    if (path && path.length) {
      this.autoPath = path;
      await new Promise<void>((resolve) => {
        const check = () => { if (this.tornDown || !this.autoPath.length) resolve(); else setTimeout(check, 100); };
        check();
      });
    }
    if (this.tornDown) return;
    this.player.setPos(bx * TILE + 8, by * TILE + 13);
    this.player.face('up');
    const plan = await this.hud.bulletinBoard(this.save.plan!);
    this.save.plan = plan;
    writeSave(this.save);
    if (!plan.locked) this.hud.toast("📌 No classes picked yet — you'll be asked again when you try to sit in class.");
  }

  /** A special Saturday that replaces the normal school day: 30-minute review sessions in the
   *  library for any subject that scored below the tutoring threshold on Friday's tests. */
  private async runTutoringDay() {
    this.hud.setVisible(true);
    this.player.setVisible(true);
    const libSeats = this.world.seatsByRoom['library'];
    const spot = libSeats?.[0] ?? { tx: 26, ty: 6 };
    this.player.setPos(spot.tx * TILE + 8, spot.ty * TILE + 13);
    this.cameras.main.centerOn(spot.tx * TILE, spot.ty * TILE);
    this.hud.toast('📚 Saturday Tutoring — in the library');
    const subs = [...this.save.needsTutoring];
    for (const sub of subs) {
      const teacher = SUBJECTS[sub].teacher;
      await this.hud.say(teacher, `Let's spend 30 minutes on ${SUBJECTS[sub].name} — your test showed a few gaps to close.`, [], '#6b4fa0');
      const lesson = this.currentLesson(sub);
      const bank = lesson.popQuiz.length ? lesson.popQuiz : lesson.test;
      const count = Math.min(bank.length, 3);
      let right = 0;
      for (let i = 0; i < count; i++) {
        const q = bank[i];
        const k = await this.hud.say(teacher, `Review ${i + 1}/${count}: ${q.q}`, q.choices.map((o, j) => `${j + 1}. ${o}`), '#6b4fa0');
        if (k < 0) break; // exited this review
        if (k === q.correct) right++;
      }
      this.save.grades[sub] = Math.min(100, this.save.grades[sub] + 3);
      await this.hud.say(teacher, `Nice work — ${right}/${count} on review. That'll help on Monday!`, [], '#6b4fa0');
      writeSave(this.save);
    }
    this.save.needsTutoring = [];
    writeSave(this.save);
    this.hud.toast('🌞 Tutoring complete — see you Monday!');
    this.startDay();
  }

  private toggleFastForward() {
    const per = PERIODS[this.periodIndex];
    const ok = (per.kind === 'class' && this.player.seat) || per.kind === 'clubs' || per.kind === 'arrival' || per.kind === 'lunch' || per.kind === 'dismissal';
    if (!ok && !this.fastForward) { this.hud.toast('Sit in class to skip ahead'); return; }
    this.fastForward = !this.fastForward;
  }

  // ---------------- Objectives & HUD ----------------
  private objective(): { html: string; target: TilePt | null; seat?: Seat } {
    const per = PERIODS[this.periodIndex];
    const s = this.player.seat;
    if (this.isSelfPaced()) {
      if (!this.hasBooks) return { html: `Grab your books from <b>locker #${PLAYER_LOCKER_X} ★</b> in the hallway`, target: [PLAYER_LOCKER_X, 19] };
      if (per.kind === 'arrival' && !this.save.plan!.locked) return { html: 'Check the <b>bulletin board</b> in the lobby for today\'s picks', target: [23, 27] };
      const sub = this.currentClassSubject(per);
      if (sub) return { html: `In class: <b>${SUBJECTS[sub].name}</b> with ${SUBJECTS[sub].teacher} — pay attention for pop quizzes!`, target: null };
      const remaining = this.save.plan!.selected.filter((x) => !this.save.plan!.completed.includes(x));
      if (!remaining.length) return { html: this.save.plan!.isTestDay ? 'All tests done — enjoy early dismissal!' : "Today's picked classes are all done! Explore or make friends.", target: null };
      return { html: `Head to one of today's classes: <b>${remaining.map((x) => SUBJECTS[x].name).join(', ')}</b> (check your picked time)`, target: null };
    }
    if (per.kind === 'arrival') {
      if (!this.hasBooks) return { html: `Grab your books from <b>locker #${PLAYER_LOCKER_X} ★</b> in the hallway`, target: [PLAYER_LOCKER_X, 19] };
      const seat = this.playerClassSeat(0);
      return s?.id === seat.id ? { html: 'Ready for <b>Math</b>! The bell rings at 8:00', target: null } : { html: 'Head to <b>Math</b> in Classroom A — find your marked seat', target: [seat.tx, seat.ty], seat };
    }
    if (per.kind === 'class' || per.kind === 'passing') {
      const slot = per.kind === 'class' ? per.slot! : nextClassSlot(this.periodIndex)!;
      const sub = this.playerSubject(slot);
      const seat = this.playerClassSeat(slot);
      const roomName = ROOMS.find((r) => r.id === SUBJECTS[sub].room)!.name.split(' · ')[0];
      const inRoom = s && s.room === SUBJECTS[sub].room;
      if (per.kind === 'class' && inRoom) return { html: `In class: <b>${SUBJECTS[sub].name}</b> with ${SUBJECTS[sub].teacher} — pay attention for pop quizzes!`, target: null };
      if (per.kind === 'class') return { html: `You're late! Hurry to <b>${SUBJECTS[sub].name}</b> → ${roomName}`, target: [seat.tx, seat.ty], seat };
      return inRoom ? { html: `Seated for <b>${SUBJECTS[sub].name}</b>. Bell at ${fmtTime(PERIODS[this.periodIndex].end)}`, target: null } : { html: `Next: <b>${SUBJECTS[sub].name}</b> → ${roomName} at ${fmtTime(PERIODS[this.periodIndex].end)}`, target: [seat.tx, seat.ty], seat };
    }
    if (per.kind === 'lunch') {
      if (!this.gotTray) return { html: 'Lunch! Grab a tray from the <b>lunch line</b>', target: [51, 10] };
      if (this.ateMinutes >= 10) return { html: 'Full and happy. Chat with friends before the bell!', target: null };
      if (s?.room === 'cafeteria') return { html: 'Eating lunch... 🍕', target: null };
      return { html: 'Find a <b>seat</b> in the cafeteria to eat (sit with friends!)', target: null };
    }
    if (per.kind === 'clubs') return { html: 'Free time! Try the <b>art room</b>, <b>music room</b>, <b>gym</b> or <b>library</b>', target: null };
    if (!this.world.busPresent) return { html: "School's out! The bus is on its way", target: [37, 49] };
    return { html: 'Catch the <b>bus</b> at the bus stop before 3:00!', target: [37, 49] };
  }

  private refreshHud() {
    if (!this.save) return;
    const per = PERIODS[this.periodIndex];
    const dayName = DAY_NAMES[(this.save.day - 1) % 5];
    let pname = per.name;
    if (per.kind === 'class') pname += ' · ' + SUBJECTS[this.playerSubject(per.slot!)].name;
    this.hud.setClock(`${dayName} · Day ${this.save.day}`, fmtTime(this.minute), pname);
    this.broadcast.setClock(fmtTime(this.minute));
    this.hud.setStats(this.save.energy, this.save.stats);
  }

  private updateTargetsAndHud() {
    if (!this.save || !this.running) { this.arrow.setVisible(false); this.seatMark.setVisible(false); return; }
    const t = this.class3d?.active ? null : this.findTarget();
    this.target = t;
    this.hud.setPrompt(this.hud.modalOpen ? '' : this.labelFor(t));
    const obj = this.objective();
    this.hud.setObjective(obj.html);
    const per = PERIODS[this.periodIndex];
    const canFF = (per.kind === 'class' && !!this.player.seat) || per.kind === 'clubs' || (per.kind === 'arrival' && this.player.seat != null) || (per.kind === 'passing' && !!this.player.seat);
    this.hud.setFastForward(canFF || this.fastForward, this.fastForward ? '⏸ Normal speed' : '⏩ Skip to bell');
    if (per.kind === 'passing' && this.fastForward === false && canFF) { /* allowed */ }
    // Arrow toward objective
    if (obj.target && this.player.visible) {
      const gx = obj.target[0] * TILE + 8, gy = obj.target[1] * TILE + 8;
      const dx = gx - this.player.x, dy = gy - (this.player.y - 10);
      const dist = Math.hypot(dx, dy);
      if (dist > 56) {
        const a = Math.atan2(dy, dx);
        this.arrow.setVisible(true).setPosition(Math.round(this.player.x + Math.cos(a) * 22), Math.round(this.player.y - 10 + Math.sin(a) * 22)).setRotation(a + Math.PI / 2);
        this.arrow.setAlpha(0.75 + 0.25 * Math.sin(this.time.now / 150));
      } else this.arrow.setVisible(false);
    } else this.arrow.setVisible(false);
    if (obj.seat && this.player.seat?.id !== obj.seat.id) this.seatMark.setVisible(true).setPosition(obj.seat.tx * TILE, obj.seat.ty * TILE);
    else this.seatMark.setVisible(false);
  }

  // ---------------- Menus ----------------
  openMap() {
    if (!this.save) return;
    this.hud.panel((p, close) => {
      const S = 6;
      const c = document.createElement('canvas');
      c.width = MAP_W * S; c.height = MAP_H * S;
      const ctx = c.getContext('2d')!;
      const colors: Record<string, string> = { grass: '#7dc36b', path: '#dcc9a3', sidewalk: '#cfcfd6', road: '#565566', wall: '#4a3a52' };
      for (let y = 0; y < MAP_H; y++) for (let x = 0; x < MAP_W; x++) {
        const cell = this.grid.at(x, y);
        const rid = this.grid.roomAt(x, y);
        const room = ROOMS.find((r) => r.id === rid);
        ctx.fillStyle = cell === 'wall' ? colors.wall : room ? room.paint : colors[cell] ?? '#e9dcc9';
        ctx.fillRect(x * S, y * S, S, S);
      }
      const now = PERIODS[this.periodIndex];
      const mySlot = now.kind === 'class' ? now.slot : nextClassSlot(this.periodIndex);
      const myRoom = mySlot !== undefined ? SUBJECTS[this.playerSubject(mySlot)].room : '';
      ctx.textAlign = 'center';
      ctx.font = `bold ${S * 1.7}px "Pixelify Sans", sans-serif`;
      for (const r of ROOMS) {
        const cx = ((r.x1 + r.x2 + 1) / 2) * S, cy = ((r.y1 + r.y2 + 1) / 2) * S;
        if (r.id === myRoom) { ctx.strokeStyle = '#e2544a'; ctx.lineWidth = 3; ctx.strokeRect(r.x1 * S, r.y1 * S, (r.x2 - r.x1 + 1) * S, (r.y2 - r.y1 + 1) * S); }
        ctx.fillStyle = '#2b2033';
        const label = r.name.split(' · ')[0].replace('Lobby & Front Office', 'Lobby');
        ctx.fillText(label, cx, cy);
      }
      ctx.fillText('Bus stop', 37 * S, 48.4 * S);
      for (const n of this.npcs.npcs) {
        if (!n.ch.visible) continue;
        ctx.fillStyle = n.person.role === 'student' ? '#3d6fb0' : '#c0504d';
        ctx.fillRect(n.ch.x / TILE * S - 2, n.ch.y / TILE * S - 4, 4, 4);
      }
      ctx.fillStyle = '#ffd84d'; ctx.strokeStyle = '#2b2033'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(this.player.x / TILE * S, this.player.y / TILE * S - 3, 5, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      const sched = GROUP_SCHEDULE[PLAYER_GROUP].map((sub, i) => {
        const per = PERIODS.find((x) => x.slot === i)!;
        const cur = now.slot === i || (now.kind !== 'class' && mySlot === i);
        return `<div class="${cur ? 'now' : ''}">${fmtTime(per.start)} · P${i + 1} ${SUBJECTS[sub].name} — ${ROOMS.find((r) => r.id === SUBJECTS[sub].room)!.name.split(' · ')[0]}</div>`;
      });
      sched.splice(3, 0, `<div class="${now.kind === 'lunch' ? 'now' : ''}">10:35 AM · Lunch — Cafeteria</div>`);
      sched.push(`<div class="${now.kind === 'clubs' ? 'now' : ''}">1:55 PM · Clubs & free time</div>`, `<div class="${now.kind === 'dismissal' ? 'now' : ''}">2:40 PM · Bus home</div>`);
      p.innerHTML = `<h2>Maple Grove School</h2><p class="msg-help">You are the <b style="color:#b8860b">yellow dot</b> · students blue · staff red · your next class is outlined in red.</p>`;
      const wrap = document.createElement('div');
      wrap.className = 'msg-map';
      wrap.appendChild(c);
      p.appendChild(wrap);
      const h = document.createElement('h3'); h.textContent = 'Your schedule (Homeroom A)';
      const list = document.createElement('div'); list.className = 'msg-sched'; list.innerHTML = sched.join('');
      const b = document.createElement('button'); b.className = 'msg-btn go'; b.textContent = 'Close'; b.style.width = '100%'; b.style.marginTop = '10px';
      b.onclick = close;
      p.append(h, list, b);
    });
  }

  openMenu() {
    if (!this.save) return;
    this.hud.panel((p, close) => {
      p.innerHTML = `<h2>Paused</h2>
        <p><b>Move:</b> arrow keys / WASD, the D-pad, or tap where you want to go.</p>
        <p><b>Interact:</b> E / Space / Enter or the red A button — talk, sit, eat, read, play.</p>
        <p><b>Speed:</b> the 1× button speeds up time. While seated in class, ⏩ skips to the bell.</p>
        <p><b>Goal:</b> get to class on time, ace pop quizzes, eat lunch, join clubs, make friends and catch the bus home. Progress saves automatically.</p>`;
      const mk = (label: string, cls: string, fn: () => void) => { const b = document.createElement('button'); b.className = 'msg-btn ' + cls; b.textContent = label; b.style.width = '100%'; b.style.marginTop = '8px'; b.style.textAlign = 'center'; b.onclick = fn; p.appendChild(b); };
      mk('▶ Resume', 'go', close);
      if (this.userId) {
        mk('👪 Family Code (for parents)', 'alt', async () => {
          close();
          const code = await getOrCreateFamilyCode(this.userId!);
          if (this.tornDown) return;
          this.hud.familyCodePanel(code);
        });
      }
      mk('Start over with a new student', 'alt', () => {
        close();
        this.hud.say('Start over?', 'This erases your current student and progress.', ['Yes, start over', 'Cancel']).then((k) => {
          if (k === 0) { clearSave(); this.running = false; this.hud.setVisible(false); this.player.setVisible(false); this.showTitle(); }
        });
      });
    });
  }
}
