import { useMemo, useState } from "react";
import {
  BellRing,
  ChevronLeft,
  ChevronRight,
  CirclePause,
  CloudSun,
  FastForward,
  Footprints,
  MapPin,
  Play,
  Route,
  Sparkles,
  UsersRound,
  Volume2,
} from "lucide-react";

type Stop = {
  time: string;
  label: string;
  room: string;
  code: string;
  color: string;
  detail: string;
};

const stops: Stop[] = [
  { time: "08:10", label: "Arrival", room: "Main gate", code: "A1", color: "#f3c968", detail: "The courtyard is filling up." },
  { time: "08:45", label: "Morning circle", room: "Room 4", code: "B2", color: "#d97768", detail: "22 backpacks, one excellent riddle." },
  { time: "09:35", label: "Cloud lab", room: "Science wing", code: "C4", color: "#7daed2", detail: "Mika is mapping the weather." },
  { time: "10:25", label: "Library drift", room: "Reading room", code: "D1", color: "#a58abf", detail: "Leo found a book on beetles." },
  { time: "11:50", label: "Lunch break", room: "North yard", code: "E3", color: "#77ac91", detail: "The soup queue is moving quickly." },
  { time: "13:15", label: "Relay practice", room: "Gymnasium", code: "F2", color: "#e8a454", detail: "Three teams are warming up." },
];

const activity = [
  ["Mika", "Science wing", "#d97768"],
  ["Leo", "Reading room", "#a58abf"],
  ["Ari", "North yard", "#77ac91"],
  ["Nia", "Art studio", "#7daed2"],
];

