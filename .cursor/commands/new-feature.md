# /new-feature

Scaffold a Phase 1 feature: Server Action + types + minimal MUI screen.

## Before coding — ask

1. Entity name (e.g. Task, Appointment)
2. Fields (name, type, required?)
3. List + create only, or full CRUD?

## Then scaffold

1. **SQL** — new file under `sql/V00n__create_{entity}.sql` (snake_case table)
2. **Types** — `types/{entity}.ts` or colocated Zod/Pydantic-style TS types
3. **Data access** — functions using `executeQuery` from `lib/db.ts` (binds only)
4. **Server Actions** — `app/(dashboard)/{entity}/actions.ts` for mutations
5. **UI** — mobile-first MUI list + form under `app/(dashboard)/{entity}/`
6. **Tests** — stub or one focused test with mocked `executeQuery`

## Rules

- No direct `oracledb` outside `lib/db.ts`
- No provider calls for notifications
- Match `.cursor/rules/ui-mui.mdc` and `data-migrations.mdc`
- Phase-check: stay within current phase scope

Show file list before editing if the user has not confirmed the entity/fields.
