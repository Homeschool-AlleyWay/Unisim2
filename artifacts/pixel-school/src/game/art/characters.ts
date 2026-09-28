// Smooth, high-resolution chibi characters drawn with canvas paths.
// Each frame is 64x96 (4x the 16x24 world size) so they stay crisp on phones and in 3D.
import { rng, shade } from './pixel';

export type HairStyle = 'short' | 'long' | 'ponytail' | 'bun' | 'afro' | 'buzz' | 'curly' | 'pigtails' | 'bob';
export type Outfit = 'tee' | 'dress' | 'hoodie' | 'blazer' | 'apron' | 'overalls';

export interface Look {
  skin: string;
  hair: string;
  hairStyle: HairStyle;
  shirt: string;
  pants: string;
  shoes: string;
  outfit: Outfit;
  backpack?: string;
  glasses?: boolean;
  hat?: 'chef' | 'cap' | 'none';
  eyeColor?: string;
  accessory?: 'none' | 'bow' | 'headband' | 'earrings';
}

export const SKIN_TONES = ['#f8dcc4', '#f1c29e', '#dda47c', '#b97d55', '#8f5b3b', '#5f3c29'];
export const HAIR_COLORS = ['#2b2024', '#4a2f22', '#7a4a2a', '#c7893f', '#ecc66e', '#b8452e', '#6a57a8', '#d9d9e2'];
export const SHIRT_COLORS = ['#e2544a', '#f29b3b', '#f2c94c', '#6cbf6a', '#3fa7a0', '#4f86d9', '#8b6fd1', '#e874a8', '#f4f0e6', '#3b3f58'];
export const PANTS_COLORS = ['#3b4a78', '#2d2a33', '#6b5a4a', '#5b7fb5', '#8a4a5a', '#4a6b4a'];
export const SHOE_COLORS = ['#2d2a33', '#f4f0e6', '#c0504d', '#4f5a78', '#6b4a3a', '#e2544a', '#4f86d9'];
export const EYE_COLORS = ['#2b2033', '#4a2f22', '#3d6fb0', '#3f7d6e', '#6a57a8', '#7a4a2a'];
export const HAIR_STYLES: HairStyle[] = ['short', 'long', 'ponytail', 'bun', 'afro', 'buzz', 'curly', 'pigtails', 'bob'];
export const OUTFITS: Outfit[] = ['tee', 'hoodie', 'dress', 'blazer'];
export const ACCESSORIES: NonNullable<Look['accessory']>[] = ['none', 'bow', 'headband', 'earrings'];

export const DIRS = ['down', 'left', 'right', 'up'] as const;
export type Pose = 'stand' | 'w1' | 'w2' | 'w3' | 'w4' | 'sit';
export const POSES: Pose[] = ['stand', 'w1', 'w2', 'w3', 'w4', 'sit'];
export const FRAME_W = 64;
export const FRAME_H = 96;
export const SHEET_COLS = POSES.length;
export const SHEET_ROWS = DIRS.length;

const OL = '#2b2033';
const LW = 2.2;
type C = CanvasRenderingContext2D;

