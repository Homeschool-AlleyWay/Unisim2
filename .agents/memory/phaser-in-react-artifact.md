---
name: Phaser game inside the React artifact
description: Gotchas from embedding a user-supplied Phaser 3 game (with a DOM-based HUD) in the pixel-school React/wouter artifact.
---

- `pnpm add phaser` with no range resolves to **Phaser 4**; the user's game targets Phaser 3. Always pin `phaser@^3.x` for this project.
  **Why:** Phaser 4 installed silently and typechecked fine; only the version check caught it.
- The game's HUD (`ui/Hud.ts`) is plain DOM appended next to the canvas and opens dialogs that attach `window` keydown listeners, intervals and RAF loops. Anything that outlives the Phaser scene must be registered in the HUD's cleanup set and released in `hud.destroy()`, which the scene calls on shutdown/destroy.
  **How to apply:** when adding a new dialog/mini-game with a window listener or timer, use `onWindowKey(...)` / add to `cleanups` instead of raw `window.addEventListener`.
- User's preference so far: keep their delivered game code as-is except for lifecycle fixes; older versions of the app are kept on secondary routes (`/classroom`) rather than deleted.
- Each new zip from the user overwrites `src/game/`; the lifecycle fixes (HUD cleanups, Classroom3D.destroy, scene hooks, mini-game promises settling on Escape) must be re-applied after every drop. Verify with the route-change test (one canvas + one .msg-root after / → /classroom → /). Note: 2 extra small canvases from the broadcast anchor portraits are normal (3 total).

## Broadcast is a shared canvas "signal"
The morning broadcast picture is rendered once (BroadcastScreen) and copied to every TV: Phaser CanvasTexture (use the pre-downscaled small canvas + LINEAR filter, and refresh() after each draw), a DOM picture-in-picture, and the three.js classroom TV. Rendering is throttled and skipped when no TV is on screen.
**Why:** the user asked for the broadcast to look like a real TV playing in the world rather than a blocking overlay; a 480x270 canvas sampled with NEAREST at ~8x downscale shimmers badly, so downscale in 2D first.
**How to apply:** if the user drops a new game zip, re-wire BroadcastPlayer/BroadcastScreen + the hallway wall TV (tiles.ts HALL_TV, furniture locker-marker skip list, SchoolScene tick/onFrame, Classroom3D.setTVFrame) along with the other lifecycle fixes.

## User product rules (confirmed 2026-09-29)
- Every game screen/dialog must have a visible exit (✕) button. **Why:** user request. **How to apply:** new Hud dialogs go through modal(bottom, onExit); pick a non-blocking exit meaning (skip, resume, back to sign-in).
- The mandatory morning assembly airs once per real calendar day per device (localStorage date); later game days/app opens skip to the news loop and must not gate class seats. **Why:** user did not want it to stop the player every time.
