// Bell schedule, subjects, class groups and the people of Maple Grove School.
import { Look, randomLook } from '../art/characters';

export type PeriodKind = 'arrival' | 'class' | 'passing' | 'lunch' | 'clubs' | 'dismissal';
export interface Period { name: string; start: number; end: number; kind: PeriodKind; slot?: number }

const t = (h: number, m: number) => h * 60 + m;
export const DAY_START = t(7, 30);
export const DAY_END = t(15, 0);

export const PERIODS: Period[] = [
  { name: 'Morning Arrival', start: t(7, 30), end: t(8, 0), kind: 'arrival' },
  { name: 'Period 1', start: t(8, 0), end: t(8, 45), kind: 'class', slot: 0 },
  { name: 'Passing Period', start: t(8, 45), end: t(8, 55), kind: 'passing' },
  { name: 'Period 2', start: t(8, 55), end: t(9, 40), kind: 'class', slot: 1 },
  { name: 'Passing Period', start: t(9, 40), end: t(9, 50), kind: 'passing' },
  { name: 'Period 3', start: t(9, 50), end: t(10, 35), kind: 'class', slot: 2 },
  { name: 'Lunch', start: t(10, 35), end: t(11, 10), kind: 'lunch' },
  { name: 'Passing Period', start: t(11, 10), end: t(11, 20), kind: 'passing' },
  { name: 'Period 4', start: t(11, 20), end: t(12, 5), kind: 'class', slot: 3 },
  { name: 'Passing Period', start: t(12, 5), end: t(12, 15), kind: 'passing' },
  { name: 'Period 5', start: t(12, 15), end: t(13, 0), kind: 'class', slot: 4 },
  { name: 'Passing Period', start: t(13, 0), end: t(13, 10), kind: 'passing' },
  { name: 'Period 6', start: t(13, 10), end: t(13, 55), kind: 'class', slot: 5 },
  { name: 'Clubs & Free Time', start: t(13, 55), end: t(14, 40), kind: 'clubs' },
  { name: 'Dismissal', start: t(14, 40), end: t(15, 0), kind: 'dismissal' },
];

export function periodAt(min: number): number {
  for (let i = 0; i < PERIODS.length; i++) if (min >= PERIODS[i].start && min < PERIODS[i].end) return i;
  return PERIODS.length - 1;
}

/** The next class slot that starts at or after this period index (for passing periods). */
export function nextClassSlot(pi: number): number | undefined {
  for (let i = pi; i < PERIODS.length; i++) if (PERIODS[i].kind === 'class') return PERIODS[i].slot;
  return undefined;
}

export type Subject = 'math' | 'english' | 'science' | 'art' | 'music' | 'pe' | 'reading';
export const SUBJECTS: Record<Subject, { name: string; room: string; teacher: string }> = {
  math: { name: 'Math', room: 'classA', teacher: 'Ms. Alvarez' },
  english: { name: 'English', room: 'classB', teacher: 'Mrs. Kim' },
  science: { name: 'Science', room: 'lab', teacher: 'Mr. Okafor' },
  art: { name: 'Art', room: 'art', teacher: 'Ms. Dubois' },
  music: { name: 'Music', room: 'music', teacher: 'Mr. Haddad' },
  pe: { name: 'P.E.', room: 'gym', teacher: 'Coach Brooks' },
  reading: { name: 'Library', room: 'library', teacher: 'Mrs. Lin' },
};

export type Group = 'A' | 'B' | 'C';
export const GROUP_SCHEDULE: Record<Group, Subject[]> = {
  A: ['math', 'science', 'english', 'pe', 'art', 'reading'],
  B: ['english', 'math', 'science', 'music', 'pe', 'art'],
  C: ['science', 'art', 'math', 'english', 'music', 'pe'],
};
export const PLAYER_GROUP: Group = 'A';

export type Role = 'student' | 'teacher' | 'staff';
export interface Person {
  id: number;
  name: string;
  role: Role;
  group?: Group;
  subject?: Subject; // teachers
  post?: string; // staff: 'cafeteria' | 'lobby' | 'janitor'
  look: Look;
  personality: 'cheerful' | 'shy' | 'sporty' | 'nerdy' | 'artsy' | 'funny';
}

