import { useState } from "react";
import {
  Bell,
  Check,
  ChevronRight,
  Headphones,
  MessageSquareText,
  Pause,
  Play,
  Radio,
  Send,
  SlidersHorizontal,
  Sparkles,
  Volume2,
  Waves,
  X,
} from "lucide-react";

type Pulse = {
  time: string;
  room: string;
  note: string;
  tone: string;
  tag: string;
};

const pulses: Pulse[] = [
  { time: "09:42", room: "Studio 2", note: "Clay wheels are spinning. Six aprons on.", tone: "#ef7d62", tag: "making" },
  { time: "09:39", room: "Reading steps", note: "A chapter group just reached the good bit.", tone: "#8b79bb", tag: "reading" },
  { time: "09:36", room: "North field", note: "Relay teams are warming up in the mist.", tone: "#4e9e8b", tag: "moving" },
  { time: "09:31", room: "Kitchen hatch", note: "The soup bell is fifteen minutes out.", tone: "#e9ad4d", tag: "notice" },
];

const rooms = [
  { name: "Studio 2", count: "18", color: "#ef7d62", active: true },
  { name: "Reading steps", count: "12", color: "#8b79bb", active: false },
  { name: "North field", count: "24", color: "#4e9e8b", active: false },
  { name: "Science loft", count: "16", color: "#5d95b9", active: false },
];