// ---------- shape helpers ----------
function ell(c: C, x: number, y: number, rx: number, ry: number, fill: string | CanvasGradient, stroke = true) {
  c.beginPath();
  c.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
  c.fillStyle = fill;
  c.fill();
  if (stroke) { c.strokeStyle = OL; c.lineWidth = LW; c.stroke(); }
}
function rrPath(c: C, x: number, y: number, w: number, h: number, r: number) {
  r = Math.min(r, w / 2, h / 2);
  c.beginPath();
  c.moveTo(x + r, y);
  c.arcTo(x + w, y, x + w, y + h, r);
  c.arcTo(x + w, y + h, x, y + h, r);
  c.arcTo(x, y + h, x, y, r);
  c.arcTo(x, y, x + w, y, r);
  c.closePath();
}
function rr(c: C, x: number, y: number, w: number, h: number, r: number, fill: string | CanvasGradient, stroke = true) {
  rrPath(c, x, y, w, h, r);
  c.fillStyle = fill;
  c.fill();
  if (stroke) { c.strokeStyle = OL; c.lineWidth = LW; c.stroke(); }
}
/** A limb: thick round-capped line with an outline. */
function limb(c: C, x1: number, y1: number, x2: number, y2: number, w: number, fill: string, outline = true) {
  c.lineCap = 'round';
  if (outline) {
    c.strokeStyle = OL; c.lineWidth = w + LW * 2;
    c.beginPath(); c.moveTo(x1, y1); c.lineTo(x2, y2); c.stroke();
  }
  c.strokeStyle = fill; c.lineWidth = w;
  c.beginPath(); c.moveTo(x1, y1); c.lineTo(x2, y2); c.stroke();
}
function vgrad(c: C, y1: number, y2: number, top: string, bottom: string) {
  const g = c.createLinearGradient(0, y1, 0, y2);
  g.addColorStop(0, top); g.addColorStop(1, bottom);
  return g;
}
function hl(c: C, x: number, y: number, r: number, a1: number, a2: number, color: string, w = 2.4) {
  c.beginPath(); c.arc(x, y, r, a1, a2); c.strokeStyle = color; c.lineWidth = w; c.lineCap = 'round'; c.stroke();
}

// ---------- body parts ----------
function drawEyes(c: C, L: Look, cx: number, y: number, side: boolean) {
  const pts = side ? [cx] : [cx - 6.5, cx + 6.5];
  for (const x of pts) {
    c.beginPath(); c.ellipse(x, y, 2.5, 3.4, 0, 0, Math.PI * 2); c.fillStyle = L.eyeColor ?? '#2b2033'; c.fill();
    c.beginPath(); c.arc(x + 0.9, y - 1.3, 1.05, 0, Math.PI * 2); c.fillStyle = '#ffffff'; c.fill();
    // brows
    c.beginPath(); c.moveTo(x - 2.8, y - 6.2); c.quadraticCurveTo(x, y - 7.6, x + 2.8, y - 6.2);
    c.strokeStyle = shade(L.hair === '#d9d9e2' ? '#9a9aa6' : L.hair, -0.2); c.lineWidth = 1.4; c.lineCap = 'round'; c.stroke();
  }
  // blush
  c.fillStyle = 'rgba(236,112,112,0.38)';
  for (const x of side ? [cx + 1] : [cx - 10.5, cx + 10.5]) { c.beginPath(); c.ellipse(x, y + 5.2, 3, 1.8, 0, 0, Math.PI * 2); c.fill(); }
  // mouth
  c.beginPath();
  if (side) { c.moveTo(cx - 4.5, y + 6.4); c.quadraticCurveTo(cx - 3, y + 7.6, cx - 1.5, y + 6.6); }
  else c.arc(cx, y + 5.3, 2.4, 0.2 * Math.PI, 0.8 * Math.PI);
  c.strokeStyle = '#8a3b3b'; c.lineWidth = 1.3; c.stroke();
  if (L.glasses) {
    c.strokeStyle = '#3b3140'; c.lineWidth = 1.5;
    for (const x of pts) { c.beginPath(); c.arc(x, y, 4.8, 0, Math.PI * 2); c.stroke(); }
    c.beginPath();
    if (side) { c.moveTo(cx + 4.8, y - 1); c.lineTo(cx + 13, y - 2); }
    else { c.moveTo(cx - 1.7, y - 0.5); c.lineTo(cx + 1.7, y - 0.5); }
    c.stroke();
    c.fillStyle = 'rgba(200,230,255,0.25)';
    for (const x of pts) { c.beginPath(); c.arc(x, y, 4, 0, Math.PI * 2); c.fill(); }
  }
}

