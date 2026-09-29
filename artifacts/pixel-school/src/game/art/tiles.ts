// Renders the static school background (floors, walls, wall decorations) into one canvas.
import { Ctx, hash, makeCanvas, pixelText, pixelTextCentered, px, rect, shade, box } from './pixel';
import { Cell, FloorKind, MAP_H, MAP_W, ROOM_BY_ID, SchoolGrid, TIERS, TILE } from '../data/schoolMap';

const isFloor = (c: Cell) => c !== 'wall';

function drawFloor(ctx: Ctx, kind: FloorKind, tx: number, ty: number) {
  const X = tx * TILE, Y = ty * TILE;
  const h = (i: number) => hash(tx, ty, i);
  switch (kind) {
    case 'grass': {
      rect(ctx, X, Y, 16, 16, '#7dc36b');
      for (let i = 0; i < 7; i++) {
        const gx = X + Math.floor(h(i) * 15), gy = Y + Math.floor(h(i + 9) * 14);
        px(ctx, gx, gy, '#68ad59'); px(ctx, gx + 1, gy - 1, '#68ad59');
      }
      for (let i = 0; i < 3; i++) px(ctx, X + Math.floor(h(i + 30) * 16), Y + Math.floor(h(i + 40) * 16), '#9ad685');
      if (h(99) > 0.93) { const fx = X + 4 + Math.floor(h(98) * 8), fy = Y + 4 + Math.floor(h(97) * 8); const c = h(96) > 0.5 ? '#fff4b8' : '#f7a8c4'; px(ctx, fx, fy, c); px(ctx, fx + 1, fy, c); px(ctx, fx, fy + 1, c); px(ctx, fx + 1, fy + 1, '#f2c14e'); }
      break;
    }
    case 'path':
      rect(ctx, X, Y, 16, 16, '#c9b58f');
      for (let i = 0; i < 4; i++) rect(ctx, X + (i % 2) * 8, Y + Math.floor(i / 2) * 8, 7, 7, h(i) > 0.5 ? '#e5d4b1' : '#dac8a2');
      break;
    case 'sidewalk':
      rect(ctx, X, Y, 16, 16, '#d3d3da');
      rect(ctx, X, Y, 16, 1, '#bdbdc6'); rect(ctx, X, Y, 1, 16, '#bdbdc6');
      if (h(1) > 0.7) px(ctx, X + 5 + Math.floor(h(2) * 6), Y + 5 + Math.floor(h(3) * 6), '#c3c3cb');
      break;
    case 'road':
      rect(ctx, X, Y, 16, 16, '#565566');
      for (let i = 0; i < 5; i++) px(ctx, X + Math.floor(h(i) * 16), Y + Math.floor(h(i + 7) * 16), '#605f70');
      break;
    case 'wood': {
      const base = ['#c98b52', '#d19660', '#c48450', '#cf915a'];
      for (let r = 0; r < 4; r++) {
        rect(ctx, X, Y + r * 4, 16, 4, base[(ty * 4 + r + tx) % 4]);
        rect(ctx, X, Y + r * 4 + 3, 16, 1, '#a86d3d');
        const seam = ((ty * 4 + r) * 7 + tx * 16) % 16;
        rect(ctx, X + seam, Y + r * 4, 1, 3, '#b0743f');
      }
      break;
    }
    case 'carpet':
      rect(ctx, X, Y, 16, 16, '#3f7d6e');
      for (let i = 0; i < 4; i++) px(ctx, X + 3 + (i % 2) * 8, Y + 3 + Math.floor(i / 2) * 8, '#4f9180');
      break;
    case 'music':
      rect(ctx, X, Y, 16, 16, '#7a5c9c');
      for (let i = 0; i < 4; i++) px(ctx, X + 3 + (i % 2) * 8, Y + 3 + Math.floor(i / 2) * 8, '#8b6daf');
      break;
    case 'hall':
      rect(ctx, X, Y, 16, 16, '#ece5d4');
      if ((tx + ty) % 2 === 0) rect(ctx, X, Y, 16, 16, '#e3dac6');
      rect(ctx, X, Y, 16, 1, '#d6ccb6'); rect(ctx, X, Y, 1, 16, '#d6ccb6');
      break;
    case 'lobby':
      rect(ctx, X, Y, 16, 16, '#f1ede6');
      rect(ctx, X, Y, 16, 1, '#dcd6cb'); rect(ctx, X, Y, 1, 16, '#dcd6cb');
      px(ctx, X + 5 + Math.floor(h(1) * 6), Y + 5 + Math.floor(h(2) * 6), '#e2dcd2');
      break;
    case 'checker':
      for (let i = 0; i < 4; i++) rect(ctx, X + (i % 2) * 8, Y + Math.floor(i / 2) * 8, 8, 8, (i === 0 || i === 3) ? '#f5e6cc' : '#e9a594');
      break;
    case 'gym': {
      for (let c = 0; c < 4; c++) {
        rect(ctx, X + c * 4, Y, 4, 16, ['#e7a863', '#eaae6b', '#e3a25c', '#e9ab66'][(tx * 4 + c) % 4]);
        rect(ctx, X + c * 4 + 3, Y, 1, 16, '#d08f4c');
        const seam = ((tx * 4 + c) * 5 + ty * 16) % 16;
        rect(ctx, X + c * 4, Y + seam, 3, 1, '#d6964f');
      }
      break;
    }
    case 'lab':
      rect(ctx, X, Y, 16, 16, '#d2e3e9');
      rect(ctx, X, Y, 16, 1, '#b5cbd3'); rect(ctx, X, Y, 1, 16, '#b5cbd3'); rect(ctx, X + 8, Y, 1, 16, '#c1d5dc'); rect(ctx, X, Y + 8, 16, 1, '#c1d5dc');
      break;
    case 'kitchen':
      rect(ctx, X, Y, 16, 16, '#cdd0d8');
      rect(ctx, X, Y, 16, 1, '#b0b4bf'); rect(ctx, X, Y, 1, 16, '#b0b4bf'); rect(ctx, X + 8, Y, 1, 16, '#babec8'); rect(ctx, X, Y + 8, 16, 1, '#babec8');
      break;
    case 'bath':
      rect(ctx, X, Y, 16, 16, '#c3e8e2');
      for (let i = 0; i < 16; i += 4) { rect(ctx, X + i, Y, 1, 16, '#a6d4cc'); rect(ctx, X, Y + i, 16, 1, '#a6d4cc'); }
      break;
    case 'art': {
      rect(ctx, X, Y, 16, 16, '#dcd6ca');
      rect(ctx, X, Y, 16, 1, '#cbc4b6'); rect(ctx, X, Y, 1, 16, '#cbc4b6');
      if (h(5) > 0.6) { const c = ['#e86a6a', '#5aa6e0', '#f2c94c', '#7dcc72', '#b77fe0'][Math.floor(h(6) * 5)]; const sx = X + 3 + Math.floor(h(7) * 9), sy = Y + 3 + Math.floor(h(8) * 9); rect(ctx, sx, sy, 2, 2, c); px(ctx, sx + 2, sy + 2, c); px(ctx, sx - 1, sy + 1, c); }
      break;
    }
  }
}

