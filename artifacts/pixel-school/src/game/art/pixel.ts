// Tiny pixel-art toolkit: canvases, rects, outlines, a 3x5 bitmap font and a seeded RNG.
export type Ctx = CanvasRenderingContext2D;

export function makeCanvas(w: number, h: number): [HTMLCanvasElement, Ctx] {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d', { willReadFrequently: true })!;
  ctx.imageSmoothingEnabled = false;
  return [c, ctx];
}

export function rect(ctx: Ctx, x: number, y: number, w: number, h: number, color: string) {
  ctx.fillStyle = color;
  ctx.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h));
}

export function px(ctx: Ctx, x: number, y: number, color: string) {
  ctx.fillStyle = color;
  ctx.fillRect(Math.round(x), Math.round(y), 1, 1);
}

/** Rectangle with a 1px darker border — the workhorse of furniture drawing. */
export function box(ctx: Ctx, x: number, y: number, w: number, h: number, fill: string, border: string) {
  rect(ctx, x, y, w, h, border);
  rect(ctx, x + 1, y + 1, w - 2, h - 2, fill);
}

/** Adds a dark 1px outline around every opaque shape on a canvas region. */
export function outline(canvas: HTMLCanvasElement, color = '#2b2033', x0 = 0, y0 = 0, w?: number, h?: number) {
  const W = w ?? canvas.width;
  const H = h ?? canvas.height;
  const ctx = canvas.getContext('2d')!;
  const img = ctx.getImageData(x0, y0, W, H);
  const d = img.data;
  const solid = (x: number, y: number) => x >= 0 && y >= 0 && x < W && y < H && d[(y * W + x) * 4 + 3] > 100;
  const marks: number[] = [];
  for (let y = 0; y < H; y++)
    for (let x = 0; x < W; x++) {
      if (solid(x, y)) continue;
      if (solid(x - 1, y) || solid(x + 1, y) || solid(x, y - 1) || solid(x, y + 1)) marks.push(x, y);
    }
  const [r, g, b] = hexToRgb(color);
  for (let i = 0; i < marks.length; i += 2) {
    const o = (marks[i + 1] * W + marks[i]) * 4;
    d[o] = r; d[o + 1] = g; d[o + 2] = b; d[o + 3] = 255;
  }
  ctx.putImageData(img, x0, y0);
}

export function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map((c) => c + c).join('') : h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export function shade(hex: string, amt: number): string {
  const [r, g, b] = hexToRgb(hex);
  const f = (v: number) => Math.max(0, Math.min(255, Math.round(amt < 0 ? v * (1 + amt) : v + (255 - v) * amt)));
  return '#' + [f(r), f(g), f(b)].map((v) => v.toString(16).padStart(2, '0')).join('');
}

export function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function hash(x: number, y: number, s = 0) {
  let h = (x * 374761393 + y * 668265263 + s * 982451653) >>> 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177) >>> 0;
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}

// 3x5 bitmap font for in-world signs.
const GLYPHS: Record<string, string> = {
  A: '010101111101101', B: '110101110101110', C: '011100100100011', D: '110101101101110',
  E: '111100110100111', F: '111100110100100', G: '011100101101011', H: '101101111101101',
  I: '111010010010111', J: '001001001101010', K: '101101110101101', L: '100100100100111',
  M: '101111111101101', N: '110101101101101', O: '010101101101010', P: '110101110100100',
  Q: '010101101110011', R: '110101110101101', S: '011100010001110', T: '111010010010010',
  U: '101101101101111', V: '101101101101010', W: '101101111111101', X: '101101010101101',
  Y: '101101010010010', Z: '111001010100111', '0': '111101101101111', '1': '010110010010111',
  '2': '110001010100111', '3': '110001010001110', '4': '101101111001001', '5': '111100110001110',
  '6': '011100111101111', '7': '111001010010010', '8': '111101111101111', '9': '111101111001110',
  '!': '010010010000010', '.': '000000000000010', '-': '000000111000000', '+': '000010111010000',
  '=': '000111000111000', '?': '110001010000010', ' ': '000000000000000', ':': '000010000010000',
};

export function textWidth(s: string) {
  return s.length * 4 - 1;
}

export function pixelText(ctx: Ctx, s: string, x: number, y: number, color: string) {
  ctx.fillStyle = color;
  let cx = Math.round(x);
  for (const ch of s.toUpperCase()) {
    const g = GLYPHS[ch] ?? GLYPHS[' '];
    for (let i = 0; i < 15; i++) if (g[i] === '1') ctx.fillRect(cx + (i % 3), Math.round(y) + Math.floor(i / 3), 1, 1);
    cx += 4;
  }
}

export function pixelTextCentered(ctx: Ctx, s: string, cx: number, y: number, color: string) {
  pixelText(ctx, s, Math.round(cx - textWidth(s) / 2), y, color);
}
