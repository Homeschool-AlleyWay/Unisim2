// The Morning Broadcast: two student anchors deliver a short mandatory morning-assembly
// segment (greeting → date → weather → motto & promise → Pledge → Lord's Prayer), then,
// once the first bell rings, a looping news show.
//
// The show is rendered once per frame by BroadcastScreen into an offscreen canvas (the
// "signal"). It plays in the world on the big wall TV in the main hallway, in a pocket
// picture-in-picture panel while the player is in the hallway/lobby (tap to enlarge),
// and silently on the 3D classroom TVs. Nothing takes over the screen any more.
import { Look } from '../art/characters';
import { Sfx } from './Audio';
import { BroadcastScreen, SCREEN_H, SCREEN_W } from './BroadcastScreen';
import {
  ANCHORS, ANTHEM_MELODY, LORDS_PRAYER_LINES, PLEDGE_LINES, SCHOOL_MOTTO, SCHOOL_NAME, SCHOOL_PROMISE,
  calendarForDay, getSubmissions, healthFactForDay, historicalFactFor, newsForDay, upcomingHolidays,
  vocabForDay, weatherForDate,
} from '../data/broadcast';

const ANCHOR_LOOKS: Look[] = [
  { skin: '#dda47c', hair: '#2b2024', hairStyle: 'short', shirt: '#4f86d9', pants: '#2d2a33', shoes: '#2d2a33', outfit: 'blazer', glasses: false, eyeColor: '#4a2f22' },
  { skin: '#f1c29e', hair: '#7a4a2a', hairStyle: 'long', shirt: '#e874a8', pants: '#2d2a33', shoes: '#2d2a33', outfit: 'blazer', glasses: false, eyeColor: '#3f7d6e' },
];

// The morning-assembly segment airs once per real calendar day on this device. Reopening the
// app or starting another in-game day on the same date skips straight to the news loop.
const MANDATORY_SEEN_KEY = 'mg-broadcast-mandatory-date';
function localDateKey(d = new Date()) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
export function mandatorySeenToday(): boolean {
  try { return localStorage.getItem(MANDATORY_SEEN_KEY) === localDateKey(); } catch { return false; }
}
export function markMandatorySeen() {
  try { localStorage.setItem(MANDATORY_SEEN_KEY, localDateKey()); } catch { /* storage unavailable */ }
}

/** Frames per second the signal is redrawn at while at least one TV is showing it. */
const SIGNAL_FPS = 15;

export interface BroadcastSlide { icon: string; title: string; body: string; durationSec?: number }

function el(tag: string, cls = '', text = '') { const e = document.createElement(tag); if (cls) e.className = cls; if (text) e.textContent = text; return e; }

/** Best-effort male/female voice match; falls back to pitch-shifting the default voice
 *  when the browser/OS only exposes one. Voice availability varies a lot by platform. */
function pickVoice(gender: 'male' | 'female'): SpeechSynthesisVoice | null {
  if (!('speechSynthesis' in window)) return null;
  const voices = speechSynthesis.getVoices();
  if (!voices.length) return null;
  const re = gender === 'female' ? /female|zira|samantha|victoria|karen|susan|female|woman/i : /male|david|daniel|fred|alex|man\b/i;
  return voices.find((v) => re.test(v.name)) ?? voices.find((v) => v.lang.startsWith('en')) ?? voices[0];
}

export class BroadcastPlayer {
  /** The live picture. Consumers copy from `screen.canvas` (hi-res) or `screen.small` (world TV). */
  readonly screen = new BroadcastScreen(ANCHOR_LOOKS);
  /** Fired after every redraw of the signal so in-world textures can refresh. */
  onFrame: () => void = () => {};
  /** Latest segment content (visual only). */
  current: BroadcastSlide = { icon: '📺', title: SCHOOL_NAME, body: 'Good morning!' };
  onSlide: (s: BroadcastSlide) => void = () => {};

  private pip: HTMLDivElement;
  private pipCanvas: HTMLCanvasElement;
  private pipCtx: CanvasRenderingContext2D;
  private pipLabel: HTMLDivElement;
  private pipVisible = false;
  private pipBig = false;
  /** Closed with its ✕; stays hidden until the player leaves the hallway/lobby and comes back. */
  private pipDismissed = false;
  /** Set by the scene when the wall TV is on camera or a 3D TV is up, so the signal keeps rendering. */
  worldViewers = 0;
  private lastRender = 0;
  private cancelled = false;
  private loopTimer: ReturnType<typeof setTimeout> | null = null;
  private loopSlides: BroadcastSlide[] = [];
  private loopIdx = 0;
  private loopInHallway: () => boolean = () => false;
  private mandatoryRunning = false;
  /** News loop requested while the assembly was still on air; started once it ends. */
  private pendingLoop: { day: number; isInHallway: () => boolean } | null = null;
  private destroyed = false;
  private readonly onResize = () => this.layoutPip();

