// Real multiplayer: any signed-in account (not just "family"/local saves) can
// appear live in the same shared school, alongside the NPCs. Backed by a real
// Supabase project (Postgres + Auth + Realtime) — see the project's profiles,
// notebook_entries and assessment_results tables.
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import type { Look } from '../art/characters';
import type { Grade } from '../data/curriculum';

const SUPABASE_URL = 'https://anuiykmxbagquiqbndnw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFudWl5a214YmFncXVpcWJuZG53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA1NjExNDMsImV4cCI6MjEwNjEzNzE0M30.h7dae08iNWrUpAH_LWo09Z_FGv03t8s_C1OsHSGsg0s';

export type Role = 'student' | 'parent';
export interface Profile { id: string; username: string; grade: Grade; look: Look; role: Role; family_code: string | null }

export interface DailyReport {
  id: string; student_id: string; day: number; report_date: string;
  attended: number; late: number; missed: number; quiz_right: number; quiz_total: number;
  homework_assigned: number; homework_done: number;
  idle_seconds: number; notes_taken: number; questions_asked: number; social_interactions: number; off_app_seconds: number;
  sent_at: string; checked: boolean; checked_at: string | null;
}

export interface PresenceState {
  id: string;
  username: string;
  grade: Grade;
  look: Look;
  x: number;
  y: number;
  room: string;
  dir: string;
  pose: string;
  seatId: number | null;
}

let client: SupabaseClient | null = null;
export function getSupabase(): SupabaseClient {
  if (!client) client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, { auth: { persistSession: true, autoRefreshToken: true } });
  return client;
}

/** Real account signup/sign-in — any player, from any device, not just a shared local save. */
export async function signUp(email: string, password: string) {
  return getSupabase().auth.signUp({ email, password });
}
export async function signIn(email: string, password: string) {
  return getSupabase().auth.signInWithPassword({ email, password });
}
export async function signOut() {
  return getSupabase().auth.signOut();
}
export async function currentUserId(): Promise<string | null> {
  const { data } = await getSupabase().auth.getSession();
  return data.session?.user.id ?? null;
}

export async function upsertProfile(id: string, username: string, grade: Grade, look: Look, role: Role = 'student') {
  return getSupabase().from('profiles').upsert({ id, username, grade, look, role, updated_at: new Date().toISOString() });
}
export async function fetchProfile(id: string): Promise<Profile | null> {
  const { data } = await getSupabase().from('profiles').select('*').eq('id', id).maybeSingle();
  return data as Profile | null;
}

// ---------------- Parent oversight (Phase 2) ----------------
/** Every student gets a short code (generated on first save) that a parent enters once to
 *  link accounts — no need to expose email addresses between family members. */
export async function getOrCreateFamilyCode(studentId: string): Promise<string> {
  const existing = await fetchProfile(studentId);
  if (existing?.family_code) return existing.family_code;
  const code = Array.from({ length: 6 }, () => '23456789ABCDEFGHJKMNPQRSTUVWXYZ'[Math.floor(Math.random() * 31)]).join('');
  await getSupabase().from('profiles').update({ family_code: code }).eq('id', studentId);
  return code;
}

export async function linkStudentByCode(parentId: string, code: string): Promise<{ ok: boolean; student?: Profile; error?: string }> {
  const { data, error } = await getSupabase().from('profiles').select('*').eq('family_code', code.trim().toUpperCase()).eq('role', 'student').maybeSingle();
  if (error || !data) return { ok: false, error: "That code didn't match a student account." };
  const student = data as Profile;
  const { error: linkErr } = await getSupabase().from('parent_links').upsert({ parent_id: parentId, student_id: student.id }, { onConflict: 'parent_id,student_id' });
  if (linkErr) return { ok: false, error: linkErr.message };
  return { ok: true, student };
}

export async function listLinkedStudents(parentId: string): Promise<Profile[]> {
  const { data: links } = await getSupabase().from('parent_links').select('student_id').eq('parent_id', parentId);
  const ids = (links ?? []).map((l: any) => l.student_id);
  if (!ids.length) return [];
  const { data } = await getSupabase().from('profiles').select('*').in('id', ids);
  return (data ?? []) as Profile[];
}

export async function fetchDailyReports(studentId: string, limit = 14): Promise<DailyReport[]> {
  const { data } = await getSupabase().from('daily_reports').select('*').eq('student_id', studentId).order('day', { ascending: false }).limit(limit);
  return (data ?? []) as DailyReport[];
}

export async function upsertDailyReport(report: Omit<DailyReport, 'id' | 'sent_at' | 'checked' | 'checked_at'>) {
  return getSupabase().from('daily_reports').upsert({ ...report, sent_at: new Date().toISOString() }, { onConflict: 'student_id,day' });
}

export async function markReportChecked(reportId: string) {
  return getSupabase().from('daily_reports').update({ checked: true, checked_at: new Date().toISOString() }).eq('id', reportId);
}

/** The Friday enforcement rule: if any of the last 4 sent reports has sat unchecked for more
 *  than 2 days, the student loses Friday's test and next week's classes until it's resolved. */
export function parentGateStatus(reports: DailyReport[]): { blocked: boolean; overdueCount: number } {
  const now = Date.now();
  const last4 = reports.slice(0, 4);
  const overdue = last4.filter((r) => !r.checked && now - new Date(r.sent_at).getTime() > 2 * 86400000);
  return { blocked: last4.length >= 4 && overdue.length > 0, overdueCount: overdue.length };
}

export async function saveNotebookEntry(userId: string, lessonId: string, content: string) {
  return getSupabase().from('notebook_entries').upsert({ user_id: userId, lesson_id: lessonId, content, updated_at: new Date().toISOString() }, { onConflict: 'user_id,lesson_id' });
}
export async function loadNotebookEntry(userId: string, lessonId: string): Promise<string> {
  const { data } = await getSupabase().from('notebook_entries').select('content').eq('user_id', userId).eq('lesson_id', lessonId).maybeSingle();
  return data?.content ?? '';
}

export async function recordAssessment(userId: string, lessonId: string, kind: 'popquiz' | 'test', score: number, total: number) {
  return getSupabase().from('assessment_results').insert({ user_id: userId, lesson_id: lessonId, kind, score, total });
}

/**
 * Live presence: every signed-in player in the same channel sees everyone
 * else's avatar move in real time (via Supabase Realtime), on top of the
 * always-present NPCs. Each player's own client still renders their own
 * grade's lesson content — presence only carries position/look/room, never
 * lesson content, so nobody's board is changed by anyone else being nearby.
 */
export class Presence {
  private channel;
  private me: PresenceState;
  onUpdate: (others: PresenceState[]) => void = () => {};

  constructor(me: PresenceState) {
    this.me = me;
    this.channel = getSupabase().channel('maple-grove-school', { config: { presence: { key: me.id } } });
    this.channel.on('presence', { event: 'sync' }, () => this.emit());
    this.channel.subscribe((status) => {
      if (status === 'SUBSCRIBED') this.channel.track(this.me);
    });
  }

  private emit() {
    const state = this.channel.presenceState<PresenceState>();
    const others: PresenceState[] = [];
    for (const key of Object.keys(state)) {
      if (key === this.me.id) continue;
      const entries = state[key];
      if (entries && entries[0]) others.push(entries[0]);
    }
    this.onUpdate(others);
  }

  /** Call at most a few times a second — Realtime presence is not meant for 60fps updates. */
  update(patch: Partial<PresenceState>) {
    Object.assign(this.me, patch);
    this.channel.track(this.me);
  }

  destroy() {
    this.channel.unsubscribe();
  }
}