function paintFor(grid: SchoolGrid, tx: number, ty: number): { paint: string; kind: string } {
  for (let d = 1; d <= 3; d++) {
    const c = grid.at(tx, ty + d);
    if (isFloor(c)) {
      const rid = grid.roomAt(tx, ty + d);
      if (c === 'kitchen') return { paint: '#e1e5ec', kind: 'kitchen' };
      if (!rid || c === 'grass' || c === 'path' || c === 'sidewalk') return { paint: '#b5543f', kind: 'brick' };
      return { paint: ROOM_BY_ID[rid]?.paint ?? '#e9dcc9', kind: 'paint' };
    }
  }
  return { paint: '#e9dcc9', kind: 'paint' };
}

function drawWall(ctx: Ctx, grid: SchoolGrid, tx: number, ty: number) {
  const X = tx * TILE, Y = ty * TILE;
  const below = grid.at(tx, ty + 1);
  const below2 = grid.at(tx, ty + 2);
  const isLower = isFloor(below);
  const isUpper = !isLower && below === 'wall' && isFloor(below2) && grid.at(tx, ty - 1) === 'wall';
  if (isLower || isUpper) {
    const { paint, kind } = paintFor(grid, tx, ty);
    if (kind === 'brick') {
      rect(ctx, X, Y, 16, 16, '#b5543f');
      for (let r = 0; r < 4; r++) {
        rect(ctx, X, Y + r * 4 + 3, 16, 1, '#8e3b2c');
        const off = ((ty * 4 + r) % 2) * 4;
        rect(ctx, X + off, Y + r * 4, 1, 3, '#8e3b2c');
        rect(ctx, X + off + 8, Y + r * 4, 1, 3, '#8e3b2c');
        if (hash(tx, ty, r) > 0.7) rect(ctx, X + off + 2, Y + r * 4 + 1, 3, 1, '#c4644d');
      }
      if (isLower) { rect(ctx, X, Y + 13, 16, 3, '#9a9aa6'); rect(ctx, X, Y + 13, 16, 1, '#b8b8c2'); }
      if (isUpper) rect(ctx, X, Y, 16, 2, '#7a3326');
    } else if (kind === 'kitchen') {
      rect(ctx, X, Y, 16, 16, paint);
      for (let i = 0; i < 16; i += 4) { rect(ctx, X + i, Y, 1, 16, '#ccd1da'); rect(ctx, X, Y + i, 16, 1, '#ccd1da'); }
      if (isUpper) rect(ctx, X, Y, 16, 2, '#9aa1ad');
      if (isLower) rect(ctx, X, Y + 14, 16, 2, '#8e95a2');
    } else {
      rect(ctx, X, Y, 16, 16, paint);
      if (isUpper) {
        rect(ctx, X, Y, 16, 2, shade(paint, -0.35));
        rect(ctx, X, Y + 2, 16, 1, shade(paint, 0.3));
      } else {
        rect(ctx, X, Y + 7, 16, 1, shade(paint, -0.3));
        rect(ctx, X, Y + 8, 16, 6, shade(paint, -0.15));
        for (let i = 2; i < 16; i += 5) rect(ctx, X + i, Y + 9, 1, 4, shade(paint, -0.22));
        rect(ctx, X, Y + 14, 16, 2, '#6b4d3a');
      }
    }
    return;
  }
  // Wall cap (top of the wall, seen from above)
  rect(ctx, X, Y, 16, 16, '#5d4b66');
  rect(ctx, X + 1, Y + 1, 14, 14, '#6e5b78');
  const edge = '#33273b';
  if (isFloor(grid.at(tx - 1, ty))) rect(ctx, X, Y, 2, 16, edge);
  if (isFloor(grid.at(tx + 1, ty))) rect(ctx, X + 14, Y, 2, 16, edge);
  if (isFloor(grid.at(tx, ty - 1))) rect(ctx, X, Y, 16, 2, edge);
  if (isFloor(grid.at(tx, ty + 1))) rect(ctx, X, Y + 14, 16, 2, edge);
}

