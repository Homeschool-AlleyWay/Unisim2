// Daily routines for every student, teacher and staff member.
import Phaser from 'phaser';
import { Character } from '../entities/Character';
import { bodyHeight } from '../art/characters';
import type { Seat, Dir } from '../data/furniture';
import { TILE } from '../data/schoolMap';
import { DAY_START, GROUP_SCHEDULE, Group, PERIODS, Person, PLAYER_GROUP, SUBJECTS, nextClassSlot, playerSeatIndex } from '../data/schedule';
import { findPath, NavGrid, TilePt } from './Pathfinding';

export interface World {
  nav: NavGrid;
  seats: Seat[];
  seatsByRoom: Record<string, Seat[]>; // non-teacher seats
  teacherSeat: Record<string, Seat>;
  minute: number;
  day: number;
  periodIndex: number;
  busPresent: boolean;
  timeScale: number;
  playerSeatId: number | null;
  playerClassSeatIds: Set<number>;
}

interface Step {
  tx: number; ty: number;
  seat?: Seat;
  face?: Dir;
  wait?: number; // game minutes to linger
  onArrive?: 'board' | 'food' | 'locker';
}

export class NPC {
  ch: Character;
  path: TilePt[] = [];
  plan = '';
  steps: Step[] = [];
  stepI = 0;
  waitLeft = 0;
  gone = false;
  spawnAt = 0;
  lunchIndex = 0;
  groupIndex = 0;
  talking = false;
  wanderN = 0;
  constructor(public person: Person, scene: Phaser.Scene, x: number, y: number) {
    this.ch = new Character(scene, 'char_' + person.id, x, y, bodyHeight(person.look, person.grade));
  }
  get busy() { return this.talking; }
}

const ZONES: Record<string, [number, number, number, number]> = {
  hallway: [5, 19, 43, 22],
  lobby: [18, 27, 29, 39],
  courtyard: [4, 44, 20, 46],
  front: [26, 45, 44, 47],
  cafeteria: [46, 10, 59, 22],
  kitchen: [46, 7, 57, 8],
  gym: [49, 28, 58, 39],
};

export class NPCSystem {
  npcs: NPC[] = [];
  reserved = new Map<number, number>(); // seatId -> person id

  constructor(private scene: Phaser.Scene, people: Person[], private w: World) {
    const groupCounters: Record<string, number> = {};
    let lunchK = 0;
    for (const p of people) {
      const npc = new NPC(p, scene, 41 * TILE + 8, 49 * TILE + 13);
      if (p.role === 'student') {
        const g = p.group!;
        npc.groupIndex = groupCounters[g] = (groupCounters[g] ?? -1) + 1;
        npc.lunchIndex = (g === 'A' ? 0 : g === 'B' ? 8 : 16) + npc.groupIndex;
        lunchK++;
      }
      this.npcs.push(npc);
    }
    this.startDay();
  }

  startDay() {
    this.reserved.clear();
    let k = 0;
    for (const n of this.npcs) {
      n.plan = '';
      n.steps = [];
      n.path = [];
      n.talking = false;
      n.ch.standUp();
      if (n.person.role === 'student') {
        n.gone = true;
        n.ch.setVisible(false);
        n.spawnAt = DAY_START + 1 + (k++ % 5) + Math.floor(Math.random() * 2);
      } else {
        n.gone = false;
        n.ch.setVisible(true);
        const s = this.homeSeat(n);
        if (s) n.ch.sitAt(s);
      }
    }
  }

  private seatAt(tx: number, ty: number) {
    return this.w.seats.find((s) => s.tx === tx && s.ty === ty);
  }

  private homeSeat(n: NPC): Seat | undefined {
    const p = n.person;
    if (p.role === 'teacher') return this.w.teacherSeat[SUBJECTS[p.subject!].room];
    if (p.post === 'cafeteria') return this.seatAt(52, 8);
    if (p.post === 'office') return this.seatAt(19, 29);
    return undefined;
  }

  private rand(n: NPC, salt: number) {
    const x = Math.sin(n.person.id * 91.7 + this.w.day * 13.1 + salt * 7.3) * 43758.5453;
    return x - Math.floor(x);
  }

  private randomTileIn(zone: keyof typeof ZONES): TilePt {
    const [x1, y1, x2, y2] = ZONES[zone];
    for (let i = 0; i < 40; i++) {
      const x = x1 + Math.floor(Math.random() * (x2 - x1 + 1));
      const y = y1 + Math.floor(Math.random() * (y2 - y1 + 1));
      if (!this.w.nav.isSolid(x, y) && !this.w.seats.some((s) => s.tx === x && s.ty === y && s.kind !== 'stand')) return [x, y];
    }
    return [x1, y1];
  }

