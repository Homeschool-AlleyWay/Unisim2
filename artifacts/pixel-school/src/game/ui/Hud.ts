// DOM overlay: HUD, touch controls, dialogs, menus and mini-games.
import { CSS } from './styles';
import { ACCESSORIES, buildCharacterSheet, EYE_COLORS, FRAME_H, FRAME_W, HAIR_COLORS, HAIR_STYLES, Look, OUTFITS, PANTS_COLORS, randomLook, SHIRT_COLORS, SHOE_COLORS, SKIN_TONES } from '../art/characters';
import { Grade, GRADES } from '../data/curriculum';
import { Sfx } from '../systems/Audio';
import { PERIODS, Subject, SUBJECTS } from '../data/schedule';
import { Bucket, DailyPlan, minRequired } from '../systems/SelfPaced';
import type { HomeworkItem } from '../systems/GameState';

export type DirKey = 'up' | 'down' | 'left' | 'right';

const el = <K extends keyof HTMLElementTagNameMap>(tag: K, cls = '', html = '') => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html) e.innerHTML = html;
  return e;
};

let cssInjected = false;
function injectCss() {
  if (cssInjected) return;
  cssInjected = true;
  const s = document.createElement('style');
  s.textContent = CSS;
  document.head.appendChild(s);
  if (!document.querySelector('link[data-msg-font]')) {
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800&family=Pixelify+Sans:wght@500;700&display=swap';
    l.setAttribute('data-msg-font', '1');
    document.head.appendChild(l);
  }
}

export class Hud {
  root: HTMLDivElement;
  dirs: Record<DirKey, boolean> = { up: false, down: false, left: false, right: false };
  modalOpen = 0;
  /** Teardown callbacks for window listeners / timers owned by open dialogs. */
  private cleanups = new Set<() => void>();
  lastClose = 0;
  onAction: () => void = () => {};
  onMap: () => void = () => {};
  onSpeed: () => void = () => {};
  onFastForward: () => void = () => {};
  onMenu: () => void = () => {};
  onZoomIn: () => void = () => {};
  onZoomOut: () => void = () => {};
  onToggleView: () => void = () => {};
  onStandUp: () => void = () => {};
  onTakeTest: () => void = () => {};
  onHomework: () => void = () => {};
  private homeworkBtn!: HTMLButtonElement;
  private viewBtn!: HTMLButtonElement;
  private standBtn!: HTMLButtonElement;
  private testBtn!: HTMLButtonElement;
  private lookHint!: HTMLElement;
  private in3D = false;
  private clockT!: HTMLElement; private clockD!: HTMLElement; private clockP!: HTMLElement;
  private statsBox!: HTMLElement; private obj!: HTMLElement; private toasts!: HTMLElement; private room!: HTMLElement;
  private prompt!: HTMLElement; private ff!: HTMLButtonElement; private speedBtn!: HTMLButtonElement; private soundBtn!: HTMLButtonElement;
  private aBtn!: HTMLButtonElement;

  constructor(parent: HTMLElement) {
    injectCss();
    this.root = el('div', 'msg-root');
    parent.appendChild(this.root);
    this.buildHud();
  }

