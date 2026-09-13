let ctx;

function getCtx() {
  if (ctx) return ctx;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return null;
  ctx = new AudioContext();
  return ctx;
}

function tone({ freq = 520, duration = 0.08, type = 'sine', gain = 0.04, slide = 0 } = {}) {
  const ac = getCtx();
  if (!ac) return;
  if (ac.state === 'suspended') ac.resume();

  const t0 = ac.currentTime;
  const osc = ac.createOscillator();
  const amp = ac.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t0);
  if (slide) {
    osc.frequency.exponentialRampToValueAtTime(Math.max(40, freq + slide), t0 + duration);
  }
  amp.gain.setValueAtTime(0.0001, t0);
  amp.gain.exponentialRampToValueAtTime(gain, t0 + 0.012);
  amp.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
  osc.connect(amp);
  amp.connect(ac.destination);
  osc.start(t0);
  osc.stop(t0 + duration + 0.02);
}

export function sfxHover() {
  tone({ freq: 640, duration: 0.05, type: 'triangle', gain: 0.025, slide: 80 });
}

export function sfxTap() {
  tone({ freq: 420, duration: 0.07, type: 'sine', gain: 0.035, slide: 120 });
}

export function sfxLang() {
  tone({ freq: 520, duration: 0.06, type: 'sine', gain: 0.03, slide: 160 });
  window.setTimeout(() => {
    tone({ freq: 760, duration: 0.08, type: 'triangle', gain: 0.028, slide: 40 });
  }, 45);
}

export function sfxClose() {
  tone({ freq: 380, duration: 0.07, type: 'sine', gain: 0.028, slide: -120 });
}
