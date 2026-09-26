// Procedural chibi characters: 16x24 frames, 4 directions x (stand, walk1, walk2, sit).
import { Ctx, makeCanvas, outline, px, rect, rng, shade } from './pixel';

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
  hat?: 'chef' | 'cap';
}

export const SKIN_TONES = ['#f8dcc4', '#f1c29e', '#dda47c', '#b97d55', '#8f5b3b', '#5f3c29'];
export const HAIR_COLORS = ['#2b2024', '#4a2f22', '#7a4a2a', '#c7893f', '#ecc66e', '#b8452e', '#6a57a8', '#d9d9e2'];
export const SHIRT_COLORS = ['#e2544a', '#f29b3b', '#f2c94c', '#6cbf6a', '#3fa7a0', '#4f86d9', '#8b6fd1', '#e874a8', '#f4f0e6', '#3b3f58'];
export const PANTS_COLORS = ['#3b4a78', '#2d2a33', '#6b5a4a', '#5b7fb5', '#8a4a5a', '#4a6b4a'];
export const HAIR_STYLES: HairStyle[] = ['short', 'long', 'ponytail', 'bun', 'afro', 'buzz', 'curly', 'pigtails', 'bob'];
export const OUTFITS: Outfit[] = ['tee', 'hoodie', 'dress', 'blazer'];

export const DIRS = ['down', 'left', 'right', 'up'] as const;
export type Pose = 'stand' | 'w1' | 'w2' | 'sit';
const POSES: Pose[] = ['stand', 'w1', 'w2', 'sit'];

const EYE = '#2b2033';

function hairFront(c: Ctx, L: Look, o: number) {
  const H = L.hair, hd = shade(L.hair, -0.25), hl = shade(L.hair, 0.3);
  const s = L.hairStyle;
  if (s === 'afro') {
    rect(c, 2, 0 + o, 12, 5, H); rect(c, 1, 2 + o, 14, 6, H); rect(c, 3, -1 + o, 10, 1, H);
    rect(c, 1, 8 + o, 2, 2, H); rect(c, 13, 8 + o, 2, 2, H);
    px(c, 5, 1 + o, hl); px(c, 6, 1 + o, hl); px(c, 4, 2 + o, hl);
    return;
  }
  if (s === 'buzz') {
    rect(c, 4, 1 + o, 8, 2, H); rect(c, 3, 2 + o, 10, 2, hd);
    return;
  }
  rect(c, 4, 1 + o, 8, 1, H); rect(c, 3, 2 + o, 10, 3, H);
  // bangs
  rect(c, 3, 5 + o, 3, 1, H); rect(c, 9, 5 + o, 4, 1, H); px(c, 6, 5 + o, hd);
  rect(c, 3, 6 + o, 1, 3, H); rect(c, 12, 6 + o, 1, 3, H);
  px(c, 5, 2 + o, hl); px(c, 6, 2 + o, hl); px(c, 5, 3 + o, hl);
  if (s === 'curly') { for (const x of [3, 5, 8, 11]) px(c, x, 0 + o, H); px(c, 2, 4 + o, H); px(c, 13, 4 + o, H); px(c, 2, 7 + o, H); px(c, 13, 7 + o, H); }
  if (s === 'bun') { rect(c, 6, -1 + o, 4, 2, H); rect(c, 5, 0 + o, 6, 1, H); px(c, 7, -1 + o, hl); }
  if (s === 'pigtails') { rect(c, 1, 5 + o, 2, 5, H); rect(c, 13, 5 + o, 2, 5, H); px(c, 2, 4 + o, '#e2544a'); px(c, 13, 4 + o, '#e2544a'); }
  if (s === 'bob') { rect(c, 2, 4 + o, 2, 6, H); rect(c, 12, 4 + o, 2, 6, H); }
  if (L.hat === 'cap') { rect(c, 3, 0 + o, 10, 3, L.shirt); rect(c, 3, 3 + o, 11, 1, shade(L.shirt, -0.3)); }
}

function hairBackLong(c: Ctx, L: Look, o: number) {
  if (L.hairStyle === 'long') rect(c, 2, 4 + o, 12, 10, shade(L.hair, -0.1));
}

