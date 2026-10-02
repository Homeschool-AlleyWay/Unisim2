import { useEffect } from 'react';
import { Link } from 'wouter';
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
      <Link
        href="/academy"
        className="fixed bottom-3 right-3 z-50 rounded-full bg-[#F3E7CF] px-4 py-2 text-sm font-semibold text-[#4A3B3F] shadow-[0_2px_0_#C9B28A,0_6px_10px_rgba(0,0,0,.35)] hover:brightness-105"
      >
        UNIFY Academy →
      </Link>
    </main>
  );
}