  private buildHud() {
    const top = el('div', 'msg-top');
    const clock = el('div', 'msg-card msg-clock');
    this.clockD = el('div', 'd'); this.clockT = el('div', 't'); this.clockP = el('div', 'p');
    clock.append(this.clockD, this.clockT, this.clockP);
    this.statsBox = el('div', 'msg-card msg-stats');
    const btns = el('div', 'msg-btns');
    this.speedBtn = el('button', 'msg-ib', '1×') as HTMLButtonElement;
    this.speedBtn.title = 'Game speed';
    this.speedBtn.onclick = () => { Sfx.blip(); this.onSpeed(); };
    const mapBtn = el('button', 'msg-ib', '🗺️') as HTMLButtonElement;
    mapBtn.title = 'Map & schedule (M)';
    mapBtn.onclick = () => { Sfx.blip(); this.onMap(); };
    const zoomInBtn = el('button', 'msg-ib', '🔍+') as HTMLButtonElement;
    zoomInBtn.title = 'Zoom in';
    zoomInBtn.onclick = () => { Sfx.blip(); this.onZoomIn(); };
    const zoomOutBtn = el('button', 'msg-ib', '🔍−') as HTMLButtonElement;
    zoomOutBtn.title = 'Zoom out';
    zoomOutBtn.onclick = () => { Sfx.blip(); this.onZoomOut(); };
    this.soundBtn = el('button', 'msg-ib', '🔊') as HTMLButtonElement;
    this.soundBtn.onclick = () => { Sfx.setMuted(!Sfx.isMuted()); this.soundBtn.textContent = Sfx.isMuted() ? '🔇' : '🔊'; };
    const menuBtn = el('button', 'msg-ib', '☰') as HTMLButtonElement;
    menuBtn.onclick = () => { Sfx.blip(); this.onMenu(); };
    this.homeworkBtn = el('button', 'msg-ib', '📓') as HTMLButtonElement;
    this.homeworkBtn.title = 'Homework planner';
    this.homeworkBtn.hidden = true;
    this.homeworkBtn.onclick = () => { Sfx.blip(); this.onHomework(); };
    btns.append(this.speedBtn, mapBtn, zoomInBtn, zoomOutBtn, this.homeworkBtn, this.soundBtn, menuBtn);
    top.append(clock, this.statsBox, btns);
    this.obj = el('div', 'msg-obj');
    this.toasts = el('div', 'msg-toasts');
    this.room = el('div', 'msg-room');

    // D-pad
    const pad = el('div', 'msg-pad');
    const mk = (cls: string, d: DirKey, label: string) => {
      const b = el('button', cls, label) as HTMLButtonElement;
      const on = (e: Event) => { e.preventDefault(); this.dirs[d] = true; b.classList.add('on'); };
      const off = (e: Event) => { e.preventDefault(); this.dirs[d] = false; b.classList.remove('on'); };
      b.addEventListener('pointerdown', on);
      b.addEventListener('pointerup', off);
      b.addEventListener('pointercancel', off);
      b.addEventListener('pointerleave', off);
      b.addEventListener('contextmenu', (e) => e.preventDefault());
      pad.appendChild(b);
    };
    mk('u', 'up', '▲'); mk('d', 'down', '▼'); mk('l', 'left', '◀'); mk('r', 'right', '▶');

    const act = el('div', 'msg-act');
    this.ff = el('button', 'msg-ff', '⏩ Skip to bell') as HTMLButtonElement;
    this.ff.hidden = true;
    this.ff.onclick = () => { Sfx.blip(); this.onFastForward(); };
    this.prompt = el('div', 'msg-prompt');
    this.aBtn = el('button', 'msg-a', 'A') as HTMLButtonElement;
    this.aBtn.addEventListener('pointerdown', (e) => { e.preventDefault(); this.aBtn.classList.add('on'); Sfx.unlock(); this.onAction(); });
    const up = () => this.aBtn.classList.remove('on');
    this.aBtn.addEventListener('pointerup', up); this.aBtn.addEventListener('pointerleave', up);
    act.append(this.ff, this.prompt, this.aBtn);
    const bar3d = el('div', 'msg-3d');
    this.viewBtn = el('button', 'hi', '👀 3D view') as HTMLButtonElement;
    this.viewBtn.onclick = () => { Sfx.blip(); this.onToggleView(); };
    this.standBtn = el('button', '', '🚶 Stand up') as HTMLButtonElement;
    this.standBtn.onclick = () => { Sfx.blip(); this.onStandUp(); };
    this.testBtn = el('button', '', '📝 Take test') as HTMLButtonElement;
    this.testBtn.onclick = () => { Sfx.blip(); this.onTakeTest(); };
    this.viewBtn.hidden = this.standBtn.hidden = this.testBtn.hidden = true;
    bar3d.append(this.viewBtn, this.standBtn, this.testBtn);
    this.lookHint = el('div', 'msg-look', 'Drag to look around · tap a classmate to whisper');
    this.lookHint.style.opacity = '0';
    this.root.append(top, this.obj, this.toasts, this.room, pad, act, bar3d, this.lookHint);
  }

  setClock(day: string, time: string, period: string) {
    this.clockD.textContent = day;
    this.clockT.textContent = time;
    this.clockP.textContent = period;
  }

  setStats(energy: number, s: { smarts: number; fitness: number; creativity: number; social: number }) {
    const col = energy > 50 ? '#6cbf6a' : energy > 25 ? '#f2c94c' : '#e2544a';
    this.statsBox.innerHTML = `<span class="msg-chip" title="Energy">⚡<span class="msg-energy"><i style="width:${Math.max(0, Math.min(100, energy))}%;background:${col}"></i></span></span>
      <span class="msg-chip" title="Smarts">📘 ${s.smarts}</span><span class="msg-chip" title="Fitness">🏀 ${s.fitness}</span>
      <span class="msg-chip" title="Creativity">🎨 ${s.creativity}</span><span class="msg-chip" title="Friendship">💬 ${s.social}</span>`;
  }

  /** in3D: the first-person view is showing; available: a 3D view can be entered here;
   *  seated: the player is sitting (vs. just standing and looking around). */
  setViewMode(in3D: boolean, available: boolean, seated: boolean) {
    if (in3D !== this.in3D) {
      this.in3D = in3D;
      this.root.classList.toggle('m3d', in3D);
      this.aBtn.textContent = in3D && seated ? '✋' : 'A';
      if (in3D) { this.lookHint.style.opacity = '1'; setTimeout(() => (this.lookHint.style.opacity = '0'), 3500); }
    }
    this.viewBtn.hidden = !available && !in3D;
    this.standBtn.hidden = !in3D || !seated;
    this.testBtn.hidden = !in3D || !seated;
    const label = in3D ? '🗺️ Map view' : '👀 3D view';
    if (this.viewBtn.textContent !== label) this.viewBtn.textContent = label;
    this.viewBtn.classList.toggle('hi', !in3D);
  }

  setHomeworkBadge(visible: boolean, pendingCount: number) {
    this.homeworkBtn.hidden = !visible;
    this.homeworkBtn.textContent = pendingCount > 0 ? `📓${pendingCount}` : '📓';
    this.homeworkBtn.classList.toggle('hi', pendingCount > 0);
  }