  private isSeatFree(seat: Seat, n: NPC) {
    const r = this.reserved.get(seat.id);
    if (r !== undefined && r !== n.person.id) return false;
    if (this.w.playerSeatId === seat.id) return false;
    return true;
  }

  private freeSeatIn(room: string, n: NPC, prefer?: (s: Seat) => boolean): Seat | undefined {
    const list = (this.w.seatsByRoom[room] ?? []).filter((s) => this.isSeatFree(s, n) && !this.w.playerClassSeatIds.has(s.id));
    const preferred = prefer ? list.filter(prefer) : list;
    const pool = preferred.length ? preferred : list;
    return pool[Math.floor(this.rand(n, 5) * pool.length)] ?? list[0];
  }

  private classSeat(n: NPC, slot: number): Seat | undefined {
    const g = n.person.group as Group;
    const subject = GROUP_SCHEDULE[g][slot];
    const room = SUBJECTS[subject].room;
    const seats = this.w.seatsByRoom[room];
    const p = playerSeatIndex(seats.length);
    const idx = g === PLAYER_GROUP && n.groupIndex >= p ? n.groupIndex + 1 : n.groupIndex;
    return seats[idx % seats.length];
  }

  /** Decide what this person should be doing right now. */
  private decide(n: NPC): { key: string; steps: () => Step[] } {
    const p = n.person;
    const per = PERIODS[this.w.periodIndex];
    const m = this.w.minute;
    const seatStep = (s: Seat | undefined): Step[] => (s ? [{ tx: s.tx, ty: s.ty, seat: s }] : []);
    const wander = (zones: (keyof typeof ZONES)[]) => {
      const z = zones[Math.floor(Math.random() * zones.length)];
      const [tx, ty] = this.randomTileIn(z);
      return [{ tx, ty, wait: 2 + Math.floor(Math.random() * 5) }];
    };

    if (p.role === 'teacher') {
      const room = SUBJECTS[p.subject!].room;
      if (per.kind === 'lunch' && p.subject !== 'reading') {
        const cafe = this.w.seatsByRoom.cafeteria;
        const idx = 40 + (p.id % 8);
        return { key: 'lunch', steps: () => seatStep(cafe[idx]) };
      }
      if (per.kind === 'passing' && this.rand(n, this.w.periodIndex) < 0.5) {
        // Greet students at the classroom door
        const s = this.w.teacherSeat[room];
        return { key: 'door' + this.w.periodIndex, steps: () => [{ tx: s.tx + 1, ty: s.ty + 2, face: 'down', wait: 99 }] };
      }
      if (per.kind === 'class') {
        // Lecture: pace in front of the board, then return to the desk
        const s = this.w.teacherSeat[room];
        const spots = [[s.tx - 2, s.ty], [s.tx + 2, s.ty], [s.tx - 1, s.ty], [s.tx + 3, s.ty], [s.tx - 3, s.ty]].filter(
          ([x, y]) => !this.w.nav.isSolid(x, y) && !this.w.seats.some((q) => q.tx === x && q.ty === y && q.kind !== 'teacher'));
        const go = spots.length && n.wanderN % 2 === 0;
        const [px, py] = go ? spots[Math.floor(Math.random() * spots.length)] : [s.tx, s.ty];
        return { key: 'lecture' + n.wanderN, steps: () => [{ tx: px, ty: py, face: 'down', wait: go ? 3 + Math.floor(Math.random() * 3) : 5 + Math.floor(Math.random() * 4) }] };
      }
      return { key: 'post', steps: () => seatStep(this.w.teacherSeat[room]) };
    }

    if (p.role === 'staff') {
      if (p.post === 'cafeteria') {
        if (per.kind === 'lunch' || this.rand(n, m >> 3) < 0.6) return { key: 'post', steps: () => seatStep(this.seatAt(52, 8)) };
        return { key: 'kitchen' + (m >> 3), steps: () => wander(['kitchen']) };
      }
      if (p.post === 'office') return { key: 'post', steps: () => seatStep(this.seatAt(19, 29)) };
      if (p.post === 'lobby') {
        if (per.kind === 'arrival' || per.kind === 'dismissal') return { key: 'duty', steps: () => [{ tx: 36, ty: 47, face: 'down', wait: 99 }] };
        return { key: 'walk' + n.wanderN, steps: () => wander(['lobby', 'hallway', 'lobby']) };
      }
      // janitor
      return { key: 'walk' + n.wanderN, steps: () => wander(['hallway', 'lobby', 'cafeteria', 'courtyard', 'gym']) };
    }

    // ---- Students
    switch (per.kind) {
      case 'arrival':
        if (m < DAY_START + 15) return { key: 'wander' + n.wanderN, steps: () => wander(['hallway', 'hallway', 'lobby', 'courtyard', 'front']) };
        return { key: 'class0', steps: () => this.classSteps(n, 0, true) };
      case 'class':
        return { key: 'class' + per.slot, steps: () => this.classSteps(n, per.slot!, false) };
      case 'passing': {
        const slot = nextClassSlot(this.w.periodIndex)!;
        return { key: 'class' + slot, steps: () => this.classSteps(n, slot, true) };
      }
      case 'lunch': {
        const cafe = this.w.seatsByRoom.cafeteria;
        return {
          key: 'lunch',
          steps: () => {
            let seat = cafe[n.lunchIndex];
            if (!seat || !this.isSeatFree(seat, n)) seat = this.freeSeatIn('cafeteria', n)!;
            if (seat) this.reserved.set(seat.id, p.id);
            const qx = 47 + Math.floor(Math.random() * 10);
            return [{ tx: qx, ty: 10, face: 'up' as Dir, wait: 2 + Math.floor(Math.random() * 3), onArrive: 'food' as const }, ...seatStep(seat)];
          },
        };
      }
      case 'clubs': {
        const choice = this.clubFor(n);
        if (choice === 'courtyard') return { key: 'club-yard' + n.wanderN, steps: () => wander(['courtyard', 'front']) };
        return {
          key: 'club-' + choice,
          steps: () => {
            const s = this.freeSeatIn(choice, n, choice === 'art' ? (x) => x.ty === 31 : undefined);
            if (s) this.reserved.set(s.id, p.id);
            return seatStep(s);
          },
        };
      }
      case 'dismissal':
        return { key: 'bus', steps: () => [{ tx: 38 + Math.floor(Math.random() * 7), ty: 49, face: 'down', wait: 1, onArrive: 'board' }] };
    }
    return { key: 'idle', steps: () => [] };
  }

