---
name: Supabase end-to-end testing of Maple Grove accounts
description: How to test real signup/parent flows against the game's Supabase project, and the rate limits that get in the way.
---
- The project requires email confirmation. The built-in mailer allows roughly one confirmation email per hour; hitting the limit returns "email rate limit exceeded" (HTTP 429). Plan one new account per hour, or ask the user to add custom SMTP or turn off confirmation.
- `@example.com` addresses are rejected as invalid. Disposable mail.tm inboxes (api.mail.tm) do receive the confirmation email. A GET on the `/auth/v1/verify` link with redirect disabled confirms the account.
- Anonymous sign-ins are disabled, and there is no service-role key.
- Browser automation works with playwright-core installed in /tmp, pointed at /repl/tools/bin/chromium. Run it as a real background task, because a `&` inside a shell call is killed when the call returns. /tmp is wiped when the workspace restarts.
- Realtime presence: calling `track()` every 0.35 s triggers "Client presence rate limit exceeded", and the student is dropped from presence, so the parent's live status stays offline.
  **Why:** found in the live test.
  **How to apply:** throttle `track()` if asked to fix it.
- The game save is per-browser (localStorage). A student signing in on a new device restarts at Day 1, and the report upsert (student_id, day) overwrites that day's report.
