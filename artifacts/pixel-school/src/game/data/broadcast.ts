// The Morning Broadcast: a daily student-run news show. A short mandatory
// "morning assembly" segment (greeting, date, weather, motto & promise, Pledge,
// Lord's Prayer) blocks class entry until it's finished; after the first bell,
// a longer news loop (local/national/international stories, calendar, history,
// vocab, health facts, student submissions) plays on repeat for the rest of the
// day. Everything here is placeholder/sample content — a real deployment would
// swap the SAMPLE_* arrays for a live feed, same pattern as the curriculum's
// "framework + strong sample" approach.

export const SCHOOL_NAME = 'Cmbilts Unify Academy';
export const SCHOOL_MOTTO = '"Learn Boldly, Lead Kindly."';
export const SCHOOL_PROMISE =
  'We promise every student a safe place to grow, teachers who believe in you, and a community that ' +
  'celebrates who you are becoming — one day at a time.';

// ---------------- Public-domain civic texts ----------------
export const PLEDGE_LINES = [
  'I pledge allegiance to the Flag',
  'of the United States of America,',
  'and to the Republic for which it stands,',
  'one Nation under God, indivisible,',
  'with liberty and justice for all.',
];

export const LORDS_PRAYER_LINES = [
  'Our Father, who art in heaven, hallowed be thy name.',
  'Thy kingdom come, thy will be done, on earth as it is in heaven.',
  'Give us this day our daily bread,',
  'and forgive us our trespasses, as we forgive those who trespass against us.',
  'And lead us not into temptation, but deliver us from evil.',
  'For thine is the kingdom, and the power, and the glory, forever. Amen.',
];

/** "My Country 'Tis of Thee" (tune of "America" / "God Save the Queen" — public domain melody),
 *  a simplified but recognizable approximation: note name + beats (at ~96bpm, 1 beat = 0.5s). */
export const ANTHEM_MELODY: { note: string; beats: number }[] = [
  { note: 'C4', beats: 1 }, { note: 'C4', beats: 1 }, { note: 'D4', beats: 1 }, { note: 'C4', beats: 1 },
  { note: 'F4', beats: 1 }, { note: 'E4', beats: 2 },
  { note: 'C4', beats: 1 }, { note: 'C4', beats: 1 }, { note: 'D4', beats: 1 }, { note: 'C4', beats: 1 },
  { note: 'G4', beats: 1 }, { note: 'F4', beats: 2 },
  { note: 'C4', beats: 1 }, { note: 'C4', beats: 1 }, { note: 'C5', beats: 1 }, { note: 'A4', beats: 1 },
  { note: 'F4', beats: 1 }, { note: 'E4', beats: 1 }, { note: 'D4', beats: 2 },
  { note: 'A#4', beats: 1 }, { note: 'A4', beats: 1 }, { note: 'G4', beats: 1 }, { note: 'F4', beats: 1 },
  { note: 'G4', beats: 1 }, { note: 'A4', beats: 1 }, { note: 'B4', beats: 1 }, { note: 'C5', beats: 2 },
];

// ---------------- Anchors ----------------
export interface Anchor { name: string; gender: 'male' | 'female' }
export const ANCHORS: Anchor[] = [
  { name: 'Milo', gender: 'male' },
  { name: 'Zara', gender: 'female' },
];

// ---------------- Segment model ----------------
export type Segment =
  | { kind: 'say'; speaker: 0 | 1; text: string; caption?: string }
  | { kind: 'anthem' }
  | { kind: 'slide'; title: string; body: string; icon: string; speaker?: 0 | 1; say?: string }
  | { kind: 'submission'; sub: StudentSubmission };

export interface StudentSubmission {
  id: string;
  studentName: string;
  studentLook?: any; // a Look, kept untyped here to avoid an import cycle
  kind: 'art' | 'writing' | 'clip';
  title: string;
  body: string; // writing excerpt, art caption, or clip description
  durationSec?: number; // clips only — capped at 180 (3 min) when shown
}

