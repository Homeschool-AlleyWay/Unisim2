import { useState } from "react";
import {
  Bell,
  ChevronRight,
  FastForward,
  Gamepad2,
  MapPin,
  Pause,
  Play,
  Sparkles,
  Users,
  Volume2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const roster = [
  { name: "Mika", location: "West hall", tone: "bg-[#f0a35e]" },
  { name: "Leo", location: "Library", tone: "bg-[#78a5d4]" },
  { name: "Ari", location: "Science wing", tone: "bg-[#db7591]" },
  { name: "June", location: "Courtyard", tone: "bg-[#8cba8b]" },
];

const rooms = [
  { name: "Art studio", detail: "Open now", x: "14%", y: "20%", color: "#dca264" },
  { name: "Library", detail: "Quiet study", x: "58%", y: "11%", color: "#6688b4" },
  { name: "Science", detail: "Period 1", x: "67%", y: "52%", color: "#9f7ab1" },
  { name: "Gym", detail: "Free play", x: "12%", y: "62%", color: "#ca7d75" },
];

const navigation: { label: string; Icon: LucideIcon }[] = [
  { label: "Live campus", Icon: MapPin },
  { label: "Students", Icon: Users },
  { label: "Alerts", Icon: Bell },
];

export function PixelSchoolCommandDesk() {
  const [paused, setPaused] = useState(false);
  const [fast, setFast] = useState(false);
  const [selected, setSelected] = useState("Mika");
  const [sound, setSound] = useState(true);

  return (
    <main className="min-h-[100dvh] overflow-hidden bg-[#f6f0e5] p-3 font-[ui-rounded,system-ui,sans-serif] text-[#263b41] sm:p-6">
      <div className="mx-auto grid min-h-[720px] max-w-[1420px] overflow-hidden rounded-[30px] border-[3px] border-[#263b41] bg-[#fffaf0] shadow-[9px_9px_0_#263b41] lg:grid-cols-[236px_minmax(0,1fr)_292px]">
        <aside className="flex border-b-[3px] border-[#263b41] bg-[#f6cb67] p-5 lg:flex-col lg:border-b-0 lg:border-r-[3px]">
          <div className="flex items-center gap-3">
            <div className="grid size-11 place-items-center rounded-xl border-[3px] border-[#263b41] bg-[#fbfaf3] shadow-[3px_3px_0_#263b41]">
              <Gamepad2 size={23} strokeWidth={2.8} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[.16em]">simulator</p>
              <h1 className="text-xl font-black leading-none tracking-tight">PIXEL<br />SCHOOL</h1>
            </div>
          </div>

          <nav className="ml-auto flex gap-2 lg:ml-0 lg:mt-12 lg:flex-col">
            {navigation.map(({ label, Icon }, index) => (
              <button
                key={label}
                className={`flex items-center gap-3 rounded-xl border-[2px] border-[#263b41] px-3 py-2 text-left text-xs font-black transition-transform hover:-translate-y-0.5 ${
                  index === 0 ? "bg-[#263b41] text-[#fffaf0]" : "bg-[#f8e39c]"
                }`}
                onClick={() => {}}
              >
                <Icon size={16} />
                <span className="hidden lg:block">{label}</span>
              </button>
            ))}
          </nav>

          <div className="hidden rounded-2xl border-[2px] border-[#263b41] bg-[#fff7d8] p-4 lg:mt-auto lg:block">
            <Sparkles size={17} className="mb-2" />
            <p className="text-xs font-black">Tiny worlds,<br />busy days.</p>
            <p className="mt-1 text-[10px] font-bold leading-snug text-[#53656a]">Follow a student or simply watch the day unfold.</p>
          </div>
        </aside>

        <section className="flex min-w-0 flex-col">
          <header className="flex items-center justify-between border-b-[3px] border-[#263b41] px-5 py-4 sm:px-7">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[.18em] text-[#aa6438]">Tuesday / campus feed</p>
              <h2 className="text-xl font-black tracking-tight sm:text-2xl">A very busy morning</h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                aria-label="Toggle sound"
                onClick={() => setSound(!sound)}
                className={`grid size-10 place-items-center rounded-xl border-[2px] border-[#263b41] ${sound ? "bg-[#a8d6cc]" : "bg-[#fffaf0]"}`}
              >
                <Volume2 size={18} />
              </button>
              <div className="rounded-xl border-[2px] border-[#263b41] bg-[#fff7d8] px-3 py-2 text-right">
                <p className="text-lg font-black leading-none">8:00 <span className="text-xs">AM</span></p>
                <p className="mt-1 text-[9px] font-black uppercase tracking-[.12em] text-[#aa6438]">arrival</p>
              </div>
            </div>
          </header>

          <div className="flex flex-1 flex-col p-4 sm:p-6">
            <div className="relative min-h-[400px] flex-1 overflow-hidden rounded-[22px] border-[3px] border-[#263b41] bg-[#9dcfc0] shadow-[5px_5px_0_#263b41]">
              <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(#78b5a5_1px,transparent_1px),linear-gradient(90deg,#78b5a5_1px,transparent_1px)] [background-size:24px_24px]" />
              <div className="absolute left-[44%] top-0 h-full w-[18%] rotate-[12deg] bg-[#ead5ab] opacity-90" />
              <div className="absolute left-0 top-[48%] h-[14%] w-full bg-[#ead5ab]" />
              <div className="absolute left-[44%] top-0 h-full w-[18%] rotate-[12deg] border-x-[3px] border-dashed border-[#f7edd8]" />
              <div className="absolute left-3 top-3 rounded-lg border-2 border-[#263b41] bg-[#fffaf0] px-2 py-1 text-[10px] font-black uppercase tracking-wider">
                Campus map / live
              </div>
              {rooms.map((room) => (
                <div
                  key={room.name}
                  className="absolute w-[104px] rounded-md border-[3px] border-[#263b41] p-2 shadow-[3px_3px_0_#263b41] transition-transform hover:-translate-y-1"
                  style={{ left: room.x, top: room.y, backgroundColor: room.color }}
                >
                  <div className="mb-2 h-4 border-2 border-[#263b41] bg-[#f7e8b6]" />
                  <p className="text-[11px] font-black leading-none">{room.name}</p>
                  <p className="mt-1 text-[8px] font-bold uppercase tracking-wide">{room.detail}</p>
                </div>
              ))}
              {[
                ["28%", "55%", "#f8f1cb"],
                ["49%", "31%", "#f1a161"],
                ["53%", "71%", "#e67f91"],
                ["79%", "34%", "#7ba9d1"],
                ["34%", "80%", "#f1a161"],
                ["84%", "77%", "#f8f1cb"],
              ].map(([left, top, color], index) => (
                <div key={index} className="absolute size-4 border-2 border-[#263b41]" style={{ left, top, backgroundColor: color }} />
              ))}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl border-[2px] border-[#263b41] bg-[#fffaf0] p-2">
                <div className="grid size-7 place-items-center rounded-md border-2 border-[#263b41] bg-[#f0a35e] text-[10px] font-black">M</div>
                <p className="pr-1 text-[10px] font-black">You are here</p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <p className="max-w-[300px] text-xs font-bold leading-snug text-[#53656a]">
                Use <kbd className="mx-1 rounded border border-[#263b41] bg-[#fffaf0] px-1.5 py-0.5 font-black text-[#263b41]">W A S D</kbd> to guide Mika through the morning rush.
              </p>
              <div className="flex gap-2">
                <button onClick={() => setPaused(!paused)} className="grid size-11 place-items-center rounded-xl border-[3px] border-[#263b41] bg-[#f6cb67] shadow-[3px_3px_0_#263b41] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none">
                  {paused ? <Play size={19} fill="currentColor" /> : <Pause size={19} fill="currentColor" />}
                </button>
                <button onClick={() => setFast(!fast)} className={`flex h-11 items-center gap-2 rounded-xl border-[3px] border-[#263b41] px-3 text-xs font-black shadow-[3px_3px_0_#263b41] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none ${fast ? "bg-[#db7591]" : "bg-[#fffaf0]"}`}>
                  <FastForward size={18} fill="currentColor" /> {fast ? "4×" : "1×"}
                </button>
              </div>
            </div>
          </div>
        </section>

        <aside className="border-t-[3px] border-[#263b41] bg-[#dce9df] p-5 lg:border-l-[3px] lg:border-t-0">
          <p className="text-[10px] font-black uppercase tracking-[.16em] text-[#53656a]">Today’s pulse</p>
          <div className="mt-3 rounded-2xl border-[3px] border-[#263b41] bg-[#fffaf0] p-4 shadow-[4px_4px_0_#263b41]">
            <p className="text-4xl font-black leading-none">24</p>
            <p className="mt-1 text-xs font-black">students on campus</p>
            <div className="mt-4 h-2 overflow-hidden rounded-full border border-[#263b41] bg-[#f2eadc]">
              <div className="h-full w-[72%] bg-[#f0a35e]" />
            </div>
            <p className="mt-2 text-[10px] font-bold text-[#53656a]">18 are already in their first room.</p>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <h3 className="text-sm font-black">Follow a student</h3>
            <Users size={16} />
          </div>
          <div className="mt-2 space-y-2">
            {roster.map((student) => (
              <button
                key={student.name}
                onClick={() => setSelected(student.name)}
                className={`flex w-full items-center gap-3 rounded-xl border-[2px] border-[#263b41] p-2 text-left transition-transform hover:translate-x-1 ${selected === student.name ? "bg-[#fff7d8]" : "bg-[#eef5ef]"}`}
              >
                <span className={`grid size-8 place-items-center rounded-lg border-2 border-[#263b41] text-xs font-black ${student.tone}`}>{student.name[0]}</span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-black">{student.name}</span>
                  <span className="block truncate text-[10px] font-bold text-[#53656a]">{student.location}</span>
                </span>
                <ChevronRight size={15} />
              </button>
            ))}
          </div>

          <div className="mt-6 border-t-2 border-dashed border-[#829a92] pt-4">
            <p className="text-[10px] font-black uppercase tracking-[.16em] text-[#53656a]">Next bell</p>
            <p className="mt-1 text-lg font-black">8:35 AM</p>
            <p className="text-xs font-bold">Homeroom begins</p>
          </div>
        </aside>
      </div>
    </main>
  );
}