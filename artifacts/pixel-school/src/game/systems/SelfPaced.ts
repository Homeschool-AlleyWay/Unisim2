// Grades 6-12: flexible A/B-day scheduling. Each due subject gets 5 (of the day's 6 period
// slots) as valid "class is open" windows, randomized daily. Rather than forcing students to
// track exact clock times, they can also just pick a broad AM / Lunch / Evening window.
import { AB_SPLIT, abDayType, dueSubjectsFor, PERIODS, Subject } from '../data/schedule';

export type Bucket = 'am' | 'lunch' | 'evening';
export const CLASS_SLOT_COUNT = PERIODS.filter((p) => p.kind === 'class').length; // 6

export interface DailyPlan {
  day: number;
  dayType: 'A' | 'B';
  isTestDay: boolean;
  due: Subject[];
  /** Which of the 6 period slots (0-5) are valid entry windows today, per subject — 5 of 6. */
  windows: Partial<Record<Subject, number[]>>;
  bucket: Partial<Record<Subject, Bucket>>;
  selected: Subject[]; // subjects the student committed to attend/test today
  completed: Subject[]; // subjects fully finished today
  paused: Partial<Record<Subject, boolean>>; // mid-lesson checkpoint, same-day resume only
  locked: boolean; // true once submitted at the bulletin board
}

function shuffledSlots(seed: number): number[] {
  const arr = Array.from({ length: CLASS_SLOT_COUNT }, (_, i) => i);
  // simple seeded shuffle so the "randomness" is stable for a given (day, subject)
  for (let i = arr.length - 1; i > 0; i--) {
    seed = (seed * 9301 + 49297) % 233280;
    const j = Math.floor((seed / 233280) * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** Builds today's plan skeleton (due subjects + randomized windows). Selection/bucket choices
 *  are filled in afterward at the bulletin board. */
export function buildDailyPlan(grade: number, day: number, isTestDay: boolean): DailyPlan {
  const allDue = isTestDay ? Array.from(new Set<Subject>([...AB_SPLIT.A, ...AB_SPLIT.B])) : dueSubjectsFor(grade, day);
  const windows: Partial<Record<Subject, number[]>> = {};
  allDue.forEach((sub, i) => {
    const slots = shuffledSlots(day * 97 + i * 13 + 1).slice(0, 5).sort((a, b) => a - b);
    windows[sub] = slots;
  });
  return {
    day, dayType: abDayType(day), isTestDay, due: allDue, windows,
    bucket: {}, selected: isTestDay ? allDue : [], completed: [], paused: {}, locked: false,
  };
}

/** Maps a broad time-of-day preference onto one of today's randomized window slots. */
export function bucketToSlot(windows: number[], bucket: Bucket): number {
  const sorted = [...windows].sort((a, b) => a - b);
  if (bucket === 'am') return sorted[0];
  if (bucket === 'evening') return sorted[sorted.length - 1];
  return sorted[Math.floor(sorted.length / 2)];
}

export function isWindowOpen(plan: DailyPlan, sub: Subject, slot: number): boolean {
  return !!plan.windows[sub]?.includes(slot);
}

export const MIN_SELECTION_RATIO = 0.5;
export function minRequired(due: Subject[]): number { return Math.max(1, Math.ceil(due.length * MIN_SELECTION_RATIO)); }

export const TUTORING_THRESHOLD = 0.7; // below this test score → flagged for Saturday tutoring
