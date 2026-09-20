import { useState } from "react";
import {
  ArrowRight,
  Bell,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Compass,
  FastForward,
  Pause,
  Play,
  Sparkles,
  Users,
  Volume2,
  VolumeX,
} from "lucide-react";

type Moment = {
  time: string;
  title: string;
  place: string;
  note: string;
  color: string;
  icon: string;
};

const moments: Moment[] = [
  { time: "08:15", title: "The doors open", place: "Front steps", note: "17 arrivals · umbrellas folded", color: "#f3c95b", icon: "01" },
  { time: "09:00", title: "A question of clouds", place: "Science lab", note: "Mika starts the weather wall", color: "#8fc7bc", icon: "02" },
  { time: "10:30", title: "The quietest contest", place: "Library", note: "Leo finds a field guide", color: "#b8a6da", icon: "03" },
  { time: "12:10", title: "Lunch under the awning", place: "Courtyard", note: "34 students outside", color: "#f4a77c", icon: "04" },
  { time: "14:05", title: "One last lap", place: "Gymnasium", note: "The relay is underway", color: "#8aaed8", icon: "05" },
];

const students = [
  { initials: "M", name: "Mika", activity: "pinning a cloud chart", bg: "#e8755d" },
  { initials: "L", name: "Leo", activity: "reading field guides", bg: "#698dbe" },
  { initials: "A", name: "Ari", activity: "mixing a safe storm", bg: "#a77cb3" },
];