const STUDENT_NAMES: [string, Group, Person['personality']][] = [
  ['Maya', 'A', 'cheerful'], ['Jordan', 'A', 'sporty'], ['Priya', 'A', 'nerdy'], ['Leo', 'A', 'funny'], ['Zara', 'A', 'artsy'],
  ['Kai', 'B', 'sporty'], ['Amara', 'B', 'cheerful'], ['Mateo', 'B', 'shy'], ['Hana', 'B', 'nerdy'], ['Theo', 'B', 'funny'], ['Imani', 'B', 'artsy'],
  ['Diego', 'C', 'funny'], ['Ava', 'C', 'shy'], ['Malik', 'C', 'sporty'], ['Sofia', 'C', 'artsy'], ['Noah', 'C', 'nerdy'], ['Ruby', 'C', 'cheerful'],
];

export function buildRoster(): Person[] {
  const people: Person[] = [];
  let id = 1;
  STUDENT_NAMES.forEach(([name, group, personality], i) => {
    people.push({ id: id++, name, role: 'student', group, personality, look: randomLook(i * 31 + 7) });
  });
  const teacher = (name: string, subject: Subject, look: Partial<Look>, personality: Person['personality']) =>
    people.push({ id: id++, name, role: 'teacher', subject, personality, look: randomLook(id * 13 + 3, { backpack: undefined, outfit: 'blazer', ...look }) });
  teacher('Ms. Alvarez', 'math', { skin: '#dda47c', hair: '#2b2024', hairStyle: 'bun', shirt: '#c0504d', pants: '#2d2a33', glasses: true }, 'nerdy');
  teacher('Mrs. Kim', 'english', { skin: '#f1c29e', hair: '#2b2024', hairStyle: 'bob', shirt: '#6a8e5a', pants: '#3b3f58', outfit: 'dress' }, 'cheerful');
  teacher('Mr. Okafor', 'science', { skin: '#5f3c29', hair: '#2b2024', hairStyle: 'buzz', shirt: '#f4f0e6', pants: '#3b4a78', glasses: true }, 'nerdy');
  teacher('Ms. Dubois', 'art', { skin: '#f8dcc4', hair: '#b8452e', hairStyle: 'curly', shirt: '#e874a8', pants: '#4a6b4a', outfit: 'tee' }, 'artsy');
  teacher('Mr. Haddad', 'music', { skin: '#b97d55', hair: '#4a2f22', hairStyle: 'short', shirt: '#6b4fa0', pants: '#2d2a33' }, 'funny');
  teacher('Coach Brooks', 'pe', { skin: '#8f5b3b', hair: '#2b2024', hairStyle: 'short', shirt: '#e2544a', pants: '#3b3f58', outfit: 'hoodie', hat: 'cap' }, 'sporty');
  teacher('Mrs. Lin', 'reading', { skin: '#f1c29e', hair: '#d9d9e2', hairStyle: 'bun', shirt: '#3fa7a0', pants: '#3b3f58', glasses: true, outfit: 'dress' }, 'shy');
  const staff = (name: string, post: string, look: Partial<Look>, personality: Person['personality']) =>
    people.push({ id: id++, name, role: 'staff', post, personality, look: randomLook(id * 17 + 5, { backpack: undefined, ...look }) });
  staff('Chef Rosa', 'cafeteria', { skin: '#dda47c', hair: '#2b2024', hairStyle: 'short', shirt: '#f4f0e6', pants: '#2d2a33', outfit: 'apron', hat: 'chef' }, 'cheerful');
  staff('Principal Grant', 'lobby', { skin: '#b97d55', hair: '#d9d9e2', hairStyle: 'short', shirt: '#3b3f58', pants: '#2d2a33', outfit: 'blazer', glasses: true }, 'cheerful');
  staff('Mr. Joe', 'janitor', { skin: '#f1c29e', hair: '#7a4a2a', hairStyle: 'short', shirt: '#6b8fb5', pants: '#3b4a78', outfit: 'overalls', hat: 'cap' }, 'funny');
  staff('Ms. Patty', 'office', { skin: '#f8dcc4', hair: '#ecc66e', hairStyle: 'long', shirt: '#8b6fd1', pants: '#2d2a33', outfit: 'blazer' }, 'cheerful');
  return people;
}