// ---------- Wall decorations (pixel coords computed from tile coords) ----------
function window2(ctx: Ctx, tx: number, ty: number, w = 2) {
  const X = tx * 16 + 2, Y = ty * 16 + 3, W = w * 16 - 4, H = 24;
  box(ctx, X, Y, W, H, '#f7f3ea', '#8a7a6a');
  rect(ctx, X + 2, Y + 2, W - 4, H - 4, '#9fd4f0');
  rect(ctx, X + 2, Y + H - 9, W - 4, 7, '#b6e0f5');
  rect(ctx, X + Math.floor(W / 2), Y + 2, 1, H - 4, '#f7f3ea');
  rect(ctx, X + 2, Y + 11, W - 4, 1, '#f7f3ea');
  px(ctx, X + 4, Y + 4, '#ffffff'); px(ctx, X + 5, Y + 4, '#ffffff'); px(ctx, X + 4, Y + 5, '#ffffff');
  rect(ctx, X - 1, Y + H, W + 2, 2, '#d8cdbd');
}

function chalkboard(ctx: Ctx, tx: number, ty: number, w: number, words: string[], color = '#2f6b4f') {
  const X = tx * 16 + 1, Y = ty * 16 + 3, W = w * 16 - 2, H = 22;
  box(ctx, X, Y, W, H, color, '#8a5a34');
  rect(ctx, X, Y + H - 2, W, 2, '#a8784f');
  words.forEach((wd, i) => pixelText(ctx, wd, X + 4 + i * 3, Y + 4 + i * 6, i === 0 ? '#f4f1e6' : '#d6ecd9'));
  rect(ctx, X + W - 10, Y + H - 3, 4, 1, '#ffffff');
}