export function PixelSchoolSignalStudio() {
  const [playing, setPlaying] = useState(true);
  const [selectedRoom, setSelectedRoom] = useState(0);
  const [acknowledged, setAcknowledged] = useState<number[]>([]);
  const [note, setNote] = useState("");
  const [sent, setSent] = useState(false);
  const activeRoom = rooms[selectedRoom];

  const toggleAck = (index: number) => {
    setAcknowledged((items) => items.includes(index) ? items.filter((item) => item !== index) : [...items, index]);
  };

  const submitNote = () => {
    if (!note.trim()) return;
    setSent(true);
    setNote("");
    window.setTimeout(() => setSent(false), 1800);
  };

  return (
    <main className="min-h-[100dvh] bg-[#ddd1b9] p-3 text-[#202943] sm:p-7" style={{ fontFamily: "'Trebuchet MS', 'Avenir Next', sans-serif" }}>
      <section className="mx-auto max-w-[1500px] overflow-hidden rounded-[34px] border-[3px] border-[#202943] bg-[#f9f2e3] shadow-[12px_12px_0_#202943]">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b-[3px] border-[#202943] bg-[#f3c24f] px-5 py-4 sm:px-8">
          <div className="flex items-center gap-4">
            <div className="grid size-12 place-items-center rounded-full border-[3px] border-[#202943] bg-[#f9f2e3] shadow-[3px_3px_0_#202943]"><Radio size={22} strokeWidth={2.8} /></div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[.2em]">Pine &amp; Poppy elementary</p>
              <h1 className="text-xl font-black tracking-[-.06em] sm:text-2xl">SIGNAL STUDIO</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden border-2 border-[#202943] bg-[#f9f2e3] px-3 py-2 text-[10px] font-black uppercase tracking-wider sm:block">MON 14 OCT · DAY 18</span>
            <button onClick={() => setPlaying((value) => !value)} className="flex items-center gap-2 rounded-full border-2 border-[#202943] bg-[#ef7d62] px-4 py-2 text-[11px] font-black shadow-[2px_2px_0_#202943]">
              {playing ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" />} {playing ? "PAUSE FEED" : "RESUME FEED"}
            </button>
          </div>
        </header>

        <div className="grid lg:grid-cols-[310px_minmax(0,1fr)_320px]">
          <aside className="border-b-[3px] border-[#202943] bg-[#c8d9d0] p-5 lg:border-b-0 lg:border-r-[3px] sm:p-7">
            <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[.18em]"><SlidersHorizontal size={14} /> Tune into a room</p>
            <h2 className="mt-3 text-4xl font-black leading-[.86] tracking-[-.08em]">The school,<br />as a signal.</h2>
            <p className="mt-5 max-w-[220px] text-sm font-bold leading-relaxed text-[#39465c]">Select a channel. Hear the small things that make up a very full morning.</p>
            <div className="mt-7 border-t-2 border-[#202943]">
              {rooms.map((room, index) => (
                <button key={room.name} onClick={() => setSelectedRoom(index)} className={`flex w-full items-center gap-3 border-b-2 border-[#202943] px-1 py-3 text-left transition-colors ${selectedRoom === index ? "bg-[#202943] px-3 text-[#f9f2e3]" : "hover:bg-[#f9f2e3]/60"}`}>
                  <span className="size-3 rounded-full border-2 border-current" style={{ background: selectedRoom === index ? room.color : "#f9f2e3" }} />
                  <span className="flex-1"><strong className="block text-xs font-black">{room.name}</strong><small className={`text-[10px] font-bold ${selectedRoom === index ? "text-[#f3c24f]" : "text-[#536174]"}`}>{room.count} students present</small></span>
                  <ChevronRight size={16} />
                </button>
              ))}
            </div>
            <div className="mt-7 border-2 border-[#202943] bg-[#f9f2e3] p-3 text-[11px] font-bold leading-relaxed shadow-[3px_3px_0_#202943]">
              <Bell className="mr-1 inline-block" size={14} /> <span className="font-black">NEXT BELL</span><br />Break starts in 43 minutes.
            </div>
          </aside>

          <section className="relative overflow-hidden bg-[#d8e3e3] p-5 sm:p-8">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#202943 1.2px, transparent 1.2px)", backgroundSize: "14px 14px" }} />
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[.2em]"><Waves size={15} /> Channel 04 · broadcasting now</p>
                <h2 className="mt-3 text-4xl font-black leading-none tracking-[-.08em] sm:text-6xl">{activeRoom.name}</h2>
              </div>
              <div className="grid size-12 place-items-center rounded-full border-[3px] border-[#202943] bg-[#ef7d62] shadow-[3px_3px_0_#202943]"><Volume2 size={21} /></div>
            </div>

            <div className="relative mt-8 overflow-hidden border-[3px] border-[#202943] bg-[#202943] p-5 shadow-[7px_7px_0_#202943] sm:p-8">
              <div className="absolute -right-10 -top-14 size-48 rounded-full border-[3px] border-[#f3c24f] opacity-80" />
              <div className="absolute -bottom-20 -left-10 size-48 rounded-full border-[3px] border-[#ef7d62] opacity-70" />
              <p className="relative text-[10px] font-black uppercase tracking-[.22em] text-[#f3c24f]">Live texture</p>
              <div className="relative mt-6 flex h-44 items-center justify-between gap-1 sm:h-52">
                {Array.from({ length: 48 }, (_, index) => {
                  const height = 18 + ((index * 31 + selectedRoom * 17) % 74);
                  return <i key={index} className={`w-full rounded-full bg-[#f9f2e3] ${playing ? "animate-pulse" : ""}`} style={{ height: `${height}%`, animationDelay: `${index * 40}ms`, animationDuration: "1.4s" }} />;
                })}
              </div>
              <div className="relative mt-6 flex items-end justify-between gap-3 border-t border-[#f9f2e3]/30 pt-4">
                <p className="max-w-[430px] text-lg font-black leading-tight text-[#f9f2e3] sm:text-2xl">“Quiet voices, busy hands. Someone has named the tallest clay tower ‘Daphne’.”</p>
                <span className="shrink-0 border-2 border-[#f9f2e3] px-3 py-2 text-[10px] font-black text-[#f9f2e3]">09:42</span>
              </div>
            </div>

            <div className="relative mt-7 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button onClick={() => setPlaying((value) => !value)} className="grid size-12 place-items-center rounded-full border-[3px] border-[#202943] bg-[#f3c24f] shadow-[3px_3px_0_#202943]">{playing ? <Pause size={19} fill="currentColor" /> : <Play size={19} fill="currentColor" />}</button>
                <div><strong className="block text-xs font-black">{playing ? "Listening live" : "Feed paused"}</strong><span className="text-[10px] font-bold text-[#536174]">Ambient update every 90 seconds</span></div>
              </div>
              <div className="flex -space-x-2">
                {["M", "K", "A", "L"].map((initial, index) => <span key={initial} className="grid size-8 place-items-center rounded-full border-2 border-[#202943] text-[10px] font-black" style={{ background: ["#ef7d62", "#8b79bb", "#4e9e8b", "#f3c24f"][index] }}>{initial}</span>)}
                <span className="grid size-8 place-items-center rounded-full border-2 border-[#202943] bg-[#f9f2e3] text-[9px] font-black">+66</span>
              </div>
            </div>
          </section>

          <aside className="bg-[#f4d5c7] p-5 sm:p-7">
            <div className="flex items-center justify-between">
              <div><p className="text-[10px] font-black uppercase tracking-[.18em]">Pulse inbox</p><h2 className="mt-1 text-2xl font-black tracking-[-.06em]">Small reports</h2></div>
              <Sparkles size={20} />
            </div>
            <div className="mt-5 space-y-3">
              {pulses.map((pulse, index) => (
                <article key={pulse.time} className="border-2 border-[#202943] bg-[#f9f2e3] p-3 shadow-[3px_3px_0_#202943]">
                  <div className="flex items-center justify-between gap-2"><span className="text-[10px] font-black uppercase tracking-wider" style={{ color: pulse.tone }}>{pulse.tag}</span><span className="text-[10px] font-black">{pulse.time}</span></div>
                  <h3 className="mt-1 text-xs font-black">{pulse.room}</h3><p className="mt-1 text-[11px] font-bold leading-snug text-[#536174]">{pulse.note}</p>
                  <button onClick={() => toggleAck(index)} className={`mt-3 flex items-center gap-1 text-[10px] font-black uppercase ${acknowledged.includes(index) ? "text-[#4e9e8b]" : "text-[#202943]"}`}>{acknowledged.includes(index) ? <Check size={13} /> : <Headphones size={13} />}{acknowledged.includes(index) ? " heard" : " mark heard"}</button>
                </article>
              ))}
            </div>
            <div className="mt-5 border-2 border-[#202943] bg-[#f9f2e3] p-3 shadow-[3px_3px_0_#202943]">
              <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-wider"><MessageSquareText size={14} /> Send a note</label>
              <input value={note} onChange={(event) => setNote(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter") submitNote(); }} placeholder="Tell the studio..." className="mt-2 w-full border-b-2 border-[#202943] bg-transparent py-1 text-xs font-bold outline-none placeholder:text-[#89909b]" />
              <button onClick={submitNote} className="mt-3 flex items-center gap-2 border-2 border-[#202943] bg-[#5d95b9] px-3 py-2 text-[10px] font-black shadow-[2px_2px_0_#202943]">{sent ? <Check size={13} /> : <Send size={13} />}{sent ? " SENT" : " SEND TO FEED"}</button>
            </div>
          </aside>
        </div>
        <footer className="flex flex-wrap items-center justify-between gap-3 border-t-[3px] border-[#202943] bg-[#f9f2e3] px-5 py-3 text-[10px] font-black uppercase tracking-[.14em] sm:px-8"><span>Signals are descriptive, not disciplinary.</span><span className="flex items-center gap-1"><X size={13} /> 0 unresolved care notes</span></footer>
      </section>
    </main>
  );
}