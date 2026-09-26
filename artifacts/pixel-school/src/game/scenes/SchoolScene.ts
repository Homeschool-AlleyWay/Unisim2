// The main world scene: builds the school, runs the clock, player, NPCs and interactions.
import Phaser from 'phaser';
import { renderBackground, PLAYER_LOCKER_X } from '../art/tiles';
import { buildFurnitureTextures } from '../art/furniture';
import { buildCharacterSheet, Look } from '../art/characters';
import { buildGrid, MAP_H, MAP_W, ROOMS, roomContaining, SchoolGrid, TILE } from '../data/schoolMap';
import { buildPlacement, Dir, PlacedObject, Seat } from '../data/furniture';
import { buildRoster, DAY_END, DAY_START, GROUP_SCHEDULE, nextClassSlot, periodAt, PERIODS, Person, PLAYER_GROUP, Subject, SUBJECTS } from '../data/schedule';
import { BOOK_FACTS, makeQuiz, STAFF_LINES, studentLine, TEACHER_TIPS } from '../data/dialogue';
import { Character } from '../entities/Character';
import { NavGrid, findPath, TilePt } from '../systems/Pathfinding';
import { NPC, NPCSystem, World } from '../systems/NPCSystem';
import { Sfx } from '../systems/Audio';
import { clearSave, DAY_NAMES, letter, loadSave, newSave, SaveData, StatKey, writeSave } from '../systems/GameState';
import { Hud } from '../ui/Hud';

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

  constructor() {
    super('SchoolScene');
  }

  create() {
    this.grid = buildGrid();
    const placement = buildPlacement();
    this.objects = placement.objects;
    this.seats = placement.seats;

    // --- Textures
    this.textures.addCanvas('bg', renderBackground(this.grid));
    const furn = buildFurnitureTextures();
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
    GROUP_SCHEDULE[PLAYER_GROUP].forEach((sub) => playerClassSeatIds.add(seatsByRoom[SUBJECTS[sub].room][0].id));
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
    cam.setRoundPixels(true);
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
      if (Math.hypot(p.x - downAt.x, p.y - downAt.y) < 12) this.tapMove(p.worldX, p.worldY);
      downAt = null;
    });

    // --- HUD
    this.hud = new Hud(this.game.canvas.parentElement as HTMLElement);
    this.hud.onAction = () => { if (this.running && !this.hud.modalOpen) this.action(); };
    this.hud.onMap = () => this.openMap();
    this.hud.onSpeed = () => {
      this.userSpeed = this.userSpeed === 1 ? 2 : this.userSpeed === 2 ? 4 : 1;
      this.hud.setSpeedLabel(this.userSpeed + '×');
    };
    this.hud.onFastForward = () => this.toggleFastForward();
    this.hud.onMenu = () => this.openMenu();
    this.hud.setVisible(false);
    this.events.once('shutdown', () => this.hud.destroy());
    this.events.once('destroy', () => this.hud.destroy());

    // Player placeholder until the creator finishes
    this.player = new Character(this, 'char_' + this.people[0].id, 41 * TILE + 8, 49 * TILE + 13);
    this.player.setVisible(false);
    cam.centerOn(30 * TILE, 30 * TILE);
    this.showTitle();
  }

  private addCharTexture(key: string, look: Look) {
    if (this.textures.exists(key)) this.textures.remove(key);
    const tex = this.textures.addCanvas(key, buildCharacterSheet(look))!;
    for (let i = 0; i < 16; i++) tex.add(i, 0, (i % 4) * 16, Math.floor(i / 4) * 24, 16, 24);
  }

  private fitZoom() {
    const w = this.scale.width, h = this.scale.height;
    const z = Math.max(2, Math.min(5, Math.round(Math.min(w, h) / 240)));
    this.cameras.main.setZoom(z);
  }

  // ---------------- Game flow ----------------
  private async showTitle() {
    const existing = loadSave();
    const res = await this.hud.creator(existing ? { name: existing.name, look: existing.look, day: existing.day } : null);
    this.save = !res.fresh && existing ? existing : newSave(res.name, res.look);
    this.addCharTexture('char_player', this.save.look);
    this.player.destroy();
    this.player = new Character(this, 'char_player', 41 * TILE + 8, 49 * TILE + 13);
    this.cameras.main.startFollow(this.player.sprite, true, 0.18, 0.18);
    this.hud.setVisible(true);
    writeSave(this.save);
    this.startDay();
    const first = this.save.day === 1 && res.fresh;
    if (first) {
      await this.hud.say('Principal Grant', `Welcome to Maple Grove School, ${this.save.name}! You're in homeroom A. Grab your books from your locker (look for the gold ★), then find your seat in Math before the 8:00 bell.`, [], '#3b3f58');
      await this.hud.say('Tip', 'Follow the yellow arrow to your next goal. Tap the map button to see the whole school and your schedule. Talk to everyone — friendships grow each day!', [], '#6b4fa0');
    }
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
    s.day++;
    s.energy = 100;
    writeSave(s);
    this.startDay();
  }

  // ---------------- Update loop ----------------
  update(_t: number, deltaMs: number) {
    const dt = Math.min(0.05, deltaMs / 1000);
    const paused = !this.running || this.hud.modalOpen > 0;
    const scale = this.fastForward ? 10 : this.userSpeed;
    this.world.timeScale = paused ? 0 : scale;
    this.world.playerSeatId = this.player.seat?.id ?? null;

    if (!paused) {
      this.minute += (dt * scale) / 1.5; // 1.5 real seconds = 1 game minute at 1×
      while (this.lastWholeMinute + 1 <= this.minute) {
        this.lastWholeMinute++;
        this.onMinute();
        if (!this.running) break;
      }
      this.npcs.update(dt);
      this.updatePlayer(dt);
    } else {
      this.npcs.update(0);
      this.player.animate(0);
    }
    this.updateTargetsAndHud();
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
      const sub = this.playerSubject(per.slot!);
      const room = SUBJECTS[sub].room;
      if (this.player.seat && this.player.seat.room === room) {
        if (this.arrivedAt < 0) this.arrivedAt = m;
        this.presence++;
        const since = m - per.start;
        if (this.presence % 6 === 0) {
          const stat: StatKey = sub === 'pe' ? 'fitness' : sub === 'art' || sub === 'music' ? 'creativity' : 'smarts';
          this.gain(stat, 1, true);
          this.save.grades[sub] = Math.min(100, this.save.grades[sub] + 0.5);
        }
        if ((since === 14 || since === 32) && this.quizzesAsked < 2) { this.quizzesAsked++; this.popQuiz(sub); }
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
    // Grade the class that just ended
    if (was.kind === 'class') {
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
    let msg = `🔔 ${now.name}`;
    if (now.kind === 'class') { const sub = this.playerSubject(now.slot!); msg += ` — ${SUBJECTS[sub].name}`; }
    if (now.kind === 'lunch') { msg = '🔔 Lunch time!'; this.gotTray = false; this.ateMinutes = 0; }
    if (now.kind === 'dismissal') msg = '🔔 School\'s out! Catch the bus.';
    if (now.kind === 'clubs') msg = '🔔 Clubs & free time!';
    this.hud.toast(msg);
  }

  private playerSubject(slot: number): Subject {
    return GROUP_SCHEDULE[PLAYER_GROUP][slot];
  }

  private playerClassSeat(slot: number): Seat {
    return this.world.seatsByRoom[SUBJECTS[this.playerSubject(slot)].room][0];
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
      this.autoPath = [];
      this.player.sitAt(s);
      if (per.kind === 'class' && s.room === SUBJECTS[this.playerSubject(per.slot!)].room && this.arrivedAt < 0) this.arrivedAt = Math.floor(this.minute);
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
    const key = p.id + ':' + this.periodIndex;
    if (!this.talked.has(key)) {
      this.talked.add(key);
      if (!(per.kind === 'class' && p.role === 'student')) this.addFriend(p, 1);
      n.ch.showEmote(f >= 6 ? 'heart' : 'talk');
    }
    n.talking = false;
    this.refreshHud();
  }

  private async popQuiz(sub: Subject) {
    const q = makeQuiz(sub);
    const teacher = SUBJECTS[sub].teacher;
    this.fastForward = false;
    const k = await this.hud.say(teacher, `Pop quiz, ${this.save.name}! ${q.q}`, q.options.map((o, i) => `${i + 1}. ${o}`), '#c0504d');
    this.record.quizTotal++;
    if (k === q.answer) {
      Sfx.good();
      this.record.quizRight++;
      this.save.grades[sub] = Math.min(100, this.save.grades[sub] + 3);
      this.gain(sub === 'pe' ? 'fitness' : sub === 'art' || sub === 'music' ? 'creativity' : 'smarts', 2);
      this.player.showEmote('star');
      this.hud.toast('✅ Correct!');
    } else {
      Sfx.bad();
      this.save.grades[sub] = Math.max(0, this.save.grades[sub] - 1);
      await this.hud.say(teacher, `Not quite — the answer was "${q.options[q.answer]}". You'll get the next one!`, [], '#c0504d');
    }
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
    this.hud.setStats(this.save.energy, this.save.stats);
  }

  private updateTargetsAndHud() {
    if (!this.save || !this.running) { this.arrow.setVisible(false); this.seatMark.setVisible(false); return; }
    const t = this.findTarget();
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
      mk('Start over with a new student', 'alt', () => {
        close();
        this.hud.say('Start over?', 'This erases your current student and progress.', ['Yes, start over', 'Cancel']).then((k) => {
          if (k === 0) { clearSave(); this.running = false; this.hud.setVisible(false); this.player.setVisible(false); this.showTitle(); }
        });
      });
    });
  }
}