function clock(ctx: Ctx, tx: number, ty: number) {
  const X = tx * 16 + 4, Y = ty * 16 + 4;
  rect(ctx, X + 1, Y, 6, 8, '#3b3140'); rect(ctx, X, Y + 1, 8, 6, '#3b3140');
  rect(ctx, X + 1, Y + 1, 6, 6, '#fbf7ee');
  rect(ctx, X + 3, Y + 2, 1, 2, '#3b3140'); rect(ctx, X + 4, Y + 4, 2, 1, '#c94f4f');
}

function poster(ctx: Ctx, tx: number, ty: number, seed: number) {
  const cols = ['#f28c8c', '#8cc7f2', '#f2d46b', '#9fe0a5', '#c9a6f0', '#f2b27a'];
  const X = tx * 16 + 3 + Math.floor(hash(seed, 1) * 3), Y = ty * 16 + 2;
  const c = cols[Math.floor(hash(seed, 2) * cols.length)];
  box(ctx, X, Y, 10, 13, c, shade(c, -0.4));
  rect(ctx, X + 2, Y + 2, 6, 4, shade(c, 0.5));
  rect(ctx, X + 2, Y + 8, 6, 1, shade(c, -0.3)); rect(ctx, X + 2, Y + 10, 4, 1, shade(c, -0.3));
}

function bulletin(ctx: Ctx, tx: number, ty: number, w: number) {
  const X = tx * 16 + 2, Y = ty * 16 + 3, W = w * 16 - 4, H = 20;
  box(ctx, X, Y, W, H, '#c99a5e', '#7d5431');
  const cols = ['#fbf6e6', '#fff1a8', '#bfe3ff', '#ffc9d9', '#d2f5c4'];
  for (let i = 0; i < w * 3; i++) {
    const nx = X + 2 + Math.floor(hash(tx, i, 3) * (W - 8)), ny = Y + 2 + Math.floor(hash(tx, i, 4) * (H - 9));
    rect(ctx, nx, ny, 6, 6, cols[i % cols.length]);
    rect(ctx, nx + 1, ny + 2, 4, 1, '#9b9bb0');
    px(ctx, nx + 3, ny, '#d94848');
  }
}

function lockers(ctx: Ctx, tx: number, ty: number, seed: number, mine = false) {
  // Two lockers per tile, spanning the face rows ty (upper) & ty+1 (lower)
  const cols = ['#4f78b8', '#4f78b8', '#5a86c6', '#c95a5a'];
  const col = seed % 7 === 3 ? cols[3] : cols[seed % 3];
  for (let i = 0; i < 2; i++) {
    const X = tx * 16 + i * 8, Y = ty * 16 + 3;
    box(ctx, X, Y, 8, 27, col, shade(col, -0.45));
    rect(ctx, X + 1, Y + 1, 6, 1, shade(col, 0.3));
    for (let v = 0; v < 3; v++) rect(ctx, X + 2, Y + 4 + v * 2, 4, 1, shade(col, -0.35));
    rect(ctx, X + 5, Y + 13, 1, 3, '#dfe3ea');
    rect(ctx, X + 2, Y + 20, 4, 3, shade(col, 0.15));
  }
  if (mine) { // gold star sticker on the player's locker
    const X = tx * 16 + 2, Y = ty * 16 + 9;
    px(ctx, X + 2, Y, '#ffd84d'); rect(ctx, X, Y + 1, 5, 1, '#ffd84d'); rect(ctx, X + 1, Y + 2, 3, 1, '#ffd84d'); px(ctx, X, Y + 3, '#ffd84d'); px(ctx, X + 4, Y + 3, '#ffd84d');
  }
}

