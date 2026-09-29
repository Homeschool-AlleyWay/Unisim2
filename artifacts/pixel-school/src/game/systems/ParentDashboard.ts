// Parent oversight (Phase 2): a parent signs in with their own account, links to their
// student with a short family code, and sees a live tracker plus each school day's report —
// which they must check off, or the student loses Friday's test and the following week.
import {
  DailyReport, fetchDailyReports, getSupabase, linkStudentByCode, listLinkedStudents,
  markReportChecked, parentGateStatus, Profile, signOut,
} from '../net/multiplayer';

const el = <K extends keyof HTMLElementTagNameMap>(tag: K, cls = '', text = '') => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text) e.textContent = text;
  return e;
};

const escapeHtml = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));

const fmtDate = (iso: string) => new Date(iso).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });

export class ParentDashboard {
  root: HTMLDivElement;
  private students: Profile[] = [];
  private active: Profile | null = null;
  private presenceChannel: ReturnType<ReturnType<typeof getSupabase>['channel']> | null = null;
  onExit: () => void = () => {};
  /** Set by destroy() so in-flight requests don't re-render or re-subscribe afterwards. */
  private destroyed = false;

  constructor(private parent: HTMLElement, private parentId: string) {
    this.root = el('div') as HTMLDivElement;
    this.root.style.cssText = 'position:fixed;inset:0;z-index:80;background:#f4efe3;color:#2b2033;font-family:"Nunito",sans-serif;overflow-y:auto;padding:16px;box-sizing:border-box;';
    this.parent.appendChild(this.root);
    this.load();
  }

  private async load() {
    const students = await listLinkedStudents(this.parentId);
    if (this.destroyed) return;
    this.students = students;
    this.active = this.students[0] ?? null;
    this.render();
  }

  private async linkCode(code: string, err: HTMLElement) {
    const res = await linkStudentByCode(this.parentId, code);
    if (this.destroyed) return;
    if (!res.ok) { err.textContent = res.error ?? 'Could not link that code.'; return; }
    await this.load();
  }

  private render() {
    this.root.innerHTML = '';
    const header = el('div');
    header.style.cssText = 'display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;';
    const title = el('div', '', '👪 Parent Dashboard');
    title.style.cssText = 'font-size:22px;font-weight:800;';
    const signOutBtn = el('button', 'msg-btn alt', 'Sign out') as HTMLButtonElement;
    signOutBtn.onclick = async () => { await signOut(); this.destroy(); this.onExit(); };
    header.append(title, signOutBtn);
    this.root.appendChild(header);

    // Link another student
    const linkBox = el('div');
    linkBox.style.cssText = 'background:#fff8ec;border:2px solid #2b2033;border-radius:14px;padding:12px;margin-bottom:16px;';
    linkBox.innerHTML = `<div style="font-weight:800;margin-bottom:6px;">Link a student</div>
      <div style="font-size:13px;opacity:.75;margin-bottom:8px;">Ask your student for their 6-character family code (Menu → Family Code, in their game).</div>`;
    const codeRow = el('div');
    codeRow.style.cssText = 'display:flex;gap:8px;';
    const codeInput = el('input') as HTMLInputElement;
    codeInput.placeholder = 'ABC123';
    codeInput.style.cssText = 'flex:1;text-transform:uppercase;padding:8px;border-radius:8px;border:2px solid #2b2033;font-size:16px;';
    const codeErr = el('div');
    codeErr.style.cssText = 'color:#c0504d;font-size:12px;margin-top:6px;';
    const linkBtn = el('button', 'msg-btn go', 'Link') as HTMLButtonElement;
    linkBtn.onclick = () => this.linkCode(codeInput.value, codeErr);
    codeRow.append(codeInput, linkBtn);
    linkBox.append(codeRow, codeErr);
    this.root.appendChild(linkBox);

    if (!this.students.length) {
      const empty = el('div', '', 'No students linked yet — add a family code above to see live activity and daily reports.');
      empty.style.cssText = 'opacity:.7;padding:20px;text-align:center;';
      this.root.appendChild(empty);
      return;
    }

    // Student tabs
    const tabs = el('div');
    tabs.style.cssText = 'display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap;';
    this.students.forEach((s) => {
      const t = el('button', 'msg-btn' + (this.active?.id === s.id ? ' go' : ''), `${s.username} (Grade ${s.grade})`) as HTMLButtonElement;
      t.onclick = () => { this.active = s; this.render(); };
      tabs.appendChild(t);
    });
    this.root.appendChild(tabs);

    if (this.active) this.renderStudent(this.active);
  }