  constructor(private parent: HTMLElement) {
    // Pocket TV: small by default, tap to enlarge. Never blocks the game.
    this.pip = el('div', 'bcast-pip') as HTMLDivElement;
    this.pip.style.cssText = 'position:absolute;display:none;z-index:40;border-radius:10px;overflow:hidden;background:#05060d;border:3px solid #23222e;box-shadow:0 12px 34px rgba(0,0,0,.55),inset 0 0 0 1px rgba(255,255,255,.06);cursor:pointer;pointer-events:auto;transition:width .18s ease,top .18s ease,right .18s ease,left .18s ease,transform .18s ease;';
    this.pipCanvas = document.createElement('canvas');
    this.pipCanvas.width = SCREEN_W; this.pipCanvas.height = SCREEN_H;
    this.pipCanvas.style.cssText = 'display:block;width:100%;height:auto;';
    this.pipCtx = this.pipCanvas.getContext('2d')!;
    this.pipLabel = el('div', '', 'Tap to enlarge') as HTMLDivElement;
    this.pipLabel.style.cssText = 'position:absolute;left:50%;top:5px;transform:translateX(-50%);padding:2px 8px;border-radius:999px;font:700 8px "Nunito",sans-serif;letter-spacing:.06em;text-transform:uppercase;color:#cfd3e8;background:rgba(0,0,0,.55);white-space:nowrap;pointer-events:none;';
    const pipX = el('button', '', '✕') as HTMLButtonElement;
    pipX.title = 'Close'; pipX.setAttribute('aria-label', 'Close hallway TV');
    pipX.style.cssText = 'position:absolute;top:4px;right:4px;width:24px;height:24px;border-radius:50%;border:2px solid #cfd3e8;background:rgba(0,0,0,.65);color:#fff;font:800 12px/1 "Nunito",sans-serif;display:flex;align-items:center;justify-content:center;padding:0;cursor:pointer;';
    pipX.addEventListener('click', (e) => { e.stopPropagation(); this.pipDismissed = true; this.setViewerVisible(true); });
    this.pip.append(this.pipCanvas, this.pipLabel, pipX);
    this.pip.addEventListener('click', () => { this.pipBig = !this.pipBig; this.layoutPip(); });
    this.parent.appendChild(this.pip);
    window.addEventListener('resize', this.onResize);
    this.layoutPip();
    this.screen.render(performance.now());
  }

  private layoutPip() {
    const st = this.pip.style;
    if (this.pipBig) {
      st.width = 'min(94vw, 640px)'; st.right = 'auto'; st.left = '50%'; st.top = '10%'; st.transform = 'translateX(-50%)';
      this.pipLabel.textContent = 'Tap to shrink';
    } else if (window.innerWidth <= 520) {
      // Phone layout: the HUD buttons stack down the right edge, so sit just left of them.
      st.width = '44vw'; st.left = 'auto'; st.right = '56px'; st.top = '62px'; st.transform = 'none';
      this.pipLabel.textContent = 'Tap to enlarge';
    } else {
      st.width = 'min(46vw, 250px)'; st.left = 'auto'; st.right = '10px'; st.top = '96px'; st.transform = 'none';
      this.pipLabel.textContent = 'Hallway TV · tap to enlarge';
    }
  }

  /** Show/hide the pocket TV (the scene calls this when the player is in the hallway/lobby). */
  setViewerVisible(inHall: boolean) {
    if (!inHall) this.pipDismissed = false;
    const v = inHall && !this.pipDismissed;
    this.pipVisible = v;
    this.pip.style.display = v ? 'block' : 'none';
    if (!v) {
      this.pipBig = false; this.layoutPip();
      // Leaving the hall mid-story: stop the news narration (the assembly keeps playing).
      if (!inHall && !this.mandatoryRunning) { try { speechSynthesis?.cancel(); } catch { /* no-op */ } }
    }
  }
  /** Kept for callers that used the old ticker API. */
  setTickerVisible(v: boolean) { this.setViewerVisible(v); }

  setClock(text: string) { this.screen.state.clock = text; }

  /** Call every frame from the scene. Redraws the signal at a modest rate while anyone is watching. */
  tick(nowMs: number) {
    if (!this.pipVisible && this.worldViewers <= 0) return;
    if (nowMs - this.lastRender < 1000 / SIGNAL_FPS) return;
    this.lastRender = nowMs;
    this.screen.render(nowMs);
    if (this.pipVisible) this.pipCtx.drawImage(this.screen.canvas, 0, 0);
    this.onFrame();
  }