  private classSteps(n: NPC, slot: number, passing: boolean): Step[] {
    const s = this.classSeat(n, slot);
    const steps: Step[] = [];
    if (passing && this.rand(n, slot + 50) < 0.3 && this.w.minute < PERIODS[this.w.periodIndex].end - 6) {
      const lx = 5 + Math.floor(this.rand(n, slot + 60) * 38);
      if (!this.w.nav.isSolid(lx, 19)) steps.push({ tx: lx, ty: 19, face: 'up', wait: 1, onArrive: 'locker' });
    }
    if (s) steps.push({ tx: s.tx, ty: s.ty, seat: s });
    return steps;
  }

  private clubFor(n: NPC): string {
    const r = this.rand(n, 99);
    const byP: Record<string, string[]> = {
      sporty: ['gym', 'gym', 'courtyard'], artsy: ['art', 'art', 'music'], nerdy: ['library', 'library', 'lab'],
      shy: ['library', 'art', 'courtyard'], cheerful: ['courtyard', 'music', 'gym'], funny: ['music', 'courtyard', 'gym'],
    };
    const opts = byP[n.person.personality];
    const c = opts[Math.floor(r * opts.length)];
    return c === 'lab' ? 'library' : c;
  }

  private startPlan(n: NPC, key: string, steps: Step[]) {
    for (const [sid, pid] of this.reserved) if (pid === n.person.id) this.reserved.delete(sid);
    n.plan = key;
    n.steps = steps;
    n.stepI = 0;
    n.waitLeft = 0;
    for (const s of steps) if (s.seat) this.reserved.set(s.seat.id, n.person.id);
    if (n.ch.seat) n.ch.standUp();
    this.routeToStep(n);
  }

  private routeToStep(n: NPC) {
    const st = n.steps[n.stepI];
    if (!st) { n.path = []; return; }
    const path = findPath(this.w.nav, n.ch.tileX, n.ch.tileY, st.tx, st.ty);
    if (path === null) {
      // Unreachable (shouldn't happen) — hop there so routines never deadlock.
      n.ch.setPos(st.tx * TILE + 8, st.ty * TILE + 13);
      n.path = [];
    } else n.path = path;
  }

  /** Called once per game minute. */
  think() {
    const m = this.w.minute;
    for (const n of this.npcs) {
      if (n.talking) continue;
      if (n.gone) {
        const per = PERIODS[this.w.periodIndex];
        if (n.person.role === 'student' && per.kind !== 'dismissal' && m >= n.spawnAt) {
          n.gone = false;
          n.ch.setVisible(true);
          const spawns: TilePt[] = [[41, 49], [41, 49], [0, 48], [63, 49], [23, 49]];
          const [sx, sy] = spawns[n.person.id % spawns.length];
          n.ch.setPos(sx * TILE + 8, sy * TILE + 13);
          n.plan = '';
        } else continue;
      }
      const d = this.decide(n);
      if (d.key !== n.plan) this.startPlan(n, d.key, d.steps());
      else if (n.path.length === 0 && !n.ch.seat) {
        // Lingering at a step
        const st = n.steps[n.stepI];
        if (st && st.wait !== undefined) {
          n.waitLeft -= 1;
          if (n.waitLeft <= 0) {
            if (n.stepI < n.steps.length - 1) { n.stepI++; this.routeToStep(n); }
            else if (st.onArrive !== 'board') { n.wanderN++; }
          }
        }
      }
      this.ambient(n);
    }
  }