export function PixelSchoolDaybook() {
  const [active, setActive] = useState(1);
  const [playing, setPlaying] = useState(true);
  const [sound, setSound] = useState(true);
  const current = moments[active];

  const go = (direction: number) => {
    setActive((value) => Math.max(0, Math.min(moments.length - 1, value + direction)));
  };

  return (
    <main className="min-h-[100dvh] overflow-hidden bg-[#dce7d6] p-3 text-[#26373a] sm:p-6" style={{ fontFamily: "'Trebuchet MS', ui-rounded, system-ui, sans-serif" }}>
      <section className="relative mx-auto min-h-[720px] max-w-[1440px] overflow-hidden rounded-[34px] border-[3px] border-[#26373a] bg-[#fcf8ed] shadow-[10px_10px_0_#26373a]">
        <div className="pointer-events-none absolute inset-0 opacity-[.28]" style={{ backgroundImage: "radial-gradient(#aab9a0 1px, transparent 1px)", backgroundSize: "14px 14px" }} />

        <header className="relative flex flex-wrap items-center justify-between gap-4 border-b-[3px] border-[#26373a] bg-[#f3c95b] px-5 py-4 sm:px-8">
          <div className="flex items-center gap-4">
            <div className="grid size-12 place-items-center rounded-2xl border-[3px] border-[#26373a] bg-[#fcf8ed] shadow-[3px_3px_0_#26373a]">
              <BookOpen size={25} strokeWidth={2.8} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[.22em]">Monday · October 14</p>
              <h1 className="text-2xl font-black leading-none tracking-tight sm:text-3xl">THE SCHOOL DAYBOOK</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden rounded-full border-2 border-[#26373a] bg-[#fcf8ed] px-3 py-1.5 text-xs font-black sm:block">DAY 18 / AUTUMN</span>
            <button onClick={() => setSound(!sound)} aria-label="Toggle sound" className="grid size-10 place-items-center rounded-xl border-[2px] border-[#26373a] bg-[#fcf8ed] transition-transform hover:-translate-y-0.5">
              {sound ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </button>
            <button aria-label="Open notices" className="relative grid size-10 place-items-center rounded-xl border-[2px] border-[#26373a] bg-[#fcf8ed] transition-transform hover:-translate-y-0.5">
              <Bell size={18} />
              <span className="absolute right-1 top-1 size-2 rounded-full bg-[#e8755d]" />
            </button>
          </div>
        </header>

        <div className="relative grid lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="border-b-[3px] border-[#26373a] p-5 sm:p-8 lg:border-b-0 lg:border-r-[3px]">
            <div className="mb-6 flex items-end justify-between gap-3">
              <div>
                <p className="mb-1 flex items-center gap-2 text-[10px] font-black uppercase tracking-[.2em] text-[#567172]"><Clock3 size={14} /> Live chronicle</p>
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Follow the little stories.</h2>
              </div>
              <button className="hidden items-center gap-2 rounded-xl border-[2px] border-[#26373a] bg-[#d6e6d3] px-3 py-2 text-xs font-black sm:flex"><Compass size={15} /> campus notes</button>
            </div>

            <article className="relative mb-7 overflow-hidden rounded-[26px] border-[3px] border-[#26373a] bg-[#bfdccc] shadow-[5px_5px_0_#26373a]">
              <div className="absolute right-5 top-4 rounded-full border-2 border-[#26373a] bg-[#fcf8ed] px-3 py-1 text-[10px] font-black uppercase tracking-[.14em]">happening now</div>
              <div className="grid min-h-[255px] grid-cols-[1fr_1.2fr]">
                <div className="relative overflow-hidden border-r-[3px] border-[#26373a] bg-[#8fc7bc]">
                  <div className="absolute -bottom-14 -left-8 size-44 rounded-full border-[3px] border-[#26373a] bg-[#699e7f]" />
                  <div className="absolute bottom-12 left-12 h-20 w-24 rounded-t-[60px] border-[3px] border-[#26373a] bg-[#f2d277]" />
                  <div className="absolute bottom-20 left-20 size-7 rounded-full border-[3px] border-[#26373a] bg-[#fcf8ed]" />
                  <div className="absolute bottom-8 right-6 h-28 w-14 rounded-t-full border-[3px] border-[#26373a] bg-[#e8755d]" />
                  <div className="absolute bottom-[92px] right-[18px] size-10 rounded-full border-[3px] border-[#26373a] bg-[#f3c6a7]" />
                  <div className="absolute left-5 top-7 h-4 w-16 rounded-full bg-[#fcf8ed]/80" />
                  <div className="absolute left-16 top-14 h-3 w-10 rounded-full bg-[#fcf8ed]/80" />
                  <span className="absolute bottom-4 left-4 rounded bg-[#26373a] px-2 py-1 text-[9px] font-black tracking-widest text-[#fcf8ed]">SCIENCE LAB</span>
                </div>
                <div className="flex flex-col justify-between p-6 pt-14">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[.18em] text-[#456c65]">{current.time} · {current.place}</p>
                    <h3 className="mt-2 max-w-sm text-3xl font-black leading-[.95] tracking-tight sm:text-4xl">{current.title}</h3>
                    <p className="mt-4 max-w-xs text-sm font-bold leading-relaxed">{current.note}. Every tiny thing gets a page.</p>
                  </div>
                  <button className="mt-5 flex w-fit items-center gap-2 rounded-xl border-[2px] border-[#26373a] bg-[#fcf8ed] px-3 py-2 text-xs font-black shadow-[2px_2px_0_#26373a]">Read entry <ArrowRight size={15} /></button>
                </div>
              </div>
            </article>

            <div className="flex gap-3 overflow-x-auto pb-3">
              {moments.map((moment, index) => (
                <button key={moment.time} onClick={() => setActive(index)} className={`min-w-[166px] rounded-2xl border-[2px] border-[#26373a] p-3 text-left transition-all ${active === index ? "translate-y-[-3px] bg-[#26373a] text-[#fcf8ed] shadow-[3px_4px_0_#e8755d]" : "bg-[#fcf8ed] hover:-translate-y-1"}`}>
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-[10px] font-black tracking-widest">{moment.time}</span>
                    <span className="grid size-6 place-items-center rounded-md border border-current text-[9px] font-black">{moment.icon}</span>
                  </div>
                  <p className="text-sm font-black leading-tight">{moment.title}</p>
                  <p className={`mt-2 text-[10px] font-bold ${active === index ? "text-[#d7e8d1]" : "text-[#6a7974]"}`}>{moment.place}</p>
                </button>
              ))}
            </div>
          </div>

          <aside className="relative bg-[#e9a777] p-5 sm:p-7">
            <p className="mb-2 text-[10px] font-black uppercase tracking-[.22em]">At a glance</p>
            <h2 className="text-2xl font-black leading-none tracking-tight">The cast<br />today</h2>
            <div className="mt-6 space-y-3">
              {students.map((student) => (
                <button key={student.name} className="flex w-full items-center gap-3 rounded-2xl border-[2px] border-[#26373a] bg-[#fcf8ed] p-3 text-left shadow-[3px_3px_0_#26373a] transition-transform hover:-translate-y-0.5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl border-2 border-[#26373a] text-sm font-black" style={{ backgroundColor: student.bg }}>{student.initials}</span>
                  <span><strong className="block text-sm font-black">{student.name}</strong><span className="block text-[10px] font-bold text-[#60706e]">{student.activity}</span></span>
                  <ChevronRight className="ml-auto" size={16} />
                </button>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border-[2px] border-[#26373a] bg-[#d6e6d3] p-4">
              <div className="flex items-center gap-2 text-xs font-black"><Users size={17} /> 42 explorers on campus</div>
              <div className="mt-3 h-2 overflow-hidden rounded-full border-2 border-[#26373a] bg-[#fcf8ed]"><div className="h-full w-[72%] bg-[#698dbe]" /></div>
              <p className="mt-2 text-[10px] font-bold">A little busier than yesterday.</p>
            </div>
          </aside>
        </div>

        <footer className="relative flex flex-wrap items-center justify-between gap-4 border-t-[3px] border-[#26373a] bg-[#fcf8ed] px-5 py-3 sm:px-8">
          <div className="flex items-center gap-3">
            <button onClick={() => go(-1)} disabled={active === 0} aria-label="Previous moment" className="grid size-9 place-items-center rounded-lg border-[2px] border-[#26373a] disabled:opacity-30"><ChevronLeft size={18} /></button>
            <button onClick={() => setPlaying(!playing)} className="flex items-center gap-2 rounded-lg border-[2px] border-[#26373a] bg-[#f3c95b] px-3 py-2 text-xs font-black shadow-[2px_2px_0_#26373a]">{playing ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" />}{playing ? "Pause day" : "Resume day"}</button>
            <button onClick={() => go(1)} disabled={active === moments.length - 1} aria-label="Next moment" className="grid size-9 place-items-center rounded-lg border-[2px] border-[#26373a] disabled:opacity-30"><FastForward size={17} /></button>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[.15em]"><Sparkles size={15} /> the next moment appears at 10:30</div>
        </footer>
      </section>
    </main>
  );
}