/** Extra-curriculum-style plugin point: real submissions get wired in with this,
 *  same pattern as registerCurriculumPack in data/curriculum.ts. */
const submissions: StudentSubmission[] = [];
export function registerSubmission(s: StudentSubmission) {
  submissions.push(s);
}
export function getSubmissions(): StudentSubmission[] {
  return submissions;
}

// ---------------- Weather (placeholder — no live API wired in) ----------------
const CONDITIONS = [
  { icon: '☀️', label: 'Sunny' }, { icon: '⛅', label: 'Partly cloudy' }, { icon: '☁️', label: 'Cloudy' },
  { icon: '🌦️', label: 'Light showers' }, { icon: '🌧️', label: 'Rainy' }, { icon: '❄️', label: 'Snowy' },
];
function seeded(n: number) { const x = Math.sin(n * 999.7) * 43758.5453; return x - Math.floor(x); }
export function weatherForDate(d: Date) {
  const seed = d.getFullYear() * 372 + d.getMonth() * 31 + d.getDate();
  const c = CONDITIONS[Math.floor(seeded(seed) * CONDITIONS.length)];
  const month = d.getMonth(); // rough seasonal range, Northern Hemisphere
  const base = [34, 38, 48, 58, 68, 77, 82, 80, 71, 59, 47, 36][month];
  const hi = Math.round(base + seeded(seed + 1) * 10);
  const lo = Math.round(hi - 8 - Math.round(seeded(seed + 2) * 6));
  return { ...c, hi, lo };
}

// ---------------- On-this-day history (small curated table + generic fallback) ----------------
const HISTORICAL_FACTS: Record<string, string> = {
  '01-01': 'In 1892, Ellis Island opened, welcoming immigrants to the United States.',
  '01-28': 'In 1986, the Challenger space shuttle launched on this day.',
  '02-01': 'In 2003, the Space Shuttle Columbia mission captured the world\'s attention.',
  '02-12': 'Abraham Lincoln was born on this day in 1809.',
  '03-14': 'Albert Einstein was born on this day in 1879 — also known as Pi Day (3.14)!',
  '04-12': 'In 1961, Yuri Gagarin became the first human in space.',
  '05-25': 'In 1961, President Kennedy announced the goal of landing a man on the Moon.',
  '06-19': 'Juneteenth marks the day in 1865 when enslaved people in Texas learned they were free.',
  '07-04': 'In 1776, the Declaration of Independence was adopted.',
  '07-20': 'In 1969, Apollo 11 landed the first humans on the Moon.',
  '08-28': 'In 1963, Dr. Martin Luther King Jr. delivered his "I Have a Dream" speech.',
  '09-17': 'In 1787, the U.S. Constitution was signed in Philadelphia.',
  '10-14': 'In 1947, Chuck Yeager became the first pilot to break the sound barrier.',
  '11-09': 'In 1989, the Berlin Wall began to come down.',
  '12-17': 'In 1903, the Wright brothers achieved the first powered flight.',
};
const GENERIC_FACTS = [
  'Every day is history in the making — today, somewhere, someone is setting a record that future students will read about!',
  'On this day throughout history, inventors, explorers and artists were hard at work changing the world.',
  'History reminds us: big change usually starts with one small, ordinary day — like today.',
];
export function historicalFactFor(d: Date): string {
  const key = String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  return HISTORICAL_FACTS[key] ?? GENERIC_FACTS[d.getDate() % GENERIC_FACTS.length];
}