  setSpeedLabel(t: string) { this.speedBtn.textContent = t; }
  setObjective(html: string) { if (this.obj.innerHTML !== html) this.obj.innerHTML = html; this.obj.style.display = html ? '' : 'none'; }
  setPrompt(t: string) { if (this.prompt.textContent !== t) this.prompt.textContent = t; }
  setFastForward(show: boolean, label = '⏩ Skip to bell') { this.ff.hidden = !show; if (this.ff.textContent !== label) this.ff.textContent = label; }
  setVisible(v: boolean) { this.root.querySelectorAll<HTMLElement>('.msg-top,.msg-obj,.msg-pad,.msg-act').forEach((e) => (e.style.visibility = v ? '' : 'hidden')); }

  toast(text: string) {
    const t = el('div', 'msg-toast', text);
    this.toasts.appendChild(t);
    setTimeout(() => t.remove(), 2500);
    while (this.toasts.children.length > 3) this.toasts.firstChild!.remove();
  }

  roomBanner(name: string) {
    this.room.textContent = name;
    this.room.classList.remove('show');
    void this.room.offsetWidth;
    this.room.classList.add('show');
  }

  // ---------- Modals ----------
  /** Window keydown listener that is removed on destroy(). Returns the remover. */
  private onWindowKey(fn: (e: KeyboardEvent) => void): () => void {
    window.addEventListener('keydown', fn);
    const off = () => { this.cleanups.delete(off); window.removeEventListener('keydown', fn); };
    this.cleanups.add(off);
    return off;
  }

  /** Remove the HUD and stop any timers/listeners left by open dialogs
   *  (called when the Phaser scene is destroyed, e.g. on route change). */
  destroy() {
    this.cleanups.forEach((fn) => fn());
    this.cleanups.clear();
    this.root.remove();
  }

  /** Every dialog gets a ✕ exit button in its top-right corner. `onExit` decides what
   *  leaving means for that screen (e.g. resume, play offline, skip the rest of a quiz).
   *  The button lives in a frame around the panel so callers can freely reset `p.innerHTML`. */
  private modal(bottom: boolean, onExit: () => void) {
    const m = el('div', 'msg-modal' + (bottom ? ' bottom' : ''));
    const frame = el('div', 'msg-frame');
    const p = el('div', 'msg-panel');
    const x = el('button', 'msg-x', '✕') as HTMLButtonElement;
    x.title = 'Exit'; x.setAttribute('aria-label', 'Exit');
    x.onclick = (e) => { e.stopPropagation(); Sfx.blip(); onExit(); };
    frame.append(p, x);
    m.appendChild(frame);
    this.root.appendChild(m);
    this.modalOpen++;
    for (const k of Object.keys(this.dirs) as DirKey[]) this.dirs[k] = false;
    const close = () => { if (m.parentNode) { m.remove(); this.modalOpen--; this.lastClose = performance.now(); } };
    return { m, frame, p, close };
  }

  /** Speech box. Resolves with the index of the chosen option (0 when there are none).
   *  Exiting (✕ or Escape) resolves with -1 when there were options to pick from. */
  say(who: string, text: string, options: string[] = [], color = '#3d6fb0'): Promise<number> {
    return new Promise((resolve) => {
      const exit = () => { close(); resolve(options.length ? -1 : 0); };
      const { m, frame, p, close: closeModal } = this.modal(true, () => exit());
      // Every exit path also drops the (possibly not-yet-armed) key listener.
      const close = () => { cancelArm(); offKey(); closeModal(); };
      frame.classList.add('dialog');
      p.classList.add('msg-dialog');
      const w = el('div', 'who', who);
      w.style.background = color;
      const txt = el('div', 'txt');
      p.append(w, txt);
      let i = 0;
      let done = false;
      const opts = el('div', 'msg-opts');
      const finish = () => {
        done = true;
        txt.textContent = text;
        if (!options.length) {
          const b = el('button', 'msg-btn alt', 'OK ▸') as HTMLButtonElement;
          b.style.alignSelf = 'flex-end';
          b.onclick = () => { Sfx.blip(); close(); resolve(0); };
          opts.appendChild(b);
        }
        options.forEach((o, k) => {
          const b = el('button', 'msg-btn', o) as HTMLButtonElement;
          b.onclick = () => { Sfx.blip(); close(); resolve(k); };
          opts.appendChild(b);
        });
      };
      p.appendChild(opts);
      const tick = () => {
        if (done || !m.parentNode) return;
        i += 2;
        txt.textContent = text.slice(0, i);
        if (i % 4 === 0) Sfx.talk();
        if (i >= text.length) finish(); else setTimeout(tick, 22);
      };
      tick();
      m.addEventListener('pointerdown', (e) => { if (!done && e.target !== m) finish(); });
      const key = (e: KeyboardEvent) => {
        if (!m.parentNode) { close(); return; }
        if (e.key === 'Escape') { e.preventDefault(); exit(); return; }
        if (['Enter', ' ', 'e', 'E'].includes(e.key)) {
          e.preventDefault();
          if (!done) finish();
          else if (!options.length) { close(); resolve(0); }
        }
        const n = parseInt(e.key, 10);
        if (done && n >= 1 && n <= options.length) { close(); resolve(n - 1); }
      };
      let offKey: () => void = () => {};
      const armT = setTimeout(() => { this.cleanups.delete(cancelArm); offKey = this.onWindowKey(key); }, 150);
      const cancelArm = () => { this.cleanups.delete(cancelArm); clearTimeout(armT); };
      this.cleanups.add(cancelArm);
    });
  }