function drawAccessory(c: C, L: Look, cx: number, hy: number) {
  const acc = L.accessory;
  if (!acc || acc === 'none') return;
  if (acc === 'bow') {
    const bx = cx + 11, by = hy - 10;
    c.fillStyle = '#e2544a';
    c.beginPath(); c.moveTo(bx, by); c.lineTo(bx - 5, by - 3.5); c.lineTo(bx - 5, by + 3.5); c.closePath(); c.fill();
    c.beginPath(); c.moveTo(bx, by); c.lineTo(bx + 5, by - 3.5); c.lineTo(bx + 5, by + 3.5); c.closePath(); c.fill();
    c.beginPath(); c.ellipse(bx, by, 1.8, 1.8, 0, 0, Math.PI * 2); c.fillStyle = '#c0402f'; c.fill();
  } else if (acc === 'headband') {
    c.strokeStyle = '#f2c94c'; c.lineWidth = 2.6;
    c.beginPath(); c.arc(cx, hy - 1, 16, Math.PI * 1.08, Math.PI * 1.92); c.stroke();
  } else if (acc === 'earrings') {
    c.fillStyle = '#f2c94c';
    c.beginPath(); c.ellipse(cx - 16.5, hy + 7, 1.4, 1.9, 0, 0, Math.PI * 2); c.fill();
    c.beginPath(); c.ellipse(cx + 16.5, hy + 7, 1.4, 1.9, 0, 0, Math.PI * 2); c.fill();
  }
}

function hairFrontDown(c: C, L: Look, hy: number) {
  const H = L.hair, s = L.hairStyle, hiC = shade(H, 0.35);
  if (s === 'afro') {
    ell(c, 32, hy - 8, 20, 11, H);
    c.fillStyle = H;
    for (let i = 0; i < 7; i++) { c.beginPath(); c.arc(15 + i * 5.7, hy - 3 + Math.sin(i * 1.3) * 1.5, 3.6, 0, Math.PI * 2); c.fill(); }
    hl(c, 26, hy - 9, 8, Math.PI * 1.1, Math.PI * 1.45, hiC, 2.6);
    return;
  }
  if (s === 'buzz') {
    c.beginPath(); c.ellipse(32, hy - 3, 16.8, 14.5, 0, Math.PI, Math.PI * 2); c.closePath();
    c.fillStyle = shade(H, 0.05); c.fill(); c.strokeStyle = OL; c.lineWidth = 1.4; c.stroke();
    return;
  }
  if (s === 'bob') { rr(c, 11, hy - 8, 10, 30, 5, H); rr(c, 43, hy - 8, 10, 30, 5, H); }
  if (s === 'long') { rr(c, 11, hy - 8, 9.5, 40, 4.5, H); rr(c, 43.5, hy - 8, 9.5, 40, 4.5, H); }
  // Main cap + scalloped fringe
  c.beginPath();
  c.moveTo(13.5, hy + 5);
  c.bezierCurveTo(11, hy - 16, 53, hy - 16, 50.5, hy + 5);
  c.lineTo(49.5, hy - 1);
  const bumps = s === 'curly' ? 7 : 5;
  for (let i = 0; i < bumps; i++) {
    const x1 = 49.5 - (i * 35) / bumps, x2 = 49.5 - ((i + 1) * 35) / bumps;
    c.quadraticCurveTo((x1 + x2) / 2, hy + (i % 2 ? 4.5 : 6.5), x2, hy - 1);
  }
  c.lineTo(13.5, hy + 5);
  c.closePath();
  c.fillStyle = vgrad(c, hy - 16, hy + 6, shade(H, 0.12), H);
  c.fill(); c.strokeStyle = OL; c.lineWidth = LW; c.stroke();
  // side locks
  if (s !== 'short' || true) { limb(c, 15, hy, 15.5, hy + 8, 5, H, false); limb(c, 49, hy, 48.5, hy + 8, 5, H, false); }
  if (s === 'curly') { c.fillStyle = H; for (let i = 0; i < 9; i++) { const a = Math.PI * (1.05 + i * 0.1); c.beginPath(); c.arc(32 + Math.cos(a) * 18, hy + 1 + Math.sin(a) * 15, 3.4, 0, Math.PI * 2); c.fill(); } }
  if (s === 'bun') { ell(c, 32, hy - 16, 7.5, 6.5, H); hl(c, 30, hy - 17, 4, Math.PI * 1.1, Math.PI * 1.5, hiC, 2); }
  if (s === 'pigtails') { ell(c, 12.5, hy + 3, 2.4, 2.4, '#e2544a'); ell(c, 51.5, hy + 3, 2.4, 2.4, '#e2544a'); }
  hl(c, 32, hy + 3, 14, Math.PI * 1.18, Math.PI * 1.42, hiC, 2.6);
  if (L.hat === 'cap') {
    c.beginPath(); c.ellipse(32, hy - 5, 17.5, 12, 0, Math.PI, Math.PI * 2); c.closePath();
    c.fillStyle = L.shirt; c.fill(); c.strokeStyle = OL; c.lineWidth = LW; c.stroke();
    ell(c, 32, hy - 4, 15, 3.4, shade(L.shirt, -0.25));
  }
}

