import { useEffect } from 'react';
import SchoolGameView from '@/components/SchoolGameView';

export default function Home() {
  // Phaser owns the whole viewport here; lock page scroll only while mounted
  // so other routes (the /classroom mini-game) can still scroll.
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <main className="h-[100dvh] w-full bg-[#1d1a2b]">
      <h1 className="sr-only">Maple Grove School Life</h1>
      <SchoolGameView height="100dvh" />
    </main>
  );
}
