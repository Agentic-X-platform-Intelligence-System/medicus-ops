# /test-changed

Run only tests related to the current git diff.

## Steps

1. Changed files: `git diff --name-only HEAD` + `git diff --cached --name-only`
2. Filter to `*.test.ts`, `*.test.tsx`, `*.spec.ts`, `*.spec.tsx` sources or infer related tests from changed `app/`, `lib/` files.
3. If Jest configured:
   ```bash
   npm test -- --findRelatedTests <changed .ts/.tsx files>
   ```
4. If no test runner yet, report which files would need tests and stop.
5. Do not run full suite unless asked. Do not invent tests unless asked.

Report pass / fail. Mock Oracle and channel providers in unit tests.