function hairBehindDown(c: C, L: Look, hy: number) {
  const H = shade(L.hair, -0.12), s = L.hairStyle;
  if (s === 'afro') ell(c, 32, hy + 1, 23.5, 21, L.hair);
  if (s === 'long') rr(c, 12, hy - 4, 40, 40, 14, H);
  if (s === 'ponytail') { ell(c, 50, hy - 6, 6, 8, H); }
  if (s === 'pigtails') { ell(c, 10, hy + 12, 6.5, 9.5, L.hair); ell(c, 54, hy + 12, 6.5, 9.5, L.hair); }
}

function hairBack(c: C, L: Look, hy: number) {
  const H = L.hair, s = L.hairStyle, hiC = shade(H, 0.35);
  if (s === 'afro') { ell(c, 32, hy + 1, 23.5, 21, H); hl(c, 32, hy, 16, Math.PI * 1.15, Math.PI * 1.45, hiC, 2.6); return; }
  if (s === 'buzz') {
    c.beginPath(); c.ellipse(32, hy + 3, 17.2, 16, 0, Math.PI * 0.95, Math.PI * 2.05); c.closePath();
    c.fillStyle = shade(H, 0.05); c.fill(); c.strokeStyle = OL; c.lineWidth = 1.4; c.stroke();
    return;
  }
  if (s === 'long') rr(c, 13, hy, 38, 36, 12, H);
  if (s === 'bob') rr(c, 12, hy - 2, 40, 26, 10, H);
  ell(c, 32, hy + 1, 18.5, 17.5, vgrad(c, hy - 16, hy + 18, shade(H, 0.12), shade(H, -0.12)));
  if (s === 'ponytail') { limb(c, 32, hy + 10, 32.5, hy + 30, 8, H); ell(c, 32, hy + 12, 4, 2.4, '#e2544a'); }
  if (s === 'bun') ell(c, 32, hy - 14, 7.5, 6.5, H);
  if (s === 'pigtails') { ell(c, 10, hy + 12, 6.5, 9.5, H); ell(c, 54, hy + 12, 6.5, 9.5, H); }
  if (s === 'curly') { c.fillStyle = H; for (let i = 0; i < 12; i++) { const a = Math.PI * (0.9 + i * 0.1); c.beginPath(); c.arc(32 + Math.cos(a) * 18, hy + 1 + Math.sin(a) * 17, 3.6, 0, Math.PI * 2); c.fill(); } }
  hl(c, 32, hy + 2, 13, Math.PI * 1.2, Math.PI * 1.5, hiC, 2.6);
  if (L.hat === 'cap') { c.beginPath(); c.ellipse(32, hy - 3, 18, 13, 0, Math.PI, Math.PI * 2); c.closePath(); c.fillStyle = L.shirt; c.fill(); c.strokeStyle = OL; c.lineWidth = LW; c.stroke(); }
}

