// React wrapper: drop <SchoolGameView /> into any page or route.
import { useEffect, useRef } from 'react';
import type Phaser from 'phaser';
import { createSchoolGame } from '../game/SchoolGame';

export default function SchoolGameView({ height = '100%' }: { height?: string | number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const game: Phaser.Game = createSchoolGame(ref.current);
    return () => game.destroy(true);
  }, []);
  return <div ref={ref} style={{ width: '100%', height, position: 'relative', background: '#1d1a2b' }} />;
}
