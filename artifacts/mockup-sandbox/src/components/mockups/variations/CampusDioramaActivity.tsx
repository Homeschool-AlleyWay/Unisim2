import { useMemo, useState } from "react";
import {
  Bell,
  ChevronLeft,
  ChevronRight,
  Clock3,
  MapPin,
  Pause,
  Play,
  Sparkles,
  Users,
  Volume2,
} from "lucide-react";

type Place = "Observatory" | "Studio" | "Library" | "Garden" | "Gym";

type Moment = {
  time: string;
  title: string;
  place: Place;
  note: string;
  color: string;
  people: number;
};

const moments: Moment[] = [
  { time: "08:10", title: "Gates open", place: "Garden", note: "The first bikes are at the rack.", color: "#f4a261", people: 14 },
  { time: "08:45", title: "Morning circle", place: "Studio", note: "Room 4 is trading riddle cards.", color: "#e76f51", people: 22 },
  { time: "09:35", title: "Cloud lab", place: "Observatory", note: "Mika is mapping low pressure.", color: "#5596b8", people: 11 },
  { time: "10:25", title: "Library drift", place: "Library", note: "A beetle atlas has caused a queue.", color: "#8a72a8", people: 9 },
  { time: "11:50", title: "Lunch break", place: "Garden", note: "Soup line is moving at a lovely pace.", color: "#72a57c", people: 36 },
  { time: "13:15", title: "Relay practice", place: "Gym", note: "Three teams are warm and ready.", color: "#e9b44c", people: 18 },
];

const buildingData: Record<Place, { x: number; y: number; label: string }> = {
  Observatory: { x: 465, y: 116, label: "CLOUD LAB" },
  Studio: { x: 194, y: 270, label: "ROOM 4" },
  Library: { x: 415, y: 302, label: "LIBRARY" },
  Garden: { x: 80, y: 170, label: "NORTH YARD" },
  Gym: { x: 630, y: 268, label: "GYM" },
};

function Student({ x, y, color, pulse = false }: { x: number; y: number; color: string; pulse?: boolean }) {
  return (
    <g className={pulse ? "animate-[pulse_1.8s_ease-in-out_infinite]" : ""} transform={`translate(${x} ${y})`}>
      <circle cx="0" cy="-8" r="7" fill="#f7d8bc" stroke="#293241" strokeWidth="2.5" />
      <path d="M-9 10 Q0 -3 9 10V17H-9Z" fill={color} stroke="#293241" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M-5 18v8M5 18v8" stroke="#293241" strokeWidth="2.5" strokeLinecap="round" />
    </g>
  );
}