function chefHat(c: C, x: number, hy: number) {
  ell(c, x, hy - 13, 14, 4, '#f4f6fa');
  for (const [dx, dy, r] of [[-7, -20, 6.5], [0, -23, 7.5], [7, -20, 6.5]] as const) ell(c, x + dx, hy + dy, r, r, '#ffffff');
  rr(c, x - 12, hy - 18, 24, 7, 3, '#ffffff');
}

function torso(c: C, L: Look, x: number, y: number, w: number, view: 'down' | 'up' | 'side') {
  const S = L.shirt;
  const grad = vgrad(c, y, y + 27, shade(S, 0.15), shade(S, -0.15));
  if (L.outfit === 'dress') {
    c.beginPath();
    c.moveTo(x + 3, y); c.lineTo(x + w - 3, y); c.lineTo(x + w + 5, y + 31); c.quadraticCurveTo(x + w / 2, y + 34, x - 5, y + 31); c.closePath();
    c.fillStyle = grad; c.fill(); c.strokeStyle = OL; c.lineWidth = LW; c.stroke();
    if (view !== 'up') { c.fillStyle = shade(S, 0.35); c.fillRect(x + 3, y + 13, w - 6, 2.5); }
    return;
  }
  rr(c, x, y, w, 27, 9, grad);
  if (view === 'down') {
    if (L.outfit === 'tee') { c.beginPath(); c.arc(32, y + 1, 4.5, 0, Math.PI); c.fillStyle = L.skin; c.fill(); c.strokeStyle = OL; c.lineWidth = 1.2; c.stroke(); }
    if (L.outfit === 'hoodie') {
      rr(c, 25, y + 16, 14, 7, 3, shade(S, -0.12));
      c.strokeStyle = '#f4f0e6'; c.lineWidth = 1.2; c.beginPath(); c.moveTo(29, y + 3); c.lineTo(29, y + 11); c.moveTo(35, y + 3); c.lineTo(35, y + 11); c.stroke();
      c.beginPath(); c.arc(32, y + 1, 6, 0, Math.PI); c.fillStyle = shade(S, -0.2); c.fill();
    }
    if (L.outfit === 'blazer') {
      c.beginPath(); c.moveTo(27, y); c.lineTo(32, y + 14); c.lineTo(37, y); c.closePath(); c.fillStyle = '#f4f0e6'; c.fill();
      c.beginPath(); c.moveTo(31, y + 3); c.lineTo(33, y + 3); c.lineTo(32.6, y + 12); c.lineTo(31.4, y + 12); c.closePath(); c.fillStyle = '#c0504d'; c.fill();
      c.strokeStyle = shade(S, -0.35); c.lineWidth = 1.2; c.beginPath(); c.moveTo(27, y); c.lineTo(32, y + 14); c.lineTo(37, y); c.stroke();
    }
    if (L.outfit === 'apron') { rr(c, 23, y + 6, 18, 22, 4, '#f7f7fa'); }
    if (L.outfit === 'overalls') { rr(c, 23, y + 9, 18, 18, 4, L.pants); limb(c, 25, y + 1, 25, y + 10, 2.5, L.pants, false); limb(c, 39, y + 1, 39, y + 10, 2.5, L.pants, false); }
    if (L.backpack) { limb(c, 22, y + 2, 23, y + 14, 3, shade(L.backpack, -0.25), false); limb(c, 42, y + 2, 41, y + 14, 3, shade(L.backpack, -0.25), false); }
  }
  if (view === 'up' && L.outfit === 'hoodie') rr(c, 23, y - 2, 18, 9, 4, shade(S, -0.15));
}

