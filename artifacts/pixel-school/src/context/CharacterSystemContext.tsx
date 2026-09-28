// UNIFY Character System — React context exposing teachers, today's NPC roster and
// the player's avatar to any component in the app.
// Day-derived data and avatar state live in separate contexts so editing the avatar
// does not regenerate the roster or re-render every teacher/student consumer.
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { TEACHERS, TEACHER_BY_ID } from '@/data/characterAssetManifest';
import { useAvatarCustomization as useAvatarCustomizationHook, type AvatarCustomizationApi } from '@/hooks/useAvatarCustomization';
import { dateKeyFor, generateDailyRoster, teacherLookForDay, teachersForDay, weekdayFor } from '@/services/npcGenerationService';
import type { DailyRoster, NPCStudent, TeacherProfile, TeacherToday, Weekday } from '@/types/character';

interface CharacterDayValue {
  today: Date;
  dateKey: string;
  weekday: Weekday;
  teachers: TeacherToday[];
  roster: DailyRoster;
}

const CharacterDayContext = createContext<CharacterDayValue | null>(null);
const AvatarContext = createContext<AvatarCustomizationApi | null>(null);

/** Milliseconds until the next UTC midnight, when the roster and outfits roll over. */
function msUntilNextUtcDay(now: Date) {
  const next = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1);
  return Math.max(1000, next - now.getTime());
}

export function CharacterSystemProvider({ children, date }: { children: ReactNode; date?: Date }) {
  const [today, setToday] = useState<Date>(() => date ?? new Date());
  useEffect(() => { if (date) setToday(date); }, [date]);

  // Roll over automatically at UTC midnight so a tab left open gets the new day's students.
  useEffect(() => {
    if (date) return;
    const id = window.setTimeout(() => setToday(new Date()), msUntilNextUtcDay(new Date()));
    return () => window.clearTimeout(id);
  }, [date, today]);

  const dateKey = dateKeyFor(today);
  const day = useMemo<CharacterDayValue>(() => ({
    today,
    dateKey,
    weekday: weekdayFor(today),
    teachers: teachersForDay(today),
    roster: generateDailyRoster(today),
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [dateKey]);

  const avatar = useAvatarCustomizationHook();

  return (
    <CharacterDayContext.Provider value={day}>
      <AvatarContext.Provider value={avatar}>{children}</AvatarContext.Provider>
    </CharacterDayContext.Provider>
  );
}

function useDay(): CharacterDayValue {
  const ctx = useContext(CharacterDayContext);
  if (!ctx) throw new Error('Character system hooks must be used inside <CharacterSystemProvider>.');
  return ctx;
}

/** The date the character system considers "today" (UTC-keyed). */
export function useToday(): Date { return useDay().today; }

/** All eight teachers resolved for today (outfit, hairstyle, drawable look). */
export function useAllTeachers(): TeacherToday[] { return useDay().teachers; }

export function useTeacher(id: string): TeacherToday | undefined {
  return useDay().teachers.find((t) => t.id === id);
}

/** A teacher's appearance on any weekday (for outfit previews). */
export function useTeacherOnDay(id: string, weekday: Weekday): TeacherToday | undefined {
  const { today } = useDay();
  const base: TeacherProfile | undefined = TEACHER_BY_ID[id];
  return useMemo(() => (base ? teacherLookForDay(base, weekday, today) : undefined), [base, weekday, today]);
}

/** Today's ten generated students (same for every player on the same UTC date). */
export function useTodayNPCs(): NPCStudent[] { return useDay().roster.students; }

export function useDailyRoster(): DailyRoster { return useDay().roster; }

export function useTodayWeekday(): Weekday { return useDay().weekday; }

/** The player's avatar (persisted to localStorage) plus setters. */
export function useAvatarCustomization(): AvatarCustomizationApi {
  const ctx = useContext(AvatarContext);
  if (!ctx) throw new Error('useAvatarCustomization must be used inside <CharacterSystemProvider>.');
  return ctx;
}

export { TEACHERS };
