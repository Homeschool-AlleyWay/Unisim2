# Maple Grove School Life

A top-down pixel-art school simulator (Phaser 3 + React): follow the bell schedule, attend classes, make friends, play mini-games and catch the bus home. A tiny single-room D-pad mini-game lives at `/classroom`.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/pixel-school` — the game (React + Vite, frontend only, previewPath `/`). Run: `pnpm --filter @workspace/pixel-school run dev`
  - `src/game/` — Maple Grove simulator (Phaser 3; user-supplied, updated Sept 2026 v2). `data/` = rooms, furniture, schedule, dialogue, curriculum (edit these to customize); `art/` = code-generated pixel art (no image files); `scenes/SchoolScene.ts` = main loop; `ui/Hud.ts` = DOM HUD/dialogs (sign-in, creator, mini-games); `three/Classroom3D.ts` = three.js first-person classroom; `net/multiplayer.ts` = Supabase auth + realtime presence (URL/anon key hardcoded by the user; offline play needs no network); `systems/BroadcastPlayer.ts` + `systems/BroadcastScreen.ts` = morning broadcast (sequencing/speech + canvas-rendered news-studio picture; plays on the hallway wall TV at tiles 26–29 row 17, a tap-to-enlarge pocket panel while in hallway/lobby, and the 3D classroom TV — no full-screen overlay); `systems/GameState.ts` = localStorage autosave
  - `src/components/SchoolGameView.tsx` — React wrapper mounting the Phaser game; `src/pages/Home.tsx` renders it at `/`
  - `src/pages/Classroom.tsx` (`/classroom`) — the earlier single-room D-pad mini-game, backed by:
  - `src/lib/game/world.ts` — obstacles, per-axis AABB collision, draw (source of truth for game rules)
  - `src/lib/game/input.ts` — multi-source input state (pointer IDs + physical key codes)
  - `src/lib/game/canvas.ts` — integer-scale high-DPI canvas helper
  - `src/components/game/{GameCanvas,DPad}.tsx` — loop/keyboard and the touch D-pad
  - `public/pixel-school-standalone.html` — the original single-file version, kept verbatim as reference
- `artifacts/api-server`, `lib/db` — scaffolded but unused by the game

## Architecture decisions

- Sept 2026: the app went single-file D-pad game → user-supplied "Maple Grove" Phaser simulator (zip). The Maple Grove code is kept as delivered under `src/game/`; the D-pad game was moved to `/classroom` rather than deleted.
- Phaser renders at device resolution with a ResizeObserver on the mount div, so the mount div must have an explicit height; Home locks `body` overflow only while mounted so `/classroom` can still scroll.
- Canvas backing store snaps to an integer multiple of 320 instead of raw devicePixelRatio so edges stay crisp; game code always draws in 320x320 logical coords.
- Input is tracked per source (pointer ID / key code) and the most recent press wins, so multi-touch and key rollover behave; input clears on blur/visibility loss.
- Page stays scrollable; `touch-action: none` only on the canvas and D-pad buttons (landscape phones must reach the D-pad).

## Product

- Maple Grove (`/`): character creator, bell schedule (7:30 → 6 periods → lunch → clubs → 2:40 bus), 28 NPCs with routines, pop quizzes, mini-games (piano, drums, painting, free throws, lab), map (M), speed control, end-of-day report card, autosave.
- Classroom (`/classroom`): move the blue square with the D-pad or keyboard; desks and walls block movement.

## User preferences

- User supplies code snippets/files with little or no prose; treat them as "apply this to the app". No emojis in UI.

## UNIFY Character System (React layer, `/characters`)
- `src/types/character.ts` types; `src/data/characterAssetManifest.ts` = 8 teacher profiles (Mon–Fri outfits, hairstyles, voice profiles, quotes); `src/services/npcGenerationService.ts` = seeded daily roster (10 students from the UTC date, so all players share it) + teacher-for-day resolution; `src/hooks/useAvatarCustomization.ts` = player avatar in localStorage (`unify.avatar.v1`); `src/context/CharacterSystemContext.tsx` = provider (wraps the app in App.tsx) with `useAllTeachers()`, `useTodayNPCs()`, `useAvatarCustomization()`; `src/components/CharacterDemo.tsx` = demo page (tabs deep-linkable via `?tab=students|avatar`).
- Portraits reuse the game's sprite painter (`drawCharacterFrame` in `src/game/art/characters.ts`), so any `Look` renders identically in React and in Phaser. Not yet wired into the Phaser game's roster.

## Integrations
- **Claude (Anthropic)**: optional. Set `ANTHROPIC_API_KEY` on the host (Netlify function `chat.mjs`); without it the local dialogue engine is used.

## Gotchas

- Character size: students scale by grade (`gradeHeight`, 1st ≈ 0.8, 12th ≈ 1.1), adults by `look.build.height`; teachers/staff also have `build` width/legs/head proportions drawn into their sprites.
- Subject classrooms (Math `classA`, English `classB`, Science `lab`) are auditorium style: one room per subject shared by every grade, tiered rows (`TIERS` in `data/schoolMap.ts`, lifted in the 3D view too); each player's board shows their own grade's lesson. Re-apply if a new zip replaces `src/game/`.
- When the user ships a new game zip, replace `src/game/` wholesale, then re-apply the lifecycle fixes (HUD `cleanups`/`destroy()`, `Classroom3D.destroy()`, scene shutdown/destroy hooks) — they are not in the user's source.
- Partial bundles (e.g. Phase 2 parent oversight) ship an older `SchoolScene.ts` without the local broadcast-TV wiring (`HALL_TV_PX` hall TV texture, `broadcast.onFrame/tick/worldViewers/setViewerVisible/setClock`); re-apply that too. New window/document listeners and the `ParentDashboard` go in the scene's `teardown`; async callbacks check `tornDown` before touching the HUD.
- Pin `phaser@^3`; a bare `pnpm add phaser` resolves to Phaser 4.
- Multiplayer/auth talks to the user's own Supabase project directly from the browser; there is no server component in this repo.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