function hairBackView(c: Ctx, L: Look, o: number) {
  const H = L.hair, hd = shade(L.hair, -0.25), hl = shade(L.hair, 0.3);
  const s = L.hairStyle;
  if (s === 'afro') { rect(c, 2, 0 + o, 12, 10, H); rect(c, 1, 2 + o, 14, 7, H); rect(c, 3, -1 + o, 10, 1, H); px(c, 5, 1 + o, hl); return; }
  if (s === 'buzz') { rect(c, 4, 1 + o, 8, 5, hd); rect(c, 3, 3 + o, 10, 3, hd); return; }
  rect(c, 4, 1 + o, 8, 1, H); rect(c, 3, 2 + o, 10, 7, H); rect(c, 4, 9 + o, 8, 1, hd);
  px(c, 6, 2 + o, hl); px(c, 7, 2 + o, hl);
  if (s === 'long') rect(c, 3, 9 + o, 10, 5, H);
  if (s === 'bob') rect(c, 2, 4 + o, 12, 6, H);
  if (s === 'ponytail') { rect(c, 7, 9 + o, 2, 6, H); px(c, 7, 9 + o, '#e2544a'); px(c, 8, 9 + o, '#e2544a'); }
  if (s === 'bun') { rect(c, 6, -1 + o, 4, 3, H); px(c, 7, -1 + o, hl); }
  if (s === 'pigtails') { rect(c, 1, 5 + o, 2, 5, H); rect(c, 13, 5 + o, 2, 5, H); }
  if (s === 'curly') { for (const x of [3, 5, 8, 11]) px(c, x, 0 + o, H); px(c, 2, 5 + o, H); px(c, 13, 5 + o, H); }
  if (L.hat === 'cap') rect(c, 3, 0 + o, 10, 3, L.shirt);
}

function hairSide(c: Ctx, L: Look, o: number) {
  // Facing left: face on the left, back of head on the right
  const H = L.hair, hl = shade(L.hair, 0.3);
  const s = L.hairStyle;
  if (s === 'afro') { rect(c, 3, 0 + o, 11, 5, H); rect(c, 5, 2 + o, 10, 8, H); rect(c, 4, -1 + o, 8, 1, H); px(c, 6, 1 + o, hl); return; }
  if (s === 'buzz') { rect(c, 4, 1 + o, 8, 2, H); rect(c, 8, 3 + o, 4, 3, H); return; }
  rect(c, 4, 1 + o, 8, 1, H); rect(c, 3, 2 + o, 10, 3, H); rect(c, 7, 5 + o, 6, 4, H); rect(c, 3, 5 + o, 2, 1, H);
  px(c, 5, 2 + o, hl); px(c, 6, 2 + o, hl);
  if (s === 'long') rect(c, 8, 8 + o, 5, 6, H);
  if (s === 'bob') rect(c, 8, 8 + o, 5, 2, H);
  if (s === 'ponytail') { rect(c, 12, 4 + o, 2, 2, '#e2544a'); rect(c, 13, 5 + o, 2, 6, H); }
  if (s === 'bun') { rect(c, 9, 0 + o, 4, 3, H); }
  if (s === 'pigtails') rect(c, 12, 5 + o, 3, 5, H);
  if (s === 'curly') { px(c, 4, 0 + o, H); px(c, 8, 0 + o, H); px(c, 13, 3 + o, H); px(c, 13, 7 + o, H); }
  if (L.hat === 'cap') { rect(c, 3, 0 + o, 10, 3, L.shirt); rect(c, 1, 3 + o, 6, 1, shade(L.shirt, -0.3)); }
}

function chefHat(c: Ctx, o: number, side = false) {
  rect(c, 4, -1 + o, 8, 4, '#ffffff'); rect(c, 3, 0 + o, 10, 2, '#ffffff'); rect(c, 4, 3 + o, 8, 1, '#e3e7ee');
  if (side) px(c, 12, 0 + o, '#ffffff');
}

