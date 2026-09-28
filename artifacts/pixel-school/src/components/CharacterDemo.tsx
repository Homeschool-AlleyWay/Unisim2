// UNIFY Character System — demo page: faculty, today's students and avatar customization.
import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'wouter';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { teacherDisplayName } from '@/data/characterAssetManifest';
import { useAllTeachers, useAvatarCustomization, useDailyRoster, useToday, useTodayWeekday } from '@/context/CharacterSystemContext';
import { AVATAR_OPTIONS } from '@/hooks/useAvatarCustomization';
import { teacherLookForDay } from '@/services/npcGenerationService';
import { drawCharacterFrame, FRAME_W } from '@/game/art/characters';
import { WEEKDAYS, type AvatarCustomization, type Look, type TeacherToday, type Weekday } from '@/types/character';

// ---------- portrait ----------

/** Renders the "standing, facing down" frame of a Look with the game's sprite painter. */
function Portrait({ look, size = 96, className = '' }: { look: Look; size?: number; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const key = JSON.stringify(look);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    // Paint just the one frame we show, at the canvas's own resolution.
    drawCharacterFrame(canvas, look, canvas.width / FRAME_W);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  const dpr = typeof window !== 'undefined' ? Math.min(2, window.devicePixelRatio || 1) : 1;
  return <canvas ref={ref} width={size * dpr} height={size * 1.5 * dpr} className={className} style={{ width: size, height: size * 1.5 }} aria-hidden />;
}

function Swatch({ color, active, onClick, label }: { color: string; active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={active}
      onClick={onClick}
      className={`h-7 w-7 rounded-full border-2 transition ${active ? 'border-foreground scale-110' : 'border-border/60 hover:scale-105'}`}
      style={{ background: color }}
    />
  );
}

// ---------- teachers ----------

function TeacherCard({ t }: { t: TeacherToday }) {
  const today = useToday();
  // Follows the real weekday (including the midnight rollover) until the user picks a day to preview.
  const [picked, setPicked] = useState<Weekday | null>(null);
  const day = picked ?? t.weekday;
  const setDay = (d: Weekday) => setPicked(d === t.weekday ? null : d);
  const shown = useMemo(() => (day === t.weekday ? t : teacherLookForDay(t, day, today)), [day, t, today]);
  const [quote, setQuote] = useState(0);
  return (
    <Card data-testid={`card-teacher-${t.id}`} className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <div>
            <CardTitle className="text-lg leading-tight">{teacherDisplayName(t)}</CardTitle>
            <p className="text-sm text-muted-foreground">{t.subject} · {t.room}</p>
          </div>
          <Badge variant="secondary">{t.subject}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex gap-4">
          <div className="rounded-xl bg-muted/60 p-2 shrink-0 self-start">
            <Portrait look={shown.look} size={72} />
          </div>
          <div className="min-w-0 text-sm space-y-1">
            <p><span className="font-semibold">{shown.todayOutfit.day}:</span> {shown.todayOutfit.label} · {shown.todayHairStyle} hair</p>
            <p className="text-muted-foreground">{t.teachingStyle}</p>
            <div className="flex flex-wrap gap-1 pt-1">
              {t.personality.map((p) => <Badge key={p} variant="outline" className="font-normal">{p}</Badge>)}
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">Outfit rotation</p>
          <div className="flex gap-1">
            {WEEKDAYS.map((d) => (
              <Button key={d} size="sm" variant={d === day ? 'default' : 'outline'} className="h-7 px-2 text-xs" onClick={() => setDay(d)} data-testid={`button-${t.id}-${d}`}>
                {d}
              </Button>
            ))}
          </div>
        </div>
        <div className="text-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">Expertise</p>
          <p>{t.expertise.join(' · ')}</p>
        </div>
        <button
          type="button"
          onClick={() => setQuote((q) => (q + 1) % t.quotes.length)}
          className="w-full text-left rounded-lg border bg-card px-3 py-2 text-sm italic hover:bg-muted/40"
          title="Next quote"
        >
          "{t.quotes[quote]}"
          <span className="block not-italic text-xs text-muted-foreground mt-1">
            Voice: {t.voice.tone} (pitch {t.voice.pitch}, rate {t.voice.rate}) · says "{t.catchphrase}"
          </span>
        </button>
      </CardContent>
    </Card>
  );
}

// ---------- NPCs ----------

function NPCGrid() {
  const roster = useDailyRoster();
  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground">
        Roster for <span className="font-semibold text-foreground">{roster.dateKey}</span> (seed {roster.seed}). Everyone playing today meets the same {roster.students.length} students; a new group arrives at midnight UTC.
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {roster.students.map((s) => (
          <Card key={s.id} data-testid={`card-npc-${s.id}`} className="overflow-hidden">
            <CardContent className="p-3 flex gap-3">
              <div className="rounded-xl bg-muted/60 p-1 shrink-0 self-start"><Portrait look={s.look} size={56} /></div>
              <div className="min-w-0 text-sm">
                <p className="font-semibold leading-tight truncate">{s.name}</p>
                <p className="text-xs text-muted-foreground">Grade {s.grade} · {s.archetype}</p>
                <p className="text-xs mt-1 truncate">Loves {s.favoriteSubject}</p>
                <p className="text-xs text-muted-foreground truncate">{s.state.mood} · {s.state.activity}</p>
                <p className="text-xs italic mt-1 line-clamp-2">"{s.greeting}"</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ---------- avatar ----------

const COLOR_FIELDS: { key: keyof typeof AVATAR_OPTIONS & keyof AvatarCustomization; label: string }[] = [
  { key: 'skin', label: 'Skin tone' },
  { key: 'hair', label: 'Hair color' },
  { key: 'eyeColor', label: 'Eyes' },
  { key: 'shirt', label: 'Top color' },
  { key: 'pants', label: 'Bottoms' },
  { key: 'shoes', label: 'Shoes' },
  { key: 'backpack', label: 'Backpack' },
];

function AvatarEditor() {
  const { avatar, look, set, cycle, randomize, reset } = useAvatarCustomization();
  return (
    <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
      <Card>
        <CardContent className="p-4 flex flex-col items-center gap-3">
          <div className="rounded-2xl bg-muted/60 p-3"><Portrait look={look} size={128} /></div>
          <input
            data-testid="input-avatar-name"
            value={avatar.name}
            maxLength={16}
            onChange={(e) => set('name', e.target.value)}
            className="w-full rounded-md border bg-background px-3 py-2 text-center font-semibold"
            aria-label="Avatar name"
          />
          <div className="flex gap-2 w-full">
            <Button className="flex-1" variant="secondary" onClick={randomize} data-testid="button-avatar-random">Surprise me</Button>
            <Button className="flex-1" variant="outline" onClick={reset} data-testid="button-avatar-reset">Reset</Button>
          </div>
          <p className="text-xs text-muted-foreground text-center">Saved on this device automatically.</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 space-y-5">
          <div className="grid gap-4 sm:grid-cols-3">
            {(['hairStyle', 'outfit', 'accessory'] as const).map((key) => (
              <div key={key}>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
                  {key === 'hairStyle' ? 'Hairstyle' : key === 'outfit' ? 'Outfit' : 'Accessory'}
                </p>
                <div className="flex items-center gap-2">
                  <Button size="icon" variant="outline" className="h-8 w-8" onClick={() => cycle(key, -1)} aria-label={`Previous ${key}`}>‹</Button>
                  <span className="flex-1 text-center text-sm font-medium capitalize" data-testid={`text-avatar-${key}`}>{avatar[key]}</span>
                  <Button size="icon" variant="outline" className="h-8 w-8" onClick={() => cycle(key, 1)} aria-label={`Next ${key}`}>›</Button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between rounded-lg border px-3 py-2">
            <span className="text-sm font-medium">Glasses</span>
            <Switch checked={avatar.glasses} onCheckedChange={(v) => set('glasses', v)} aria-label="Glasses" data-testid="switch-avatar-glasses" />
          </div>
          {COLOR_FIELDS.map(({ key, label }) => (
            <div key={key}>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">{label}</p>
              <div className="flex flex-wrap gap-2">
                {(AVATAR_OPTIONS[key] as readonly string[]).map((c) => (
                  <Swatch key={c} color={c} label={`${label} ${c}`} active={avatar[key] === c} onClick={() => set(key, c as never)} />
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

// ---------- page ----------

export default function CharacterDemo() {
  const teachers = useAllTeachers();
  const weekday = useTodayWeekday();
  // Deep-linkable tabs: /characters?tab=students
  const initialTab = useMemo(() => {
    const t = new URLSearchParams(window.location.search).get('tab');
    return t === 'students' || t === 'avatar' ? t : 'teachers';
  }, []);
  return (
    <main className="min-h-[100dvh] bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-6 space-y-6">
        <header className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">UNIFY Character System</p>
            <h1 className="text-3xl font-bold leading-tight">Faculty, students and your avatar</h1>
            <p className="text-sm text-muted-foreground mt-1">Today is <span className="font-semibold text-foreground">{weekday}</span>: outfits and the student roster update daily.</p>
          </div>
          <Button asChild variant="outline"><Link href="/">Back to the school</Link></Button>
        </header>

        <Tabs defaultValue={initialTab}>
          <TabsList>
            <TabsTrigger value="teachers" data-testid="tab-teachers">Teachers ({teachers.length})</TabsTrigger>
            <TabsTrigger value="students" data-testid="tab-students">Today's students</TabsTrigger>
            <TabsTrigger value="avatar" data-testid="tab-avatar">My avatar</TabsTrigger>
          </TabsList>
          <TabsContent value="teachers" className="pt-4">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {teachers.map((t) => <TeacherCard key={t.id} t={t} />)}
            </div>
          </TabsContent>
          <TabsContent value="students" className="pt-4"><NPCGrid /></TabsContent>
          <TabsContent value="avatar" className="pt-4"><AvatarEditor /></TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