function plaque(ctx: Ctx, tx: number, ty: number, text: string, color = '#3d6fb0') {
  const w = text.length * 4 + 5;
  const X = tx * 16 + 8 - Math.floor(w / 2), Y = ty * 16 + 3;
  box(ctx, X, Y, w, 9, color, shade(color, -0.45));
  pixelText(ctx, text, X + 3, Y + 2, '#ffffff');
}

function banner(ctx: Ctx, tx: number, ty: number, w: number, text: string, color: string) {
  const X = tx * 16 + 2, Y = ty * 16 + 4, W = w * 16 - 4;
  rect(ctx, X, Y, W, 11, color);
  rect(ctx, X, Y + 11, W, 1, shade(color, -0.4));
  for (let i = 0; i < W; i += 6) { px(ctx, X + i + 2, Y + 12, color); px(ctx, X + i + 3, Y + 13, color); }
  pixelTextCentered(ctx, text, X + W / 2, Y + 3, '#ffffff');
}

function periodicTable(ctx: Ctx, tx: number, ty: number, w: number) {
  const X = tx * 16 + 2, Y = ty * 16 + 3, W = w * 16 - 4;
  box(ctx, X, Y, W, 20, '#fbf8f0', '#7a7a8c');
  const cols = ['#f28c8c', '#8cc7f2', '#f2d46b', '#9fe0a5', '#c9a6f0'];
  for (let r = 0; r < 5; r++) for (let c = 0; c < Math.floor((W - 4) / 3); c++) {
    if (r < 2 && c > 1 && c < Math.floor((W - 4) / 3) - 3) continue;
    rect(ctx, X + 2 + c * 3, Y + 3 + r * 3, 2, 2, cols[(c + r * 2) % 5]);
  }
}

function mirror(ctx: Ctx, tx: number, ty: number) {
  const X = tx * 16 + 3, Y = ty * 16 + 3;
  box(ctx, X, Y, 10, 13, '#dff4fb', '#8c9aa6');
  rect(ctx, X + 2, Y + 2, 1, 4, '#ffffff'); rect(ctx, X + 3, Y + 2, 1, 2, '#ffffff');
}

function painting(ctx: Ctx, tx: number, ty: number, seed: number) {
  const X = tx * 16 + 2, Y = ty * 16 + 3;
  box(ctx, X, Y, 12, 11, '#fbf7ee', '#a0643a');
  const cols = ['#e86a6a', '#5aa6e0', '#f2c94c', '#7dcc72', '#b77fe0', '#f29b52'];
  for (let i = 0; i < 9; i++) rect(ctx, X + 2 + Math.floor(hash(seed, i) * 7), Y + 2 + Math.floor(hash(seed, i + 20) * 6), 2, 2, cols[Math.floor(hash(seed, i + 40) * 6)]);
}

function scoreboard(ctx: Ctx, tx: number, ty: number) {
  const X = tx * 16 + 2, Y = ty * 16 + 2;
  box(ctx, X, Y, 44, 22, '#23202c', '#4a4658');
  pixelText(ctx, 'HOME', X + 4, Y + 3, '#f2c94c'); pixelText(ctx, 'GUEST', X + 23, Y + 3, '#f2c94c');
  pixelText(ctx, '24', X + 7, Y + 12, '#ff6b5e'); pixelText(ctx, '21', X + 29, Y + 12, '#ff6b5e');
}

