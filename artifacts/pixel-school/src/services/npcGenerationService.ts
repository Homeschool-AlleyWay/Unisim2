// UNIFY Character System — seeded daily NPC generation.
// The roster is derived purely from the UTC calendar date, so every player sees the
// same ten students on the same day without any server round-trip.
import { rng } from '@/game/art/pixel';
import {
  ACCESSORIES, EYE_COLORS, HAIR_COLORS, HAIR_STYLES, PANTS_COLORS, SHIRT_COLORS, SHOE_COLORS, SKIN_TONES,
  type Outfit,
} from '@/game/art/characters';
import { TEACHERS } from '@/data/characterAssetManifest';
import { WEEKDAYS, type CharacterMood, type DailyRoster, type Look, type NPCArchetype, type NPCStudent, type SubjectArea, type TeacherProfile, type TeacherToday, type Weekday } from '@/types/character';

export const NPCS_PER_DAY = 10;

const FIRST_NAMES = [
  'Ava', 'Liam', 'Zoe', 'Noah', 'Maya', 'Ethan', 'Priya', 'Mateo', 'Nia', 'Owen', 'Leila', 'Jonah', 'Sana', 'Caleb',
  'Ruby', 'Amir', 'Isla', 'Theo', 'Kira', 'Diego', 'Hana', 'Elijah', 'Wren', 'Kai', 'Aisha', 'Felix', 'Rosa', 'Milo',
  'Nora', 'Tariq', 'June', 'Andre', 'Sofia', 'Ravi', 'Elena', 'Marcus', 'Yara', 'Ben', 'Chloe', 'Omar',
];
const LAST_NAMES = [
  'Nguyen', 'Garcia', 'Okafor', 'Silva', 'Brooks', 'Haddad', 'Novak', 'Kaur', 'Reyes', 'Tanaka', 'Fischer', 'Abara',
  'Morales', 'Petrov', 'Ibrahim', 'Lopez', 'Larsen', 'Mensah', 'Costa', 'Yamada', 'Diallo', 'Bennett', 'Ali', 'Park',
];
const ARCHETYPES: NPCArchetype[] = ['bookworm', 'athlete', 'artist', 'class clown', 'scientist', 'musician', 'gamer', 'leader', 'daydreamer', 'new kid'];
const SUBJECTS: SubjectArea[] = ['Math', 'ELA', 'Science', 'History', 'Geography', 'Library', 'Social Studies', 'Biology'];
const MOODS: CharacterMood[] = ['happy', 'focused', 'tired', 'excited', 'curious', 'calm'];
const AREAS = ['Main Hallway', 'Lobby', 'Library', 'Cafeteria', 'Gym', 'Courtyard', 'Art Room', 'Music Room'];

const TRAITS: Record<NPCArchetype, string[]> = {
  bookworm: ['quiet', 'thoughtful', 'always has a book', 'great memory'],
  athlete: ['competitive', 'loud laugh', 'team captain energy', 'never sits still'],
  artist: ['doodles on everything', 'notices colors', 'dreamy', 'kind'],
  'class clown': ['quick jokes', 'loves an audience', 'secretly hardworking', 'friendly'],
  scientist: ['asks why', 'runs experiments at lunch', 'organized', 'skeptical'],
  musician: ['taps rhythms on desks', 'hums constantly', 'expressive', 'patient'],
  gamer: ['strategic', 'fast reflexes', 'talks in levels', 'loyal'],
  leader: ['confident', 'organizes group work', 'fair', 'ambitious'],
  daydreamer: ['stares out windows', 'big imagination', 'gentle', 'surprising insights'],
  'new kid': ['a little nervous', 'observant', 'eager to make friends', 'brave'],
};
const ACTIVITIES: Record<NPCArchetype, string[]> = {
  bookworm: ['reading by the lockers', 'renewing a library book', 'finishing homework early'],
  athlete: ['stretching before gym', 'bouncing a basketball', 'racing to the cafeteria'],
  artist: ['sketching the hallway', 'fixing a poster', 'mixing paint'],
  'class clown': ['telling a joke', 'balancing a tray', 'doing an impression of the bell'],
  scientist: ['measuring the water fountain', 'checking the weather station', 'labelling samples'],
  musician: ['humming the school song', 'tuning a ukulele', 'tapping out a beat'],
  gamer: ['planning a strategy', 'trading cards', 'speed-running the stairs'],
  leader: ['organizing a club sign-up', 'helping a new student', 'running for class rep'],
  daydreamer: ['watching clouds', 'inventing a story', 'wandering to the wrong room'],
  'new kid': ['reading the map', 'looking for the library', 'asking about the schedule'],
};
const GREETINGS: Record<NPCArchetype, string[]> = {
  bookworm: ['Oh! Hi. Have you read this one?', 'Shh... one more page.'],
  athlete: ['Race you to the gym!', 'Hey! Catch!'],
  artist: ['Hold still, I want to draw you.', 'Do you think this needs more blue?'],
  'class clown': ['Why did the pencil get detention? It was too sharp.', 'You laughed! I saw it.'],
  scientist: ['Quick question: how fast do you walk?', 'I have a hypothesis about you.'],
  musician: ['Listen to this rhythm!', 'What song is stuck in your head today?'],
  gamer: ['New high score in math class. Nobody cares but me.', 'Want to team up for the quiz?'],
  leader: ['We need one more for the committee. You in?', 'Good morning! Big day today.'],
  daydreamer: ['Sorry, what? I was on the moon.', 'Do you ever wonder where the hallway ends?'],
  'new kid': ['Hi... is this the way to the library?', 'I\'m new. Is the cafeteria pizza good?'],
};

