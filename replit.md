# Mobile School Game

A tiny mobile-first classroom game: steer a blue student around desks on a 320x320 canvas with an on-screen D-pad (or WASD/arrow keys).

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
  - `src/lib/game/world.ts` — obstacles, per-axis AABB collision, draw (source of truth for game rules)
  - `src/lib/game/input.ts` — multi-source input state (pointer IDs + physical key codes)
  - `src/lib/game/canvas.ts` — integer-scale high-DPI canvas helper
  - `src/components/game/{GameCanvas,DPad}.tsx` — loop/keyboard and the touch D-pad
  - `public/pixel-school-standalone.html` — the original single-file version, kept verbatim as reference
- `artifacts/api-server`, `lib/db` — scaffolded but unused by the game

## Architecture decisions

- The app was rebuilt (Sept 2026) from a user-supplied single-file HTML game; earlier multi-room simulator (schedule engine, A* students, joystick) was removed.
- Canvas backing store snaps to an integer multiple of 320 instead of raw devicePixelRatio so edges stay crisp; game code always draws in 320x320 logical coords.
- Input is tracked per source (pointer ID / key code) and the most recent press wins, so multi-touch and key rollover behave; input clears on blur/visibility loss.
- Page stays scrollable; `touch-action: none` only on the canvas and D-pad buttons (landscape phones must reach the D-pad).

## Product

- Move the blue square with the D-pad or keyboard; desks, teacher desk and walls block movement, with sliding along obstacles.

## User preferences

- User supplies code snippets/files with little or no prose; treat them as "apply this to the app". No emojis in UI.

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