function menuBoard(ctx: Ctx, tx: number, ty: number) {
  const X = tx * 16 + 2, Y = ty * 16 + 2;
  box(ctx, X, Y, 44, 22, '#2d2a33', '#8a5a34');
  pixelText(ctx, 'MENU', X + 14, Y + 3, '#f2c94c');
  pixelText(ctx, 'PIZZA', X + 3, Y + 10, '#ffffff'); pixelText(ctx, 'TACO', X + 25, Y + 10, '#ffffff');
  pixelText(ctx, 'SALAD', X + 3, Y + 16, '#9fe0a5'); pixelText(ctx, 'MILK', X + 25, Y + 16, '#bfe3ff');
}

function hood(ctx: Ctx, tx: number, ty: number) {
  const X = tx * 16, Y = ty * 16 + 1;
  rect(ctx, X + 1, Y, 30, 10, '#a9afba'); rect(ctx, X + 1, Y + 10, 30, 2, '#7f8795');
  rect(ctx, X + 3, Y + 2, 26, 1, '#c8cdd6');
}

function musicPoster(ctx: Ctx, tx: number, ty: number) {
  const X = tx * 16 + 3, Y = ty * 16 + 3;
  box(ctx, X, Y, 26, 12, '#fbf7ee', '#6b5a8a');
  for (let i = 0; i < 4; i++) rect(ctx, X + 2, Y + 3 + i * 2, 22, 1, '#b8aacc');
  for (let i = 0; i < 4; i++) { const nx = X + 4 + i * 5, ny = Y + 3 + ((i * 3) % 6); rect(ctx, nx, ny + 2, 2, 2, '#3b3140'); rect(ctx, nx + 1, ny - 1, 1, 3, '#3b3140'); }
}

function entranceDoors(ctx: Ctx) {
  // Glass double doors propped open on the facade gap + welcome mat
  for (const x of [22, 25]) {
    const X = x * 16 + (x === 22 ? 0 : 10), Y = 41 * 16 + 18;
    box(ctx, X, Y, 6, 28, '#b9e3f5', '#5d6b7a');
  }
  rect(ctx, 22 * 16 + 8, 42 * 16 + 4, 48, 20, '#8d3a3a');
  rect(ctx, 22 * 16 + 10, 42 * 16 + 6, 44, 16, '#a84747');
  pixelTextCentered(ctx, 'WELCOME', 24 * 16, 42 * 16 + 12, '#f5e3c0');
}

function rug(ctx: Ctx, x1: number, y1: number, x2: number, y2: number, fill: string, border: string) {
  const X = x1 * 16 + 2, Y = y1 * 16 + 2, W = (x2 - x1 + 1) * 16 - 4, H = (y2 - y1 + 1) * 16 - 4;
  rect(ctx, X, Y, W, H, border);
  rect(ctx, X + 2, Y + 2, W - 4, H - 4, fill);
  rect(ctx, X + 4, Y + 4, W - 8, 1, border); rect(ctx, X + 4, Y + H - 5, W - 8, 1, border);
}

/** Auditorium classrooms: each raised tier is a shade lighter (closer to the camera) and its
 *  front lip gets a dark edge plus a bright nosing strip, so the rising rows read as steps. */
function tiers(ctx: Ctx) {
  for (const [roomId, rows] of Object.entries(TIERS)) {
    const r = ROOM_BY_ID[roomId];
    const X = r.x1 * TILE, W = (r.x2 - r.x1 + 1) * TILE;
    for (const [a, b, level] of rows) {
      const Y = a * TILE, H = (b - a + 1) * TILE;
      rect(ctx, X, Y, W, H, `rgba(255,248,230,${0.07 * level})`);
      rect(ctx, X, Y, W, 2, 'rgba(43,32,51,0.45)');
      rect(ctx, X, Y + 2, W, 1, 'rgba(255,236,170,0.75)');
      rect(ctx, X, Y + 3, W, 1, 'rgba(43,32,51,0.12)');
    }
  }
}

