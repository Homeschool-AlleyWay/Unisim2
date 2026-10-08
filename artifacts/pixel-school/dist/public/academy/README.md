# UNIFY Academy (built output)

Static build of the paper-cut UNIFY Academy game (3D hallway, lecture auditoriums, newsroom), served by this app at `/academy`.
Source and art pipeline: https://github.com/ayrissacanty/alley (`main`).
Rebuild: `python3 tools/build_netlify.py OUT --relative --static-only` in that repo, then replace this folder's contents.

Includes the flip phone web app at `/academy/phone.html` (also `/phone`), the grade-based news sources and the report video studio.
