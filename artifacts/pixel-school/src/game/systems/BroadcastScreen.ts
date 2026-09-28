// Renders the Morning Broadcast as a real TV picture: a lit news studio with a city
// window, two anchors behind a desk, a LIVE bug, an over-the-shoulder graphic, a
// lower third and a scrolling headline ticker — plus subtle screen glass effects.
// One offscreen canvas is the "signal"; every TV in the game (hallway wall TV,
// pocket picture-in-picture, 3D classroom TV) shows a copy of it.
import { buildCharacterSheet, FRAME_H, FRAME_W, Look } from '../art/characters';
import { ANCHORS, SCHOOL_NAME } from '../data/broadcast';

export const SCREEN_W = 480;
export const SCREEN_H = 270;

const ACCENT = '#e03131';
const NAVY = '#101a36';
const FONT = '"Nunito", ui-rounded, system-ui, sans-serif';

export interface ScreenState {
  /** 'off' = static/standby card, 'live' = show in progress. */
  mode: 'standby' | 'live';
  icon: string;
  title: string;
  body: string;
  /** What the speaking anchor is saying right now (shown in the lower third). */
  caption: string;
  speaker: 0 | 1 | null;
  clock: string;
  ticker: string[];
}

type Ctx = CanvasRenderingContext2D;

function roundRect(c: Ctx, x: number, y: number, w: number, h: number, r: number) {
  c.beginPath();
  c.moveTo(x + r, y);
  c.arcTo(x + w, y, x + w, y + h, r);
  c.arcTo(x + w, y + h, x, y + h, r);
  c.arcTo(x, y + h, x, y, r);
  c.arcTo(x, y, x + w, y, r);
  c.closePath();
}

function wrap(c: Ctx, text: string, maxW: number, maxLines: number): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let cur = '';
  for (const w of words) {
    const t = cur ? cur + ' ' + w : w;
    if (c.measureText(t).width > maxW && cur) { lines.push(cur); cur = w; } else cur = t;
    if (lines.length === maxLines) break;
  }
  if (lines.length < maxLines && cur) lines.push(cur);
  if (lines.length === maxLines && (cur || words.length)) {
    // Ellipsize the last line if we ran out of room.
    const joined = lines.join(' ');
    if (joined.length < text.length) {
      let last = lines[maxLines - 1];
      while (last.length && c.measureText(last + '…').width > maxW) last = last.slice(0, -1);
      lines[maxLines - 1] = last + '…';
    }
  }
  return lines;
}

/** Deterministic pseudo-random for the skyline so it is stable frame to frame. */
function rnd(seed: number) { const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453; return x - Math.floor(x); }

export class BroadcastScreen {
  readonly canvas: HTMLCanvasElement;
  /** Low-res copy (two-step downscale) for the tiny in-world TV texture. */
  readonly small: HTMLCanvasElement;
  private ctx: Ctx;
  private smallCtx: Ctx;
  private mid: HTMLCanvasElement;
  private backdrop: HTMLCanvasElement;
  private desk: HTMLCanvasElement;
  private busts: HTMLCanvasElement[];
  private tickerX = SCREEN_W;
  private lastT = 0;
  state: ScreenState = {
    mode: 'standby', icon: '📺', title: 'Morning Broadcast', body: 'Starting soon',
    caption: '', speaker: null, clock: '', ticker: [],
  };