  panel(build: (p: HTMLElement, close: () => void) => void, bottom = false): Promise<void> {
    return new Promise((resolve) => {
      const { p, close } = this.modal(bottom, () => done());
      const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') { done(); } };
      const done = () => { offEsc(); close(); resolve(); };
      const offEsc = this.onWindowKey(esc);
      build(p, done);
    });
  }

  // ---------- Account / sign in ----------
  /** Real accounts, not just a family-shared local save — sign in or make one to
   *  appear live to any other player. "Play offline" skips multiplayer entirely. */
  login(): Promise<{ userId: string | null }> {
    return new Promise(async (resolve) => {
      const { signIn, signUp, signOut } = await import('../net/multiplayer');
      // Exiting the sign-in screen is the same as "Play offline".
      let settled = false;
      const finish = (userId: string | null) => { if (settled) return; settled = true; close(); resolve({ userId }); };
      const { p, close } = this.modal(false, () => finish(null));
      let mode: 'signin' | 'signup' = 'signin';
      const render = () => {
        p.innerHTML = `<div class="msg-title">Maple Grove</div><h2>${mode === 'signin' ? 'Sign in' : 'Create an account'}</h2>
          <p>Sign in with your own account to show up live to any other player at Maple Grove — not just on this device.</p>`;
        const email = el('input', 'msg-name', '') as HTMLInputElement;
        email.type = 'email'; email.placeholder = 'Email'; email.style.width = '100%';
        const pass = el('input', 'msg-name', '') as HTMLInputElement;
        pass.type = 'password'; pass.placeholder = 'Password'; pass.style.width = '100%'; pass.style.marginTop = '6px';
        const err = el('p', 'msg-help', '');
        err.style.color = '#c0504d';
        const go = el('button', 'msg-btn go', mode === 'signin' ? '▶ Sign in' : '▶ Create account') as HTMLButtonElement;
        go.style.width = '100%'; go.style.marginTop = '10px';
        go.onclick = async () => {
          if (!email.value || pass.value.length < 6) { err.textContent = 'Enter an email and a password (6+ characters).'; return; }
          go.textContent = 'Please wait…'; go.disabled = true;
          try {
            const { data, error } = mode === 'signin' ? await signIn(email.value, pass.value) : await signUp(email.value, pass.value);
            // Exited to offline play while this was in flight: don't leave a session behind.
            if (settled) { if (data?.session) signOut().catch(() => {}); return; }
            if (error) { err.textContent = error.message; go.disabled = false; go.textContent = mode === 'signin' ? '▶ Sign in' : '▶ Create account'; return; }
            if (!data.session) { err.textContent = 'Check your email to confirm your account, then sign in.'; go.disabled = false; go.textContent = '▶ Sign in'; mode = 'signin'; return; }
            finish(data.user?.id ?? null);
          } catch (e: any) {
            err.textContent = 'Could not reach the server — playing offline instead.';
            go.disabled = false;
          }
        };
        const switchMode = el('button', 'msg-btn alt', mode === 'signin' ? "New here? Create an account" : 'Already have an account? Sign in') as HTMLButtonElement;
        switchMode.style.width = '100%'; switchMode.style.marginTop = '6px'; switchMode.style.textAlign = 'center';
        switchMode.onclick = () => { mode = mode === 'signin' ? 'signup' : 'signin'; render(); };
        const offline = el('button', 'msg-btn alt', '📵 Play offline (just me + NPCs)') as HTMLButtonElement;
        offline.style.width = '100%'; offline.style.marginTop = '6px'; offline.style.textAlign = 'center';
        offline.onclick = () => finish(null);
        p.append(email, pass, err, go, switchMode, offline);
      };
      render();
    });
  }

  /** New accounts pick which side of the family they're on. Exiting resolves null
   *  (the caller signs out and goes back to the sign-in screen). */
  chooseRole(): Promise<'student' | 'parent' | null> {
    return new Promise((resolve) => {
      const { p, close } = this.modal(false, () => { close(); resolve(null); });
      p.innerHTML = `<div class="msg-title">Maple Grove</div><h2>Who's signing in?</h2>
        <p>A parent account sees live activity and daily reports — no character or classes.</p>`;
      const studentBtn = el('button', 'msg-btn go', "🎒 I'm the student") as HTMLButtonElement;
      studentBtn.style.width = '100%';
      studentBtn.onclick = () => { close(); resolve('student'); };
      const parentBtn = el('button', 'msg-btn alt', "👪 I'm a parent") as HTMLButtonElement;
      parentBtn.style.width = '100%'; parentBtn.style.marginTop = '8px';
      parentBtn.onclick = () => { close(); resolve('parent'); };
      p.append(studentBtn, parentBtn);
    });
  }