  private setSpeaking(idx: number, speaking: boolean) {
    this.screen.state.speaker = speaking ? (idx as 0 | 1) : null;
  }

  private speak(idx: number, text: string): Promise<void> {
    this.setSpeaking(idx, true);
    return new Promise((resolve) => {
      const finish = () => { this.setSpeaking(idx, false); resolve(); };
      if (!('speechSynthesis' in window) || this.cancelled) { setTimeout(finish, Math.min(4500, 700 + text.length * 42)); return; }
      try {
        const u = new SpeechSynthesisUtterance(text);
        const v = pickVoice(ANCHORS[idx].gender);
        if (v) u.voice = v;
        u.pitch = ANCHORS[idx].gender === 'female' ? 1.18 : 0.88;
        u.rate = 1.03;
        u.onend = finish;
        u.onerror = finish;
        speechSynthesis.speak(u);
      } catch { finish(); }
    });
  }

  private wait(ms: number) { return new Promise<void>((r) => setTimeout(r, ms)); }

  private showSlide(icon: string, title: string, body: string) {
    this.current = { icon, title, body };
    this.onSlide(this.current);
    const st = this.screen.state;
    st.icon = icon; st.title = title; st.body = body; st.caption = '';
  }

  private setCaption(text: string) { this.screen.state.caption = text; }

  private async say(idx: 0 | 1, text: string, caption?: string) {
    if (this.cancelled) return;
    this.setCaption(caption ?? text);
    await this.speak(idx, text);
    if (this.cancelled) return;
    await this.wait(180);
  }

  cancel() { this.cancelled = true; this.pendingLoop = null; try { speechSynthesis?.cancel(); } catch { /* no-op */ } }

  /** The morning-assembly segment. Resolves once it's fully played. Plays on the TVs;
   *  the caller decides what (if anything) is gated on it finishing. */
  async playMandatory(playerName: string, now = new Date()): Promise<void> {
    this.cancelled = false;
    this.mandatoryRunning = true;
    try { await this.runMandatory(playerName, now); }
    finally {
      this.mandatoryRunning = false;
      if (!this.destroyed && this.pendingLoop) { const p = this.pendingLoop; this.pendingLoop = null; this.startNewsLoop(p.day, p.isInHallway); }
    }
  }

  private async runMandatory(playerName: string, now: Date): Promise<void> {
    const st = this.screen.state;
    st.mode = 'live';
    const w = weatherForDate(now);
    const dateStr = now.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    st.ticker = [
      `Good morning, ${playerName}!`, dateStr, `Weather: ${w.label}, high ${w.hi}° / low ${w.lo}°`,
      SCHOOL_MOTTO, 'Classes begin after the morning broadcast',
    ];
    Sfx.startHallwayAmbience();

    this.showSlide('📣', 'Good Morning!', `Good morning, ${SCHOOL_NAME}!`);
    await this.say(0, `Good morning, students and faculty of ${SCHOOL_NAME}!`);
    await this.say(1, `Great to see you all — let's get today started right.`);

    if (this.cancelled) return;
    this.showSlide('📅', "Today's Date", dateStr);
    await this.say(0, `Today is ${dateStr}.`);

    if (this.cancelled) return;
    this.showSlide(w.icon, 'Weather', `${w.label}, high of ${w.hi}° and a low of ${w.lo}°.`);
    await this.say(1, `Here's your weather: ${w.label.toLowerCase()}, with a high of ${w.hi} degrees and a low around ${w.lo}.`);

    if (this.cancelled) return;
    this.showSlide('🏫', 'Our Motto', SCHOOL_MOTTO);
    await this.say(0, `Our school motto: ${SCHOOL_MOTTO}`);
    this.showSlide('🤝', 'Our Promise', SCHOOL_PROMISE);
    await this.say(1, `And our promise to you: ${SCHOOL_PROMISE}`);

    if (this.cancelled) return;
    this.showSlide('🇺🇸', 'Pledge of Allegiance', 'Please stand and join us.');
    await this.say(0, 'Please stand for the Pledge of Allegiance.');
    const anthemSec = Sfx.playMelody(ANTHEM_MELODY, 96, 0.05);
    for (const line of PLEDGE_LINES) {
      this.setCaption(line);
      await this.speak(0, line);
      if (this.cancelled) break;
    }
    if (!this.cancelled) await this.wait(Math.max(0, anthemSec * 1000 - PLEDGE_LINES.join(' ').length * 40));

    if (this.cancelled) return;
    this.showSlide('🙏', "The Lord's Prayer", 'Please bow your heads.');
    for (const line of LORDS_PRAYER_LINES) {
      this.setCaption(line);
      await this.speak(1, line);
      if (this.cancelled) break;
    }

    if (this.cancelled) return;
    this.showSlide('🔔', 'Classes Starting Soon', 'Grab your backpack and 2-way from your locker, then head to class!');
    await this.say(0, `That's it for now — classes are starting soon! Grab your backpack and your 2-way from your locker, then head on to class.`);
    Sfx.stopHallwayAmbience();
    // Stay on air with the closing slide until the news loop takes over after the bell.
    this.setCaption('Grab your backpack and 2-way from your locker, then head to class!');
  }