  constructor(anchorLooks: Look[]) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = SCREEN_W; this.canvas.height = SCREEN_H;
    this.ctx = this.canvas.getContext('2d')!;
    this.mid = document.createElement('canvas');
    this.mid.width = SCREEN_W / 2; this.mid.height = SCREEN_H / 2;
    this.small = document.createElement('canvas');
    this.small.width = SCREEN_W / 4; this.small.height = SCREEN_H / 4;
    this.smallCtx = this.small.getContext('2d')!;
    this.backdrop = this.buildBackdrop();
    this.desk = this.buildDesk();
    this.busts = anchorLooks.map((l) => this.buildBust(l));
  }

  // ---------------- static layers ----------------
  private buildBackdrop(): HTMLCanvasElement {
    const c = document.createElement('canvas');
    c.width = SCREEN_W; c.height = SCREEN_H;
    const g = c.getContext('2d')!;
    const W = SCREEN_W, H = SCREEN_H;

    // Studio wall
    const wall = g.createLinearGradient(0, 0, 0, H);
    wall.addColorStop(0, '#0b1124'); wall.addColorStop(0.55, '#16224a'); wall.addColorStop(1, '#0a0f22');
    g.fillStyle = wall; g.fillRect(0, 0, W, H);

    // Big city window behind the desk: sunrise sky, skyline, mullions
    const wx = W * 0.06, wy = H * 0.07, ww = W * 0.88, wh = H * 0.56;
    const sky = g.createLinearGradient(0, wy, 0, wy + wh);
    sky.addColorStop(0, '#22397a'); sky.addColorStop(0.55, '#5a7fcf'); sky.addColorStop(0.85, '#f0b070'); sky.addColorStop(1, '#f7d6a0');
    roundRect(g, wx, wy, ww, wh, 6); g.fillStyle = sky; g.fill();
    // sun glow
    const sun = g.createRadialGradient(wx + ww * 0.72, wy + wh * 0.82, 4, wx + ww * 0.72, wy + wh * 0.82, wh * 0.6);
    sun.addColorStop(0, 'rgba(255,240,200,0.9)'); sun.addColorStop(0.25, 'rgba(255,200,130,0.45)'); sun.addColorStop(1, 'rgba(255,200,130,0)');
    g.save(); roundRect(g, wx, wy, ww, wh, 6); g.clip();
    g.fillStyle = sun; g.fillRect(wx, wy, ww, wh);
    // distant skyline (two layers)
    for (let layer = 0; layer < 2; layer++) {
      const base = wy + wh, col = layer === 0 ? 'rgba(40,52,100,0.75)' : '#141c3a';
      let x = wx - 10;
      let i = 0;
      while (x < wx + ww + 10) {
        const bw = 10 + rnd(i * 3 + layer * 97) * 26;
        const bh = (layer === 0 ? 0.25 : 0.42) * wh * (0.35 + rnd(i * 7 + layer * 31));
        g.fillStyle = col; g.fillRect(x, base - bh, bw, bh);
        if (layer === 1) {
          // lit windows
          for (let yy = base - bh + 4; yy < base - 4; yy += 5) for (let xx = x + 2; xx < x + bw - 3; xx += 4) {
            if (rnd(xx * 13 + yy * 7) > 0.55) { g.fillStyle = rnd(xx + yy) > 0.5 ? '#ffd98a' : '#ffeec8'; g.fillRect(xx, yy, 2, 2); }
          }
          // antenna on tall ones
          if (bh > wh * 0.3 && rnd(i) > 0.6) g.fillRect(x + bw / 2, base - bh - 8, 1, 8);
        }
        x += bw + (layer === 0 ? 2 : 3);
        i++;
      }
    }
    g.restore();
    // window frame + mullions
    g.strokeStyle = '#2b3660'; g.lineWidth = 5; roundRect(g, wx, wy, ww, wh, 6); g.stroke();
    g.strokeStyle = 'rgba(20,28,60,0.8)'; g.lineWidth = 3;
    for (let k = 1; k < 4; k++) { g.beginPath(); g.moveTo(wx + (ww * k) / 4, wy); g.lineTo(wx + (ww * k) / 4, wy + wh); g.stroke(); }
    g.beginPath(); g.moveTo(wx, wy + wh * 0.5); g.lineTo(wx + ww, wy + wh * 0.5); g.stroke();
    // glass sheen
    const sheen = g.createLinearGradient(wx, wy, wx + ww * 0.5, wy + wh);
    sheen.addColorStop(0, 'rgba(255,255,255,0.14)'); sheen.addColorStop(0.5, 'rgba(255,255,255,0)');
    g.fillStyle = sheen; roundRect(g, wx, wy, ww, wh, 6); g.fill();

    // Station monogram disc between the anchors (backlit)
    const dx = W * 0.445, dy = H * 0.31, dr = H * 0.115;
    const halo = g.createRadialGradient(dx, dy, dr * 0.6, dx, dy, dr * 2.2);
    halo.addColorStop(0, 'rgba(224,49,49,0.35)'); halo.addColorStop(1, 'rgba(224,49,49,0)');
    g.fillStyle = halo; g.fillRect(dx - dr * 2.2, dy - dr * 2.2, dr * 4.4, dr * 4.4);
    const disc = g.createRadialGradient(dx - dr * 0.3, dy - dr * 0.3, 2, dx, dy, dr);
    disc.addColorStop(0, '#ff6b6b'); disc.addColorStop(1, '#8f1d2c');
    g.beginPath(); g.arc(dx, dy, dr, 0, Math.PI * 2); g.fillStyle = disc; g.fill();
    g.lineWidth = 3; g.strokeStyle = '#ffd9d9'; g.stroke();
    g.fillStyle = '#fff'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.font = `900 ${Math.round(dr * 0.85)}px ${FONT}`; g.fillText('1', dx, dy + 1);
    g.font = `800 ${Math.round(dr * 0.28)}px ${FONT}`; g.fillText('NEWS', dx, dy + dr * 0.62);

    // Ceiling light wash + floor
    const spot = g.createRadialGradient(W * 0.5, -H * 0.2, 10, W * 0.5, H * 0.3, W * 0.7);
    spot.addColorStop(0, 'rgba(255,240,220,0.18)'); spot.addColorStop(1, 'rgba(255,240,220,0)');
    g.fillStyle = spot; g.fillRect(0, 0, W, H);

    return c;
  }

  /** Foreground desk on a transparent layer so the anchors sit behind it. */
  private buildDesk(): HTMLCanvasElement {
    const c = document.createElement('canvas');
    c.width = SCREEN_W; c.height = SCREEN_H;
    const g = c.getContext('2d')!;
    const W = SCREEN_W, H = SCREEN_H;
    const top = H * 0.64, bot = H;
    g.beginPath();
    g.moveTo(-W * 0.05, bot);
    g.lineTo(-W * 0.02, top + 14);
    g.quadraticCurveTo(W * 0.5, top - 26, W * 1.02, top + 14);
    g.lineTo(W * 1.05, bot);
    g.closePath();
    const deskG = g.createLinearGradient(0, top - 10, 0, bot);
    deskG.addColorStop(0, '#3a4f88'); deskG.addColorStop(0.08, '#26365f'); deskG.addColorStop(0.5, '#182446'); deskG.addColorStop(1, '#0c1330');
    g.fillStyle = deskG; g.fill();
    // top edge highlight
    g.beginPath(); g.moveTo(-W * 0.02, top + 14); g.quadraticCurveTo(W * 0.5, top - 26, W * 1.02, top + 14);
    g.strokeStyle = 'rgba(180,200,255,0.55)'; g.lineWidth = 2; g.stroke();
    // front light strip
    g.beginPath(); g.moveTo(0, top + 26); g.quadraticCurveTo(W * 0.5, top - 12, W, top + 26);
    g.strokeStyle = 'rgba(224,49,49,0.55)'; g.lineWidth = 2; g.stroke();
    // desk plaque
    const pw = W * 0.28, ph = H * 0.07, px = W * 0.5 - pw / 2, py = top + 16;
    roundRect(g, px, py, pw, ph, 5); g.fillStyle = '#0d1430'; g.fill(); g.strokeStyle = '#3f5aa0'; g.lineWidth = 1.5; g.stroke();
    g.fillStyle = '#e8ecff'; g.font = `800 ${Math.round(ph * 0.55)}px ${FONT}`; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText('MORNING NEWS', W * 0.5, py + ph / 2 + 1);
    return c;
  }

  /** Front-facing bust of an anchor, cut off where the desk hides them. Scale 2 for a soft, hi-res look. */
  private buildBust(look: Look): HTMLCanvasElement {
    const sheet = buildCharacterSheet(look, 2);
    const fw = FRAME_W * 2, fh = FRAME_H * 2;
    const c = document.createElement('canvas');
    c.width = fw; c.height = Math.round(fh * 0.72);
    c.getContext('2d')!.drawImage(sheet, 0, 0, fw, c.height, 0, 0, fw, c.height); // 'stand' pose, facing 'down'
    return c;
  }

  // ---------------- per frame ----------------
  render(nowMs: number) {
    const dt = this.lastT ? Math.min(0.1, (nowMs - this.lastT) / 1000) : 0;
    this.lastT = nowMs;
    const c = this.ctx, W = SCREEN_W, H = SCREEN_H, s = this.state, t = nowMs / 1000;
    c.imageSmoothingEnabled = true;
    c.drawImage(this.backdrop, 0, 0);

    // Anchors (the desk layer is drawn over them afterwards)
    c.save();
    // scale so heads sit in the upper-middle third of the picture
    const scale = (H * 0.5) / this.busts[0].height;
    [0.25, 0.64].forEach((cx, i) => {
      const b = this.busts[i];
      const speaking = s.mode === 'live' && s.speaker === i;
      const bob = speaking ? Math.sin(t * 7 + i) * 2 : Math.sin(t * 1.4 + i * 2) * 0.8;
      const lean = speaking ? Math.sin(t * 2.3) * 0.02 : 0;
      const bw = b.width * scale, bh = b.height * scale;
      const x = W * cx - bw / 2, y = H * 0.33 - bh * 0.28 + bob;
      // soft shadow behind
      c.fillStyle = 'rgba(0,0,0,0.25)';
      c.beginPath(); c.ellipse(W * cx, H * 0.70, bw * 0.55, 8, 0, 0, Math.PI * 2); c.fill();
      c.save();
      c.translate(W * cx, H * 0.70);
      c.rotate(lean);
      c.translate(-W * cx, -H * 0.70);
      c.drawImage(b, x, y, bw, bh);
      c.restore();
      // key-light rim on the speaking anchor
      if (speaking) {
        c.globalCompositeOperation = 'lighter';
        const rim = c.createRadialGradient(W * cx, y + bh * 0.25, 6, W * cx, y + bh * 0.25, bw * 0.75);
        rim.addColorStop(0, 'rgba(255,230,200,0.14)'); rim.addColorStop(1, 'rgba(255,230,200,0)');
        c.fillStyle = rim; c.fillRect(x - bw * 0.4, y - 20, bw * 1.8, bh);
        c.globalCompositeOperation = 'source-over';
      }
    });
    c.restore();
    c.drawImage(this.desk, 0, 0);

    // Standby: dim the studio and show a card
    if (s.mode === 'standby') {
      c.fillStyle = 'rgba(6,8,20,0.62)'; c.fillRect(0, 0, W, H);
      c.textAlign = 'center'; c.textBaseline = 'middle';
      c.fillStyle = '#fff'; c.font = `900 ${Math.round(H * 0.11)}px ${FONT}`;
      c.fillText(SCHOOL_NAME.toUpperCase(), W / 2, H * 0.36);
      c.fillStyle = '#ffd166'; c.font = `800 ${Math.round(H * 0.06)}px ${FONT}`;
      c.fillText('MORNING BROADCAST', W / 2, H * 0.48);
      c.fillStyle = '#cfd6f5'; c.font = `600 ${Math.round(H * 0.05)}px ${FONT}`;
      c.fillText(s.body || 'Starting soon — stay tuned', W / 2, H * 0.58);
      // colour bars strip at the bottom, like a test card
      const bars = ['#c0c0c0', '#c0c000', '#00c0c0', '#00c000', '#c000c0', '#c00000', '#0000c0'];
      bars.forEach((col, i) => { c.fillStyle = col; c.fillRect((W / bars.length) * i, H * 0.9, W / bars.length + 1, H * 0.1); });
      this.drawClockBug(c, s);
      this.finishGlass(c);
      this.downscale();
      return;
    }

    // LIVE bug (blinking dot)
    roundRect(c, 14, 12, 58, 20, 4); c.fillStyle = ACCENT; c.fill();
    c.fillStyle = '#fff'; c.textAlign = 'left'; c.textBaseline = 'middle';
    c.font = `900 12px ${FONT}`; c.fillText('LIVE', 33, 22.5);
    c.globalAlpha = 0.45 + 0.55 * (Math.sin(t * 4) > 0 ? 1 : 0.2);
    c.beginPath(); c.arc(24, 22, 3.5, 0, Math.PI * 2); c.fill();
    c.globalAlpha = 1;
    this.drawClockBug(c, s);

    // Over-the-shoulder graphic (top right)
    const ox = W * 0.755, oy = H * 0.15, ow = W * 0.215, oh = H * 0.34;
    c.save();
    c.shadowColor = 'rgba(0,0,0,0.45)'; c.shadowBlur = 10; c.shadowOffsetY = 3;
    roundRect(c, ox, oy, ow, oh, 6);
    const og = c.createLinearGradient(ox, oy, ox, oy + oh);
    og.addColorStop(0, '#2a4380'); og.addColorStop(1, '#132247');
    c.fillStyle = og; c.fill();
    c.restore();
    c.strokeStyle = '#6f8fe0'; c.lineWidth = 1.2; roundRect(c, ox, oy, ow, oh, 6); c.stroke();
    c.textAlign = 'center'; c.textBaseline = 'middle';
    c.font = `${Math.round(oh * 0.38)}px ${FONT}`; c.fillStyle = '#fff';
    c.fillText(s.icon, ox + ow / 2, oy + oh * 0.32);
    c.font = `800 10.5px ${FONT}`;
    const tl = wrap(c, s.title, ow - 12, 2);
    tl.forEach((l, i) => c.fillText(l, ox + ow / 2, oy + oh * 0.66 + i * 12));

    // Lower third
    const lx = W * 0.04, ly = H * 0.765, lw = W * 0.92, lh = H * 0.15;
    // name tag (skewed) above the bar
    const who = s.speaker == null ? SCHOOL_NAME : ANCHORS[s.speaker].name.toUpperCase();
    const role = s.speaker == null ? 'MORNING NEWS' : 'ANCHOR';
    c.font = `900 12px ${FONT}`;
    const nw = c.measureText(who).width + 26;
    c.save();
    c.transform(1, 0, -0.25, 1, 0, 0);
    const skewOff = 0.25 * (ly - 3);
    c.fillStyle = ACCENT; c.fillRect(lx + skewOff, ly - 20, nw, 20);
    c.fillStyle = '#1b1b2a'; c.fillRect(lx + skewOff + nw, ly - 20, c.measureText(role).width * 0.8 + 22, 20);
    c.restore();
    c.fillStyle = '#fff'; c.textAlign = 'left'; c.textBaseline = 'middle';
    c.fillText(who, lx + 10, ly - 10);
    c.font = `700 9px ${FONT}`; c.fillStyle = '#e8e8f4';
    c.fillText(role, lx + nw + 6, ly - 10);
    // main bar
    c.save();
    c.shadowColor = 'rgba(0,0,0,0.4)'; c.shadowBlur = 8; c.shadowOffsetY = 2;
    roundRect(c, lx, ly, lw, lh, 3); c.fillStyle = '#f7f8fd'; c.fill();
    c.restore();
    c.fillStyle = ACCENT; c.fillRect(lx, ly, 5, lh);
    c.fillStyle = '#6a6f8a'; c.font = `800 8.5px ${FONT}`; c.textBaseline = 'top';
    c.fillText(s.title.toUpperCase(), lx + 14, ly + 4);
    c.fillStyle = NAVY; c.font = `700 12px ${FONT}`;
    const cap = wrap(c, s.caption || s.body, lw - 24, 2);
    cap.forEach((l, i) => c.fillText(l, lx + 14, ly + 15 + i * 13));

    // Ticker
    const ty = H * 0.925, th = H - ty;
    c.fillStyle = '#0a0d1c'; c.fillRect(0, ty, W, th);
    const items = s.ticker.length ? s.ticker : [`${SCHOOL_NAME} — Morning Broadcast`];
    const text = items.join('     •     ') + '     •     ';
    c.font = `700 11px ${FONT}`; c.textBaseline = 'middle';
    const tw = Math.max(1, c.measureText(text).width);
    this.tickerX -= dt * 42;
    if (this.tickerX < -tw) this.tickerX += tw;
    c.save(); c.beginPath(); c.rect(W * 0.19, ty, W * 0.81, th); c.clip();
    c.fillStyle = '#e9ecf8';
    for (let x = this.tickerX; x < W; x += tw) c.fillText(text, W * 0.19 + x, ty + th / 2 + 0.5);
    c.restore();
    c.fillStyle = ACCENT; c.fillRect(0, ty, W * 0.19, th);
    c.fillStyle = '#fff'; c.font = `900 10px ${FONT}`; c.textAlign = 'center';
    c.fillText('HEADLINES', W * 0.095, ty + th / 2 + 0.5);

    this.finishGlass(c);
    this.downscale();
  }

  private drawClockBug(c: Ctx, s: ScreenState) {
    const W = SCREEN_W;
    c.textBaseline = 'middle';
    c.font = `900 12px ${FONT}`; c.textAlign = 'right';
    const label = 'MGN 1';
    const lw = c.measureText(label).width;
    const clockW = s.clock ? c.measureText(s.clock).width + 14 : 0;
    const x = W - 14, y = 12;
    roundRect(c, x - lw - 16 - clockW, y, lw + 16 + clockW, 20, 4);
    c.fillStyle = 'rgba(8,10,24,0.72)'; c.fill();
    c.fillStyle = '#fff'; c.fillText(label, x - 8 - clockW, y + 10.5);
    c.fillStyle = ACCENT; c.fillRect(x - lw - 14 - clockW, y + 5, 3, 10);
    if (s.clock) { c.fillStyle = '#ffd166'; c.font = `800 11px ${FONT}`; c.fillText(s.clock, x - 6, y + 10.5); }
    c.textAlign = 'left';
  }

  /** Glass: scanlines, vignette and a diagonal glare, so it reads as a screen rather than a UI panel. */
  private finishGlass(c: Ctx) {
    const W = SCREEN_W, H = SCREEN_H;
    c.fillStyle = 'rgba(0,0,0,0.07)';
    for (let y = 0; y < H; y += 3) c.fillRect(0, y, W, 1);
    const v = c.createRadialGradient(W / 2, H / 2, H * 0.45, W / 2, H / 2, H * 0.95);
    v.addColorStop(0, 'rgba(0,0,0,0)'); v.addColorStop(1, 'rgba(0,0,0,0.38)');
    c.fillStyle = v; c.fillRect(0, 0, W, H);
    const glare = c.createLinearGradient(0, 0, W * 0.6, H);
    glare.addColorStop(0, 'rgba(255,255,255,0.07)'); glare.addColorStop(0.35, 'rgba(255,255,255,0)');
    c.fillStyle = glare; c.fillRect(0, 0, W, H);
  }

  private downscale() {
    const m = this.mid.getContext('2d')!;
    m.imageSmoothingEnabled = true; m.imageSmoothingQuality = 'high';
    m.drawImage(this.canvas, 0, 0, this.mid.width, this.mid.height);
    this.smallCtx.imageSmoothingEnabled = true; this.smallCtx.imageSmoothingQuality = 'high';
    this.smallCtx.drawImage(this.mid, 0, 0, this.small.width, this.small.height);
  }
}
