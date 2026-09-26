// DOM overlay: HUD, touch controls, dialogs, menus and mini-games.
import { CSS } from './styles';
import { buildCharacterSheet, HAIR_COLORS, HAIR_STYLES, Look, OUTFITS, PANTS_COLORS, randomLook, SHIRT_COLORS, SKIN_TONES } from '../art/characters';
import { Sfx } from '../systems/Audio';

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
    this.soundBtn = el('button', 'msg-ib', '🔊') as HTMLButtonElement;
    this.soundBtn.onclick = () => { Sfx.setMuted(!Sfx.isMuted()); this.soundBtn.textContent = Sfx.isMuted() ? '🔇' : '🔊'; };
    const menuBtn = el('button', 'msg-ib', '☰') as HTMLButtonElement;
    menuBtn.onclick = () => { Sfx.blip(); this.onMenu(); };
    btns.append(this.speedBtn, mapBtn, this.soundBtn, menuBtn);
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
    this.root.append(top, this.obj, this.toasts, this.room, pad, act);
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

  private modal(bottom = false) {
    const m = el('div', 'msg-modal' + (bottom ? ' bottom' : ''));
    const p = el('div', 'msg-panel');
    m.appendChild(p);
    this.root.appendChild(m);
    this.modalOpen++;
    for (const k of Object.keys(this.dirs) as DirKey[]) this.dirs[k] = false;
    const close = () => { if (m.parentNode) { m.remove(); this.modalOpen--; this.lastClose = performance.now(); } };
    return { m, p, close };
  }

  /** Speech box. Resolves with the index of the chosen option (0 when there are none). */
  say(who: string, text: string, options: string[] = [], color = '#3d6fb0'): Promise<number> {
    return new Promise((resolve) => {
      const { m, p, close } = this.modal(true);
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
        if (done) return;
        i += 2;
        txt.textContent = text.slice(0, i);
        if (i % 4 === 0) Sfx.talk();
        if (i >= text.length) finish(); else setTimeout(tick, 22);
      };
      tick();
      m.addEventListener('pointerdown', (e) => { if (!done && e.target !== m) finish(); });
      const key = (e: KeyboardEvent) => {
        if (!m.parentNode) { offKey(); return; }
        if (['Enter', ' ', 'e', 'E'].includes(e.key)) {
          e.preventDefault();
          if (!done) finish();
          else if (!options.length) { offKey(); close(); resolve(0); }
        }
        const n = parseInt(e.key, 10);
        if (done && n >= 1 && n <= options.length) { offKey(); close(); resolve(n - 1); }
      };
      let offKey: () => void = () => {};
      const armT = setTimeout(() => { this.cleanups.delete(cancelArm); offKey = this.onWindowKey(key); }, 150);
      const cancelArm = () => clearTimeout(armT);
      this.cleanups.add(cancelArm);
    });
  }

  panel(build: (p: HTMLElement, close: () => void) => void, bottom = false): Promise<void> {
    return new Promise((resolve) => {
      const { p, close } = this.modal(bottom);
      const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') { done(); } };
      const done = () => { offEsc(); close(); resolve(); };
      const offEsc = this.onWindowKey(esc);
      build(p, done);
    });
  }

  // ---------- Character creator ----------
  creator(existing: { name: string; look: Look; day: number } | null): Promise<{ name: string; look: Look; fresh: boolean }> {
    return new Promise((resolve) => {
      const { p, close } = this.modal();
      let look: Look = existing?.look ?? randomLook(Math.floor(Math.random() * 9999), { outfit: 'tee' });
      let name = existing?.name ?? 'Alex';
      if (existing) {
        p.innerHTML = `<div class="msg-title">Maple Grove</div><h2>School Life</h2><p>Welcome back, <b>${existing.name}</b>! Ready for day ${existing.day}?</p>`;
        const prev = this.previewCanvas(look);
        const wrap = el('div', 'msg-prev'); wrap.appendChild(prev.canvas);
        p.appendChild(wrap);
        const go = el('button', 'msg-btn go', '▶ Continue') as HTMLButtonElement;
        const fresh = el('button', 'msg-btn alt', 'New student') as HTMLButtonElement;
        go.style.width = fresh.style.width = '100%'; fresh.style.marginTop = '8px'; fresh.style.textAlign = 'center';
        p.append(go, fresh);
        go.onclick = () => { Sfx.unlock(); Sfx.good(); prev.stop(); close(); resolve({ name: existing.name, look, fresh: false }); };
        fresh.onclick = () => { prev.stop(); close(); this.creator(null).then(resolve); };
        return;
      }
      p.innerHTML = `<div class="msg-title">Maple Grove</div><h2>Create your student</h2>`;
      const wrap = el('div', 'msg-creator');
      const prev = this.previewCanvas(look);
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
          swatchRow('Skin', 'skin', SKIN_TONES),
          pillRow('Hair', 'hairStyle', HAIR_STYLES),
          swatchRow('Hair color', 'hair', HAIR_COLORS),
          pillRow('Outfit', 'outfit', OUTFITS),
          swatchRow('Top', 'shirt', SHIRT_COLORS),
          swatchRow('Bottoms', 'pants', PANTS_COLORS),
          swatchRow('Backpack', 'backpack', ['#e2544a', '#4f86d9', '#f2c94c', '#6cbf6a', '#8b6fd1', '#e874a8', '#f29b3b']),
        );
        const g = el('div', 'msg-row');
        g.appendChild(el('label', '', 'Glasses'));
        for (const v of [false, true]) {
          const b = el('button', 'msg-pill' + (!!look.glasses === v ? ' sel' : ''), v ? 'yes' : 'no') as HTMLButtonElement;
          b.onclick = () => { look.glasses = v; refresh(); };
          g.appendChild(b);
        }
        right.appendChild(g);
      };
      rnd.onclick = () => { look = randomLook(Math.floor(Math.random() * 99999)); Sfx.blip(); refresh(); };
      render();
      wrap.append(left, right);
      p.appendChild(wrap);
      const go = el('button', 'msg-btn go', '🏫 Start school!') as HTMLButtonElement;
      go.style.width = '100%'; go.style.marginTop = '10px';
      go.onclick = () => { Sfx.unlock(); Sfx.good(); prev.stop(); close(); resolve({ name: (name || 'Alex').trim().slice(0, 12), look, fresh: true }); };
      p.appendChild(go);
      p.appendChild(el('p', 'msg-help', 'Move: arrow keys / WASD or the D-pad · Interact: E / Space or the A button · Tap anywhere to walk there.'));
    });
  }

  private previewCanvas(initial: Look) {
    const canvas = document.createElement('canvas');
    canvas.width = 16; canvas.height = 24;
    const ctx = canvas.getContext('2d')!;
    let sheet = buildCharacterSheet(initial);
    let f = 0;
    const order = [0, 4, 12, 8];
    const draw = () => {
      ctx.clearRect(0, 0, 16, 24);
      const dirRow = order[Math.floor(f / 8) % 4] / 4;
      const col = [1, 0, 2, 0][f % 4];
      ctx.drawImage(sheet, col * 16, dirRow * 24, 16, 24, 0, 0, 16, 24);
      f++;
    };
    draw();
    const iv = setInterval(draw, 180);
    const stop = () => { this.cleanups.delete(stop); clearInterval(iv); };
    this.cleanups.add(stop);
    return { canvas, set: (l: Look) => { sheet = buildCharacterSheet(l); draw(); }, stop };
  }

  // ---------- Mini-games ----------
  piano(): Promise<number> {
    return new Promise((resolve) => {
      let notes = 0;
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
        const offKey = this.onWindowKey(key);
        const done = el('button', 'msg-btn go', 'Done') as HTMLButtonElement;
        done.style.width = '100%';
        done.onclick = () => { offKey(); close(); resolve(notes); };
        p.append(keys, done);
      });
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
        done.onclick = () => { close(); resolve(strokes); };
        p.append(pal, grid, done);
      });
    });
  }

  hoops(skill: number): Promise<number> {
    return new Promise((resolve) => {
      let made = 0, shots = 0;
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
        const stopRaf = () => { this.cleanups.delete(stopRaf); cancelAnimationFrame(raf); };
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
            shoot.onclick = () => { offKey(); close(); resolve(made); };
          }
        };
        const key = (e: KeyboardEvent) => { if (e.key === ' ' || e.key === 'Enter' || e.key === 'e') { e.preventDefault(); if (shots < 5) fire(); } };
        const offKey = this.onWindowKey(key);
        shoot.onclick = fire;
        p.append(bar, score, shoot);
      });
    });
  }

  experiment(): Promise<string> {
    return new Promise((resolve) => {
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
              done.onclick = () => { close(); resolve(r); };
              p.appendChild(done);
            }
          };
          row.appendChild(b);
        });
        p.append(row, out);
      });
    });
  }
}
