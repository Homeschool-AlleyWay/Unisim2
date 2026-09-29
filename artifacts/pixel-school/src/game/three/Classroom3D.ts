// First-person 3D view of the room you're seated in, built from the same data and
// textures as the 2D map: floor & wall art are cropped from the 2D background, props reuse
// their 2D sprites, and classmates are live billboards of their 2D sprite sheets.
import * as THREE from 'three';
import { buildCharacterSheet, DIRS, FRAME_H, FRAME_W, Look, POSES, SHEET_COLS, SHEET_ROWS } from '../art/characters';
import { shade } from '../art/pixel';
import type { PlacedObject, Seat, Dir } from '../data/furniture';
import { floorLevel, Room, SchoolGrid, TIER_STEP, TIERS, TILE } from '../data/schoolMap';

/** Floor height under a tile — the raised tiers of the auditorium classrooms, 0 elsewhere. */
const floorY = (tx: number, ty: number) => floorLevel(Math.floor(tx), Math.floor(ty)) * TIER_STEP;
import type { NPC } from '../systems/NPCSystem';
import { DPR } from '../display';

export interface Class3DDeps {
  bg: HTMLCanvasElement;
  props: Record<string, HTMLCanvasElement>;
  grid: SchoolGrid;
  objects: PlacedObject[];
  looks: Record<number, Look>; // person id -> look (sheets are redrawn at 2x for 3D)
}

/** Chalkboards painted on the 2D walls: tile x, face row, width in tiles, colour. */
const BOARDS: Record<string, { tx: number; ty: number; w: number; color: string }> = {
  classA: { tx: 8, ty: 4, w: 4, color: '#2f6b4f' },
  classB: { tx: 11, ty: 24, w: 4, color: '#2f6b4f' },
  lab: { tx: 37, ty: 4, w: 4, color: '#2d5a6b' },
};

const WALL_H = 2.7;
const focus3D: Record<string, [number, number]> = { art: [38, 26], music: [37, 35], gym: [53, 26], library: [26, 6] };
const CARD_SCALE: Record<string, number> = { globe: 0.55, plant: 0.8, skeleton: 0.8, easel: 0.8, musicStand: 0.7, trash: 0.6, waterFountain: 0.7, bathSink: 0.8, labSink: 0.8, hoop: 1.2, drums: 0.8 };
const FACE_H = 2; // the 2 face rows (32px) from the 2D art

/** Centered word-wrap for the TV canvas, capped at 3 lines. */
function wrapText(c: CanvasRenderingContext2D, text: string, cx: number, y: number, maxW: number, lineH: number) {
  const words = text.split(' ');
  let line = '';
  const lines: string[] = [];
  for (const w of words) {
    const test = line ? line + ' ' + w : w;
    if (c.measureText(test).width > maxW && line) { lines.push(line); line = w; } else line = test;
  }
  if (line) lines.push(line);
  lines.slice(0, 3).forEach((l, i) => c.fillText(l, cx, y + i * lineH));
}

function crop(src: HTMLCanvasElement, x: number, y: number, w: number, h: number) {
  const c = document.createElement('canvas');
  c.width = Math.max(1, Math.round(w)); c.height = Math.max(1, Math.round(h));
  c.getContext('2d')!.drawImage(src, x, y, w, h, 0, 0, w, h);
  return c;
}

function pixelTex(c: HTMLCanvasElement, repeat?: [number, number]) {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.magFilter = THREE.NearestFilter;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  t.anisotropy = 4;
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(repeat[0], repeat[1]); }
  return t;
}

