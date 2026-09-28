// Player progress + save/load (browser storage is optional; the game works without it).
import type { Look } from '../art/characters';
import type { Subject } from '../data/schedule';
import type { Grade } from '../data/curriculum';
import type { DailyPlan } from './SelfPaced';

export type StatKey = 'smarts' | 'fitness' | 'creativity' | 'social';

export interface DayRecord { attended: number; late: number; missed: number; quizRight: number; quizTotal: number; }

export interface HomeworkItem { assignedDay: number; done: boolean }
export interface TestScore { score: number; total: number }

export interface SaveData {
  name: string;
  look: Look;
  schoolGrade: Grade; // 1-12; which grade's curriculum this player sees
  day: number;
  energy: number;
  stats: Record<StatKey, number>;
  grades: Record<Subject, number>; // 0..100, academic scores per subject
  friendship: Record<number, number>; // person id -> 0..10
  notebook: Record<string, string>; // lessonId -> the player's own written/copied notes
  totalDays: number;
  // Grades 6-12 self-paced A/B scheduling (see systems/SelfPaced.ts)
  plan: DailyPlan | null; // today's bulletin-board plan
  lastHomeworkDay: Partial<Record<Subject, number>>;
  homework: Partial<Record<Subject, HomeworkItem>>;
  testScores: Partial<Record<Subject, TestScore>>;
  needsTutoring: Subject[]; // flagged after Friday's tests, cleared by Saturday tutoring
  specialDay: 'school' | 'tutoring';
}

const KEY = 'maple-grove-school-sim-v1';

export function newSave(name: string, look: Look, schoolGrade: Grade = 5): SaveData {
  return {
    name, look, schoolGrade, day: 1, energy: 100,
    stats: { smarts: 0, fitness: 0, creativity: 0, social: 0 },
    grades: { math: 70, english: 70, science: 70, art: 70, music: 70, pe: 70, reading: 70 },
    friendship: {}, notebook: {}, totalDays: 0,
    plan: null, lastHomeworkDay: {}, homework: {}, testScores: {}, needsTutoring: [], specialDay: 'school',
  };
}

export function loadSave(): SaveData | null {
  try {
    const s = localStorage.getItem(KEY);
    if (!s) return null;
    const d = JSON.parse(s) as SaveData;
    // Backfill fields added after this save format existed.
    if (!d.schoolGrade) d.schoolGrade = 5;
    if (!d.notebook) d.notebook = {};
    if (d.plan === undefined) d.plan = null;
    if (!d.lastHomeworkDay) d.lastHomeworkDay = {};
    if (!d.homework) d.homework = {};
    if (!d.testScores) d.testScores = {};
    if (!d.needsTutoring) d.needsTutoring = [];
    if (!d.specialDay) d.specialDay = 'school';
    return d;
  } catch { return null; }
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