  /** One pass of the after-bell news loop. Non-blocking content only — the caller decides
   *  how long to show each slide (used to drive both the hallway ticker and classroom TVs). */
  buildLoopSlides(day: number, now = new Date()): BroadcastSlide[] {
    const news = newsForDay(day);
    const vocab = vocabForDay(day);
    const health = healthFactForDay(day);
    const holidays = upcomingHolidays(now);
    const calendar = calendarForDay(day);
    const slides: BroadcastSlide[] = [];
    slides.push({ icon: '📰', title: 'Local Events', body: news.localEvents.map((e) => `${e.icon} ${e.headline}`).join('  •  ') });
    news.localEvents.forEach((e) => slides.push({ icon: e.icon, title: e.headline, body: e.body }));
    news.localNews.forEach((e) => slides.push({ icon: e.icon, title: e.headline, body: e.body }));
    slides.push({ icon: news.national.icon, title: `National: ${news.national.headline}`, body: news.national.body });
    slides.push({ icon: news.international.icon, title: `World: ${news.international.headline}`, body: news.international.body });
    slides.push({ icon: '🗓️', title: 'Coming Up', body: calendar.join('  •  ') });
    slides.push({ icon: '📖', title: 'On This Day', body: historicalFactFor(now) });
    if (holidays.length) slides.push({ icon: '🎉', title: 'Birthdays & Holidays', body: holidays.map((h) => `${h.name} (${h.daysAway === 0 ? 'today!' : `in ${h.daysAway}d`})`).join('  •  ') });
    for (const s of getSubmissions()) {
      const kindLabel = s.kind === 'art' ? '🎨 Student Art' : s.kind === 'writing' ? '✍️ Student Writing' : `🎬 Student Clip (${Math.min(180, s.durationSec ?? 60)}s)`;
      slides.push({ icon: '🧑‍🎓', title: `${kindLabel}: ${s.title} — by ${s.studentName}`, body: s.body, durationSec: s.kind === 'clip' ? Math.min(180, s.durationSec ?? 60) : undefined });
    }
    vocab.forEach((v) => slides.push({ icon: '🔤', title: `Vocabulary: ${v.word}`, body: v.def }));
    slides.push({ icon: '🩺', title: `Health Fact: ${health.system}`, body: health.fact });
    return slides;
  }

  /** Starts the looping after-bell news show. Each slide is timed independently of speech —
   *  narration only actually plays while `isInHallway()` is true when that slide begins, so
   *  the classroom TVs stay in visual sync without leaking hallway audio into class. */
  startNewsLoop(day: number, isInHallway: () => boolean) {
    if (this.mandatoryRunning) { this.pendingLoop = { day, isInHallway }; return; } // don't talk over the assembly
    this.stopNewsLoop();
    this.loopInHallway = isInHallway;
    this.loopSlides = this.buildLoopSlides(day);
    this.loopIdx = 0;
    this.screen.state.mode = 'live';
    this.screen.state.ticker = this.loopSlides.slice(0, 8).map((s) => s.title);
    this.stepLoop();
  }

  private stepLoop() {
    if (!this.loopSlides.length) return;
    const s = this.loopSlides[this.loopIdx % this.loopSlides.length];
    this.showSlide(s.icon, s.title, s.body);
    this.setCaption(s.body);
    if (this.loopInHallway()) {
      Sfx.startHallwayAmbience();
      this.speak((this.loopIdx % 2) as 0 | 1, `${s.title}. ${s.body}`);
    } else {
      Sfx.stopHallwayAmbience();
    }
    const dur = (s.durationSec ?? 22) * 1000;
    this.loopIdx++;
    this.loopTimer = setTimeout(() => this.stepLoop(), dur);
  }

  stopNewsLoop() {
    if (this.loopTimer) { clearTimeout(this.loopTimer); this.loopTimer = null; }
    Sfx.stopHallwayAmbience();
  }

  destroy() {
    this.destroyed = true;
    this.pendingLoop = null;
    this.cancel(); this.stopNewsLoop(); Sfx.stopHallwayAmbience();
    window.removeEventListener('resize', this.onResize);
    this.pip.remove();
  }
}
