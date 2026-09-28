// UNIFY Character System — the eight faculty members of the school.
// Each teacher has a fixed base appearance, a pool of hairstyles, a Mon-Fri outfit
// rotation, a voice profile for narration, and a set of quotes used in dialogue.
import type { TeacherProfile, TeacherOutfit, Weekday } from '@/types/character';
import { WEEKDAYS } from '@/types/character';

type OutfitSpec = Omit<TeacherOutfit, 'day'>;

/** Assigns Mon-Fri to five outfit specs in order. */
function week(specs: [OutfitSpec, OutfitSpec, OutfitSpec, OutfitSpec, OutfitSpec]): TeacherOutfit[] {
  return specs.map((s, i) => ({ day: WEEKDAYS[i] as Weekday, ...s }));
}

export const TEACHERS: TeacherProfile[] = [
  {
    id: 'keisha-williams',
    name: 'Keisha Williams',
    title: 'Ms.',
    subject: 'Math',
    room: 'Classroom A',
    expertise: ['Algebra', 'Fractions & ratios', 'Math puzzles', 'Number sense'],
    personality: ['energetic', 'encouraging', 'precise', 'playfully competitive'],
    teachingStyle: 'Turns every lesson into a challenge board and celebrates the fastest correct reasoning, not just the fastest answer.',
    base: { skin: '#8f5b3b', hair: '#2b2024', eyeColor: '#2b2033', glasses: false },
    hairStyles: ['curly', 'bun', 'afro'],
    outfits: week([
      { label: 'Sunny blazer', outfit: 'blazer', shirt: '#f2c94c', pants: '#2d2a33', shoes: '#2d2a33', accessory: 'earrings' },
      { label: 'Coral dress', outfit: 'dress', shirt: '#e2544a', pants: '#2d2a33', shoes: '#f4f0e6', accessory: 'headband' },
      { label: 'Teal tee', outfit: 'tee', shirt: '#3fa7a0', pants: '#3b4a78', shoes: '#f4f0e6', accessory: 'earrings' },
      { label: 'Navy blazer', outfit: 'blazer', shirt: '#3b3f58', pants: '#6b5a4a', shoes: '#2d2a33', accessory: 'none' },
      { label: 'Friday hoodie', outfit: 'hoodie', shirt: '#8b6fd1', pants: '#2d2a33', shoes: '#e2544a', accessory: 'earrings' },
    ]),
    voice: { preferredVoices: ['Aria', 'Samantha', 'Google US English'], pitch: 1.1, rate: 1.05, tone: 'bright and upbeat' },
    quotes: [
      'Math is just patterns wearing a disguise. Let\'s unmask them.',
      'Show me your thinking, not just your answer.',
      'Wrong answers are data. Data is how we win.',
    ],
    catchphrase: 'Let\'s crunch it!',
  },
  {
    id: 'james-chen',
    name: 'James Chen',
    title: 'Mr.',
    subject: 'ELA',
    room: 'Classroom B',
    expertise: ['Creative writing', 'Poetry', 'Reading comprehension', 'Grammar'],
    personality: ['calm', 'witty', 'observant', 'patient'],
    teachingStyle: 'Starts class with a one-line story prompt and lets students argue about where it should go.',
    base: { skin: '#f1c29e', hair: '#2b2024', eyeColor: '#4a2f22', glasses: true },
    hairStyles: ['short', 'buzz'],
    outfits: week([
      { label: 'Cardigan Monday', outfit: 'hoodie', shirt: '#6b5a4a', pants: '#3b4a78', shoes: '#6b4a3a', accessory: 'none' },
      { label: 'Denim & tee', outfit: 'tee', shirt: '#4f86d9', pants: '#2d2a33', shoes: '#f4f0e6', accessory: 'none' },
      { label: 'Grey blazer', outfit: 'blazer', shirt: '#3b3f58', pants: '#2d2a33', shoes: '#2d2a33', accessory: 'none' },
      { label: 'Forest green', outfit: 'tee', shirt: '#6cbf6a', pants: '#6b5a4a', shoes: '#6b4a3a', accessory: 'none' },
      { label: 'Book-club hoodie', outfit: 'hoodie', shirt: '#3fa7a0', pants: '#3b4a78', shoes: '#4f5a78', accessory: 'none' },
    ]),
    voice: { preferredVoices: ['Daniel', 'Google UK English Male', 'Alex'], pitch: 0.95, rate: 0.95, tone: 'warm and measured' },
    quotes: [
      'Every sentence is a tiny decision. Make it on purpose.',
      'Read it out loud. Your ears are better editors than your eyes.',
      'A good story asks a question the reader wants answered.',
    ],
    catchphrase: 'Once upon a time...',
  },
  {
    id: 'maria-rodriguez',
    name: 'Maria Rodriguez',
    title: 'Ms.',
    subject: 'Science',
    room: 'Science Lab',
    expertise: ['Chemistry basics', 'Physics of motion', 'Scientific method', 'Lab safety'],
    personality: ['curious', 'hands-on', 'bold', 'meticulous'],
    teachingStyle: 'Demonstration first, explanation second. If it fizzes, pops, or glows, it is on the lesson plan.',
    base: { skin: '#dda47c', hair: '#4a2f22', eyeColor: '#7a4a2a', glasses: true },
    hairStyles: ['ponytail', 'bun', 'long'],
    outfits: week([
      { label: 'Lab apron', outfit: 'apron', shirt: '#f4f0e6', pants: '#3b4a78', shoes: '#2d2a33', accessory: 'none' },
      { label: 'Orange tee', outfit: 'tee', shirt: '#f29b3b', pants: '#2d2a33', shoes: '#f4f0e6', accessory: 'earrings' },
      { label: 'Lab apron', outfit: 'apron', shirt: '#3fa7a0', pants: '#2d2a33', shoes: '#2d2a33', accessory: 'none' },
      { label: 'Purple hoodie', outfit: 'hoodie', shirt: '#8b6fd1', pants: '#3b4a78', shoes: '#4f5a78', accessory: 'headband' },
      { label: 'Field-trip overalls', outfit: 'overalls', shirt: '#f2c94c', pants: '#5b7fb5', shoes: '#6b4a3a', accessory: 'none' },
    ]),
    voice: { preferredVoices: ['Paulina', 'Google español', 'Samantha'], pitch: 1.05, rate: 1.1, tone: 'excited and quick' },
    quotes: [
      'Goggles on. Curiosity up.',
      'A hypothesis is a brave guess with a plan.',
      'Nothing exploded, so today counts as a success.',
    ],
    catchphrase: 'Let\'s test it!',
  },
  {
    id: 'david-patel',
    name: 'David Patel',
    title: 'Mr.',
    subject: 'History',
    room: 'Classroom C',
    expertise: ['Ancient civilizations', 'Timelines', 'Primary sources', 'World history'],
    personality: ['thoughtful', 'dramatic storyteller', 'fair', 'dry humor'],
    teachingStyle: 'Teaches history as a series of choices and asks the class what they would have done differently.',
    base: { skin: '#b97d55', hair: '#2b2024', eyeColor: '#2b2033', glasses: false },
    hairStyles: ['short', 'curly'],
    outfits: week([
      { label: 'Brown blazer', outfit: 'blazer', shirt: '#6b5a4a', pants: '#2d2a33', shoes: '#6b4a3a', accessory: 'none' },
      { label: 'Maroon tee', outfit: 'tee', shirt: '#8a4a5a', pants: '#3b4a78', shoes: '#2d2a33', accessory: 'none' },
      { label: 'Olive hoodie', outfit: 'hoodie', shirt: '#4a6b4a', pants: '#6b5a4a', shoes: '#6b4a3a', accessory: 'none' },
      { label: 'Navy blazer', outfit: 'blazer', shirt: '#3b3f58', pants: '#3b4a78', shoes: '#2d2a33', accessory: 'none' },
      { label: 'Museum-day tee', outfit: 'tee', shirt: '#f2c94c', pants: '#2d2a33', shoes: '#f4f0e6', accessory: 'none' },
    ]),
    voice: { preferredVoices: ['Rishi', 'Daniel', 'Google UK English Male'], pitch: 0.9, rate: 0.92, tone: 'deep and deliberate' },
    quotes: [
      'History is not about dates. It is about people who did not know how the story ends.',
      'Ask who wrote it, and why, before you ask what it says.',
      'Every empire thought it was permanent.',
    ],
    catchphrase: 'Picture this...',
  },
  {
    id: 'sophie-laurent',
    name: 'Sophie Laurent',
    title: 'Ms.',
    subject: 'Geography',
    room: 'Classroom D',
    expertise: ['Maps & navigation', 'Climate zones', 'Cultures of the world', 'Landforms'],
    personality: ['adventurous', 'cheerful', 'organized', 'globetrotter'],
    teachingStyle: 'Every unit starts with a postcard from somewhere and ends with students planning a trip there.',
    base: { skin: '#f8dcc4', hair: '#c7893f', eyeColor: '#3d6fb0', glasses: false },
    hairStyles: ['bob', 'long', 'ponytail'],
    outfits: week([
      { label: 'Sky-blue dress', outfit: 'dress', shirt: '#4f86d9', pants: '#2d2a33', shoes: '#f4f0e6', accessory: 'headband' },
      { label: 'Striped tee', outfit: 'tee', shirt: '#e874a8', pants: '#3b4a78', shoes: '#f4f0e6', accessory: 'earrings' },
      { label: 'Safari overalls', outfit: 'overalls', shirt: '#f4f0e6', pants: '#6b5a4a', shoes: '#6b4a3a', accessory: 'none' },
      { label: 'Cream blazer', outfit: 'blazer', shirt: '#f4f0e6', pants: '#3b4a78', shoes: '#c0504d', accessory: 'earrings' },
      { label: 'Travel hoodie', outfit: 'hoodie', shirt: '#3fa7a0', pants: '#2d2a33', shoes: '#4f86d9', accessory: 'bow' },
    ]),
    voice: { preferredVoices: ['Amélie', 'Google français', 'Karen'], pitch: 1.15, rate: 1.0, tone: 'light and cheerful' },
    quotes: [
      'A map is a story told from above.',
      'Rivers decide where cities are born.',
      'Pack your curiosity; we leave in five minutes.',
    ],
    catchphrase: 'Off we go!',
  },
  {
    id: 'marcus-thompson',
    name: 'Marcus Thompson',
    title: 'Mr.',
    subject: 'Library',
    room: 'Library',
    expertise: ['Research skills', 'Book recommendations', 'Media literacy', 'Study strategies'],
    personality: ['gentle', 'endlessly well-read', 'quietly funny', 'patient'],
    teachingStyle: 'Never tells you the answer; hands you the book that has it and a bookmark on the right chapter.',
    base: { skin: '#5f3c29', hair: '#2b2024', eyeColor: '#2b2033', glasses: true },
    hairStyles: ['buzz', 'short'],
    outfits: week([
      { label: 'Mustard cardigan', outfit: 'hoodie', shirt: '#f2c94c', pants: '#6b5a4a', shoes: '#6b4a3a', accessory: 'none' },
      { label: 'Plaid tee', outfit: 'tee', shirt: '#c0504d', pants: '#3b4a78', shoes: '#2d2a33', accessory: 'none' },
      { label: 'Tweed blazer', outfit: 'blazer', shirt: '#6b5a4a', pants: '#2d2a33', shoes: '#6b4a3a', accessory: 'none' },
      { label: 'Slate hoodie', outfit: 'hoodie', shirt: '#4f5a78', pants: '#2d2a33', shoes: '#f4f0e6', accessory: 'none' },
      { label: 'Reading-club tee', outfit: 'tee', shirt: '#6cbf6a', pants: '#6b5a4a', shoes: '#6b4a3a', accessory: 'none' },
    ]),
    voice: { preferredVoices: ['Fred', 'Google US English', 'Daniel'], pitch: 0.85, rate: 0.9, tone: 'soft and unhurried' },
    quotes: [
      'The right book finds you when you are ready to read it.',
      'Cite your sources; future you will say thanks.',
      'Quiet voices, loud ideas.',
    ],
    catchphrase: 'Shh... but yes.',
  },
  {
    id: 'angela-washington',
    name: 'Angela Washington',
    title: 'Ms.',
    subject: 'Social Studies',
    room: 'Classroom E',
    expertise: ['Civics & government', 'Community', 'Economics basics', 'Current events'],
    personality: ['confident', 'fair-minded', 'inspiring', 'debate coach'],
    teachingStyle: 'Runs the class like a town hall: every voice gets the floor, and every claim needs evidence.',
    base: { skin: '#b97d55', hair: '#4a2f22', eyeColor: '#4a2f22', glasses: false },
    hairStyles: ['long', 'bun', 'curly'],
    outfits: week([
      { label: 'Power blazer', outfit: 'blazer', shirt: '#e2544a', pants: '#2d2a33', shoes: '#2d2a33', accessory: 'earrings' },
      { label: 'Emerald dress', outfit: 'dress', shirt: '#6cbf6a', pants: '#2d2a33', shoes: '#f4f0e6', accessory: 'earrings' },
      { label: 'Denim tee', outfit: 'tee', shirt: '#5b7fb5', pants: '#3b4a78', shoes: '#f4f0e6', accessory: 'headband' },
      { label: 'Plum blazer', outfit: 'blazer', shirt: '#8b6fd1', pants: '#2d2a33', shoes: '#2d2a33', accessory: 'earrings' },
      { label: 'Spirit-day hoodie', outfit: 'hoodie', shirt: '#4f86d9', pants: '#2d2a33', shoes: '#f4f0e6', accessory: 'none' },
    ]),
    voice: { preferredVoices: ['Ava', 'Google US English', 'Samantha'], pitch: 1.0, rate: 1.0, tone: 'clear and confident' },
    quotes: [
      'Democracy is a group project. Do your part.',
      'Disagree with the idea, never with the person.',
      'Facts first, opinions second, respect always.',
    ],
    catchphrase: 'The floor is yours.',
  },
  {
    id: 'rachel-kim',
    name: 'Rachel Kim',
    title: 'Dr.',
    subject: 'Biology',
    room: 'Science Lab',
    expertise: ['Cells & DNA', 'Ecosystems', 'Human body', 'Field observation'],
    personality: ['brilliant', 'kind', 'a little absent-minded', 'nature lover'],
    teachingStyle: 'Brings something alive to class every week and asks the students to figure out how it survives.',
    base: { skin: '#f1c29e', hair: '#2b2024', eyeColor: '#2b2033', glasses: true },
    hairStyles: ['bob', 'ponytail', 'long'],
    outfits: week([
      { label: 'Lab apron', outfit: 'apron', shirt: '#6cbf6a', pants: '#2d2a33', shoes: '#2d2a33', accessory: 'none' },
      { label: 'Fern tee', outfit: 'tee', shirt: '#4a6b4a', pants: '#3b4a78', shoes: '#f4f0e6', accessory: 'none' },
      { label: 'Lab apron', outfit: 'apron', shirt: '#4f86d9', pants: '#2d2a33', shoes: '#2d2a33', accessory: 'earrings' },
      { label: 'Field overalls', outfit: 'overalls', shirt: '#f29b3b', pants: '#6b5a4a', shoes: '#6b4a3a', accessory: 'none' },
      { label: 'Conference blazer', outfit: 'blazer', shirt: '#3b3f58', pants: '#2d2a33', shoes: '#2d2a33', accessory: 'earrings' },
    ]),
    voice: { preferredVoices: ['Yuna', 'Google 한국의', 'Karen'], pitch: 1.05, rate: 0.98, tone: 'gentle and precise' },
    quotes: [
      'You are made of trillions of cells that all agreed to be you today.',
      'Observe first. Name it later.',
      'Every ecosystem is a budget. Nothing is free.',
    ],
    catchphrase: 'Fascinating, isn\'t it?',
  },
];

export const TEACHER_BY_ID: Record<string, TeacherProfile> = Object.fromEntries(TEACHERS.map((t) => [t.id, t]));

export function teacherDisplayName(t: Pick<TeacherProfile, 'title' | 'name'>) {
  return `${t.title} ${t.name}`;
}
