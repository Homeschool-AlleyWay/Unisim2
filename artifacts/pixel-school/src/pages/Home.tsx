import { GameViewport } from '@/components/game/GameViewport';

export default function Home() {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col items-center justify-center bg-background p-4 md:p-8 font-sans overflow-hidden">
      <div className="w-full max-w-4xl mb-6 text-center space-y-3 z-10 relative">
        <h1 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tight drop-shadow-sm">
          Pixel School
        </h1>
        <p className="text-lg md:text-xl text-slate-600 font-bold max-w-xl mx-auto">
          A lively miniature simulator. Watch them learn!
        </p>
      </div>
      <GameViewport />
    </div>
  );
}