export function PixelSchoolRouteBoard() {
  const [selected, setSelected] = useState(2);
  const [running, setRunning] = useState(true);
  const [sound, setSound] = useState(true);
  const current = stops[selected];
  const progress = useMemo(() => `${15 + selected * 15}%`, [selected]);

  const changeStop = (amount: number) => {
    setSelected((value) => Math.min(stops.length - 1, Math.max(0, value + amount)));
  };

  return (
    <main
      className="min-h-[100dvh] overflow-hidden bg-[#e9e1cc] p-3 text-[#26343a] sm:p-6"
      style={{ fontFamily: "'Courier New', ui-monospace, monospace" }}
    >
      <section className="mx-auto min-h-[760px] max-w-[1500px] overflow-hidden rounded-[28px] border-[3px] border-[#26343a] bg-[#f8f1df] shadow-[10px_10px_0_#26343a]">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b-[3px] border-[#26343a] bg-[#ed6f5f] px-5 py-4 sm:px-7">
          <div className="flex items-center gap-4">
            <div className="grid size-12 place-items-center rounded-full border-[3px] border-[#26343a] bg-[#f8f1df] shadow-[3px_3px_0_#26343a]">
              <Route size={23} strokeWidth={3} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[.23em]">Pine &amp; Poppy Elementary</p>
              <h1 className="text-xl font-black leading-tight sm:text-2xl">THE BELL ROUTE</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden border-2 border-[#26343a] bg-[#f8f1df] px-3 py-2 text-[10px] font-black uppercase tracking-wider sm:block">Mon 14 Oct · day 18</span>
            <button onClick={() => setSound((value) => !value)} aria-label="Toggle bell sounds" className="grid size-10 place-items-center border-2 border-[#26343a] bg-[#f8f1df] shadow-[2px_2px_0_#26343a]">
              {sound ? <Volume2 size={18} /> : <BellRing size={18} />}
            </button>
          </div>
        </header>

        <div className="grid lg:grid-cols-[270px_minmax(0,1fr)_300px]">
          <aside className="border-b-[3px] border-[#26343a] bg-[#f1c866] p-5 lg:border-b-0 lg:border-r-[3px]">
            <p className="text-[10px] font-black uppercase tracking-[.18em]">Today&apos;s route</p>
            <h2 className="mt-2 text-3xl font-black leading-[.92] tracking-tight">Pick a bell.<br />Watch it move.</h2>
            <div className="mt-6 border-t-2 border-[#26343a]">
              {stops.map((stop, index) => (
                <button
                  key={stop.time}
                  onClick={() => setSelected(index)}
                  className={`group flex w-full items-center gap-3 border-b-2 border-[#26343a] py-3 text-left ${selected === index ? "bg-[#26343a] px-2 text-[#f8f1df]" : "hover:bg-[#f8f1df]/50"}`}
                >
                  <span className="text-[10px] font-black">{stop.time}</span>
                  <span className="grid size-7 place-items-center border-2 border-current text-[10px] font-black" style={selected === index ? undefined : { backgroundColor: stop.color }}>{stop.code}</span>
                  <span className="min-w-0">
                    <strong className="block truncate text-xs font-black">{stop.label}</strong>
                    <small className={`block truncate text-[9px] font-bold ${selected === index ? "text-[#f1c866]" : "text-[#596467]"}`}>{stop.room}</small>
                  </span>
                </button>
              ))}
            </div>
          </aside>

          <section className="relative overflow-hidden border-b-[3px] border-[#26343a] bg-[#c4dfd8] p-5 sm:p-7 lg:border-b-0">
            <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "linear-gradient(#26343a 1px, transparent 1px), linear-gradient(90deg, #26343a 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[.18em]"><CloudSun size={15} /> Live school weather · bright &amp; busy</p>
                <h2 className="mt-3 text-4xl font-black leading-[.86] tracking-[-.08em] sm:text-6xl">{current.time}<br /><span className="text-[#d95f50]">{current.label}</span></h2>
              </div>
              <span className="shrink-0 border-2 border-[#26343a] bg-[#f8f1df] px-3 py-2 text-[10px] font-black shadow-[3px_3px_0_#26343a]">NOW</span>
            </div>

            <div className="relative mt-7 min-h-[330px] overflow-hidden border-[3px] border-[#26343a] bg-[#8ec0ba] shadow-[6px_6px_0_#26343a]">
              <div className="absolute inset-x-0 top-0 h-[55%] bg-[#a8d5df]" />
              <div className="absolute left-[12%] top-10 h-3 w-20 rounded-full bg-[#f8f1df]/80" />
              <div className="absolute left-[53%] top-16 h-3 w-28 rounded-full bg-[#f8f1df]/80" />
              <div className="absolute bottom-0 left-0 h-[45%] w-full bg-[#91b46e]" />
              <div className="absolute bottom-[28%] left-[12%] h-36 w-44 border-[3px] border-[#26343a] bg-[#e9b160]" />
              <div className="absolute bottom-[55%] left-[8%] h-11 w-52 border-[3px] border-[#26343a] bg-[#ed6f5f]" />
              <div className="absolute bottom-[33%] left-[21%] h-14 w-12 border-[3px] border-[#26343a] bg-[#f8f1df]" />
              <div className="absolute bottom-[33%] left-[42%] h-14 w-12 border-[3px] border-[#26343a] bg-[#f8f1df]" />
              <div className="absolute bottom-[11%] right-[14%] h-20 w-5 border-2 border-[#26343a] bg-[#704e3d]" />
              <div className="absolute bottom-[28%] right-[7%] size-24 rounded-full border-[3px] border-[#26343a] bg-[#4f856b]" />
              <div className="absolute bottom-[14%] left-[58%] size-10 border-[3px] border-[#26343a] bg-[#d97768]" />
              <div className="absolute bottom-[25%] left-[60.7%] size-8 rounded-full border-[3px] border-[#26343a] bg-[#f1c5a3]" />
              <div className="absolute bottom-[14%] left-[72%] size-9 border-[3px] border-[#26343a] bg-[#a58abf]" />
              <div className="absolute bottom-[24%] left-[73%] size-7 rounded-full border-[3px] border-[#26343a] bg-[#f1c5a3]" />
              <div className="absolute bottom-5 left-5 border-2 border-[#26343a] bg-[#f8f1df] px-3 py-2 text-[10px] font-black shadow-[2px_2px_0_#26343a]"><MapPin className="mr-1 inline" size={13} /> {current.room.toUpperCase()}</div>
              <div className="absolute right-5 top-5 max-w-[190px] border-2 border-[#26343a] bg-[#f8f1df] p-3 text-[11px] font-bold leading-relaxed shadow-[3px_3px_0_#26343a]">{current.detail}</div>
            </div>

            <div className="relative mt-7">
              <div className="absolute left-4 right-4 top-[19px] h-[3px] bg-[#26343a]" />
              <div className="relative flex justify-between gap-1">
                {stops.map((stop, index) => (
                  <button key={stop.code} onClick={() => setSelected(index)} aria-label={`Select ${stop.label}`} className="group flex flex-col items-center gap-2">
                    <span className={`grid size-10 place-items-center rounded-full border-[3px] border-[#26343a] text-[10px] font-black transition-transform group-hover:-translate-y-1 ${index === selected ? "scale-110 bg-[#ed6f5f] text-[#f8f1df]" : "bg-[#f8f1df]"}`}>{index + 1}</span>
                    <span className="hidden max-w-16 text-center text-[9px] font-black leading-tight sm:block">{stop.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          <aside className="bg-[#d6c9e7] p-5 sm:p-7">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[.18em]">Student radar</p>
                <h2 className="mt-1 text-2xl font-black tracking-tight">Who&apos;s where</h2>
              </div>
              <UsersRound size={22} />
            </div>
            <div className="mt-5 space-y-2">
              {activity.map(([name, place, color]) => (
                <button key={name} className="flex w-full items-center gap-3 border-2 border-[#26343a] bg-[#f8f1df] p-3 text-left shadow-[2px_2px_0_#26343a] transition-transform hover:-translate-y-0.5">
                  <span className="grid size-9 place-items-center rounded-full border-2 border-[#26343a] text-xs font-black" style={{ backgroundColor: color }}>{name.charAt(0)}</span>
                  <span><strong className="block text-xs font-black">{name}</strong><small className="block text-[9px] font-bold text-[#687176]">{place}</small></span>
                  <Footprints className="ml-auto" size={16} />
                </button>
              ))}
            </div>
            <div className="mt-6 border-[3px] border-[#26343a] bg-[#f8f1df] p-4">
              <div className="flex items-center gap-2 text-xs font-black"><Sparkles size={15} /> Campus pulse</div>
              <div className="mt-3 h-3 border-2 border-[#26343a] bg-[#e9e1cc] p-[2px]"><div className="h-full bg-[#ed6f5f] transition-all" style={{ width: progress }} /></div>
              <p className="mt-2 text-[10px] font-bold">36 of 48 students are on the move.</p>
            </div>
          </aside>
        </div>

        <footer className="flex flex-wrap items-center justify-between gap-4 border-t-[3px] border-[#26343a] bg-[#26343a] px-5 py-3 text-[#f8f1df] sm:px-7">
          <div className="flex items-center gap-2">
            <button onClick={() => changeStop(-1)} disabled={selected === 0} aria-label="Previous bell" className="grid size-9 place-items-center border-2 border-[#f8f1df] disabled:opacity-30"><ChevronLeft size={18} /></button>
            <button onClick={() => setRunning((value) => !value)} className="flex items-center gap-2 border-2 border-[#f8f1df] bg-[#ed6f5f] px-3 py-2 text-[11px] font-black shadow-[2px_2px_0_#f1c866]">{running ? <CirclePause size={16} /> : <Play size={16} fill="currentColor" />}{running ? "Pause route" : "Run route"}</button>
            <button onClick={() => changeStop(1)} disabled={selected === stops.length - 1} aria-label="Next bell" className="grid size-9 place-items-center border-2 border-[#f8f1df] disabled:opacity-30"><ChevronRight size={18} /></button>
          </div>
          <button onClick={() => setSelected((value) => (value + 1) % stops.length)} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[.14em]"><FastForward size={16} /> Skip to next bell</button>
        </footer>
      </section>
    </main>
  );
}