function torso(c: Ctx, L: Look, o: number, side: boolean, back: boolean) {
  const S = L.shirt, Sd = shade(S, -0.25), Sl = shade(S, 0.25);
  const x0 = side ? 5 : 4, w = side ? 6 : 8;
  rect(c, x0, 11 + o, w, 6, S);
  rect(c, x0, 11 + o, w, 1, Sl);
  rect(c, x0, 16 + o, w, 1, Sd);
  if (L.outfit === 'dress') { rect(c, x0 - 1, 15 + o, w + 2, 4, S); rect(c, x0 - 1, 18 + o, w + 2, 1, Sd); }
  if (L.outfit === 'hoodie' && !side) { if (back) rect(c, 5, 11 + o, 6, 3, Sd); else { px(c, 6, 13 + o, '#f4f0e6'); px(c, 9, 13 + o, '#f4f0e6'); rect(c, 5, 15 + o, 6, 1, Sd); } }
  if (L.outfit === 'blazer' && !back && !side) { rect(c, 7, 11 + o, 2, 5, '#f4f0e6'); px(c, 7, 12 + o, '#c0504d'); px(c, 8, 13 + o, '#c0504d'); }
  if (L.outfit === 'apron' && !back) rect(c, side ? 4 : 5, 13 + o, side ? 4 : 6, 5, '#f7f7fa');
  if (L.outfit === 'overalls') { rect(c, x0 + 1, 13 + o, w - 2, 4, L.pants); if (!side) { rect(c, 5, 11 + o, 1, 2, L.pants); rect(c, 10, 11 + o, 1, 2, L.pants); } }
  if (!back && !side && L.outfit === 'tee') px(c, 7, 11 + o, shade(L.skin, -0.05));
}

