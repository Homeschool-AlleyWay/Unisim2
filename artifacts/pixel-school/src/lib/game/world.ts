/**
 * Game world: a single 320x320 classroom with walls, desks and one player.
 * Ported from the original single-file mobile game; logic is kept identical
 * (AABB collision, per-axis movement so the player slides along walls).
 */

export const WORLD_SIZE = 320;

export interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface Player {
  x: number;
  y: number;
  size: number;
  speed: number;
  dx: number;
  dy: number;
}

export const walls: Rect[] = [
  { x: 0, y: 0, w: 320, h: 10 }, // Top
  { x: 0, y: 0, w: 10, h: 320 }, // Left
  { x: 0, y: 310, w: 320, h: 10 }, // Bottom
  { x: 310, y: 0, w: 10, h: 320 }, // Right
];

export const desks: Rect[] = [
  { x: 50, y: 100, w: 40, h: 30 },
  { x: 140, y: 100, w: 40, h: 30 },
  { x: 230, y: 100, w: 40, h: 30 },
  { x: 50, y: 180, w: 40, h: 30 },
  { x: 140, y: 180, w: 40, h: 30 },
  { x: 230, y: 180, w: 40, h: 30 },
];

export const teacherDesk: Rect = { x: 100, y: 30, w: 120, h: 25 };

const obstacles: Rect[] = [...walls, ...desks, teacherDesk];

export function createPlayer(): Player {
  return { x: 150, y: 260, size: 20, speed: 3, dx: 0, dy: 0 };
}

export function checkCollision(player: Player, newX: number, newY: number): boolean {
  for (const obs of obstacles) {
    if (
      newX < obs.x + obs.w &&
      newX + player.size > obs.x &&
      newY < obs.y + obs.h &&
      newY + player.size > obs.y
    ) {
      return true;
    }
  }
  return false;
}

/** Advance the player one frame. Axes are resolved independently so the
 *  player slides along an obstacle instead of sticking to it. */
export function update(player: Player): void {
  if (player.dx !== 0 && !checkCollision(player, player.x + player.dx, player.y)) {
    player.x += player.dx;
  }
  if (player.dy !== 0 && !checkCollision(player, player.x, player.y + player.dy)) {
    player.y += player.dy;
  }
}

export function draw(ctx: CanvasRenderingContext2D, player: Player): void {
  ctx.clearRect(0, 0, WORLD_SIZE, WORLD_SIZE);

  ctx.fillStyle = '#646464';
  walls.forEach((w) => ctx.fillRect(w.x, w.y, w.w, w.h));

  ctx.fillStyle = '#8B4513';
  desks.forEach((d) => ctx.fillRect(d.x, d.y, d.w, d.h));
  ctx.fillRect(teacherDesk.x, teacherDesk.y, teacherDesk.w, teacherDesk.h);

  ctx.fillStyle = '#3296FF';
  ctx.fillRect(player.x, player.y, player.size, player.size);
}