  private ambient(n: NPC) {
    if (!n.ch.visible || n.path.length) return;
    const per = PERIODS[this.w.periodIndex];
    const r = Math.random();
    const room = n.ch.seat?.room;
    if (n.ch.seat) {
      if (per.kind === 'class' && r < 0.04) n.ch.showEmote(['idea', 'question', 'sleep', 'alert'][Math.floor(Math.random() * 4)]);
      else if (room === 'music' && r < 0.2) n.ch.showEmote('note');
      else if (per.kind === 'lunch' && r < 0.12) n.ch.showEmote(['food', 'talk', 'heart'][Math.floor(Math.random() * 3)]);
      else if (per.kind === 'clubs' && r < 0.08) n.ch.showEmote(room === 'art' ? 'star' : room === 'gym' ? 'alert' : 'idea');
      return;
    }
    // Standing around: sometimes strike up a chat with someone close by.
    if (r < 0.25 && n.person.role === 'student') {
      const buddy = this.npcs.find((o) => o !== n && o.ch.visible && !o.path.length && !o.ch.seat && Math.abs(o.ch.x - n.ch.x) < 40 && Math.abs(o.ch.y - n.ch.y) < 40);
      if (buddy) {
        n.ch.faceToward(buddy.ch.x, buddy.ch.y);
        buddy.ch.faceToward(n.ch.x, n.ch.y);
        n.ch.showEmote('talk', 2200);
        this.scene.time.delayedCall(900, () => buddy.ch.showEmote(Math.random() < 0.3 ? 'heart' : 'talk', 1800));
      }
    }
  }

  /** Per-frame movement. dt in seconds (real). */
  update(dt: number) {
    const speed = 70 * Math.min(this.w.timeScale, 6);
    for (const n of this.npcs) {
      if (n.gone || n.talking) { n.ch.moving = false; n.ch.animate(dt); continue; }
      if (n.path.length) {
        const [tx, ty] = n.path[0];
        const last = n.path.length === 1;
        const jx = last ? 0 : ((n.person.id * 5) % 7) - 3, jy = last ? 0 : ((n.person.id * 3) % 5) - 2;
        const gx = tx * TILE + 8 + jx, gy = ty * TILE + 13 + jy;
        const dx = gx - n.ch.x, dy = gy - n.ch.y;
        const dist = Math.hypot(dx, dy);
        const stepLen = speed * dt;
        n.ch.moving = true;
        if (Math.abs(dx) > Math.abs(dy)) n.ch.face(dx < 0 ? 'left' : 'right');
        else n.ch.face(dy < 0 ? 'up' : 'down');
        if (dist <= stepLen) {
          n.ch.setPos(gx, gy);
          n.path.shift();
          if (!n.path.length) this.arrive(n);
        } else n.ch.setPos(n.ch.x + (dx / dist) * stepLen, n.ch.y + (dy / dist) * stepLen);
      } else n.ch.moving = false;
      n.ch.animate(dt, Math.min(this.w.timeScale, 3));
    }
  }

  private arrive(n: NPC) {
    n.ch.moving = false;
    const st = n.steps[n.stepI];
    if (!st) return;
    if (st.seat) {
      if (this.w.playerSeatId === st.seat.id) {
        const alt = this.freeSeatIn(st.seat.room, n);
        if (alt && alt.id !== st.seat.id) { st.seat = alt; st.tx = alt.tx; st.ty = alt.ty; this.reserved.set(alt.id, n.person.id); this.routeToStep(n); return; }
        n.ch.showEmote('question');
        return;
      }
      n.ch.sitAt(st.seat);
      return;
    }
    if (st.face) n.ch.face(st.face);
    n.waitLeft = st.wait ?? 0;
    if (st.onArrive === 'food') n.ch.showEmote('food', 2000);
    if (st.onArrive === 'locker') n.ch.showEmote('star', 1200);
    if (st.onArrive === 'board') {
      const tryBoard = () => {
        if (this.w.busPresent && n.plan === 'bus') { n.gone = true; n.ch.setVisible(false); }
        else if (n.plan === 'bus') this.scene.time.delayedCall(800, tryBoard);
      };
      this.scene.time.delayedCall(400 + Math.random() * 1500, tryBoard);
    }
    if (n.stepI < n.steps.length - 1 && !st.wait) { n.stepI++; this.routeToStep(n); }
  }

  byId(id: number) { return this.npcs.find((n) => n.person.id === id); }
}