function smoothTex(c: HTMLCanvasElement) {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

const faceDir = (d: Dir): [number, number] => (d === 'up' ? [0, -1] : d === 'down' ? [0, 1] : d === 'left' ? [-1, 0] : [1, 0]);

interface Billboard { mesh: THREE.Mesh; tex: THREE.Texture; emote: THREE.Mesh; emoteKey: string; shadow: THREE.Mesh }

export class Classroom3D {
  root: HTMLDivElement;
  active = false;
  renderer: THREE.WebGLRenderer;
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(70, 1, 0.05, 80);
  private roomGroup = new THREE.Group();
  private cards: THREE.Mesh[] = [];
  private people = new Map<number, Billboard>();
  private sheetTex = new Map<string, THREE.Texture>();
  private emoteTex = new Map<string, THREE.Texture>();
  private matCache = new Map<string, THREE.Material>();
  private room: Room | null = null;
  private baseYaw = 0;
  private yaw = 0;
  private pitch = -0.1;
  private eye = new THREE.Vector3();
  private board?: { canvas: HTMLCanvasElement; tex: THREE.CanvasTexture; color: string };
  private tv?: { canvas: HTMLCanvasElement; tex: THREE.CanvasTexture };
  private t = 0;
  onTapPerson: (id: number) => void = () => {};

  constructor(parent: HTMLElement, before: HTMLElement | null, private d: Class3DDeps) {
    this.root = document.createElement('div');
    this.root.style.cssText = 'position:absolute;inset:0;display:none;touch-action:none;background:#1d1a2b';
    parent.insertBefore(this.root, before);
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(DPR);
    this.renderer.domElement.style.cssText = 'display:block;width:100%;height:100%';
    this.root.appendChild(this.renderer.domElement);
    this.scene.background = new THREE.Color('#1d1a2b');
    this.scene.add(this.roomGroup);
    this.scene.add(new THREE.HemisphereLight(0xfffaf0, 0xc9ae90, 2.1));
    const sun = new THREE.DirectionalLight(0xfff1dc, 1.3);
    sun.position.set(-4, 8, 3);
    this.scene.add(sun);
    this.camera.rotation.order = 'YXZ';
    this.bindInput();
    this.ro = new ResizeObserver(() => this.resize());
    this.ro.observe(this.root);
  }
  private ro: ResizeObserver;

  /** Tear down the renderer and DOM node (scene destroyed / route change). */
  destroy() {
    this.close();
    this.ro.disconnect();
    for (const t of this.sheetTex.values()) t.dispose();
    for (const t of this.emoteTex.values()) t.dispose();
    for (const m of this.matCache.values()) m.dispose();
    this.sheetTex.clear(); this.emoteTex.clear(); this.matCache.clear();
    this.renderer.dispose();
    this.renderer.forceContextLoss();
    this.root.remove();
  }

  // ---------------- lifecycle ----------------
  open(room: Room, seat: Seat, look: Look) {
    this.clearRoom();
    this.room = room;
    this.buildRoom(room);
    this.buildHands(seat, look);
    const standing = seat.kind === 'stand';
    this.eye.set(seat.tx + 0.5, (standing ? 1.55 : 1.28) + floorY(seat.tx, seat.ty), seat.ty + (seat.facing === 'up' ? 0.62 : 0.5));
    this.baseYaw = seat.facing === 'up' ? 0 : seat.facing === 'down' ? Math.PI : seat.facing === 'left' ? Math.PI / 2 : -Math.PI / 2;
    // Face the front of the room: the chalkboard if there is one, else the teacher's spot
    const b = BOARDS[room.id];
    const focus = b ? [b.tx + b.w / 2, room.y1] : focus3D[room.id];
    if (focus) {
      const want = Math.atan2(-(focus[0] - this.eye.x), -(focus[1] - this.eye.z));
      let dy = want - this.baseYaw;
      while (dy > Math.PI) dy -= Math.PI * 2;
      while (dy < -Math.PI) dy += Math.PI * 2;
      this.baseYaw += Math.max(-0.6, Math.min(0.6, dy));
    }
    this.yaw = this.baseYaw;
    this.pitch = standing ? -0.08 : -0.2;
    this.root.style.display = 'block';
    this.active = true;
    this.resize();
  }

  close() {
    this.active = false;
    this.root.style.display = 'none';
    this.clearRoom();
  }

  private clearRoom() {
    for (const b of this.people.values()) {
      this.scene.remove(b.mesh, b.emote, b.shadow);
      // Per-billboard geometries and materials are unique (emote maps are shared/cached).
      for (const m of [b.mesh, b.emote, b.shadow]) { m.geometry.dispose(); (m.material as THREE.Material).dispose(); }
      b.tex.dispose();
    }
    this.people.clear();
    this.roomGroup.traverse((o) => {
      const m = o as THREE.Mesh;
      if (m.geometry) m.geometry.dispose();
      const mats = Array.isArray(m.material) ? m.material : m.material ? [m.material] : [];
      for (const mat of mats) { const map = (mat as THREE.MeshLambertMaterial).map; if (map && !this.isShared(map)) map.dispose(); if (![...this.matCache.values()].includes(mat)) mat.dispose(); }
    });
    this.roomGroup.clear();
    this.cards = [];
    this.board = undefined;
    this.tv = undefined;
  }

  private isShared(t: THREE.Texture) {
    return [...this.sheetTex.values(), ...this.emoteTex.values()].includes(t);
  }

  private resize() {
    const w = this.root.clientWidth || 1, h = this.root.clientHeight || 1;
    this.renderer.setSize(w, h, false);
    const aspect = w / h;
    this.camera.aspect = aspect;
    const hfov = (84 * Math.PI) / 180;
    const vfov = 2 * Math.atan(Math.tan(hfov / 2) / aspect);
    this.camera.fov = Math.min(100, Math.max(52, (vfov * 180) / Math.PI));
    this.camera.updateProjectionMatrix();
  }

  private bindInput() {
    const el = this.renderer.domElement;
    let down: { x: number; y: number; yaw: number; pitch: number; moved: boolean } | null = null;
    el.addEventListener('pointerdown', (e) => { down = { x: e.clientX, y: e.clientY, yaw: this.yaw, pitch: this.pitch, moved: false }; el.setPointerCapture(e.pointerId); });
    el.addEventListener('pointermove', (e) => {
      if (!down) return;
      const dx = e.clientX - down.x, dy = e.clientY - down.y;
      if (Math.hypot(dx, dy) > 6) down.moved = true;
      this.yaw = Math.max(this.baseYaw - 1.5, Math.min(this.baseYaw + 1.5, down.yaw + dx * 0.006));
      this.pitch = Math.max(-0.7, Math.min(0.45, down.pitch + dy * 0.004));
    });
    el.addEventListener('pointerup', (e) => {
      if (down && !down.moved) this.tap(e.clientX, e.clientY);
      down = null;
    });
    el.addEventListener('pointercancel', () => (down = null));
  }

  private tap(cx: number, cy: number) {
    const r = this.renderer.domElement.getBoundingClientRect();
    const ndc = new THREE.Vector2(((cx - r.left) / r.width) * 2 - 1, -((cy - r.top) / r.height) * 2 + 1);
    const ray = new THREE.Raycaster();
    ray.setFromCamera(ndc, this.camera);
    const hits = ray.intersectObjects([...this.people.values()].map((b) => b.mesh), false);
    if (hits.length) this.onTapPerson(hits[0].object.userData.id);
  }

  // ---------------- materials ----------------
  private lambert(color: string) {
    const k = 'l' + color;
    if (!this.matCache.has(k)) this.matCache.set(k, new THREE.MeshLambertMaterial({ color: new THREE.Color(color) }));
    return this.matCache.get(k)!;
  }
  private texMat(c: HTMLCanvasElement, opts: { alpha?: boolean; repeat?: [number, number]; basic?: boolean } = {}) {
    const map = pixelTex(c, opts.repeat);
    const p = { map, alphaTest: opts.alpha ? 0.5 : 0, side: opts.alpha ? THREE.DoubleSide : THREE.FrontSide };
    return opts.basic ? new THREE.MeshBasicMaterial(p) : new THREE.MeshLambertMaterial(p);
  }
  private box(w: number, h: number, d: number, mat: THREE.Material | THREE.Material[], x: number, y: number, z: number) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    m.position.set(x, y, z);
    this.roomGroup.add(m);
    return m;
  }

  // ---------------- room shell ----------------
  private buildRoom(r: Room) {
    const { grid, bg } = this.d;
    const W = r.x2 - r.x1 + 1, D = r.y2 - r.y1 + 1;
    const cx = r.x1 + W / 2, cz = r.y1 + D / 2;
    const isOutside = (x: number, y: number) => ['grass', 'path', 'sidewalk', 'road'].includes(grid.at(x, y) as string);

    // Floor — the exact 2D floor art (rugs, shadows and all)
    if (!TIERS[r.id]) {
      const floor = new THREE.Mesh(new THREE.PlaneGeometry(W, D), this.texMat(crop(bg, r.x1 * TILE, r.y1 * TILE, W * TILE, D * TILE)));
      floor.rotation.x = -Math.PI / 2;
      floor.position.set(cx, 0, cz);
      this.roomGroup.add(floor);
    } else {
      // Auditorium classroom: one floor strip per tile row at its tier height, with a riser
      // face wherever the next row steps up.
      const riser = this.lambert(shade(r.paint, -0.35));
      let prevY = 0;
      for (let y = r.y1; y <= r.y2; y++) {
        const h = floorY(r.x1, y);
        const strip = new THREE.Mesh(new THREE.PlaneGeometry(W, 1), this.texMat(crop(bg, r.x1 * TILE, y * TILE, W * TILE, TILE)));
        strip.rotation.x = -Math.PI / 2;
        strip.position.set(cx, h, y + 0.5);
        this.roomGroup.add(strip);
        if (h > prevY) {
          const face = new THREE.Mesh(new THREE.PlaneGeometry(W, h - prevY), riser);
          face.position.set(cx, (h + prevY) / 2, y);
          face.rotation.y = Math.PI; // faces the stage
          this.roomGroup.add(face);
        }
        prevY = h;
      }
    }

    // North wall — the 2D wall face (chalkboard, windows, posters) cropped straight from the map
    const north = crop(bg, r.x1 * TILE, (r.y1 - 2) * TILE, W * TILE, 32);
    const nctx = north.getContext('2d')!;
    for (let x = r.x1; x <= r.x2; x++) if (grid.at(x, r.y1 - 1) !== 'wall') this.paintDoor(nctx, (x - r.x1) * TILE, r.paint, grid.at(x + 1, r.y1 - 1) !== 'wall' && x < r.x2, x > r.x1 && grid.at(x - 1, r.y1 - 1) !== 'wall');
    this.wall(north, W, cx, cz - D / 2, 0, r.paint);

    // Other walls — painted in the same style as the 2D wall faces
    const south = this.genWall(r.paint, W, (i) => grid.at(r.x2 - i, r.y2 + 1) !== 'wall', (i) => isOutside(r.x2 - i, r.y2 + 4) && i % 3 === 1);
    this.wall(south, W, cx, cz + D / 2, Math.PI, r.paint);
    const east = this.genWall(r.paint, D, (i) => grid.at(r.x2 + 1, r.y1 + i) !== 'wall', (i) => isOutside(r.x2 + 2, r.y1 + i) && i % 3 === 1);
    this.wall(east, D, cx + W / 2, cz, -Math.PI / 2, r.paint);
    const west = this.genWall(r.paint, D, (i) => grid.at(r.x1 - 1, D - 1 - i + r.y1) !== 'wall', (i) => isOutside(r.x1 - 2, D - 1 - i + r.y1) && i % 3 === 1);
    this.wall(west, D, cx - W / 2, cz, Math.PI / 2, r.paint);

    // Ceiling with light panels
    const tile = document.createElement('canvas');
    tile.width = tile.height = 16;
    const tc = tile.getContext('2d')!;
    tc.fillStyle = '#ece6d8'; tc.fillRect(0, 0, 16, 16);
    tc.fillStyle = '#ddd6c6'; tc.fillRect(0, 0, 16, 1); tc.fillRect(0, 0, 1, 16);
    tc.fillStyle = '#e8e1d2'; for (let i = 0; i < 6; i++) tc.fillRect((i * 5) % 15 + 1, (i * 7) % 15 + 1, 1, 1);
    const ceil = new THREE.Mesh(new THREE.PlaneGeometry(W, D), this.texMat(tile, { repeat: [W, D], basic: true }));
    ceil.rotation.x = Math.PI / 2;
    ceil.position.set(cx, WALL_H, cz);
    this.roomGroup.add(ceil);
    const lamp = new THREE.MeshBasicMaterial({ color: 0xfffdf4 });
    for (let x = r.x1 + 2; x < r.x2; x += 4) for (let z = r.y1 + 2; z < r.y2; z += 3) this.box(1.4, 0.04, 0.45, lamp, x + 0.5, WALL_H - 0.02, z + 0.5);

    // Live chalkboard overlay (hi-res) on top of the 2D board
    const b = BOARDS[r.id];
    if (b) {
      const bw = b.w * TILE - 6, bh = 17;
      const canvas = document.createElement('canvas');
      canvas.width = 640; canvas.height = Math.round((640 * bh) / bw);
      const tex = smoothTex(canvas);
      const m = new THREE.Mesh(new THREE.PlaneGeometry(bw / TILE, bh / TILE), new THREE.MeshLambertMaterial({ map: tex }));
      const texY = (b.ty - (r.y1 - 2)) * TILE + 5;
      m.position.set((b.tx * TILE + 3 + bw / 2) / TILE, FACE_H - (texY + bh / 2) / TILE, r.y1 + 0.012);
      this.roomGroup.add(m);
      this.board = { canvas, tex, color: b.color };

      // Small mounted TV beside the board — silent visual-only screen for the morning
      // broadcast loop and for teacher-provided visual aids.
      const tvCanvas = document.createElement('canvas');
      tvCanvas.width = 320; tvCanvas.height = 200;
      const tvTex = smoothTex(tvCanvas);
      const tvW = 1.1, tvH = tvW * (200 / 320);
      const frame = new THREE.Mesh(new THREE.PlaneGeometry(tvW + 0.08, tvH + 0.08), new THREE.MeshLambertMaterial({ color: 0x1c1a22 }));
      const screen = new THREE.Mesh(new THREE.PlaneGeometry(tvW, tvH), new THREE.MeshBasicMaterial({ map: tvTex }));
      const tvX = b.tx + b.w + 1.4;
      frame.position.set(tvX, FACE_H - tvH / 2 - 0.15, r.y1 + 0.011);
      screen.position.set(tvX, FACE_H - tvH / 2 - 0.15, r.y1 + 0.013);
      this.roomGroup.add(frame, screen);
      this.tv = { canvas: tvCanvas, tex: tvTex };
      this.setTV('📺', 'Good morning!', 'The broadcast will begin shortly.');
    }

    // Furniture & props
    for (const o of this.d.objects) {
      if (o.hidden || o.type === 'marker') continue;
      if (o.tx + o.fw - 1 < r.x1 || o.tx > r.x2 || o.ty + o.fh - 1 < r.y1 || o.ty > r.y2) continue;
      const h = floorY(o.tx, o.ty + o.fh - 1);
      if (!h) { this.buildProp(o); continue; }
      // On a raised tier: build the prop inside a lifted group (props place themselves from y=0).
      const room = this.roomGroup, lifted = new THREE.Group();
      lifted.position.y = h;
      room.add(lifted);
      this.roomGroup = lifted;
      try { this.buildProp(o); } finally { this.roomGroup = room; }
    }
  }

  private wall(tex: HTMLCanvasElement, len: number, x: number, z: number, rotY: number, paint: string) {
    const face = new THREE.Mesh(new THREE.PlaneGeometry(len, FACE_H), this.texMat(tex));
    face.position.set(x, FACE_H / 2, z);
    face.rotation.y = rotY;
    this.roomGroup.add(face);
    const up = new THREE.Mesh(new THREE.PlaneGeometry(len, WALL_H - FACE_H), this.lambert(shade(paint, 0.04)));
    up.position.set(x, FACE_H + (WALL_H - FACE_H) / 2, z);
    up.rotation.y = rotY;
    this.roomGroup.add(up);
    // crown moulding
    const trim = new THREE.Mesh(new THREE.PlaneGeometry(len, 0.08), this.lambert(shade(paint, -0.3)));
    trim.position.set(x, WALL_H - 0.04, z);
    trim.rotation.y = rotY;
    trim.translateZ(0.005);
    this.roomGroup.add(trim);
  }

  /** A wall face in the 2D style: paint, chair rail, wainscot, baseboard, with doors & windows. */
  private genWall(paint: string, len: number, isDoor: (i: number) => boolean, isWindow: (i: number) => boolean) {
    const c = document.createElement('canvas');
    c.width = len * TILE; c.height = 32;
    const x = c.getContext('2d')!;
    x.fillStyle = paint; x.fillRect(0, 0, c.width, 32);
    x.fillStyle = shade(paint, -0.3); x.fillRect(0, 23, c.width, 1);
    x.fillStyle = shade(paint, -0.15); x.fillRect(0, 24, c.width, 6);
    x.fillStyle = shade(paint, -0.22); for (let i = 2; i < c.width; i += 5) x.fillRect(i, 25, 1, 4);
    x.fillStyle = '#6b4d3a'; x.fillRect(0, 30, c.width, 2);
    for (let i = 0; i < len; i++) {
      if (isDoor(i)) this.paintDoor(x, i * TILE, paint, i + 1 < len && isDoor(i + 1), i > 0 && isDoor(i - 1));
      else if (isWindow(i) && i + 1 < len && !isDoor(i + 1)) {
        const X = i * TILE + 3, Y = 4, W = 26, H = 17;
        x.fillStyle = '#8a7a6a'; x.fillRect(X - 1, Y - 1, W + 2, H + 2);
        const g = x.createLinearGradient(0, Y, 0, Y + H); g.addColorStop(0, '#8fcff2'); g.addColorStop(1, '#cdeefb');
        x.fillStyle = g; x.fillRect(X, Y, W, H);
        x.fillStyle = '#6fbf6a'; x.beginPath(); x.arc(X + 7, Y + H, 6, Math.PI, 0); x.fill(); x.beginPath(); x.arc(X + 19, Y + H + 1, 8, Math.PI, 0); x.fill();
        x.fillStyle = '#f7f3ea'; x.fillRect(X + W / 2, Y, 1, H); x.fillRect(X, Y + 8, W, 1);
        x.fillStyle = '#ffffff'; x.fillRect(X + 2, Y + 2, 2, 1);
        x.fillStyle = '#d8cdbd'; x.fillRect(X - 2, Y + H + 1, W + 4, 2);
      }
    }
    return c;
  }

  private paintDoor(x: CanvasRenderingContext2D, px: number, paint: string, hasRight: boolean, hasLeft: boolean) {
    // Door leaf spanning this tile, framed on the outer edges of the doorway
    x.fillStyle = paint; x.fillRect(px, 0, 16, 32);
    x.fillStyle = '#7a4e2b'; x.fillRect(px, 4, 16, 28);
    x.fillStyle = '#b27744'; x.fillRect(px + (hasLeft ? 0 : 2), 6, 16 - (hasLeft ? 0 : 2) - (hasRight ? 0 : 2), 26);
    x.fillStyle = '#c98b52'; x.fillRect(px + 4, 9, 8, 1);
    x.fillStyle = '#bfe6f5'; x.fillRect(px + 5, 10, 6, 6);
    x.fillStyle = '#9a6236'; x.fillRect(px + 4, 20, 8, 8);
    x.fillStyle = '#f2c94c'; x.fillRect(hasRight ? px + 2 : px + 12, 19, 2, 2);
    if (!hasLeft) { x.fillStyle = '#5e3a22'; x.fillRect(px, 4, 2, 28); }
    if (!hasRight) { x.fillStyle = '#5e3a22'; x.fillRect(px + 14, 4, 2, 28); }
  }

  // ---------------- props ----------------
  private legs(w: number, d: number, h: number, x: number, z: number, color: string, t = 0.06) {
    const m = this.lambert(color);
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) this.box(t, h, t, m, x + (sx * (w - t)) / 2, h / 2, z + (sz * (d - t)) / 2);
  }

  private topped(w: number, d: number, h: number, x: number, z: number, top: HTMLCanvasElement | string, edge: string, thick = 0.06) {
    const side = this.lambert(edge);
    const topMat = typeof top === 'string' ? this.lambert(top) : this.texMat(top);
    this.box(w, thick, d, [side, side, topMat, side, side, side], x, h - thick / 2, z);
  }

  private card(o: PlacedObject, tex: HTMLCanvasElement, billboard: boolean, scale = 1) {
    const w = (tex.width / TILE) * scale, h = (tex.height / TILE) * scale;
    const geo = new THREE.PlaneGeometry(w, h);
    geo.translate(0, h / 2, 0);
    const m = new THREE.Mesh(geo, this.texMat(tex, { alpha: true }));
    m.position.set(o.tx + o.fw / 2, 0, o.ty + o.fh / 2);
    this.roomGroup.add(m);
    if (billboard) this.cards.push(m);
    return m;
  }

  private cabinet(o: PlacedObject, tex: HTMLCanvasElement, depth = 0.6) {
    const w = o.fw * 0.96, h = tex.height / TILE, d = Math.min(o.fh, depth);
    const img = tex.getContext('2d')!.getImageData(Math.floor(tex.width / 2), Math.floor(tex.height / 2), 1, 1).data;
    const sideCol = shade('#' + [img[0], img[1], img[2]].map((v) => v.toString(16).padStart(2, '0')).join(''), -0.25);
    const side = this.lambert(sideCol);
    const front = this.texMat(tex, { alpha: false });
    this.box(w, h, d, [side, side, side, side, front, side], o.tx + o.fw / 2, h / 2, o.ty + d / 2 + 0.02);
  }

  private buildProp(o: PlacedObject) {
    const tex = this.d.props[o.type];
    const cx = o.tx + o.fw / 2, cz = o.ty + o.fh / 2;
    switch (o.type) {
      case 'lectureDesk': case 'lectureDeskL': case 'lectureDeskR': {
        // Full-width segments so a row reads as one continuous lecture desk.
        const wood = this.lambert('#a8703f');
        this.topped(1.0, 0.66, 0.74, cx, cz - 0.05, '#e2b27a', '#c08a55'); // plain top: the 2D sprite's paper/pencil turn blocky at 3D scale
        this.box(1.0, 0.62, 0.04, [wood, wood, wood, wood, this.lambert('#d39a5e'), wood], cx, 0.41, cz - 0.36);
        if (o.type !== 'lectureDesk') this.box(0.04, 0.7, 0.66, wood, o.type === 'lectureDeskL' ? cx - 0.48 : cx + 0.48, 0.35, cz - 0.05);
        return;
      }
      case 'desk': {
        this.legs(0.84, 0.6, 0.7, cx, cz - 0.05, '#8a5a34', 0.05);
        this.topped(0.92, 0.68, 0.74, cx, cz - 0.05, crop(tex, 1, 4, 14, 9), '#a8703f');
        this.box(0.84, 0.22, 0.03, this.lambert('#c98b52'), cx, 0.55, cz - 0.36);
        return;
      }
      case 'chair': case 'chairSide': case 'chairSideL': {
        const col = o.type === 'chair' ? '#5f7fb5' : o.type === 'chairSide' ? '#d39a5e' : '#6a9e8a';
        this.legs(0.44, 0.42, 0.42, cx, cz, '#4a4a58', 0.035);
        this.box(0.48, 0.05, 0.46, this.lambert(col), cx, 0.44, cz);
        const back = this.lambert(shade(col, -0.08));
        if (o.type === 'chair') this.box(0.48, 0.28, 0.05, back, cx, 0.62, cz + 0.22);
        else if (o.type === 'chairSide') this.box(0.05, 0.28, 0.46, back, cx - 0.22, 0.62, cz);
        else this.box(0.05, 0.28, 0.46, back, cx + 0.22, 0.62, cz);
        return;
      }
      case 'stool': {
        const seat = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.06, 16), this.lambert('#e36b5d'));
        seat.position.set(cx, 0.48, cz); this.roomGroup.add(seat);
        this.legs(0.26, 0.26, 0.46, cx, cz, '#6b6b78', 0.03);
        return;
      }
      case 'beanbag': case 'beanbagBlue': {
        const s = new THREE.Mesh(new THREE.SphereGeometry(0.42, 16, 12), this.lambert(o.type === 'beanbag' ? '#e98a3b' : '#5b8fd6'));
        s.scale.set(1, 0.6, 1); s.position.set(cx, 0.24, cz); this.roomGroup.add(s);
        return;
      }
      case 'teacherDesk': case 'libDesk': case 'officeDesk': {
        const col = o.type === 'teacherDesk' ? '#b27744' : o.type === 'libDesk' ? '#8c5a36' : '#7c8fb0';
        const w = o.fw * 0.94;
        const body = this.lambert(col);
        const front = this.texMat(crop(tex, 1, 13, tex.width - 2, tex.height - 14));
        this.box(w, 0.72, 0.62, [body, body, this.lambert(shade(col, 0.15)), body, front, body], cx, 0.36, cz);
        // monitor
        this.box(0.08, 0.14, 0.08, this.lambert('#23262f'), cx + w * 0.22, 0.79, cz - 0.05);
        const screen = new THREE.MeshBasicMaterial({ color: o.type === 'libDesk' ? 0x9fe0a5 : 0x7fd0f0 });
        const dark = this.lambert('#3a3f4f');
        this.box(0.52, 0.36, 0.05, [dark, dark, dark, dark, screen, dark], cx + w * 0.22, 1.02, cz - 0.08);
        this.box(0.34, 0.02, 0.26, this.lambert('#fbf8f0'), cx - w * 0.25, 0.73, cz);
        if (o.type === 'teacherDesk') { const apple = new THREE.Mesh(new THREE.SphereGeometry(0.07, 12, 10), this.lambert('#d9362f')); apple.position.set(cx - w * 0.05, 0.79, cz + 0.05); this.roomGroup.add(apple); }
        if (o.type === 'libDesk') for (let i = 0; i < 5; i++) this.box(0.06, 0.24, 0.18, this.lambert(['#d9534f', '#5b8fd6', '#f0c24b', '#6cbf6a', '#9b6fd1'][i]), cx - w * 0.45 + i * 0.07, 0.84, cz - 0.1);
        return;
      }
      case 'labBench': {
        const body = this.lambert('#4b5566');
        this.box(o.fw * 0.96, 0.84, 0.66, body, cx, 0.42, cz);
        this.box(o.fw * 0.98, 0.06, 0.72, this.lambert('#2f3a48'), cx, 0.87, cz);
        const liquids = ['#6cdf8a', '#f0c24b', '#e86aa8', '#5ab4f0', '#b77fe0'];
        const glass = new THREE.MeshLambertMaterial({ color: 0xdff4fb, transparent: true, opacity: 0.45 });
        liquids.forEach((col, i) => {
          const x = o.tx + 0.35 + i * 0.58, h = 0.18 + (i % 2) * 0.08;
          const g = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, h, 12), glass); g.position.set(x, 0.9 + h / 2, cz - 0.1); this.roomGroup.add(g);
          const l = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, h * 0.5, 12), this.lambert(col)); l.position.set(x, 0.9 + h * 0.25, cz - 0.1); this.roomGroup.add(l);
        });
        this.box(0.04, 0.35, 0.04, this.lambert('#9aa1ad'), cx, 1.07, cz - 0.25);
        return;
      }
      case 'artTable': case 'longTable': case 'libTable': {
        const h = o.type === 'libTable' ? 0.74 : 0.72;
        const d = o.type === 'libTable' ? 1.7 : 0.72;
        const w = o.fw * 0.96;
        this.legs(w - 0.1, d - 0.1, h, cx, cz, o.type === 'longTable' ? '#6b6b78' : '#8a5a34', 0.06);
        const top = o.type === 'libTable' ? crop(tex, 1, 3, 30, 24) : o.type === 'artTable' ? crop(tex, 1, 3, 46, 12) : crop(tex, 1, 2, 62, 11);
        this.topped(w, d, h, cx, cz, top, o.type === 'longTable' ? '#c6cad3' : '#a8703f', 0.07);
        return;
      }
      case 'counter': {
        this.cabinet(o, crop(tex, 0, 12, tex.width, 18), 0.8);
        const glass = new THREE.MeshLambertMaterial({ color: 0xbfe6f5, transparent: true, opacity: 0.35, side: THREE.DoubleSide });
        const g = new THREE.Mesh(new THREE.PlaneGeometry(o.fw * 0.95, 0.4), glass); g.position.set(cx, 1.35, o.ty + 0.45); g.rotation.x = -0.3; this.roomGroup.add(g);
        return;
      }
      case 'bleachers': {
        for (let i = 0; i < 4; i++) this.box(o.fw * (1 - i * 0.22), 0.3 + i * 0.3, o.fh * 0.98, this.lambert(i % 2 ? '#b7703f' : '#d19060'), o.tx + (o.fw * (1 - i * 0.22)) / 2, (0.3 + i * 0.3) / 2, cz);
        return;
      }
      case 'bench': case 'benchOut': {
        this.legs(o.fw * 0.9, 0.35, 0.4, cx, cz, '#4a4a58', 0.05);
        this.box(o.fw * 0.95, 0.06, 0.4, this.lambert('#d39a5e'), cx, 0.42, cz);
        return;
      }
      case 'bookshelf': case 'labShelf': case 'paintShelf': case 'fridge': case 'vending': case 'vendingBlue': case 'trophyCase':
      case 'stall': case 'piano': case 'stove': case 'kitchenSink': case 'prep': case 'mapBoard': case 'ballRack':
        if (o.type === 'mapBoard') { this.card(o, tex, false); return; }
        this.cabinet(o, tex, o.type === 'piano' ? 0.55 : 0.5);
        return;
      default:
        this.card(o, tex, true, CARD_SCALE[o.type] ?? 0.75);
    }
  }

  private buildHands(seat: Seat, look: Look) {
    if (seat.kind !== 'desk') return;
    // Lab benches / art tables sit at different heights than a classroom desk —
    // match the notebook's surface height to whatever furniture is actually under it,
    // otherwise it floats disconnected in the air.
    const surfaceY = (seat.room === 'lab' ? 0.905 : 0.745) + floorY(seat.tx, seat.ty);
    const [fx, fz] = faceDir(seat.facing);
    const cx = seat.tx + 0.5 + fx * 0.72, cz = seat.ty + 0.5 + fz * 0.72;
    // Notebook with today's notes
    const nb = document.createElement('canvas');
    nb.width = 128; nb.height = 96;
    const n = nb.getContext('2d')!;
    n.fillStyle = '#fbf8f0'; n.fillRect(0, 0, 128, 96);
    n.fillStyle = '#9ab8e0'; for (let y = 16; y < 96; y += 9) n.fillRect(0, y, 128, 1);
    n.fillStyle = '#e8a0a0'; n.fillRect(14, 0, 1, 96);
    n.fillStyle = '#3d4f8a'; for (let y = 22; y < 90; y += 9) { let x = 18; while (x < 118) { const w = 5 + ((x * y) % 13); n.fillRect(x, y - 3, w, 2); x += w + 4; } }
    n.fillStyle = '#c9c2b0'; n.fillRect(63, 0, 2, 96);
    const nbMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.46, 0.34), new THREE.MeshLambertMaterial({ map: smoothTex(nb) }));
    nbMesh.rotation.x = -Math.PI / 2;
    nbMesh.rotation.z = seat.facing === 'up' ? 0.08 : 0;
    nbMesh.position.set(cx, surfaceY, cz + (seat.facing === 'up' ? 0.12 : 0));
    this.roomGroup.add(nbMesh);
    const pencil = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.22, 8), this.lambert('#f2c94c'));
    pencil.rotation.z = Math.PI / 2; pencil.rotation.y = 0.5;
    pencil.position.set(cx + 0.27, surfaceY + 0.01, cz + 0.12);
    this.roomGroup.add(pencil);
  }

  // ---------------- chalkboard ----------------
  setBoard(title: string, lines: string[]) {
    if (!this.board) return;
    const { canvas, tex, color } = this.board;
    const c = canvas.getContext('2d')!;
    const W = canvas.width, H = canvas.height;
    c.fillStyle = color; c.fillRect(0, 0, W, H);
    // chalk dust smudges
    for (let i = 0; i < 40; i++) { c.fillStyle = `rgba(255,255,255,${0.02 + Math.random() * 0.03})`; c.beginPath(); c.ellipse(Math.random() * W, Math.random() * H, 20 + Math.random() * 60, 6 + Math.random() * 14, Math.random(), 0, Math.PI * 2); c.fill(); }
    c.fillStyle = '#f7f4e8';
    c.font = `700 ${Math.round(H * 0.17)}px "Pixelify Sans", "Nunito", sans-serif`;
    c.textBaseline = 'top';
    c.fillText(title, W * 0.04, H * 0.06);
    c.font = `600 ${Math.round(H * 0.12)}px "Nunito", sans-serif`;
    c.fillStyle = '#e6f2e8';
    lines.slice(0, 4).forEach((l, i) => c.fillText(l, W * 0.06, H * (0.3 + i * 0.16)));
    c.fillStyle = '#ffffff'; c.fillRect(W * 0.8, H * 0.93, W * 0.08, H * 0.03);
    tex.needsUpdate = true;
  }

  // ---------------- mounted classroom TV (silent — broadcast loop or visual aids) ----------------
  /** Whether a classroom TV exists right now (so the broadcast keeps rendering for it). */
  get hasTV() { return !!this.tv; }

  /** Show the live broadcast picture (letterboxed) on the classroom TV. */
  setTVFrame(src: HTMLCanvasElement) {
    if (!this.tv) return;
    const { canvas, tex } = this.tv;
    const c = canvas.getContext('2d')!;
    const W = canvas.width, H = canvas.height;
    const h = Math.round((W * src.height) / src.width);
    c.fillStyle = '#000'; c.fillRect(0, 0, W, H);
    c.imageSmoothingEnabled = true;
    c.drawImage(src, 0, Math.round((H - h) / 2), W, h);
    tex.needsUpdate = true;
  }

  setTV(icon: string, title: string, body: string) {
    if (!this.tv) return;
    const { canvas, tex } = this.tv;
    const c = canvas.getContext('2d')!;
    const W = canvas.width, H = canvas.height;
    c.fillStyle = '#12141c'; c.fillRect(0, 0, W, H);
    const g = c.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, '#1d2436'); g.addColorStop(1, '#12141c');
    c.fillStyle = g; c.fillRect(0, 0, W, H * 0.22);
    c.textAlign = 'center';
    c.font = `${Math.round(H * 0.28)}px "Nunito", sans-serif`;
    c.fillText(icon, W / 2, H * 0.18);
    c.fillStyle = '#fff8ec';
    c.font = `700 ${Math.round(H * 0.1)}px "Pixelify Sans", "Nunito", sans-serif`;
    c.textBaseline = 'top';
    wrapText(c, title, W / 2, H * 0.46, W * 0.9, H * 0.12);
    c.fillStyle = '#cdd3e6';
    c.font = `500 ${Math.round(H * 0.075)}px "Nunito", sans-serif`;
    wrapText(c, body, W / 2, H * 0.66, W * 0.88, H * 0.09);
    c.textAlign = 'left';
    tex.needsUpdate = true;
  }

  // ---------------- per frame ----------------
  private sheet(id: number) {
    const key = String(id);
    let t = this.sheetTex.get(key);
    if (!t) {
      t = smoothTex(buildCharacterSheet(this.d.looks[id], 2));
      t.generateMipmaps = true;
      this.sheetTex.set(key, t);
    }
    return t;
  }
  forgetSheet(key: string) { this.sheetTex.get(key)?.dispose(); this.sheetTex.delete(key); }

  private emote(key: string) {
    let t = this.emoteTex.get(key);
    if (!t) { t = pixelTex(this.d.props[key]); this.emoteTex.set(key, t); }
    return t;
  }

  private billboard(n: NPC): Billboard {
    let b = this.people.get(n.person.id);
    if (b) return b;
    const tex = this.sheet(n.person.id).clone();
    tex.repeat.set(1 / SHEET_COLS, 1 / SHEET_ROWS);
    tex.needsUpdate = true;
    const geo = new THREE.PlaneGeometry(0.9, 1.35);
    geo.translate(0, 0.675, 0);
    const mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: tex, alphaTest: 0.45, side: THREE.DoubleSide }));
    mesh.userData.id = n.person.id;
    const egeo = new THREE.PlaneGeometry(0.44, 0.47);
    const emote = new THREE.Mesh(egeo, new THREE.MeshBasicMaterial({ transparent: true, alphaTest: 0.3, side: THREE.DoubleSide }));
    const shadow = new THREE.Mesh(new THREE.CircleGeometry(0.28, 20), new THREE.MeshBasicMaterial({ color: 0x1e0f28, transparent: true, opacity: 0.25, depthWrite: false }));
    shadow.rotation.x = -Math.PI / 2;
    this.scene.add(mesh, emote, shadow);
    b = { mesh, tex, emote, emoteKey: '', shadow };
    this.people.set(n.person.id, b);
    return b;
  }

  update(dt: number, npcs: NPC[]) {
    if (!this.active || !this.room) return;
    this.t += dt;
    const r = this.room;
    // Camera: seated, gently breathing
    this.camera.position.copy(this.eye);
    this.camera.position.y += Math.sin(this.t * 1.4) * 0.006;
    this.camera.rotation.set(this.pitch + Math.sin(this.t * 0.7) * 0.004, this.yaw, 0);
    const cam = this.camera.position;
    for (const m of this.cards) m.rotation.y = Math.atan2(cam.x - m.position.x, cam.z - m.position.z);

    const seen = new Set<number>();
    for (const n of npcs) {
      const ch = n.ch;
      if (!ch.visible) continue;
      const x = ch.x / TILE, z = (ch.y - 2) / TILE;
      if (x < r.x1 - 0.2 || x > r.x2 + 1.2 || z < r.y1 - 0.5 || z > r.y2 + 1.2) continue;
      seen.add(n.person.id);
      const b = this.billboard(n);
      const seated = ch.pose === 'sit';
      const [fx, fz] = faceDir(ch.dir);
      const fy = floorY(x, z);
      b.mesh.position.set(x - (seated ? fx * 0.12 : 0), (seated ? 0.14 : 0) + fy, z - (seated ? fz * 0.12 : 0) + (seated && ch.dir === 'up' ? 0.05 : 0));
      b.mesh.rotation.y = Math.atan2(cam.x - b.mesh.position.x, cam.z - b.mesh.position.z);
      b.mesh.visible = true;
      // Choose the sprite row the camera would see
      const vx = b.mesh.position.x - cam.x, vz = b.mesh.position.z - cam.z;
      const vl = Math.hypot(vx, vz) || 1;
      const dot = (fx * vx + fz * vz) / vl;
      const right = (fx * -vz + fz * vx) / vl;
      const view: typeof DIRS[number] = dot > 0.6 ? 'up' : dot < -0.6 ? 'down' : right > 0 ? 'right' : 'left';
      const row = DIRS.indexOf(view), col = POSES.indexOf(ch.pose);
      b.tex.offset.set(col / SHEET_COLS, 1 - (row + 1) / SHEET_ROWS);
      b.shadow.visible = !seated;
      b.shadow.position.set(x, 0.01 + fy, z);
      // Emote bubbles mirror the 2D ones
      const em = ch.emote && ch.emote.visible ? ch.emote.texture.key : '';
      if (em) {
        if (em !== b.emoteKey) { (b.emote.material as THREE.MeshBasicMaterial).map = this.emote(em); (b.emote.material as THREE.MeshBasicMaterial).needsUpdate = true; b.emoteKey = em; }
        b.emote.visible = true;
        b.emote.position.set(b.mesh.position.x, b.mesh.position.y + 1.48 + Math.sin(this.t * 4) * 0.02, b.mesh.position.z);
        b.emote.rotation.y = b.mesh.rotation.y;
      } else b.emote.visible = false;
    }
    for (const [id, b] of this.people) if (!seen.has(id)) { b.mesh.visible = false; b.emote.visible = false; b.shadow.visible = false; }
    this.renderer.render(this.scene, this.camera);
  }
}

export const CLASS_ROOMS = ['classA', 'classB', 'lab', 'art', 'music', 'library', 'gym', 'cafeteria'];
export { FRAME_W, FRAME_H };