export function CampusDioramaActivity() {
  const [selected, setSelected] = useState(2);
  const [playing, setPlaying] = useState(true);
  const [sound, setSound] = useState(true);
  const active = moments[selected];
  const activeBuilding = buildingData[active.place];
  const activeCount = useMemo(() => 28 + selected * 3, [selected]);

  const step = (amount: number) => setSelected((current) => Math.max(0, Math.min(moments.length - 1, current + amount)));

  return (
    <main className="min-h-[100dvh] bg-[#dbe8e5] p-3 text-[#293241] sm:p-6" style={{ fontFamily: "'Trebuchet MS', ui-sans-serif, sans-serif" }}>
      <section className="mx-auto max-w-[1540px] overflow-hidden rounded-[30px] border-[3px] border-[#293241] bg-[#f7f0df] shadow-[12px_12px_0_#293241]">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b-[3px] border-[#293241] bg-[#f7f0df] px-5 py-4 sm:px-7">
          <div className="flex items-center gap-3">
            <div className="grid size-12 place-items-center rounded-[15px] border-[3px] border-[#293241] bg-[#e76f51] text-[#fff5e5] shadow-[3px_3px_0_#293241]">
              <Bell size={22} strokeWidth={2.8} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[.22em] text-[#66766f]">Pine &amp; Poppy Elementary</p>
              <h1 className="text-2xl font-black tracking-[-.06em] sm:text-3xl">Campus, alive.</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden rounded-full border-2 border-[#293241] bg-[#d8e5c7] px-3 py-2 text-[10px] font-black uppercase tracking-wider sm:block">Mon 14 Oct · Day 18</span>
            <button onClick={() => setSound((value) => !value)} aria-label="Toggle campus sound" className="grid size-10 place-items-center rounded-full border-2 border-[#293241] bg-[#f4d36b] shadow-[2px_2px_0_#293241]">
              {sound ? <Volume2 size={18} /> : <Bell size={18} />}
            </button>
          </div>
        </header>

        <div className="grid lg:grid-cols-[250px_minmax(0,1fr)_286px]">
          <aside className="border-b-[3px] border-[#293241] bg-[#f4d36b] p-5 lg:border-b-0 lg:border-r-[3px]">
            <p className="text-[10px] font-black uppercase tracking-[.18em]">The bell ledger</p>
            <h2 className="mt-2 text-3xl font-black leading-[.92] tracking-[-.07em]">Follow the<br />small stories.</h2>
            <div className="mt-6 border-t-2 border-[#293241]">
              {moments.map((moment, index) => (
                <button key={moment.time} onClick={() => setSelected(index)} className={`flex w-full items-center gap-3 border-b-2 border-[#293241] py-3 text-left transition-colors ${selected === index ? "bg-[#293241] px-2 text-[#fff5e5]" : "hover:bg-[#fff5e5]/70"}`}>
                  <span className="text-[10px] font-black">{moment.time}</span>
                  <span className="size-3 shrink-0 rounded-full border-2 border-current" style={{ backgroundColor: selected === index ? moment.color : moment.color }} />
                  <span className="min-w-0"><strong className="block truncate text-xs font-black">{moment.title}</strong><small className={`block truncate text-[9px] font-bold ${selected === index ? "text-[#f4d36b]" : "text-[#53615f]"}`}>{moment.place}</small></span>
                </button>
              ))}
            </div>
          </aside>

          <section className="relative overflow-hidden border-b-[3px] border-[#293241] bg-[#b9d8d1] p-4 sm:p-7 lg:border-b-0">
            <div className="absolute inset-0 opacity-[.22]" style={{ backgroundImage: "radial-gradient(#293241 1px, transparent 1px)", backgroundSize: "12px 12px" }} />
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[.18em]"><Sparkles size={14} /> live diorama · drag your eyes, not your mouse</p>
                <h2 className="mt-2 text-4xl font-black leading-[.83] tracking-[-.08em] sm:text-6xl">{active.time}<br /><span style={{ color: active.color }}>{active.title}</span></h2>
              </div>
              <div className="hidden rounded-[16px] border-2 border-[#293241] bg-[#fff5e5] px-3 py-2 text-right shadow-[3px_3px_0_#293241] sm:block">
                <p className="text-[9px] font-black uppercase tracking-widest text-[#65716e]">viewing</p><p className="text-xs font-black">{active.place}</p>
              </div>
            </div>

            <div className="relative mt-6 overflow-hidden rounded-[20px] border-[3px] border-[#293241] bg-[#9fcbcf] shadow-[7px_7px_0_#293241]">
              <svg viewBox="0 0 820 455" className="block h-auto w-full" role="img" aria-label={`Illustrated aerial campus showing activity in ${active.place}`}>
                <rect width="820" height="455" fill="#a8d1d0" />
                <path d="M0 70H820M0 140H820M0 210H820M0 280H820M0 350H820M70 0V455M140 0V455M210 0V455M280 0V455M350 0V455M420 0V455M490 0V455M560 0V455M630 0V455M700 0V455M770 0V455" stroke="#7badad" strokeWidth="1" opacity=".45" />
                <path d="M-35 366L236 210 844 407 570 455H190Z" fill="#d5e5a8" stroke="#293241" strokeWidth="3" />
                <path d="M55 344L330 185 759 323 505 447Z" fill="none" stroke="#f7f0df" strokeWidth="18" strokeLinejoin="round" />
                <path d="M55 344L330 185 759 323 505 447Z" fill="none" stroke="#293241" strokeWidth="3" strokeLinejoin="round" />
                <path d="M143 344L363 277M246 394L470 320M393 237L605 307" stroke="#293241" strokeWidth="3" strokeDasharray="9 9" opacity=".65" />

                <g transform="translate(86 138)">
                  <path d="M0 68L109 2 215 59 105 129Z" fill="#77a76c" stroke="#293241" strokeWidth="3" />
                  <path d="M0 68V152L105 211V129Z" fill="#639263" stroke="#293241" strokeWidth="3" />
                  <path d="M105 129L215 59V139L105 211Z" fill="#8dbb7a" stroke="#293241" strokeWidth="3" />
                  {[35, 75, 120, 160].map((x, index) => <circle key={x} cx={x} cy={73 + (index % 2) * 13} r="12" fill="#dbe8a3" stroke="#293241" strokeWidth="2" />)}
                  <text x="63" y="112" fontSize="13" fontWeight="900" fill="#293241">NORTH YARD</text>
                </g>

                <g transform="translate(177 238)">
                  <path d="M0 63L103 2 224 63 119 127Z" fill="#e76f51" stroke="#293241" strokeWidth="3" />
                  <path d="M0 63V151L119 217V127Z" fill="#d45e49" stroke="#293241" strokeWidth="3" />
                  <path d="M119 127L224 63V149L119 217Z" fill="#f09a76" stroke="#293241" strokeWidth="3" />
                  <path d="M12 43L104 -11 214 44 121 101Z" fill="#f4d36b" stroke="#293241" strokeWidth="3" />
                  <path d="M47 91v37M83 112v37M158 104v37M190 84v36" stroke="#293241" strokeWidth="5" />
                  <text x="58" y="157" fontSize="13" fontWeight="900" fill="#293241">ROOM 4</text>
                </g>

                <g transform="translate(405 264)">
                  <path d="M0 56L103 0 217 56 110 118Z" fill="#8a72a8" stroke="#293241" strokeWidth="3" />
                  <path d="M0 56V137L110 199V118Z" fill="#766091" stroke="#293241" strokeWidth="3" />
                  <path d="M110 118L217 56V135L110 199Z" fill="#a08abc" stroke="#293241" strokeWidth="3" />
                  <path d="M18 38L104 -9 198 39 110 90Z" fill="#cbbad1" stroke="#293241" strokeWidth="3" />
                  <path d="M47 82v32M78 100v32M145 91v33M177 73v31" stroke="#293241" strokeWidth="5" />
                  <text x="54" y="147" fontSize="13" fontWeight="900" fill="#293241">LIBRARY</text>
                </g>

                <g transform="translate(450 69)">
                  <path d="M0 70L100 13 201 67 100 128Z" fill="#5596b8" stroke="#293241" strokeWidth="3" />
                  <path d="M0 70V153L100 211V128Z" fill="#417b9e" stroke="#293241" strokeWidth="3" />
                  <path d="M100 128L201 67V149L100 211Z" fill="#75afc6" stroke="#293241" strokeWidth="3" />
                  <ellipse cx="101" cy="21" rx="43" ry="26" fill="#f4d36b" stroke="#293241" strokeWidth="3" />
                  <path d="M58 21h86M101 -5v52" stroke="#293241" strokeWidth="2" opacity=".55" />
                  <text x="42" y="166" fontSize="13" fontWeight="900" fill="#293241">CLOUD LAB</text>
                </g>

                <g transform="translate(610 238)">
                  <path d="M0 54L103 0 210 55 105 114Z" fill="#e9b44c" stroke="#293241" strokeWidth="3" />
                  <path d="M0 54V132L105 191V114Z" fill="#d7953d" stroke="#293241" strokeWidth="3" />
                  <path d="M105 114L210 55V132L105 191Z" fill="#f4cf71" stroke="#293241" strokeWidth="3" />
                  <path d="M23 37L103 -7 187 37 105 81Z" fill="#f7f0df" stroke="#293241" strokeWidth="3" />
                  <path d="M51 80v28M80 95v29M143 85v28M170 70v27" stroke="#293241" strokeWidth="5" />
                  <text x="69" y="143" fontSize="13" fontWeight="900" fill="#293241">GYM</text>
                </g>

                <Student x="330" y="260" color="#e76f51" />
                <Student x="375" y="285" color="#5596b8" />
                <Student x="548" y="250" color="#8a72a8" />
                <Student x="646" y="315" color="#e9b44c" />
                <Student x={activeBuilding.x} y={activeBuilding.y + 90} color={active.color} pulse />
                <g transform={`translate(${activeBuilding.x - 24} ${activeBuilding.y - 16})`}>
                  <path d="M24 0C11 0 1 10 1 23c0 17 23 38 23 38s23-21 23-38C47 10 37 0 24 0Z" fill="#fff5e5" stroke="#293241" strokeWidth="3" />
                  <circle cx="24" cy="23" r="7" fill={active.color} stroke="#293241" strokeWidth="2" />
                </g>
              </svg>
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-[13px] border-2 border-[#293241] bg-[#fff5e5] px-3 py-2 text-[10px] font-black shadow-[3px_3px_0_#293241]">
                <MapPin size={14} fill={active.color} /> {activeBuilding.label}
              </div>
              <div className="absolute right-4 top-4 max-w-[175px] rounded-[15px] border-2 border-[#293241] bg-[#fff5e5] p-3 text-[11px] font-bold leading-relaxed shadow-[3px_3px_0_#293241]">{active.note}</div>
            </div>

            <div className="relative mt-7 flex items-center gap-2 overflow-x-auto pb-1">
              {moments.map((moment, index) => (
                <button key={moment.time} onClick={() => setSelected(index)} className={`shrink-0 rounded-full border-2 border-[#293241] px-3 py-2 text-[10px] font-black transition-transform hover:-translate-y-1 ${index === selected ? "bg-[#293241] text-[#fff5e5]" : "bg-[#f7f0df]"}`}>
                  {moment.time}
                </button>
              ))}
            </div>
          </section>

          <aside className="bg-[#d9cce7] p-5 sm:p-7">
            <p className="text-[10px] font-black uppercase tracking-[.18em]">Campus pulse</p>
            <h2 className="mt-1 text-3xl font-black leading-[.9] tracking-[-.06em]">Who made<br />the map hum?</h2>
            <div className="mt-6 rounded-[20px] border-[3px] border-[#293241] bg-[#fff5e5] p-4 shadow-[4px_4px_0_#293241]">
              <div className="flex items-center justify-between"><span className="grid size-9 place-items-center rounded-full border-2 border-[#293241]" style={{ backgroundColor: active.color }}><Users size={18} /></span><span className="text-2xl font-black">{active.people}</span></div>
              <p className="mt-3 text-xs font-black">students gathered at {active.place}</p>
              <div className="mt-3 h-3 overflow-hidden rounded-full border-2 border-[#293241] bg-[#dbe8e5]"><div className="h-full rounded-full transition-all duration-500" style={{ width: `${active.people * 2.1}%`, backgroundColor: active.color }} /></div>
            </div>
            <div className="mt-5 space-y-2">
              {[
                ["Mika", "At the weather station", "#5596b8"],
                ["Leo", "Found beetle volume II", "#8a72a8"],
                ["Ari", "Setting out cones", "#e9b44c"],
              ].map(([name, detail, color]) => (
                <div key={name} className="flex items-center gap-3 rounded-[15px] border-2 border-[#293241] bg-[#fff5e5] p-3 shadow-[2px_2px_0_#293241]">
                  <span className="grid size-8 place-items-center rounded-full border-2 border-[#293241] text-xs font-black" style={{ backgroundColor: color }}>{name.charAt(0)}</span>
                  <span className="min-w-0"><strong className="block text-xs font-black">{name}</strong><small className="block truncate text-[9px] font-bold text-[#66766f]">{detail}</small></span>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-[17px] border-2 border-dashed border-[#293241] p-3 text-[10px] font-bold leading-relaxed"><Clock3 className="mr-1 inline" size={14} /> {activeCount} small movements logged since first bell.</div>
          </aside>
        </div>

        <footer className="flex flex-wrap items-center justify-between gap-4 bg-[#293241] px-5 py-3 text-[#fff5e5] sm:px-7">
          <div className="flex items-center gap-2">
            <button onClick={() => step(-1)} disabled={selected === 0} aria-label="Previous moment" className="grid size-9 place-items-center rounded-full border-2 border-[#fff5e5] disabled:opacity-30"><ChevronLeft size={18} /></button>
            <button onClick={() => setPlaying((value) => !value)} className="flex items-center gap-2 rounded-full border-2 border-[#fff5e5] bg-[#e76f51] px-4 py-2 text-[11px] font-black shadow-[2px_2px_0_#f4d36b]">{playing ? <Pause size={15} /> : <Play size={15} fill="currentColor" />}{playing ? "Pause the day" : "Play the day"}</button>
            <button onClick={() => step(1)} disabled={selected === moments.length - 1} aria-label="Next moment" className="grid size-9 place-items-center rounded-full border-2 border-[#fff5e5] disabled:opacity-30"><ChevronRight size={18} /></button>
          </div>
          <button onClick={() => setSelected((current) => (current + 1) % moments.length)} className="text-[10px] font-black uppercase tracking-[.14em]">Jump to next bell →</button>
        </footer>
      </section>
    </main>
  );
}