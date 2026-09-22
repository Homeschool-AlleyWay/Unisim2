import type { PointerEvent } from 'react';
import type { Direction } from '@/lib/game/input';

interface DPadProps {
  /** Called with a stable id for the pressing pointer so multi-touch works. */
  onPress: (sourceId: string, dir: Direction) => void;
  onRelease: (sourceId: string) => void;
}

/**
 * Virtual touch D-pad. Pointer events cover touch, mouse and pen with one
 * handler set; pointer capture keeps the release firing even if the finger
 * drifts off the button.
 */
export function DPad({ onPress, onRelease }: DPadProps) {
  const press = (dir: Direction) => (e: PointerEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Pointer already gone (e.g. released before capture); press still counts.
    }
    onPress(`pointer:${e.pointerId}`, dir);
  };
  const release = (e: PointerEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    onRelease(`pointer:${e.pointerId}`);
  };

  const btn = (dir: Direction, label: string, gridClass: string) => (
    <button
      type="button"
      aria-label={dir}
      className={`${gridClass} w-[60px] h-[60px] bg-[#444] active:bg-[#777] border-2 border-[#888] rounded-xl text-[28px] leading-none text-white flex items-center justify-center select-none touch-none`}
      onPointerDown={press(dir)}
      onPointerUp={release}
      onPointerCancel={release}
      onContextMenu={(e) => e.preventDefault()}
    >
      {label}
    </button>
  );

  return (
    <div className="grid grid-cols-[60px_60px_60px] gap-[15px] mt-[30px] mb-6">
      <div />
      {btn('up', '↑', 'col-start-2')}
      <div />
      {btn('left', '←', 'col-start-1')}
      {btn('down', '↓', 'col-start-2')}
      {btn('right', '→', 'col-start-3')}
    </div>
  );
}