  private renderStudent(student: Profile) {
    const wrap = el('div');
    this.root.appendChild(wrap);

    // Live tracker — reuses the same presence channel the game broadcasts on.
    const liveBox = el('div');
    liveBox.style.cssText = 'background:#fff8ec;border:2px solid #2b2033;border-radius:14px;padding:12px;margin-bottom:14px;';
    liveBox.innerHTML = `<div style="font-weight:800;">📍 Live status</div><div class="live-status" style="margin-top:6px;">Checking…</div>`;
    wrap.appendChild(liveBox);
    this.watchPresence(student.id, liveBox.querySelector('.live-status') as HTMLElement);

    // Reports live in one box that is refilled in place (e.g. after "Mark reviewed"),
    // so the section never appears twice.
    const reportsBox = el('div');
    reportsBox.style.cssText = 'background:#fff8ec;border:2px solid #2b2033;border-radius:14px;padding:12px;';
    reportsBox.innerHTML = '<div style="font-weight:800;margin-bottom:6px;">📋 Daily reports</div><div style="opacity:.7;">Loading…</div>';
    wrap.appendChild(reportsBox);
    this.renderReports(student, reportsBox);
  }

  /** Latest reports request per box; older responses for the same box are dropped so rows are never duplicated. */
  private reportsTokens = new WeakMap<HTMLElement, number>();

  private async renderReports(student: Profile, reportsBox: HTMLElement) {
    const token = (this.reportsTokens.get(reportsBox) ?? 0) + 1;
    this.reportsTokens.set(reportsBox, token);
    const reports = await fetchDailyReports(student.id);
    if (this.destroyed || !reportsBox.isConnected || token !== this.reportsTokens.get(reportsBox)) return;
    const gate = parentGateStatus(reports);
    reportsBox.innerHTML = `<div style="font-weight:800;margin-bottom:6px;">📋 Daily reports</div>
      ${gate.blocked ? `<div style="background:#f7d9d6;border-radius:8px;padding:8px;margin-bottom:8px;font-weight:700;">⚠️ ${gate.overdueCount} report(s) overdue by 2+ days — ${escapeHtml(student.username)} will lose Friday's test and next week's classes until these are checked off.</div>` : ''}
      ${!reports.length ? '<div style="opacity:.7;">No reports yet — one is sent home at the end of each school day.</div>' : ''}`;
    reports.forEach((r) => {
      const row = el('div');
      row.style.cssText = 'display:flex;align-items:center;gap:8px;border-top:1px solid rgba(0,0,0,.08);padding:8px 0;';
      const overdue = !r.checked && Date.now() - new Date(r.sent_at).getTime() > 2 * 86400000;
      const summary = el('div');
      summary.style.cssText = 'flex:1;font-size:13px;';
      summary.innerHTML = `<b>${fmtDate(r.sent_at)}</b> (Day ${r.day}) — ✅ ${r.attended} · ⏰ ${r.late} · ❌ ${r.missed} classes ·
        📝 quiz ${r.quiz_right}/${r.quiz_total} · 📓 hw ${r.homework_done}/${r.homework_assigned} ·
        😴 idle ${Math.round(r.idle_seconds / 60)}m · 🙋 ${r.questions_asked} questions · 💬 ${r.social_interactions} social · 📵 off-app ${Math.round(r.off_app_seconds / 60)}m`;
      const btn = el('button', 'msg-btn' + (r.checked ? '' : overdue ? '' : ' go'), r.checked ? '✅ Checked' : overdue ? '⚠️ Check now' : 'Mark reviewed') as HTMLButtonElement;
      if (overdue && !r.checked) btn.style.background = '#f2a154';
      btn.disabled = r.checked;
      btn.onclick = async () => {
        btn.disabled = true;
        const { error } = await markReportChecked(r.id);
        if (this.destroyed || !reportsBox.isConnected) return; // switched tabs meanwhile
        if (error) {
          btn.disabled = false;
          btn.textContent = '⚠️ Try again';
          btn.title = error.message;
          console.warn('[parent] mark reviewed failed', error);
          return;
        }
        this.renderReports(student, reportsBox);
      };
      row.append(summary, btn);
      reportsBox.appendChild(row);
    });
  }

  private watchPresence(studentId: string, out: HTMLElement) {
    this.presenceChannel?.unsubscribe();
    this.presenceChannel = null;
    if (this.destroyed) return;
    const ch = getSupabase().channel('maple-grove-school', { config: { presence: { key: 'parent-' + this.parentId } } });
    const refresh = () => {
      const state = ch.presenceState<any>();
      const entries = state[studentId];
      if (entries && entries[0]) {
        const p = entries[0];
        out.textContent = `🟢 Online now — in ${p.room || 'the school'}`;
      } else {
        out.textContent = '⚪ Not currently online';
      }
    };
    ch.on('presence', { event: 'sync' }, refresh);
    ch.subscribe();
    this.presenceChannel = ch;
  }

  destroy() {
    this.destroyed = true;
    this.presenceChannel?.unsubscribe();
    this.presenceChannel = null;
    this.root.remove();
  }
}