  /** Shows a student's family code (Menu → Family Code) so a parent can link to them. */
  familyCodePanel(code: string): Promise<void> {
    return this.panel((p, close) => {
      p.innerHTML = `<div class="msg-title">👪 Family Code</div><h2 style="letter-spacing:.15em;font-size:32px;">${code}</h2>
        <p>Give this code to a parent — they enter it once on their own account to see your daily reports and live status.</p>`;
      const b = el('button', 'msg-btn go', 'Close') as HTMLButtonElement;
      b.style.width = '100%'; b.style.marginTop = '10px';
      b.onclick = () => close();
      p.appendChild(b);
    });
  }

  // ---------- Bulletin board (grades 6-12 self-paced A/B scheduling) ----------
  /** Shown right after the morning broadcast for grades 6-12: pick a broad AM/Lunch/Evening
   *  window for each due subject and lock in at least half of them (more is fine — "get ahead"). */
  bulletinBoard(plan: DailyPlan): Promise<DailyPlan> {
    return new Promise((resolve) => {
      // Exiting leaves the plan unlocked; the scene reopens the board when the player tries to sit in class.
      const { p, close } = this.modal(false, () => { close(); resolve(plan); });
      const need = minRequired(plan.due);
      const rows: Record<Subject, { picked: boolean; bucket: Bucket }> = {} as any;
      plan.due.forEach((s) => { rows[s] = { picked: plan.isTestDay, bucket: 'am' }; });

      const render = () => {
        const count = Object.values(rows).filter((r) => r.picked).length;
        p.innerHTML = `<div class="msg-title">📌 Bulletin Board</div>
          <h2>${plan.isTestDay ? 'Friday Tests — All Classes' : `Today's Classes (${plan.dayType}-Day)`}</h2>
          <p>${plan.isTestDay
            ? 'Every class has a unit test today. Early dismissal once you\'ve finished them all.'
            : `Pick when you'll go to each class — at least <b>${need} of ${plan.due.length}</b>. Get ahead by picking more!`}</p>`;
        const list = el('div', 'msg-grid');
        list.style.cssText = 'display:flex;flex-direction:column;gap:8px;margin:10px 0;';
        plan.due.forEach((s) => {
          const row = el('div');
          row.style.cssText = 'display:flex;align-items:center;gap:8px;background:rgba(0,0,0,.04);border-radius:10px;padding:8px 10px;';
          const chk = el('button', 'msg-btn' + (rows[s].picked ? ' go' : ''), rows[s].picked ? '✅' : '⬜') as HTMLButtonElement;
          chk.style.cssText = 'flex:0 0 auto;min-width:34px;';
          const label = el('div', '', `${SUBJECTS[s].name}`);
          label.style.cssText = 'flex:1;font-weight:700;';
          const buckets = el('div');
          buckets.style.cssText = 'display:flex;gap:4px;';
          (['am', 'lunch', 'evening'] as Bucket[]).forEach((b) => {
            const bb = el('button', 'msg-btn' + (rows[s].bucket === b ? ' go' : ''), b === 'am' ? '🌅' : b === 'lunch' ? '🥪' : '🌆') as HTMLButtonElement;
            bb.disabled = plan.isTestDay ? false : !rows[s].picked;
            bb.onclick = () => { rows[s].bucket = b; Sfx.blip(); render(); };
            buckets.appendChild(bb);
          });
          if (!plan.isTestDay) {
            chk.onclick = () => { rows[s].picked = !rows[s].picked; Sfx.blip(); render(); };
          } else chk.disabled = true;
          row.append(chk, label, buckets);
          list.appendChild(row);
        });
        p.appendChild(list);
        const go = el('button', 'msg-btn go', plan.isTestDay ? '▶ Lock in test times' : `▶ Confirm (${count}/${plan.due.length} picked)`) as HTMLButtonElement;
        go.style.width = '100%';
        go.disabled = !plan.isTestDay && count < need;
        go.onclick = () => {
          plan.selected = plan.isTestDay ? [...plan.due] : plan.due.filter((s) => rows[s].picked);
          plan.bucket = Object.fromEntries(plan.due.map((s) => [s, rows[s].bucket])) as any;
          plan.locked = true;
          Sfx.good(); close(); resolve(plan);
        };
        p.appendChild(go);
      };
      render();
    });
  }

  // ---------- Homework planner ----------
  homeworkPanel(items: { subject: Subject; item: HomeworkItem }[], onDone: (subject: Subject) => void): Promise<void> {
    return this.panel((p, close) => {
      p.innerHTML = `<div class="msg-title">📓 Homework</div><h2>Planner</h2>`;
      if (!items.length) p.innerHTML += '<p>Nothing due right now — nice work staying caught up!</p>';
      items.forEach(({ subject, item }) => {
        const row = el('div');
        row.style.cssText = 'display:flex;align-items:center;gap:8px;background:rgba(0,0,0,.04);border-radius:10px;padding:8px 10px;margin:6px 0;';
        const label = el('div', '', `${SUBJECTS[subject].name} <span style="opacity:.6">— assigned day ${item.assignedDay}</span>`);
        label.style.cssText = 'flex:1;';
        const btn = el('button', 'msg-btn' + (item.done ? '' : ' go'), item.done ? '✅ Done' : 'Mark done') as HTMLButtonElement;
        btn.disabled = item.done;
        btn.onclick = () => { onDone(subject); Sfx.good(); close(); };
        row.append(label, btn);
        p.appendChild(row);
      });
      const b = el('button', 'msg-btn alt', 'Close') as HTMLButtonElement;
      b.style.width = '100%'; b.style.marginTop = '10px';
      b.onclick = () => close();
      p.appendChild(b);
    });
  }

  // ---------- Character creator ----------
  /** Resolves null when the player exits (the caller returns to the sign-in screen). */
  creator(existing: { name: string; look: Look; day: number; schoolGrade?: Grade } | null): Promise<{ name: string; look: Look; schoolGrade: Grade; fresh: boolean } | null> {
    return new Promise((resolve) => {
      let stopPreview = () => {};
      const { p, close } = this.modal(false, () => { stopPreview(); close(); resolve(null); });
      let look: Look = existing?.look ?? randomLook(Math.floor(Math.random() * 9999), { outfit: 'tee' });
      let name = existing?.name ?? 'Alex';
      let grade: Grade = existing?.schoolGrade ?? 5;
      if (existing) {
        p.innerHTML = `<div class="msg-title">Maple Grove</div><h2>School Life</h2><p>Welcome back, <b>${existing.name}</b>! Ready for day ${existing.day}?</p>`;
        const prev = this.previewCanvas(look);
        stopPreview = prev.stop;
        const wrap = el('div', 'msg-prev'); wrap.appendChild(prev.canvas);
        p.appendChild(wrap);
        const go = el('button', 'msg-btn go', '▶ Continue') as HTMLButtonElement;
        const fresh = el('button', 'msg-btn alt', 'New student') as HTMLButtonElement;
        go.style.width = fresh.style.width = '100%'; fresh.style.marginTop = '8px'; fresh.style.textAlign = 'center';
        p.append(go, fresh);
        go.onclick = () => { Sfx.unlock(); Sfx.good(); prev.stop(); close(); resolve({ name: existing.name, look, schoolGrade: grade, fresh: false }); };
        fresh.onclick = () => { prev.stop(); close(); this.creator(null).then(resolve); };
        return;
      }
      p.innerHTML = `<div class="msg-title">Maple Grove</div><h2>Create your student</h2>`;
      const wrap = el('div', 'msg-creator');
      const prev = this.previewCanvas(look);
      stopPreview = prev.stop;
      const left = el('div', 'msg-prev');
      left.appendChild(prev.canvas);
      const nameIn = el('input', 'msg-name') as HTMLInputElement;
      nameIn.value = name; nameIn.maxLength = 12; nameIn.placeholder = 'Your name';
      nameIn.oninput = () => (name = nameIn.value);
      const rnd = el('button', 'msg-pill', '🎲 Randomize') as HTMLButtonElement;
      const nameCol = el('div');
      nameCol.style.cssText = 'display:flex;flex-direction:column;gap:6px;align-items:center';
      nameCol.append(nameIn, rnd);
      left.append(nameCol);
      const right = el('div');
      right.style.flex = '1 1 240px';
      const refresh = () => { prev.set(look); render(); };
      const swatchRow = (label: string, key: keyof Look, colors: string[]) => {
        const row = el('div', 'msg-row');
        row.appendChild(el('label', '', label));
        for (const c of colors) {
          const b = el('button', 'msg-sw' + ((look as any)[key] === c ? ' sel' : '')) as HTMLButtonElement;
          b.style.background = c;
          b.onclick = () => { (look as any)[key] = c; Sfx.blip(); refresh(); };
          row.appendChild(b);
        }
        return row;
      };
      const pillRow = (label: string, key: keyof Look, vals: string[]) => {
        const row = el('div', 'msg-row');
        row.appendChild(el('label', '', label));
        for (const v of vals) {
          const b = el('button', 'msg-pill' + ((look as any)[key] === v ? ' sel' : ''), v) as HTMLButtonElement;
          b.onclick = () => { (look as any)[key] = v; Sfx.blip(); refresh(); };
          row.appendChild(b);
        }
        return row;
      };
      const render = () => {
        right.innerHTML = '';
        right.append(
          el('h3', '', '🧑 Personal Avatar'),
          swatchRow('Skin', 'skin', SKIN_TONES),
          swatchRow('Eyes', 'eyeColor', EYE_COLORS),
          pillRow('Hair', 'hairStyle', HAIR_STYLES),
          swatchRow('Hair color', 'hair', HAIR_COLORS),
          pillRow('Outfit', 'outfit', OUTFITS),
          swatchRow('Top', 'shirt', SHIRT_COLORS),
          swatchRow('Bottoms', 'pants', PANTS_COLORS),
          swatchRow('Shoes', 'shoes', SHOE_COLORS),
          swatchRow('Backpack', 'backpack', ['#e2544a', '#4f86d9', '#f2c94c', '#6cbf6a', '#8b6fd1', '#e874a8', '#f29b3b']),
          pillRow('Accessory', 'accessory', ACCESSORIES),
        );
        const g = el('div', 'msg-row');
        g.appendChild(el('label', '', 'Glasses'));
        for (const v of [false, true]) {
          const b = el('button', 'msg-pill' + (!!look.glasses === v ? ' sel' : ''), v ? 'yes' : 'no') as HTMLButtonElement;
          b.onclick = () => { look.glasses = v; refresh(); };
          g.appendChild(b);
        }
        right.appendChild(g);
        right.append(el('h3', '', '🎓 Grade Level'));
        const gr = el('div', 'msg-row');
        gr.style.flexWrap = 'wrap';
        gr.appendChild(el('label', '', 'Grade'));
        for (const gv of GRADES) {
          const b = el('button', 'msg-pill' + (grade === gv ? ' sel' : ''), String(gv)) as HTMLButtonElement;
          b.onclick = () => { grade = gv; Sfx.blip(); render(); };
          gr.appendChild(b);
        }
        right.appendChild(gr);
        right.appendChild(el('p', 'msg-help', 'Your grade sets the lessons, textbooks and tests you see — you can still sit with players of other grades.'));
      };
      rnd.onclick = () => { look = randomLook(Math.floor(Math.random() * 99999)); Sfx.blip(); refresh(); };
      render();
      wrap.append(left, right);
      p.appendChild(wrap);
      const go = el('button', 'msg-btn go', '🏫 Start school!') as HTMLButtonElement;
      go.style.width = '100%'; go.style.marginTop = '10px';
      go.onclick = () => { Sfx.unlock(); Sfx.good(); prev.stop(); close(); resolve({ name: (name || 'Alex').trim().slice(0, 12), look, schoolGrade: grade, fresh: true }); };
      p.appendChild(go);
      p.appendChild(el('p', 'msg-help', 'Move: arrow keys / WASD or the D-pad · Interact: E / Space or the A button · Tap anywhere to walk there.'));
    });
  }

  private previewCanvas(initial: Look) {
    const canvas = document.createElement('canvas');
    canvas.width = FRAME_W; canvas.height = FRAME_H;
    const ctx = canvas.getContext('2d')!;
    let sheet = buildCharacterSheet(initial);
    let f = 0;
    const rows = [0, 1, 3, 2];
    const draw = () => {
      ctx.clearRect(0, 0, FRAME_W, FRAME_H);
      const row = rows[Math.floor(f / 12) % 4];
      const col = 1 + (f % 4);
      ctx.drawImage(sheet, col * FRAME_W, row * FRAME_H, FRAME_W, FRAME_H, 0, 0, FRAME_W, FRAME_H);
      f++;
    };
    draw();
    const iv = setInterval(draw, 130);
    const stop = () => { this.cleanups.delete(stop); clearInterval(iv); };
    this.cleanups.add(stop);
    return { canvas, set: (l: Look) => { sheet = buildCharacterSheet(l); draw(); }, stop };
  }

  // ---------- Mini-games ----------
  piano(): Promise<number> {
    return new Promise((resolve) => {
      let notes = 0;
      let offKey: () => void = () => {};
      this.panel((p, close) => {
        p.innerHTML = '<h2>🎹 Piano</h2><p>Tap the keys (or press 1–8). Play a little tune!</p>';
        const keys = el('div', 'msg-keys');
        const names = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'];
        const btns: HTMLButtonElement[] = [];
        names.forEach((n, i) => {
          const b = el('button', '', n) as HTMLButtonElement;
          b.onpointerdown = (e) => { e.preventDefault(); play(i); };
          keys.appendChild(b); btns.push(b);
        });
        const play = (i: number) => { Sfx.piano(i); notes++; btns[i].classList.add('on'); setTimeout(() => btns[i].classList.remove('on'), 150); };
        const key = (e: KeyboardEvent) => { const n = parseInt(e.key, 10); if (n >= 1 && n <= 8) play(n - 1); };
        offKey = this.onWindowKey(key);
        const done = el('button', 'msg-btn go', 'Done') as HTMLButtonElement;
        done.style.width = '100%';
        done.onclick = close;
        p.append(keys, done);
      }).then(() => { offKey(); resolve(notes); }); // also settles on Escape
    });
  }

  paint(): Promise<number> {
    return new Promise((resolve) => {
      let strokes = 0;
      this.panel((p, close) => {
        p.innerHTML = '<h2>🎨 Paint a masterpiece</h2><p>Pick a color and tap/drag on the canvas.</p>';
        const cols = ['#e2544a', '#f29b3b', '#f2c94c', '#6cbf6a', '#4f86d9', '#8b6fd1', '#e874a8', '#2b2033', '#fff8ec'];
        let cur = cols[0];
        const pal = el('div', 'msg-row');
        pal.style.justifyContent = 'center';
        const sws: HTMLButtonElement[] = [];
        cols.forEach((c) => {
          const b = el('button', 'msg-sw' + (c === cur ? ' sel' : '')) as HTMLButtonElement;
          b.style.background = c;
          b.onclick = () => { cur = c; sws.forEach((s) => s.classList.remove('sel')); b.classList.add('sel'); };
          pal.appendChild(b); sws.push(b);
        });
        const grid = el('div', 'msg-paint');
        let down = false;
        for (let i = 0; i < 64; i++) {
          const d = el('div');
          d.style.background = '#fbf7ee';
          grid.appendChild(d);
        }
        const hit = (e: PointerEvent) => {
          const r = grid.getBoundingClientRect();
          const x = Math.floor(((e.clientX - r.left) / r.width) * 8), y = Math.floor(((e.clientY - r.top) / r.height) * 8);
          if (x < 0 || y < 0 || x > 7 || y > 7) return;
          const c = grid.children[y * 8 + x] as HTMLElement;
          if (c.style.background !== cur) { c.style.background = cur; strokes++; if (strokes % 3 === 0) Sfx.blip(); }
        };
        grid.addEventListener('pointerdown', (e) => { down = true; grid.setPointerCapture(e.pointerId); hit(e); });
        grid.addEventListener('pointermove', (e) => { if (down) hit(e); });
        grid.addEventListener('pointerup', () => (down = false));
        const done = el('button', 'msg-btn go', 'Hang it on the wall') as HTMLButtonElement;
        done.style.width = '100%';
        done.onclick = close;
        p.append(pal, grid, done);
      }).then(() => resolve(strokes)); // also settles on ✕ / Escape
    });
  }

  hoops(skill: number): Promise<number> {
    return new Promise((resolve) => {
      let made = 0, shots = 0;
      let offKey: () => void = () => {};
      let stopRaf: () => void = () => {};
      this.panel((p, close) => {
        p.innerHTML = '<h2>🏀 Free throws</h2><p>Tap SHOOT when the marker is in the green zone. 5 shots!</p>';
        const bar = el('div', 'msg-bar');
        const zone = el('div', 'zone');
        const width = Math.min(34, 16 + skill * 0.6);
        zone.style.left = `${50 - width / 2}%`; zone.style.width = `${width}%`;
        const cur = el('div', 'cur');
        bar.append(zone, cur);
        const score = el('p', '', 'Made: 0 / 0');
        const shoot = el('button', 'msg-btn go', 'SHOOT!') as HTMLButtonElement;
        shoot.style.width = '100%';
        let t = 0, raf = 0, dirv = 1, pos = 0;
        const loop = () => { t++; pos += dirv * (1.4 + shots * 0.25); if (pos > 100) { pos = 100; dirv = -1; } if (pos < 0) { pos = 0; dirv = 1; } cur.style.left = `calc(${pos}% - 3px)`; raf = requestAnimationFrame(loop); };
        raf = requestAnimationFrame(loop);
        stopRaf = () => { this.cleanups.delete(stopRaf); cancelAnimationFrame(raf); };
        this.cleanups.add(stopRaf);
        const fire = () => {
          if (shots >= 5) return;
          shots++;
          const ok = Math.abs(pos - 50) <= width / 2;
          if (ok) { made++; Sfx.swish(); } else Sfx.bad();
          score.textContent = `Made: ${made} / ${shots}` + (ok ? '  — Swish!' : '  — Clank!');
          if (shots >= 5) {
            stopRaf();
            shoot.textContent = 'Done';
            shoot.onclick = close;
          }
        };
        const key = (e: KeyboardEvent) => { if (e.key === ' ' || e.key === 'Enter' || e.key === 'e') { e.preventDefault(); if (shots < 5) fire(); } };
        offKey = this.onWindowKey(key);
        shoot.onclick = fire;
        p.append(bar, score, shoot);
      }).then(() => { stopRaf(); offKey(); resolve(made); }); // also settles on Escape
    });
  }

  /** Resolves with the result text, or '' if the player left before finishing. */
  experiment(): Promise<string> {
    return new Promise((resolve) => {
      let result = '';
      this.panel((p, close) => {
        p.innerHTML = '<h2>🧪 Lab experiment</h2><p>Mix two solutions. Safety goggles on!</p>';
        const chems = [['Blue', '#4f86d9'], ['Yellow', '#f2c94c'], ['Red', '#e2544a'], ['Clear', '#dff4fb']];
        const picked: number[] = [];
        const row = el('div', 'msg-row');
        row.style.justifyContent = 'center';
        const out = el('p', '', 'Pick two…');
        const results: Record<string, string> = {
          '01': 'It turns GREEN and fizzes gently! 🟢', '02': 'A deep PURPLE swirl appears. Beautiful!', '12': 'ORANGE bubbles rise like a tiny sunset!',
          '03': 'The blue fades to a pale sky color.', '13': 'It glows a soft lemon yellow.', '23': 'Pink foam! Mr. Okafor nods approvingly.',
        };
        chems.forEach(([n, c], i) => {
          const b = el('button', 'msg-btn alt', n) as HTMLButtonElement;
          b.style.borderLeft = `14px solid ${c}`;
          b.onclick = () => {
            if (picked.includes(i) || picked.length >= 2) return;
            picked.push(i); Sfx.blip(); b.style.background = '#ffd84d';
            if (picked.length === 2) {
              const k = [...picked].sort().join('');
              const r = results[k] ?? 'Nothing happens.';
              out.innerHTML = `<b>Result:</b> ${r}`;
              Sfx.good();
              const done = el('button', 'msg-btn go', 'Write it in my lab notebook') as HTMLButtonElement;
              done.style.width = '100%';
              done.onclick = () => { result = r; close(); };
              p.appendChild(done);
            }
          };
          row.appendChild(b);
        });
        p.append(row, out);
      }).then(() => resolve(result)); // also settles on ✕ / Escape
    });
  }
}
