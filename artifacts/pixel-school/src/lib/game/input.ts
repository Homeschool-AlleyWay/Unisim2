export type Direction = 'up' | 'down' | 'left' | 'right';

/**
 * Tracks every active input source (a pointer ID for touch/mouse, a physical
 * key code for keyboard) and reports the most recently pressed direction.
 * This keeps multi-touch and key rollover correct: releasing one source falls
 * back to whatever is still held instead of stopping the player outright.
 */
export class InputState {
  private readonly held = new Map<string, Direction>();

  press(sourceId: string, dir: Direction): void {
    // Re-insert so the most recent press wins in iteration order.
    this.held.delete(sourceId);
    this.held.set(sourceId, dir);
  }

  release(sourceId: string): void {
    this.held.delete(sourceId);
  }

  clear(): void {
    this.held.clear();
  }

  /** The direction of the most recently pressed source, or null when idle. */
  current(): Direction | null {
    let last: Direction | null = null;
    for (const dir of this.held.values()) last = dir;
    return last;
  }
}
