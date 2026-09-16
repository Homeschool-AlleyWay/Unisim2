import { useState, useRef, useEffect } from 'react';

export function Joystick({ onMove }: { onMove: (x: number, y: number) => void }) {
  const [active, setActive] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const baseRef = useRef<HTMLDivElement>(null);

  const handlePointerDown = (e: React.PointerEvent) => {
    setActive(true);
    updatePos(e.clientX, e.clientY);
    e.target.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!active) return;
    updatePos(e.clientX, e.clientY);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setActive(false);
    setPos({ x: 0, y: 0 });
    onMove(0, 0);
    e.target.releasePointerCapture(e.pointerId);
  };

  const updatePos = (clientX: number, clientY: number) => {
    if (!baseRef.current) return;
    const rect = baseRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    let dx = clientX - centerX;
    let dy = clientY - centerY;
    
    const maxDist = rect.width / 2;
    const dist = Math.sqrt(dx * dx + dy * dy);
    
    if (dist > maxDist) {
      dx = (dx / dist) * maxDist;
      dy = (dy / dist) * maxDist;
    }
    
    setPos({ x: dx, y: dy });
    onMove(dx / maxDist, dy / maxDist);
  };

  return (
    <div 
      ref={baseRef}
      className="w-32 h-32 rounded-full bg-slate-800/30 border-2 border-white/50 backdrop-blur-sm flex items-center justify-center touch-none select-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div 
        className="w-12 h-12 rounded-full bg-white shadow-lg border-2 border-slate-200 pointer-events-none"
        style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      />
    </div>
  );
}
