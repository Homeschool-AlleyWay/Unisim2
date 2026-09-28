// Tiny WebAudio synth: school bell, blips, piano notes, drums.
let ctx: AudioContext | null = null;
let muted = false;

function ac(): AudioContext | null {
  if (muted) return null;
  try {
    if (!ctx) ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  } catch { return null; }
}

function tone(freq: number, dur: number, type: OscillatorType = 'sine', vol = 0.15, delay = 0) {
  const a = ac(); if (!a) return;
  const o = a.createOscillator(), g = a.createGain();
  o.type = type; o.frequency.value = freq;
  const t0 = a.currentTime + delay;
  g.gain.setValueAtTime(0, t0);
  g.gain.linearRampToValueAtTime(vol, t0 + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  o.connect(g).connect(a.destination);
  o.start(t0); o.stop(t0 + dur + 0.05);
}

// ---------------- Hallway broadcast helpers (anthem synth + echo ambience) ----------------
const NOTE_FREQS: Record<string, number> = {
  C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.0, A4: 440.0, 'A#4': 466.16, B4: 493.88,
  C5: 523.25,
};

/** A shared "hallway echo" bus: a short feedback delay every broadcast tone is sent through,
 *  approximating the reverberant PA-system sound of a school hallway. Native TTS voices can't be
 *  routed through WebAudio, so only the synthesized anthem and ambience get the echo — the
 *  narration itself plays dry through the browser's speech engine. */
let echoBus: { input: GainNode } | null = null;
function getEchoBus() {
  const a = ac(); if (!a) return null;
  if (echoBus) return echoBus;
  const input = a.createGain();
  const delay = a.createDelay(1.0);
  delay.delayTime.value = 0.24;
  const feedback = a.createGain();
  feedback.gain.value = 0.32;
  const wet = a.createGain();
  wet.gain.value = 0.5;
  input.connect(a.destination);
  input.connect(delay);
  delay.connect(feedback);
  feedback.connect(delay);
  delay.connect(wet);
  wet.connect(a.destination);
  echoBus = { input };
  return echoBus;
}

function echoedTone(freq: number, dur: number, type: OscillatorType, vol: number, delay: number) {
  const a = ac(); const bus = getEchoBus(); if (!a || !bus) return;
  const o = a.createOscillator(), g = a.createGain();
  o.type = type; o.frequency.value = freq;
  const t0 = a.currentTime + delay;
  g.gain.setValueAtTime(0, t0);
  g.gain.linearRampToValueAtTime(vol, t0 + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  o.connect(g).connect(bus.input);
  o.start(t0); o.stop(t0 + dur + 0.05);
}

let ambienceTimer: ReturnType<typeof setInterval> | null = null;

export const Sfx = {
  setMuted(m: boolean) { muted = m; },
  isMuted() { return muted; },
  unlock() { ac(); },
  bell() { [659, 523, 587, 392].forEach((f, i) => tone(f, 0.7, 'triangle', 0.12, i * 0.32)); },
  blip() { tone(880, 0.08, 'square', 0.04); },
  talk() { tone(520 + Math.random() * 180, 0.05, 'square', 0.03); },
  good() { [523, 659, 784, 1046].forEach((f, i) => tone(f, 0.18, 'triangle', 0.08, i * 0.08)); },
  bad() { tone(220, 0.25, 'sawtooth', 0.05); tone(180, 0.3, 'sawtooth', 0.05, 0.12); },
  piano(i: number) { const s = [0, 2, 4, 5, 7, 9, 11, 12, 14, 16]; const f = 261.63 * Math.pow(2, s[i % s.length] / 12); tone(f, 0.9, 'triangle', 0.14); tone(f * 2, 0.5, 'sine', 0.04); },
  drum() { tone(90, 0.18, 'sine', 0.3); tone(180, 0.05, 'square', 0.05, 0.12); },
  swish() { tone(1200, 0.1, 'sine', 0.05); tone(1500, 0.12, 'sine', 0.05, 0.06); },
  step() { tone(140 + Math.random() * 30, 0.03, 'square', 0.015); },

  /** Play a melody of {note, beats} through the hallway echo bus. Returns total seconds. */
  playMelody(notes: { note: string; beats: number }[], bpm = 96, vol = 0.07): number {
    const beatSec = 60 / bpm;
    let t = 0;
    for (const n of notes) {
      const f = NOTE_FREQS[n.note] ?? 440;
      const dur = n.beats * beatSec * 0.92;
      echoedTone(f, dur, 'triangle', vol, t);
      t += n.beats * beatSec;
    }
    return t;
  },
  /** Soft, slow reverberant "hum" that loops while the hallway broadcast is on screen. */
  startHallwayAmbience() {
    if (ambienceTimer) return;
    const beat = () => echoedTone(196 + Math.sin(Date.now() / 4000) * 6, 1.6, 'sine', 0.015, 0);
    beat();
    ambienceTimer = setInterval(beat, 3200);
  },
  stopHallwayAmbience() {
    if (ambienceTimer) { clearInterval(ambienceTimer); ambienceTimer = null; }
  },
};