function courtLines(ctx: Ctx) {
  const X = 48 * 16 + 4, Y = 26 * 16 + 6, W = 12 * 16 - 8, H = 15 * 16 - 12;
  const L = '#fbf5ea';
  rect(ctx, X, Y, W, 2, L); rect(ctx, X, Y + H - 2, W, 2, L); rect(ctx, X, Y, 2, H, L); rect(ctx, X + W - 2, Y, 2, H, L);
  rect(ctx, X, Y + H / 2, W, 2, L);
  const cx = X + W / 2, cy = Y + H / 2 + 1;
  for (let a = 0; a < 64; a++) { const t = (a / 64) * Math.PI * 2; rect(ctx, Math.round(cx + Math.cos(t) * 18), Math.round(cy + Math.sin(t) * 18), 2, 2, L); }
  rect(ctx, cx - 20, Y, 40, 44, '#d9754c');
  rect(ctx, cx - 20, Y, 2, 44, L); rect(ctx, cx + 18, Y, 2, 44, L); rect(ctx, cx - 20, Y + 44, 40, 2, L);
  for (let a = 0; a <= 32; a++) { const t = (a / 32) * Math.PI; rect(ctx, Math.round(cx + Math.cos(t) * 20), Math.round(Y + 44 + Math.sin(t) * 14), 2, 2, L); }
}

function roadMarks(ctx: Ctx) {
  rect(ctx, 0, 50 * 16, MAP_W * 16, 2, '#8d8c99');
  for (let x = 0; x < MAP_W * 16; x += 24) rect(ctx, x, 53 * 16 - 1, 12, 2, '#f2d04b');
  rect(ctx, 0, 56 * 16 - 2, MAP_W * 16, 2, '#8d8c99');
  for (let i = 0; i < 6; i++) rect(ctx, 22 * 16 + 2 + i * 11, 50 * 16 + 4, 6, 88, '#e9e9ef');
  // Bus zone
  rect(ctx, 36 * 16, 50 * 16 + 3, 8 * 16, 2, '#f2d04b');
  pixelText(ctx, 'BUS ONLY', 38 * 16 + 4, 50 * 16 + 10, '#f2d04b');
}

/** Ambient-occlusion shading at the foot of walls to give rooms depth. */
function shadows(ctx: Ctx, grid: SchoolGrid) {
  ctx.fillStyle = 'rgba(40,20,50,0.18)';
  for (let y = 0; y < MAP_H; y++)
    for (let x = 0; x < MAP_W; x++) {
      if (!isFloor(grid.at(x, y))) continue;
      if (grid.at(x, y - 1) === 'wall') ctx.fillRect(x * 16, y * 16, 16, 4);
      if (grid.at(x - 1, y) === 'wall' && grid.roomAt(x, y)) ctx.fillRect(x * 16, y * 16, 3, 16);
    }
}

export const PLAYER_LOCKER_X = 7;

/** The big wall-mounted TV in the main hallway (tiles). The live broadcast picture is
 *  drawn over this mount by the scene; only the bezel/bracket is painted here. */
export const HALL_TV = { tx: 26, ty: 17, w: 4 };
export const HALL_TV_PX = { x: HALL_TV.tx * TILE + 4, y: HALL_TV.ty * TILE + 4, w: HALL_TV.w * TILE - 8, h: 31 };

function wallTv(ctx: Ctx) {
  const { x, y, w, h } = HALL_TV_PX;
  // wall bracket + soft glow on the wall
  rect(ctx, x + Math.floor(w / 2) - 4, y + h, 8, 2, '#3a3a48');
  ctx.fillStyle = 'rgba(120,160,255,0.16)'; ctx.fillRect(x - 3, y - 2, w + 6, h + 5);
  box(ctx, x - 2, y - 2, w + 4, h + 4, '#1d1c26', '#0c0b12');
  rect(ctx, x - 1, y - 1, w + 2, 1, '#34333f');
  rect(ctx, x, y, w, h, '#0a0c18');
  px(ctx, x + w - 3, y + h + 0, '#ff4d4d');
}