function arm(c: C, L: Look, sx: number, sy: number, hx: number, hy: number, far = false) {
  const full = L.outfit !== 'tee' && L.outfit !== 'dress' && L.outfit !== 'overalls';
  const sleeve = far ? shade(L.shirt, -0.2) : L.shirt;
  const skin = far ? shade(L.skin, -0.12) : L.skin;
  if (full) limb(c, sx, sy, hx, hy, 6.5, sleeve);
  else {
    limb(c, sx, sy, hx, hy, 5.5, skin);
    const ex = sx + (hx - sx) * 0.42, ey = sy + (hy - sy) * 0.42;
    limb(c, sx, sy, ex, ey, 7, sleeve);
  }
  ell(c, hx, hy + 0.5, 3.4, 3.4, skin);
}

function leg(c: C, L: Look, hx: number, hy: number, fx: number, fy: number, far = false, shoeDir = 0) {
  const P = far ? shade(L.pants, -0.18) : L.pants;
  const bare = L.outfit === 'dress';
  limb(c, hx, hy, fx, fy - 3, 8, bare ? (far ? shade(L.skin, -0.12) : L.skin) : P);
  if (bare) limb(c, fx, fy - 7, fx, fy - 3, 7.2, '#f4f0e6', false);
  const sh = far ? shade(L.shoes, -0.2) : L.shoes;
  ell(c, fx + shoeDir * 2, fy, shoeDir ? 6.5 : 5.2, 3.6, sh);
  c.fillStyle = 'rgba(255,255,255,0.35)'; c.beginPath(); c.ellipse(fx + shoeDir * 2 - 1.5, fy - 1.3, 2, 0.9, 0, 0, Math.PI * 2); c.fill();
}

function backpack(c: C, L: Look, x: number, y: number, w: number, h: number) {
  const B = L.backpack!;
  rr(c, x, y, w, h, 6, vgrad(c, y, y + h, shade(B, 0.15), shade(B, -0.15)));
  rr(c, x + w * 0.18, y + h * 0.5, w * 0.64, h * 0.38, 4, shade(B, -0.12));
  c.strokeStyle = shade(B, 0.4); c.lineWidth = 1; c.beginPath(); c.moveTo(x + 5, y + 4); c.lineTo(x + w - 5, y + 4); c.stroke();
}

