import { GameCanvas } from '@/components/game/GameCanvas';

/** The original single-room D-pad mini-game, kept at /classroom. */
export default function Classroom() {
  // The page itself stays scrollable (landscape phones need to reach the
  // D-pad); touch gestures are only suppressed on the canvas and buttons.
  return (
    <main className="min-h-[100dvh] w-full flex flex-col items-center bg-[#222] font-sans overscroll-none">
      <h1 className="sr-only">Mobile School Game</h1>
      <GameCanvas />
    </main>
  );
}
