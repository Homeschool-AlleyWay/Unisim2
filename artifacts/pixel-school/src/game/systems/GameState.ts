// Player progress + save/load (browser storage is optional; the game works without it).
import type { Look } from '../art/characters';
import type { Subject } from '../data/schedule';

export type StatKey = 'smarts' | 'fitness' | 'creativity' | 'social';

export interface DayRecord { attended: number; late: number; missed: number; quizRight: number; quizTotal: number; }

export interface SaveData {
  name: string;
  look: Look;
  day: number;
  energy: number;
  stats: Record<StatKey, number>;
  grades: Record<Subject, number>; // 0..100
  friendship: Record<number, number>; // person id -> 0..10
  totalDays: number;
}

const KEY = 'maple-grove-school-sim-v1';

export function newSave(name: string, look: Look): SaveData {
  return {
    name, look, day: 1, energy: 100,
    stats: { smarts: 0, fitness: 0, creativity: 0, social: 0 },
    grades: { math: 70, english: 70, science: 70, art: 70, music: 70, pe: 70, reading: 70 },
    friendship: {}, totalDays: 0,
  };
}

export function loadSave(): SaveData | null {
  try { const s = localStorage.getItem(KEY); return s ? JSON.parse(s) : null; } catch { return null; }
}
export function writeSave(d: SaveData) {
  try { localStorage.setItem(KEY, JSON.stringify(d)); } catch { /* storage unavailable */ }
}
export function clearSave() {
  try { localStorage.removeItem(KEY); } catch { /* ignore */ }
}

export function letter(g: number) {
  return g >= 93 ? 'A' : g >= 90 ? 'A-' : g >= 87 ? 'B+' : g >= 83 ? 'B' : g >= 80 ? 'B-' : g >= 77 ? 'C+' : g >= 73 ? 'C' : g >= 70 ? 'C-' : g >= 60 ? 'D' : 'F';
}

export const DAY_NAMES = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