// ---------- full frame ----------
function drawFrame(c: C, L: Look, dir: 'down' | 'left' | 'up', pose: Pose) {
  const sit = pose === 'sit';
  const phase = pose === 'w1' ? 1 : pose === 'w3' ? -1 : 0;
  const bob = pose === 'w2' || pose === 'w4' ? -1.6 : 0;
  const drop = sit ? 9 : 0;
  const ty = 44 + bob + drop; // torso top
  const hy = 27 + bob + drop; // head centre

  if (dir === 'down' || dir === 'up') {
    const back = dir === 'up';
    if (!back) hairBehindDown(c, L, hy);
    // legs
    if (!sit) {
      const lLift = Math.max(0, -phase) * 4, rLift = Math.max(0, phase) * 4;
      leg(c, L, 27, 66 + bob, 26.5, 90 - lLift, false);
      leg(c, L, 37, 66 + bob, 37.5, 90 - rLift, false);
    } else if (!back) {
      limb(c, 27, 76, 27, 84, 8.5, L.outfit === 'dress' ? L.skin : L.pants);
      limb(c, 37, 76, 37, 84, 8.5, L.outfit === 'dress' ? L.skin : L.pants);
      ell(c, 26.5, 88, 5, 3.4, L.shoes); ell(c, 37.5, 88, 5, 3.4, L.shoes);
    }
    // arms (behind torso edges)
    const sw = phase * 2.2;
    arm(c, L, 20, ty + 5, 17.5, ty + 21 + sw);
    arm(c, L, 44, ty + 5, 46.5, ty + 21 - sw);
    torso(c, L, 19, ty, 26, back ? 'up' : 'down');
    if (back && L.backpack) backpack(c, L, 20.5, ty + 2, 23, 22);
    // neck + head
    rr(c, 28.5, hy + 12, 7, 6, 2, shade(L.skin, -0.1), false);
    if (back || !['long', 'bob', 'afro'].includes(L.hairStyle)) { ell(c, 14.8, hy + 3, 3.6, 4.2, L.skin); ell(c, 49.2, hy + 3, 3.6, 4.2, L.skin); }
    ell(c, 32, hy, 17.5, 16.5, vgrad(c, hy - 16, hy + 16, shade(L.skin, 0.08), shade(L.skin, -0.06)));
    if (back) {
      hairBack(c, L, hy);
      if (L.hat === 'chef') chefHat(c, 32, hy);
    } else {
      drawEyes(c, L, 32, hy + 4, false);
      hairFrontDown(c, L, hy);
      if (L.hat === 'chef') chefHat(c, 32, hy);
      drawAccessory(c, L, 32, hy);
    }
    return;
  }

  // ----- side (facing left) -----
  const hipX = 33, hipY = 66 + bob;
  if (!sit) {
    const a = phase * 0.42;
    const far = -a, near = a;
    leg(c, L, hipX + 1, hipY, hipX + 1 - Math.sin(far) * 22, hipY + Math.cos(far) * 22 + 2, true, -1);
    leg(c, L, hipX - 1, hipY, hipX - 1 - Math.sin(near) * 22, hipY + Math.cos(near) * 22 + 2, false, -1);
  } else {
    limb(c, 34, 77, 21, 78, 8.5, L.outfit === 'dress' ? L.skin : L.pants);
    limb(c, 21, 78, 20, 88, 7.5, L.outfit === 'dress' ? L.skin : L.pants);
    ell(c, 17, 90, 6, 3.4, L.shoes);
  }
  const armA = -phase * 0.5;
  arm(c, L, 33, ty + 5, 33 + Math.sin(armA) * 15, ty + 5 + Math.cos(armA) * 15, true);
  if (L.backpack) backpack(c, L, 37, ty + 1, 11, 22);
  torso(c, L, 23, ty, 19, 'side');
  if (L.hairStyle === 'long') rr(c, 34, hy + 2, 12, 30, 6, shade(L.hair, -0.08));
  if (L.hairStyle === 'ponytail') { limb(c, 46, hy - 4, 52, hy + 14, 8, L.hair); ell(c, 46.5, hy - 3, 2.8, 3.5, '#e2544a'); }
  if (L.hairStyle === 'pigtails') ell(c, 48, hy + 10, 6, 9, L.hair);
  arm(c, L, 32, ty + 5, 32 - Math.sin(armA) * 15, ty + 5 + Math.cos(armA) * 15);
  rr(c, 27.5, hy + 12, 7, 6, 2, shade(L.skin, -0.1), false);
  // head
  const H = L.hair;
  if (L.hairStyle === 'afro') ell(c, 34, hy - 1, 22, 20.5, H);
  ell(c, 31, hy, 17, 16.5, vgrad(c, hy - 16, hy + 16, shade(L.skin, 0.08), shade(L.skin, -0.06)));
  if (L.hairStyle !== 'buzz') {
    // hair covers top + back; face window left open
    c.save();
    c.beginPath(); c.ellipse(31, hy, 17, 16.5, 0, 0, Math.PI * 2); c.clip();
    c.fillStyle = vgrad(c, hy - 16, hy + 16, shade(H, 0.12), shade(H, -0.1));
    c.beginPath();
    c.moveTo(10, hy - 20); c.lineTo(52, hy - 20); c.lineTo(52, hy + 20);
    c.lineTo(38, hy + 20);
    c.bezierCurveTo(40, hy + 6, 34, hy - 2, 26, hy - 5);
    for (let i = 0; i < 3; i++) c.quadraticCurveTo(23 - i * 4, hy - 1 + (i % 2) * 2, 21 - i * 4, hy - 5);
    c.lineTo(10, hy - 6); c.closePath(); c.fill();
    c.restore();
    c.beginPath(); c.ellipse(31, hy, 17, 16.5, 0, 0, Math.PI * 2); c.strokeStyle = OL; c.lineWidth = LW; c.stroke();
    hl(c, 33, hy + 2, 13, Math.PI * 1.25, Math.PI * 1.55, shade(H, 0.35), 2.6);
  } else {
    c.beginPath(); c.ellipse(32, hy - 3, 16.5, 13.5, 0, Math.PI * 0.95, Math.PI * 2.02); c.fillStyle = shade(H, 0.05); c.fill();
  }
  if (L.hairStyle === 'bun') ell(c, 42, hy - 13, 7, 6.5, H);
  if (L.hairStyle === 'bob') rr(c, 34, hy - 4, 16, 24, 7, H);
  if (L.hairStyle === 'curly') { c.fillStyle = H; for (let i = 0; i < 8; i++) { const a = Math.PI * (1.2 + i * 0.14); c.beginPath(); c.arc(31 + Math.cos(a) * 17, hy + Math.sin(a) * 16.5, 3.5, 0, Math.PI * 2); c.fill(); } }
  if (!['long', 'bob', 'afro'].includes(L.hairStyle)) ell(c, 37.5, hy + 3.5, 3.5, 4.2, L.skin);
  drawEyes(c, L, 21.5, hy + 4, true);
  if (L.hat === 'cap') { c.beginPath(); c.ellipse(32, hy - 5, 17.5, 12, 0, Math.PI, Math.PI * 2); c.closePath(); c.fillStyle = L.shirt; c.fill(); c.strokeStyle = OL; c.lineWidth = LW; c.stroke(); ell(c, 16, hy - 5, 9, 3, shade(L.shirt, -0.25)); }
  if (L.hat === 'chef') chefHat(c, 32, hy);
}