/** Calendar date key in UTC so every timezone agrees on today's roster. */
export function dateKeyFor(date = new Date()): string {
  return date.toISOString().slice(0, 10);
}

/** Small stable hash so the seed is reproducible from the date string. */
export function seedFromDateKey(key: string): number {
  let h = 2166136261;
  for (let i = 0; i < key.length; i++) { h ^= key.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

function pickFrom<T>(r: () => number, arr: readonly T[]): T { return arr[Math.floor(r() * arr.length)]; }

export function generateDailyRoster(date = new Date(), count = NPCS_PER_DAY): DailyRoster {
  const dateKey = dateKeyFor(date);
  const seed = seedFromDateKey(dateKey);
  const r = rng(seed);
  const usedNames = new Set<string>();
  const archetypes = [...ARCHETYPES];
  // Shuffle archetypes so each day gets a different mix, one of each while they last.
  for (let i = archetypes.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [archetypes[i], archetypes[j]] = [archetypes[j], archetypes[i]]; }

  const students: NPCStudent[] = [];
  for (let i = 0; i < count; i++) {
    let name = '';
    do { name = `${pickFrom(r, FIRST_NAMES)} ${pickFrom(r, LAST_NAMES)}`; } while (usedNames.has(name));
    usedNames.add(name);
    const archetype = archetypes[i % archetypes.length];
    const traits = TRAITS[archetype];
    const personality = [traits[Math.floor(r() * traits.length)], traits[Math.floor(r() * traits.length)]].filter((v, idx, a) => a.indexOf(v) === idx);
    students.push({
      id: `npc-${dateKey}-${i}`,
      name,
      grade: 3 + Math.floor(r() * 6), // 3-8
      archetype,
      favoriteSubject: pickFrom(r, SUBJECTS),
      personality,
      greeting: pickFrom(r, GREETINGS[archetype]),
      look: {
        skin: pickFrom(r, SKIN_TONES),
        hair: pickFrom(r, HAIR_COLORS),
        hairStyle: pickFrom(r, HAIR_STYLES),
        shirt: pickFrom(r, SHIRT_COLORS),
        pants: pickFrom(r, PANTS_COLORS),
        shoes: pickFrom(r, SHOE_COLORS),
        outfit: pickFrom(r, ['tee', 'tee', 'hoodie', 'dress', 'overalls'] as Outfit[]),
        backpack: pickFrom(r, SHIRT_COLORS),
        glasses: r() < 0.2,
        eyeColor: pickFrom(r, EYE_COLORS),
        accessory: pickFrom(r, ACCESSORIES),
      },
      state: {
        mood: pickFrom(r, MOODS),
        energy: 55 + Math.floor(r() * 45),
        location: pickFrom(r, AREAS),
        activity: pickFrom(r, ACTIVITIES[archetype]),
      },
    });
  }
  return { dateKey, seed, students };
}

/** Weekday for a date; weekends map to Friday so the demo always has an outfit. */
export function weekdayFor(date = new Date()): Weekday {
  const d = date.getUTCDay(); // 0 Sun .. 6 Sat
  if (d === 0 || d === 6) return 'Fri';
  return WEEKDAYS[d - 1];
}

/** Resolve a teacher's appearance for one weekday: outfit rotation + hairstyle + drawable look. */
export function teacherLookForDay(t: TeacherProfile, weekday: Weekday, date = new Date()): TeacherToday {
  const todayOutfit = t.outfits.find((o) => o.day === weekday) ?? t.outfits[0];
  // Hairstyle rotates through the pool by week number so it changes but stays stable within a week.
  const weekNo = Math.floor(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()) / (7 * 86400000));
  const todayHairStyle = t.hairStyles[weekNo % t.hairStyles.length];
  const look: Look = {
    skin: t.base.skin,
    hair: t.base.hair,
    eyeColor: t.base.eyeColor,
    glasses: t.base.glasses,
    hairStyle: todayHairStyle,
    outfit: todayOutfit.outfit,
    shirt: todayOutfit.shirt,
    pants: todayOutfit.pants,
    shoes: todayOutfit.shoes,
    accessory: todayOutfit.accessory,
  };
  return { ...t, weekday, todayOutfit, todayHairStyle, look };
}

/** All eight teachers resolved for a given day (outfit + hairstyle + drawable look). */
export function teachersForDay(date = new Date()): TeacherToday[] {
  const weekday = weekdayFor(date);
  return TEACHERS.map((t) => teacherLookForDay(t, weekday, date));
}
