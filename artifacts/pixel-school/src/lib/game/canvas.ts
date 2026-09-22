import { WORLD_SIZE } from './world';

/** Logical (unscaled) resolution of the game world in pixels. */
export const LOGICAL_WIDTH = WORLD_SIZE;
export const LOGICAL_HEIGHT = WORLD_SIZE;

/**
 * High-DPI canvas scaling helper.
 *
 * Snaps the backing store to an integer multiple of the logical resolution
 * (rather than a fractional devicePixelRatio) so rectangle edges stay sharp,
 * then scales the context so game code keeps drawing in 320x320 coordinates.
 * CSS `image-rendering: pixelated` stretches any remaining fraction.
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
