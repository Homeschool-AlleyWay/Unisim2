// UNIFY Character System — shared type definitions.
// Visual fields reuse the game's `Look` model so every character (player avatar,
// teacher, daily NPC) can be drawn with the same sprite renderer.
import type { Look, HairStyle, Outfit } from '@/game/art/characters';

export type { Look, HairStyle, Outfit };

export type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
export const WEEKDAYS: Weekday[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

export type Accessory = NonNullable<Look['accessory']>;

/** Everything the player can change about their own avatar. */
export interface AvatarCustomization {
  name: string;
  skin: string;
  hair: string;
  hairStyle: HairStyle;
  eyeColor: string;
  shirt: string;
  pants: string;
  shoes: string;
  outfit: Outfit;
  accessory: Accessory;
  glasses: boolean;
  backpack: string;
}

export type CharacterMood = 'happy' | 'focused' | 'tired' | 'excited' | 'curious' | 'calm';

/** Runtime state shared by every character in the school. */
export interface CharacterState {
  mood: CharacterMood;
  energy: number; // 0-100
  location: string; // room id or area name
  activity: string;
}

export type SubjectArea =
  | 'Math'
  | 'ELA'
  | 'Science'
  | 'History'
  | 'Geography'
  | 'Library'
  | 'Social Studies'
  | 'Biology';

export interface VoiceProfile {
  /** Preferred Web Speech voice name fragments, first match wins. */
  preferredVoices: string[];
  pitch: number; // 0.5 - 2
  rate: number; // 0.5 - 2
  tone: string; // short description used for prompts / captions
}

export interface TeacherOutfit {
  day: Weekday;
  label: string;
  outfit: Outfit;
  shirt: string;
  pants: string;
  shoes: string;
  accessory: Accessory;
}

export interface TeacherProfile {
  id: string;
  name: string;
  title: 'Ms.' | 'Mr.' | 'Dr.' | 'Mrs.';
  subject: SubjectArea;
  room: string;
  expertise: string[];
  personality: string[];
  teachingStyle: string;
  /** Base appearance; per-day outfit fields are layered on top. */
  base: Pick<Look, 'skin' | 'hair' | 'eyeColor' | 'glasses'>;
  hairStyles: HairStyle[];
  outfits: TeacherOutfit[]; // exactly five, Mon-Fri
  voice: VoiceProfile;
  quotes: string[];
  catchphrase: string;
}

export interface TeacherToday extends TeacherProfile {
  weekday: Weekday;
  todayOutfit: TeacherOutfit;
  todayHairStyle: HairStyle;
  look: Look;
}

export type NPCArchetype =
  | 'bookworm'
  | 'athlete'
  | 'artist'
  | 'class clown'
  | 'scientist'
  | 'musician'
  | 'gamer'
  | 'leader'
  | 'daydreamer'
  | 'new kid';

export interface NPCStudent {
  id: string;
  name: string;
  grade: number;
  archetype: NPCArchetype;
  favoriteSubject: SubjectArea;
  personality: string[];
  greeting: string;
  look: Look;
  state: CharacterState;
}

export interface DailyRoster {
  /** ISO date (UTC) the roster was generated for, e.g. "2026-09-28". */
  dateKey: string;
  seed: number;
  students: NPCStudent[];
}