// ---------------- Holidays (MM-DD, fixed-date ones only, for "coming up") ----------------
const HOLIDAYS: { date: string; name: string }[] = [
  { date: '01-01', name: "New Year's Day" },
  { date: '02-14', name: "Valentine's Day" },
  { date: '03-17', name: "St. Patrick's Day" },
  { date: '04-22', name: 'Earth Day' },
  { date: '05-05', name: 'Cinco de Mayo' },
  { date: '06-19', name: 'Juneteenth' },
  { date: '07-04', name: 'Independence Day' },
  { date: '09-01', name: 'Labor Day (observed early Sept.)' },
  { date: '10-31', name: 'Halloween' },
  { date: '11-11', name: 'Veterans Day' },
  { date: '11-27', name: 'Thanksgiving (late Nov.)' },
  { date: '12-25', name: 'Winter Holiday' },
];
export function upcomingHolidays(d: Date, withinDays = 21): { name: string; daysAway: number }[] {
  const out: { name: string; daysAway: number }[] = [];
  for (let i = 0; i <= withinDays; i++) {
    const test = new Date(d.getTime() + i * 86400000);
    const key = String(test.getMonth() + 1).padStart(2, '0') + '-' + String(test.getDate()).padStart(2, '0');
    const h = HOLIDAYS.find((x) => x.date === key);
    if (h) out.push({ name: h.name, daysAway: i });
  }
  return out.slice(0, 3);
}

// ---------------- Vocabulary (rotating 3/day) ----------------
const VOCAB_POOL: { word: string; def: string }[] = [
  { word: 'Resilient', def: 'able to recover quickly from difficulty.' },
  { word: 'Curious', def: 'eager to learn or know more about something.' },
  { word: 'Empathy', def: 'the ability to understand and share how someone else feels.' },
  { word: 'Diligent', def: 'showing care and steady effort in your work.' },
  { word: 'Collaborate', def: 'to work together with others toward a shared goal.' },
  { word: 'Perspective', def: "a particular way of viewing or thinking about something." },
  { word: 'Integrity', def: 'doing the right thing even when no one is watching.' },
  { word: 'Innovate', def: 'to introduce a new idea, method, or product.' },
  { word: 'Persevere', def: 'to keep going despite difficulty or delay in achieving success.' },
  { word: 'Gratitude', def: 'the quality of being thankful.' },
  { word: 'Analyze', def: 'to examine something in detail to understand it better.' },
  { word: 'Community', def: 'a group of people living in or connected to the same place.' },
];
export function vocabForDay(day: number): { word: string; def: string }[] {
  const n = VOCAB_POOL.length;
  const start = (day * 3) % n;
  return [0, 1, 2].map((i) => VOCAB_POOL[(start + i) % n]);
}

// ---------------- Health facts, one per bodily system, rotating by day ----------------
const HEALTH_FACTS: { system: string; fact: string }[] = [
  { system: 'Circulatory System', fact: 'Your heart beats about 100,000 times a day, pumping blood through 60,000 miles of blood vessels.' },
  { system: 'Respiratory System', fact: 'Your lungs contain about 300 million tiny air sacs called alveoli that bring oxygen into your blood.' },
  { system: 'Digestive System', fact: 'It takes food roughly 24–72 hours to travel all the way through your digestive system.' },
  { system: 'Skeletal System', fact: 'You are born with about 300 bones, but adults have only 206 — many fuse together as you grow.' },
  { system: 'Muscular System', fact: 'The human body has over 600 muscles, and the strongest one for its size is the masseter, used for chewing.' },
  { system: 'Nervous System', fact: 'Nerve signals can travel through your body at speeds up to 268 miles per hour.' },
  { system: 'Immune System', fact: 'White blood cells constantly patrol your body, recognizing and fighting off germs you encounter every day.' },
  { system: 'Endocrine System', fact: 'Hormones from glands like the thyroid and pancreas help control your growth, energy, and mood.' },
  { system: 'Urinary System', fact: 'Your kidneys filter about 50 gallons of blood every single day to remove waste.' },
  { system: 'Integumentary System', fact: 'Your skin is your largest organ and completely replaces itself roughly every 27 days.' },
];
export function healthFactForDay(day: number): { system: string; fact: string } {
  return HEALTH_FACTS[day % HEALTH_FACTS.length];
}

