import { MAP_WIDTH, MAP_HEIGHT, TILE_SIZE } from './map';

/** Logical (unscaled) resolution of the game world in pixels. */
export const LOGICAL_WIDTH = MAP_WIDTH * TILE_SIZE; // 512
export const LOGICAL_HEIGHT = MAP_HEIGHT * TILE_SIZE; // 384

/**
 * High-DPI canvas scaling helper, tuned for pixel art.
 *
 * The generic version (`canvas.width = rect.width * dpr; ctx.scale(dpr, dpr)`)
 * yields fractional scale factors, which anti-aliases every tile edge and
 * defeats the pixel-art look. Instead we:
 *   1. Measure how many device pixels the canvas occupies.
 *   2. Pick the largest *integer* multiple of the logical resolution that fits.
 *   3. Size the backing store to that multiple and scale the context by it.
 * CSS `image-rendering: pixelated` then stretches the remaining fraction
 * with nearest-neighbour sampling, so edges stay crisp at any DPR.
 *
 * Returns the integer scale that was applied.
 */
export function setupCrispCanvas(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
): number {
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  const devicePx = Math.max(1, rect.width * dpr);
  const scale = Math.max(1, Math.floor(devicePx / LOGICAL_WIDTH));

  const targetW = LOGICAL_WIDTH * scale;
  const targetH = LOGICAL_HEIGHT * scale;

  if (canvas.width !== targetW || canvas.height !== targetH) {
    canvas.width = targetW;
    canvas.height = targetH;
  }

  // Resizing resets the transform, so always re-apply.
  ctx.setTransform(scale, 0, 0, scale, 0, 0);
  ctx.imageSmoothingEnabled = false;
  return scale;
}
