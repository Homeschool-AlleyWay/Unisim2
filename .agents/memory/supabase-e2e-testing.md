---
name: Supabase end-to-end testing of Maple Grove accounts
description: How to test real signup/parent flows against the game's Supabase project, and the rate limits that get in the way.
---
- The project requires email confirmation. The built-in mailer allows roughly one confirmation email per hour; hitting the limit returns "email rate limit exceeded" (HTTP 429). Plan one new account per hour, or ask the user to add custom SMTP or turn off confirmation.
- `@example.com` addresses are rejected as invalid. Disposable mail.tm inboxes (api.mail.tm) do receive the confirmation email. A GET on the `/auth/v1/verify` link with redirect disabled confirms the account.
- Anonymous sign-ins are disabled, and there is no service-role key.
- Browser automation works with playwright-core installed in /tmp, pointed at /repl/tools/bin/chromium. Run it as a real background task, because a `&` inside a shell call is killed when the call returns. /tmp is wiped when the workspace restarts.
- Realtime presence limit: 5 presence calls per client per 30 s on every Supabase plan. A client that goes over is closed ("Client presence rate limit exceeded") and drops off presence, so the parent sees the student offline.
  **Why:** confirmed in the docs and in a live test. Even a 3 s throttle still tripped it at about 30 s.
  **How to apply:** keep presence for slow state (online, room, seat) at 8 s or slower, and send fast-changing data such as walking positions as broadcast messages on the same channel.
- Seeded daily reports keep `checked=true` from earlier runs. Reset with `checked:false` when re-testing "Mark reviewed". Existing accounts skip the role chooser, and an already-linked parent skips the link step.
- The game save is per-browser (localStorage). A student signing in on a new device restarts at Day 1, and the report upsert (student_id, day) overwrites that day's report.