// ---------------- News (sample placeholder content, rotates by day) ----------------
interface NewsItem { headline: string; body: string; icon: string }
const LOCAL_EVENTS: NewsItem[] = [
  { headline: 'Fall Craft Fair This Saturday', body: 'The community center on Maple Ave. hosts local artisans from 10am–4pm — free admission for students.', icon: '🎨' },
  { headline: 'City Park Cleanup Day', body: 'Volunteers are meeting at Cedar Park Saturday morning to help plant new trees along the walking trail.', icon: '🌳' },
  { headline: 'Farmers Market Extends Hours', body: 'The downtown farmers market will now stay open until 3pm on weekends through the season.', icon: '🥕' },
  { headline: 'Library Reading Challenge', body: 'The public library kicked off its seasonal reading challenge — badges for every 5 books finished!', icon: '📚' },
  { headline: 'New Bike Lane Opens', body: 'A protected bike lane now connects the school district to the downtown greenway.', icon: '🚲' },
];
const LOCAL_NEWS: NewsItem[] = [
  { headline: 'Town Council Approves New Playground', body: 'Construction begins next month on an accessible playground at Riverside Park.', icon: '🛝' },
  { headline: 'Road Work on Elm Street', body: 'Expect delays near Elm and 5th through Friday as crews repave the intersection.', icon: '🚧' },
  { headline: 'Local Youth Team Advances', body: 'The district\'s youth soccer team won its regional match and heads to the semifinals next week.', icon: '⚽' },
  { headline: 'Fire Department Adds New Truck', body: 'The local fire station welcomed a new engine, upgrading response capacity across the county.', icon: '🚒' },
];
const NATIONAL_NEWS: NewsItem[] = [
  { headline: 'Students Nationwide Compete in Science Fair', body: 'Young scientists from across the country are showcasing inventions at this year\'s national finals.', icon: '🔬' },
  { headline: 'New Wildlife Refuge Established', body: 'A newly protected wetland will give a boost to migratory bird populations nationwide.', icon: '🦆' },
  { headline: 'Record Year for Clean Energy', body: 'Solar and wind power generation reached a new national high this year.', icon: '⚡' },
];
const INTERNATIONAL_NEWS: NewsItem[] = [
  { headline: 'Ocean Cleanup Milestone', body: 'An international team announced removing another large batch of plastic from the Pacific.', icon: '🌊' },
  { headline: 'World Robotics Competition', body: 'Student teams from over 40 countries gathered to compete in this year\'s robotics championship.', icon: '🤖' },
  { headline: 'New Species Discovered', body: 'Researchers identified a new species of frog deep in a rainforest reserve.', icon: '🐸' },
];
function pick<T>(arr: T[], day: number, count: number): T[] {
  const out: T[] = [];
  for (let i = 0; i < count; i++) out.push(arr[(day + i) % arr.length]);
  return out;
}
export function newsForDay(day: number) {
  return {
    localEvents: pick(LOCAL_EVENTS, day, 3),
    localNews: pick(LOCAL_NEWS, day, 2),
    national: pick(NATIONAL_NEWS, day, 1)[0],
    international: pick(INTERNATIONAL_NEWS, day, 1)[0],
  };
}

// ---------------- School calendar (placeholder, relative to save day) ----------------
export function calendarForDay(day: number): string[] {
  const upcoming = [
    'Picture Day — bring your best smile!',
    'Science Fair project proposals due',
    'Early Dismissal — teacher planning day',
    'Fall Book Fair in the library',
    'Parent-Teacher Conferences this week',
    'Winter Concert rehearsal after school',
    'Spirit Week kicks off Monday',
  ];
  const start = day % upcoming.length;
  return [0, 1].map((i) => upcoming[(start + i) % upcoming.length]);
}