function drawFrame(c: Ctx, L: Look, dir: typeof DIRS[number], pose: Pose) {
  const sit = pose === 'sit';
  const o = sit ? 3 : 0; // upper-body offset when sitting
  const P = L.pants, Pd = shade(P, -0.3), SH = L.shoes;
  const skin = L.skin, skinD = shade(skin, -0.18);
  const side = dir === 'left' || dir === 'right';
  const back = dir === 'up';

  if (dir === 'down' || dir === 'up') {
    if (dir === 'down') hairBackLong(c, L, o);
    // Legs
    if (!sit) {
      const lUp = pose === 'w1' ? 1 : 0, rUp = pose === 'w2' ? 1 : 0;
      rect(c, 5, 17, 3, 4 - lUp, P); rect(c, 8, 17, 3, 4 - rUp, P);
      rect(c, 7, 17, 1, 3, Pd);
      rect(c, 4, 21 - lUp, 4, 2, SH); rect(c, 8, 21 - rUp, 4, 2, SH);
      if (L.outfit === 'dress') { rect(c, 5, 17, 2, 4 - lUp, skin); rect(c, 9, 17, 2, 4 - rUp, skin); }
    } else if (dir === 'down') {
      rect(c, 5, 19, 6, 2, P); rect(c, 4, 21, 3, 2, SH); rect(c, 9, 21, 3, 2, SH);
    }
    // Arms
    const la = pose === 'w1' ? 1 : pose === 'w2' ? -1 : 0;
    rect(c, 3, 12 + o + la, 1, 4, L.shirt); rect(c, 12, 12 + o - la, 1, 4, L.shirt);
    px(c, 3, 16 + o + la, skin); px(c, 12, 16 + o - la, skin);
    torso(c, L, o, false, back);
    if (back && L.backpack) {
      rect(c, 5, 12 + o, 6, 5, L.backpack); rect(c, 5, 12 + o, 6, 1, shade(L.backpack, 0.3)); rect(c, 6, 14 + o, 4, 2, shade(L.backpack, -0.2));
    }
    if (!back && L.backpack) { px(c, 4, 12 + o, shade(L.backpack, -0.2)); px(c, 11, 12 + o, shade(L.backpack, -0.2)); }
    // Head
    rect(c, 4, 2 + o, 8, 9, skin); rect(c, 3, 3 + o, 10, 7, skin);
    rect(c, 4, 10 + o, 8, 1, skinD);
    if (back) {
      hairBackView(c, L, o);
      if (L.hat === 'chef') chefHat(c, o);
    } else {
      px(c, 5, 7 + o, EYE); px(c, 5, 8 + o, EYE); px(c, 10, 7 + o, EYE); px(c, 10, 8 + o, EYE);
      px(c, 4, 9 + o, '#f09a8e'); px(c, 11, 9 + o, '#f09a8e');
      px(c, 7, 9 + o, shade(skin, -0.35)); px(c, 8, 9 + o, shade(skin, -0.35));
      hairFront(c, L, o);
      if (L.glasses) {
        rect(c, 4, 6 + o, 3, 1, '#3b3140'); rect(c, 9, 6 + o, 3, 1, '#3b3140');
        px(c, 4, 7 + o, '#3b3140'); px(c, 6, 7 + o, '#3b3140'); px(c, 9, 7 + o, '#3b3140'); px(c, 11, 7 + o, '#3b3140'); rect(c, 7, 7 + o, 2, 1, '#3b3140');
      }
      if (L.hat === 'chef') chefHat(c, o);
    }
    return;
  }

  // ----- Side view (drawn facing left; right is mirrored afterwards)
  if (!sit) {
    if (pose === 'stand') {
      rect(c, 6, 17, 4, 4, P); rect(c, 8, 17, 1, 4, Pd); rect(c, 5, 21, 5, 2, SH);
    } else {
      const f = pose === 'w1' ? 1 : -1;
      rect(c, 7 - 2 * f, 17, 3, 4, P); rect(c, 7 + 2 * f, 17, 3, 4, Pd);
      rect(c, 6 - 2 * f, 21, 4, 2, SH); rect(c, 7 + 2 * f, 21, 4, 2, shade(SH, -0.2));
    }
    if (L.outfit === 'dress') rect(c, 6, 17, 4, 3, skin);
  } else {
    rect(c, 3, 18, 7, 2, P); rect(c, 3, 20, 2, 2, P); rect(c, 2, 22, 3, 1, SH); rect(c, 1, 21, 3, 1, SH);
  }
  if (L.backpack) { rect(c, 10, 12 + o, 3, 5, L.backpack); rect(c, 10, 12 + o, 3, 1, shade(L.backpack, 0.3)); }
  torso(c, L, o, true, false);
  const swing = pose === 'w1' ? -2 : pose === 'w2' ? 2 : 0;
  rect(c, 7 + Math.sign(swing), 12 + o, 2, 4, shade(L.shirt, -0.15));
  px(c, 7 + swing, 16 + o, skin); px(c, 8 + Math.sign(swing), 16 + o, skin);
  // Head
  rect(c, 4, 2 + o, 8, 9, skin); rect(c, 3, 3 + o, 10, 7, skin);
  px(c, 2, 7 + o, skin);
  rect(c, 4, 10 + o, 8, 1, skinD);
  px(c, 4, 7 + o, EYE); px(c, 4, 8 + o, EYE);
  px(c, 5, 9 + o, '#f09a8e');
  hairSide(c, L, o);
  if (L.glasses) { rect(c, 3, 6 + o, 3, 1, '#3b3140'); px(c, 3, 7 + o, '#3b3140'); px(c, 5, 7 + o, '#3b3140'); rect(c, 6, 6 + o, 3, 1, '#3b3140'); }
  if (L.hat === 'chef') chefHat(c, o, true);
}

/** Builds a 64x96 sprite sheet: rows = down,left,right,up ; cols = stand,w1,w2,sit */
export function buildCharacterSheet(L: Look): HTMLCanvasElement {
  const [sheet, sctx] = makeCanvas(64, 96);
  DIRS.forEach((dir, row) => {
    POSES.forEach((pose, col) => {
      const [f, fctx] = makeCanvas(16, 24);
      // draw with 1px headroom: shift everything down by 1 so hair at y=-1 fits
      fctx.save();
      fctx.translate(0, 1);
      drawFrame(fctx, L, dir === 'right' ? 'left' : dir, pose);
      fctx.restore();
      outline(f, '#2b2033');
      if (dir === 'right') {
        sctx.save();
        sctx.translate(col * 16 + 16, row * 24);
        sctx.scale(-1, 1);
        sctx.drawImage(f, 0, 0);
        sctx.restore();
      } else sctx.drawImage(f, col * 16, row * 24);
    });
  });
  return sheet;
}

export function frameIndex(dir: typeof DIRS[number], pose: Pose) {
  return DIRS.indexOf(dir) * 4 + POSES.indexOf(pose);
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
    ...opts,
  };
}
