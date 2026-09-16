import { useEffect, useRef, useState } from 'react';
import { GameEngine } from '@/lib/game/engine';
import { renderGame } from '@/lib/game/renderer';
import { Joystick } from './Joystick';
import { Button } from '@/components/ui/button';
import { Play, Pause, FastForward } from 'lucide-react';
import { Period } from '@/lib/game/types';

export function GameViewport() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<GameEngine | null>(null);
  
  const [timeStr, setTimeStr] = useState('8:00 AM');
  const [period, setPeriod] = useState<Period>('Arrival');
  const [paused, setPaused] = useState(false);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    if (!canvasRef.current) return;
    const engine = new GameEngine();
    engineRef.current = engine;
    
    const handleKeyDown = (e: KeyboardEvent) => engine.keys.add(e.key.toLowerCase());
    const handleKeyUp = (e: KeyboardEvent) => engine.keys.delete(e.key.toLowerCase());
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Canvas render loop
    let animReq: number;
    const renderLoop = () => {
      renderGame(canvasRef.current!.getContext('2d')!, engine);
      animReq = requestAnimationFrame(renderLoop);
    };

    engine.start();
    renderLoop();

    // UI Clock sync (10 times a second to prevent React overload but keep it responsive)
    const clockInterval = setInterval(() => {
      const timeMins = engine.timeMinutes;
      setPeriod(engine.period);
      const h = Math.floor(timeMins / 60);
      const m = Math.floor(timeMins % 60);
      const isPM = h >= 12;
      const displayH = h > 12 ? h - 12 : h;
      setTimeStr(`${displayH}:${m.toString().padStart(2, '0')} ${isPM ? 'PM' : 'AM'}`);
    }, 100);

    return () => {
      engine.stop();
      cancelAnimationFrame(animReq);
      clearInterval(clockInterval);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const togglePause = () => {
    if (engineRef.current) {
      engineRef.current.paused = !engineRef.current.paused;
      setPaused(engineRef.current.paused);
    }
  };

  const toggleSpeed = () => {
    if (engineRef.current) {
      const newSpeed = engineRef.current.timeSpeed === 1 ? 4 : 1;
      engineRef.current.timeSpeed = newSpeed;
      setSpeed(newSpeed);
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto border-8 border-white rounded-3xl overflow-hidden shadow-2xl bg-[#a7f3d0]">
      {/* Top Bar Overlay */}
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start pointer-events-none z-10">
        <div className="bg-white/90 backdrop-blur shadow-lg rounded-xl p-3 pointer-events-auto border-2 border-slate-200">
          <div className="text-2xl font-black text-slate-800 tabular-nums tracking-tighter">
            {timeStr}
          </div>
          <div className="text-sm font-bold text-primary uppercase tracking-widest mt-1">
            {period}
          </div>
        </div>

        <div className="flex gap-2 pointer-events-auto">
          <Button variant="secondary" size="icon" onClick={togglePause} className="rounded-full shadow-md bg-white hover:bg-slate-100 border-2 border-slate-200 text-slate-800">
            {paused ? <Play className="w-5 h-5 fill-current" /> : <Pause className="w-5 h-5 fill-current" />}
          </Button>
          <Button variant={speed > 1 ? 'default' : 'secondary'} size="icon" onClick={toggleSpeed} className={`rounded-full shadow-md border-2 ${speed > 1 ? 'border-primary' : 'border-slate-200 bg-white text-slate-800 hover:bg-slate-100'}`}>
            <FastForward className="w-5 h-5 fill-current" />
          </Button>
        </div>
      </div>

      {/* The Game Canvas */}
      <canvas 
        ref={canvasRef}
        width={512} 
        height={384}
        className="w-full h-auto aspect-[4/3] block bg-[#4ade80]"
        style={{ imageRendering: 'pixelated' }}
      />

      {/* Mobile Touch Joystick */}
      <div className="absolute bottom-6 left-6 pointer-events-auto md:hidden z-20">
        <Joystick onMove={(x, y) => {
          if (engineRef.current) engineRef.current.joystick = { x, y };
        }} />
      </div>

      {/* Instructions Legend (Desktop) */}
      <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur p-4 rounded-xl shadow-lg pointer-events-auto max-w-[240px] border-2 border-slate-200 hidden md:block z-10">
        <h3 className="font-bold text-xs uppercase text-slate-400 mb-2 tracking-wider">How to Play</h3>
        <p className="text-sm font-semibold text-slate-700 leading-snug mb-3">
          Use <span className="px-1.5 py-0.5 bg-slate-100 rounded border border-slate-200">W</span><span className="px-1.5 py-0.5 bg-slate-100 rounded border border-slate-200 mx-0.5">A</span><span className="px-1.5 py-0.5 bg-slate-100 rounded border border-slate-200 mr-0.5">S</span><span className="px-1.5 py-0.5 bg-slate-100 rounded border border-slate-200">D</span> to move. You control the student with the yellow arrow.
        </p>
        <p className="text-xs font-bold text-primary leading-tight">
          Watch the other students rush to class as the period changes!
        </p>
      </div>
    </div>
  );
}
