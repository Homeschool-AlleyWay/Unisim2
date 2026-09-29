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
/** Supabase Realtime allows only 5 presence calls per client per 30 s (all plans). A client that
 *  exceeds it gets "Client presence rate limit exceeded" and is dropped from presence, so the parent
 *  dashboard shows the student offline. Presence therefore carries only slow-changing state (online,
 *  room, seat) and is sent at most every 8 s (≤4 per 30 s, leaving room for a rejoin). */
const PRESENCE_MIN_INTERVAL_MS = 8000;
/** Walking positions go over broadcast messages instead (separate, much higher limits), at most 1/s and only while moving. */
const POSITION_MIN_INTERVAL_MS = 1000;
type PositionMsg = Pick<PresenceState, 'id' | 'x' | 'y' | 'dir' | 'pose' | 'seatId' | 'room'>;
/** Movement smaller than this (world px, 2 tiles) is not worth a presence update on its own. */
const PRESENCE_MOVE_PX = 32;

export class Presence {
  private channel;
  private me: PresenceState;
  /** Last state actually sent with track(); null until the first send after subscribing. */
  private sent: PresenceState | null = null;
  private lastSendAt = 0;
  private subscribed = false;
  private trailing: ReturnType<typeof setTimeout> | null = null;
  private failures = 0;
  private destroyed = false;
  /** Latest broadcast position per remote player; overrides their (slower) presence position. */
  private positions = new Map<string, PositionMsg>();
  private lastPos: PositionMsg | null = null;
  private lastPosAt = 0;
  onUpdate: (others: PresenceState[]) => void = () => {};

  constructor(me: PresenceState) {
    this.me = { ...me };
    this.channel = getSupabase().channel('maple-grove-school', { config: { presence: { key: me.id } } });
    this.channel.on('presence', { event: 'sync' }, () => this.emit());
    this.channel.on('broadcast', { event: 'pos' }, ({ payload }) => {
      const m = payload as PositionMsg;
      if (!m || typeof m.id !== 'string' || m.id === this.me.id) return;
      this.positions.set(m.id, m);
      this.emit();
    });
    this.channel.subscribe((status) => {
      // Also fires again after an automatic rejoin — re-announce ourselves then.
      this.subscribed = status === 'SUBSCRIBED';
      if (this.subscribed) { this.sent = null; this.flush(); }
    });
  }

  private emit() {
    const state = this.channel.presenceState<PresenceState>();
    const others: PresenceState[] = [];
    for (const key of Object.keys(state)) {
      if (key === this.me.id) continue;
      const entries = state[key];
      if (entries && entries[0]) {
        const pos = this.positions.get(key);
        others.push(pos ? { ...entries[0], ...pos } : entries[0]);
      }
    }
    for (const id of this.positions.keys()) if (!state[id]) this.positions.delete(id); // left the school
    this.onUpdate(others);
  }

  /** Room, seat, sitting and walking a couple of tiles count; walk-cycle frames and facing do not. */
  private meaningfulChange(): boolean {
    const a = this.sent, b = this.me;
    if (!a) return true;
    if (a.room !== b.room || a.seatId !== b.seatId || (a.pose === 'sit') !== (b.pose === 'sit')) return true;
    if (a.username !== b.username || a.grade !== b.grade) return true;
    return Math.hypot(a.x - b.x, a.y - b.y) >= PRESENCE_MOVE_PX;
  }

  private flush() {
    if (this.destroyed || !this.subscribed || !this.meaningfulChange()) return;
    const wait = this.lastSendAt + PRESENCE_MIN_INTERVAL_MS - Date.now();
    if (wait > 0) {
      // Too soon — send the latest state once the interval is up (one pending send at most).
      if (!this.trailing) this.trailing = setTimeout(() => { this.trailing = null; this.flush(); }, wait);
      return;
    }
    this.lastSendAt = Date.now();
    const sending = { ...this.me };
    this.sent = sending;
    const failed = (why: unknown) => {
      if (this.destroyed) return;
      console.warn('[presence] track() failed:', why);
      // Not acknowledged: forget it so the next flush re-sends, and retry with backoff
      // (a stationary student would otherwise never trigger another send and stay offline).
      if (this.sent === sending) this.sent = null;
      this.failures++;
      const delay = Math.min(30000, PRESENCE_MIN_INTERVAL_MS * 2 ** Math.min(this.failures, 4));
      this.lastSendAt = Date.now() + delay - PRESENCE_MIN_INTERVAL_MS;
      if (this.trailing) clearTimeout(this.trailing);
      this.trailing = setTimeout(() => { this.trailing = null; this.flush(); }, delay);
    };
    this.channel.track(sending).then((res) => {
      if (res === 'ok') this.failures = 0;
      else failed(res);
    }).catch(failed);
  }

  /** Position for other players' avatars: broadcast at most once a second, only when it changed. */
  private sendPosition() {
    if (this.destroyed || !this.subscribed || Date.now() - this.lastPosAt < POSITION_MIN_INTERVAL_MS) return;
    const m = this.me;
    const pos: PositionMsg = { id: m.id, x: Math.round(m.x), y: Math.round(m.y), dir: m.dir, pose: m.pose === 'sit' ? 'sit' : 'stand', seatId: m.seatId, room: m.room };
    const l = this.lastPos;
    if (l && l.x === pos.x && l.y === pos.y && l.dir === pos.dir && l.pose === pos.pose && l.seatId === pos.seatId && l.room === pos.room) return;
    this.lastPos = pos;
    this.lastPosAt = Date.now();
    this.channel.send({ type: 'broadcast', event: 'pos', payload: pos }).catch(() => {});
  }

  /** Safe to call often: state is merged locally; presence and position sends are throttled. */
  update(patch: Partial<PresenceState>) {
    Object.assign(this.me, patch);
    this.flush();
    this.sendPosition();
  }

  destroy() {
    this.destroyed = true;
    if (this.trailing) clearTimeout(this.trailing);
    this.trailing = null;
    this.channel.unsubscribe();
  }
}
