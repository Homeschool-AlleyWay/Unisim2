import { useEffect, useRef } from 'react';
import { createPlayer, update, draw, type Player } from '@/lib/game/world';
import { setupCrispCanvas, LOGICAL_WIDTH, LOGICAL_HEIGHT } from '@/lib/game/canvas';
import { InputState, type Direction } from '@/lib/game/input';
import { DPad } from './DPad';

/** Physical key codes -> direction (layout-independent). */
const KEY_DIRECTIONS: Record<string, Direction> = {
  ArrowUp: 'up',
  KeyW: 'up',
  ArrowDown: 'down',
  KeyS: 'down',
  ArrowLeft: 'left',
  KeyA: 'left',
  ArrowRight: 'right',
  KeyD: 'right',
};

function applyDirection(p: Player, dir: Direction | null) {
  switch (dir) {
    case 'up':
      p.dx = 0;
      p.dy = -p.speed;
      break;
    case 'down':
      p.dx = 0;
      p.dy = p.speed;
      break;
    case 'left':
      p.dx = -p.speed;
      p.dy = 0;
      break;
    case 'right':
      p.dx = p.speed;
      p.dy = 0;
      break;
    default:
      p.dx = 0;
      p.dy = 0;
  }
}

export function GameCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const playerRef = useRef<Player>(createPlayer());
  const inputRef = useRef(new InputState());

  const sync = () => applyDirection(playerRef.current, inputRef.current.current());
  const press = (id: string, dir: Direction) => {
    inputRef.current.press(id, dir);
    sync();
  };
  const release = (id: string) => {
    inputRef.current.release(id);
    sync();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Crisp scaling: re-run on layout resize and on devicePixelRatio changes
    // (zoom, moving the window to another monitor).
    setupCrispCanvas(canvas, ctx);
    const resizeObserver = new ResizeObserver(() => setupCrispCanvas(canvas, ctx));
    resizeObserver.observe(canvas);

    let dprQuery: MediaQueryList | null = null;
    const watchDpr = () => {
      dprQuery?.removeEventListener('change', onDprChange);
      dprQuery = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
      dprQuery.addEventListener('change', onDprChange);
    };
    const onDprChange = () => {
      setupCrispCanvas(canvas, ctx);
      watchDpr();
    };
    watchDpr();

    // Keyboard (tracked by physical key so W + ArrowUp roll over correctly).
    const onKeyDown = (e: KeyboardEvent) => {
      const dir = KEY_DIRECTIONS[e.code];
      if (!dir) return;
      e.preventDefault();
      if (!e.repeat) press(`key:${e.code}`, dir);
    };
    const onKeyUp = (e: KeyboardEvent) => {
      if (!KEY_DIRECTIONS[e.code]) return;
      release(`key:${e.code}`);
    };
    // If the tab loses focus mid-press we never get the key/pointer up.
    const resetInput = () => {
      inputRef.current.clear();
      sync();
    };
    const onVisibility = () => {
      if (document.hidden) resetInput();
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    window.addEventListener('blur', resetInput);
    document.addEventListener('visibilitychange', onVisibility);

    let animReq: number;
    const loop = () => {
      update(playerRef.current);
      draw(ctx, playerRef.current);
      animReq = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(animReq);
      resizeObserver.disconnect();
      dprQuery?.removeEventListener('change', onDprChange);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('blur', resetInput);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <>
      {/* Border lives on the wrapper so the canvas box is exactly its drawable
          area and the crisp-scaling helper measures the true content width. */}
      <div className="mt-5 border-4 border-[#555] rounded bg-[#f0f0f0] leading-none">
        <canvas
          ref={canvasRef}
          width={LOGICAL_WIDTH}
          height={LOGICAL_HEIGHT}
          aria-label="Classroom"
          className="block w-[320px] max-w-[calc(100vw-2.5rem)] aspect-square touch-none"
        />
      </div>
      <DPad onPress={press} onRelease={release} />
    </>
  );
}