export function renderBackground(grid: SchoolGrid): HTMLCanvasElement {
  const [c, ctx] = makeCanvas(MAP_W * TILE, MAP_H * TILE);
  for (let y = 0; y < MAP_H; y++)
    for (let x = 0; x < MAP_W; x++) {
      const cell = grid.at(x, y);
      if (cell === 'wall') drawWall(ctx, grid, x, y);
      else drawFloor(ctx, cell, x, y);
    }
  roadMarks(ctx);
  // Rugs & floor art
  rug(ctx, 22, 27, 25, 40, '#b8464b', '#8a2f36');
  rug(ctx, 26, 9, 30, 15, '#c2a36b', '#9a7c47');
  rug(ctx, 33, 36, 40, 39, '#a58bc7', '#7c5ea6');
  courtLines(ctx);
  tiers(ctx);
  shadows(ctx, grid);

  // ---- Classroom A (face rows 4-5)
  window2(ctx, 5, 4, 2);
  chalkboard(ctx, 8, 4, 4, ['A+B=C', '2X+3=9', 'X=3']);
  clock(ctx, 13, 4);
  // ---- Library
  window2(ctx, 24, 4, 2);
  clock(ctx, 27, 4);
  plaque(ctx, 26, 5, 'SHH');
  // ---- Lab
  periodicTable(ctx, 34, 4, 3);
  chalkboard(ctx, 37, 4, 4, ['H2O', 'CO2', 'DNA'], '#2d5a6b');
  poster(ctx, 41, 4, 5);
  // ---- Kitchen
  hood(ctx, 47, 4);
  menuBoard(ctx, 54, 4);
  window2(ctx, 50, 4, 2);
  // ---- Hallway lockers (face rows 17-18)
  for (let x = 4; x <= 44; x++) {
    if ([10, 11, 24, 25, 38, 39, 17, 32].includes(x)) continue;
    if (x === 16) { bulletin(ctx, 16, 17, 1); continue; }
    if (x === 30 || x === 31) { if (x === 30) banner(ctx, 30, 17, 2, 'CHAMPS', '#3d6fb0'); continue; }
    if (x >= HALL_TV.tx && x < HALL_TV.tx + HALL_TV.w) { if (x === HALL_TV.tx) wallTv(ctx); continue; }
    if (x === 20 || x === 21) { if (x === 20) bulletin(ctx, 20, 17, 2); continue; }
    lockers(ctx, x, 17, x, x === PLAYER_LOCKER_X);
  }
  plaque(ctx, 9, 17, 'MATH', '#c07a2c');
  plaque(ctx, 23, 17, 'BOOKS', '#3f7d6e');
  plaque(ctx, 37, 17, 'LAB', '#2d5a8b');
  // ---- Classroom B (face rows 24-25)
  bulletin(ctx, 6, 24, 2);
  clock(ctx, 8, 24);
  chalkboard(ctx, 11, 24, 4, ['POEMS', 'NOUN', 'VERB']);
  // ---- Lobby
  banner(ctx, 17, 24, 4, 'WELCOME!', '#c0504d');
  banner(ctx, 27, 24, 4, 'GO OWLS!', '#3d6fb0');
  // ---- Art
  for (const x of [34, 35, 36, 41, 42]) painting(ctx, x, 24, x * 3);
  plaque(ctx, 37, 25, 'ART', '#c0508a');
  // ---- Music (face rows 33-34)
  musicPoster(ctx, 33, 33);
  poster(ctx, 36, 33, 11);
  plaque(ctx, 37, 34, 'MUSIC', '#6b4fa0');
  // ---- Gym (face rows 24-25)
  banner(ctx, 46, 24, 3, 'OWLS', '#c0504d');
  scoreboard(ctx, 55, 24);
  // ---- Restroom mirrors (face rows 34-35)
  for (const x of [11, 12, 13, 14]) mirror(ctx, x, 34);
  plaque(ctx, 6, 34, 'WC', '#2e8a86');
  // ---- Exterior facade windows (rows 42-43)
  for (const x of [5, 9, 13, 17, 29, 33, 37, 41, 45, 49, 53, 57]) window2(ctx, x, 42, 2);
  entranceDoors(ctx);
  return c;
}
