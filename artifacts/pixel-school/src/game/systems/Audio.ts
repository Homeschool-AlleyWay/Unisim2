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
};
