# /commit

Draft and create a Conventional Commit from the staged diff.

## Steps

1. Inspect: `git status`, `git diff --cached`, recent `git log`.
2. If nothing staged, say so and stop (do not auto-stage unless asked).
3. Draft message: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:` — match the diff only.
4. One logical change; warn if staging mixes concerns.
5. Show draft; ask confirmation.
6. Commit only after confirmation (no `--no-verify`, no amend unless asked).
7. Never commit `.env*`, `node_modules/`, `.next/`.

Branch: commit on `feature`, not `main`. Flow: `feature` → `/pr-review` → PR → merge `main` → deploy `main` (see `.cursor/rules/git-and-commits.mdc`).
