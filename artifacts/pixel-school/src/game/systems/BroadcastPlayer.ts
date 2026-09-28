// The Morning Broadcast: two student anchors deliver a short mandatory morning-assembly
// segment (greeting → date → weather → motto & promise → Pledge → Lord's Prayer), then,
// once the first bell rings, a looping news show. The mandatory segment renders as a
// blocking full-screen "big TV" overlay; the news loop instead drives a small ticker
// (shown while the player is physically in the hallway) plus the silent classroom TVs.
import { buildCharacterSheet, Look } from '../art/characters';
import { Sfx } from './Audio';
import {
  ANCHORS, ANTHEM_MELODY, LORDS_PRAYER_LINES, PLEDGE_LINES, SCHOOL_MOTTO, SCHOOL_NAME, SCHOOL_PROMISE,
  calendarForDay, getSubmissions, healthFactForDay, historicalFactFor, newsForDay, upcomingHolidays,
  vocabForDay, weatherForDate,
} from '../data/broadcast';

const ANCHOR_LOOKS: Look[] = [
  { skin: '#dda47c', hair: '#2b2024', hairStyle: 'short', shirt: '#4f86d9', pants: '#2d2a33', shoes: '#2d2a33', outfit: 'blazer', glasses: false, eyeColor: '#4a2f22' },
  { skin: '#f1c29e', hair: '#7a4a2a', hairStyle: 'long', shirt: '#e874a8', pants: '#2d2a33', shoes: '#2d2a33', outfit: 'blazer', glasses: false, eyeColor: '#3f7d6e' },
];

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
  root: HTMLDivElement;
  private portraitCanvases: HTMLCanvasElement[] = [];
  private captionEl!: HTMLDivElement;
  private headlineEl!: HTMLDivElement;
  private anchorEls: HTMLDivElement[] = [];
  private cancelled = false;
  private ticker!: HTMLDivElement;
  private tickerIcon!: HTMLSpanElement;
  private tickerText!: HTMLDivElement;
  private loopTimer: ReturnType<typeof setTimeout> | null = null;
  private loopSlides: BroadcastSlide[] = [];
  private loopIdx = 0;
  private loopInHallway: () => boolean = () => false;
  /** Latest segment content, mirrored to classroom TVs / hallway ticker (visual only). */
  current: BroadcastSlide = { icon: '📺', title: SCHOOL_NAME, body: 'Good morning!' };
  onSlide: (s: BroadcastSlide) => void = () => {};

  constructor(private parent: HTMLElement) {
    this.root = el('div', 'bcast-overlay') as HTMLDivElement;
    this.root.style.cssText = 'position:absolute;inset:0;display:none;z-index:60;background:radial-gradient(circle at 50% 30%,#2a2f45,#0d0e16);align-items:center;justify-content:center;flex-direction:column;padding:16px;box-sizing:border-box;color:#fff8ec;font-family:"Nunito",sans-serif;';
    const tv = el('div', 'bcast-tv');
    tv.style.cssText = 'width:min(96vw,520px);border-radius:22px;background:#14121c;padding:14px;box-shadow:0 20px 60px rgba(0,0,0,.5);border:6px solid #21202c;';
    const screen = el('div');
    screen.style.cssText = 'background:linear-gradient(180deg,#232847,#12141f);border-radius:12px;padding:16px;min-height:280px;display:flex;flex-direction:column;';
    this.headlineEl = el('div') as HTMLDivElement;
    this.headlineEl.style.cssText = 'font-weight:800;font-size:13px;letter-spacing:.04em;color:#ffd166;text-transform:uppercase;margin-bottom:8px;';
    this.headlineEl.textContent = `📡 ${SCHOOL_NAME} — Morning Broadcast`;
    const row = el('div');
    row.style.cssText = 'display:flex;gap:14px;align-items:flex-end;flex:1;';
    for (let i = 0; i < 2; i++) {
      const wrap = el('div') as HTMLDivElement;
      wrap.style.cssText = 'display:flex;flex-direction:column;align-items:center;gap:4px;transition:transform .12s ease;';
      const canvas = document.createElement('canvas');
      canvas.width = 128; canvas.height = 192;
      canvas.style.cssText = 'width:76px;image-rendering:pixelated;filter:drop-shadow(0 6px 10px rgba(0,0,0,.4));';
      const name = el('div', '', ANCHORS[i].name);
      name.style.cssText = 'font-size:11px;opacity:.75;font-weight:700;';
      wrap.append(canvas, name);
      row.appendChild(wrap);
      this.portraitCanvases.push(canvas);
      this.anchorEls.push(wrap);
    }
    const capWrap = el('div');
    capWrap.style.cssText = 'flex:2;background:rgba(0,0,0,.25);border-radius:10px;padding:12px 14px;min-height:120px;';
    this.captionEl = el('div') as HTMLDivElement;
    this.captionEl.style.cssText = 'font-size:15px;line-height:1.4;font-weight:600;';
    capWrap.appendChild(this.captionEl);
    row.appendChild(capWrap);
    screen.append(this.headlineEl, row);
    tv.appendChild(screen);
    this.root.appendChild(tv);
    this.parent.appendChild(this.root);
    this.redrawPortraits('stand');

    // Compact hallway ticker — visible only while the player is near the main-hall TV.
    this.ticker = el('div') as HTMLDivElement;
    this.ticker.style.cssText = 'position:absolute;left:8px;right:8px;bottom:8px;display:none;z-index:40;background:rgba(18,16,26,.88);border-radius:12px;padding:8px 12px;color:#fff8ec;font-family:"Nunito",sans-serif;align-items:center;gap:10px;pointer-events:none;';
    this.ticker.style.display = 'none';
    this.tickerIcon = el('span') as HTMLSpanElement;
    this.tickerIcon.style.cssText = 'font-size:22px;';
    this.tickerText = el('div') as HTMLDivElement;
    this.tickerText.style.cssText = 'flex:1;font-size:12px;line-height:1.3;';
    const label = el('div', '', '📺 ON AIR');
    label.style.cssText = 'font-size:9px;font-weight:800;color:#ffd166;letter-spacing:.06em;';
    const wrap = el('div');
    wrap.style.cssText = 'display:flex;align-items:center;gap:10px;';
    wrap.append(this.tickerIcon, this.tickerText);
    this.ticker.append(label, wrap);
    this.parent.appendChild(this.ticker);
  }

  setTickerVisible(v: boolean) { this.ticker.style.display = v ? 'flex' : 'none'; }

  private redrawPortraits(pose: 'stand' | 'talk') {
    for (let i = 0; i < 2; i++) {
      const sheet = buildCharacterSheet(ANCHOR_LOOKS[i], 2);
      const ctx = this.portraitCanvases[i].getContext('2d')!;
      ctx.clearRect(0, 0, 128, 192);
      // 'down' row, 'stand' frame (col 0) — a clean front-facing bust, scaled up.
      ctx.drawImage(sheet, 0, 0, 128, 192, 0, 0, 128, 192);
    }
  }

  private setSpeaking(idx: number, speaking: boolean) {
    const wrap = this.anchorEls[idx];
    wrap.style.transform = speaking ? 'scale(1.06) translateY(-2px)' : 'scale(1) translateY(0)';
    wrap.style.filter = speaking ? 'brightness(1.15)' : 'brightness(1)';
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
    this.headlineEl.textContent = `${icon} ${title}`;
    this.tickerIcon.textContent = icon;
    this.tickerText.textContent = `${title} — ${body}`;
  }

  private async say(idx: 0 | 1, text: string, caption?: string) {
    this.captionEl.textContent = caption ?? text;
    await this.speak(idx, text);
    if (this.cancelled) return;
    await this.wait(180);
  }

  open() { this.root.style.display = 'flex'; }
  close() { this.root.style.display = 'none'; }
  cancel() { this.cancelled = true; try { speechSynthesis?.cancel(); } catch { /* no-op */ } }

  /** The blocking morning-assembly segment. Resolves once it's fully played. */
  async playMandatory(playerName: string, now = new Date()): Promise<void> {
    this.cancelled = false;
    this.open();
    Sfx.startHallwayAmbience();
    const w = weatherForDate(now);
    const dateStr = now.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    this.showSlide('📣', 'Good Morning!', `Good morning, ${SCHOOL_NAME}!`);
    await this.say(0, `Good morning, students and faculty of ${SCHOOL_NAME}!`);
    await this.say(1, `Great to see you all — let's get today started right.`);

    this.showSlide('📅', "Today's Date", dateStr);
    await this.say(0, `Today is ${dateStr}.`);

    this.showSlide(w.icon, 'Weather', `${w.label}, high of ${w.hi}° and a low of ${w.lo}°.`);
    await this.say(1, `Here's your weather: ${w.label.toLowerCase()}, with a high of ${w.hi} degrees and a low around ${w.lo}.`);

    this.showSlide('🏫', 'Our Motto', SCHOOL_MOTTO);
    await this.say(0, `Our school motto: ${SCHOOL_MOTTO}`);
    this.showSlide('🤝', 'Our Promise', SCHOOL_PROMISE);
    await this.say(1, `And our promise to you: ${SCHOOL_PROMISE}`);

    this.showSlide('🇺🇸', 'Pledge of Allegiance', 'Please stand and join us.');
    await this.say(0, 'Please stand for the Pledge of Allegiance.');
    const anthemSec = Sfx.playMelody(ANTHEM_MELODY, 96, 0.05);
    for (const line of PLEDGE_LINES) {
      this.captionEl.textContent = line;
      await this.speak(0, line);
      if (this.cancelled) break;
    }
    await this.wait(Math.max(0, anthemSec * 1000 - PLEDGE_LINES.join(' ').length * 40));

    this.showSlide('🙏', "The Lord's Prayer", 'Please bow your heads.');
    for (const line of LORDS_PRAYER_LINES) {
      this.captionEl.textContent = line;
      await this.speak(1, line);
      if (this.cancelled) break;
    }

    this.showSlide('🔔', 'Classes Starting Soon', 'Grab your backpack and 2-way from your locker, then head to class!');
    await this.say(0, `That's it for now — classes are starting soon! Grab your backpack and your 2-way from your locker, then head on to class.`);
    Sfx.stopHallwayAmbience();
    this.close();
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
    this.stopNewsLoop();
    this.loopInHallway = isInHallway;
    this.loopSlides = this.buildLoopSlides(day);
    this.loopIdx = 0;
    this.stepLoop();
  }

  private stepLoop() {
    if (!this.loopSlides.length) return;
    const s = this.loopSlides[this.loopIdx % this.loopSlides.length];
    this.showSlide(s.icon, s.title, s.body);
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

  destroy() { this.cancel(); this.stopNewsLoop(); Sfx.stopHallwayAmbience(); this.root.remove(); this.ticker.remove(); }
}