/** Builds a 384x384 sheet: rows = down,left,right,up ; cols = stand,w1,w2,w3,w4,sit */
export function buildCharacterSheet(L: Look, scale = 1): HTMLCanvasElement {
  const fw = FRAME_W * scale, fh = FRAME_H * scale;
  const sheet = document.createElement('canvas');
  sheet.width = fw * SHEET_COLS;
  sheet.height = fh * SHEET_ROWS;
  const s = sheet.getContext('2d')!;
  DIRS.forEach((dir, row) => {
    POSES.forEach((pose, col) => {
      const f = document.createElement('canvas');
      f.width = fw; f.height = fh;
      const c = f.getContext('2d')!;
      c.scale(scale, scale);
      c.lineJoin = 'round';
      drawFrame(c, L, dir === 'right' ? 'left' : dir, pose);
      if (dir === 'right') {
        s.save();
        s.translate(col * fw + fw, row * fh);
        s.scale(-1, 1);
        s.drawImage(f, 0, 0);
        s.restore();
      } else s.drawImage(f, col * fw, row * fh);
    });
  });
  return sheet;
}

export function frameIndex(dir: typeof DIRS[number], pose: Pose) {
  return DIRS.indexOf(dir) * SHEET_COLS + POSES.indexOf(pose);
}

export function randomLook(seed: number, opts: Partial<Look> = {}): Look {
  const r = rng(seed * 9973 + 17);
  const pick = <T,>(a: readonly T[]) => a[Math.floor(r() * a.length)];
  return {
    skin: pick(SKIN_TONES),
    hair: pick(HAIR_COLORS.slice(0, 7)),
    hairStyle: pick(HAIR_STYLES),
    shirt: pick(SHIRT_COLORS),
    pants: pick(PANTS_COLORS),
    shoes: pick(['#2d2a33', '#f4f0e6', '#c0504d', '#4f5a78', '#6b4a3a']),
    outfit: pick(['tee', 'tee', 'hoodie', 'dress', 'tee', 'hoodie'] as Outfit[]),
    backpack: pick(['#e2544a', '#4f86d9', '#f2c94c', '#6cbf6a', '#8b6fd1', '#e874a8', '#f29b3b']),
    glasses: r() < 0.2,
    eyeColor: pick(EYE_COLORS),
    accessory: pick(ACCESSORIES),
    ...opts,
  };
}
