# Repository Conventions

This file is the single source of truth for naming, structure, and ownership boundaries.

## Naming Rules

- Folders: lowercase except legacy folders not yet normalized.
- Files:
- Components: kebab-case (`contest-main.tsx`).
- Hooks/utilities/types without JSX: `.ts` files only.
- React components with JSX: `.tsx` files only.
- Symbols:
- React components and type aliases: PascalCase.
- Hooks and functions: camelCase.
- Constants: camelCase unless global immutable config requires UPPER_SNAKE_CASE.

## Extension Rules

- Use `.ts` for non-JSX logic and type files.
- Use `.tsx` only when the file directly contains JSX.

## Import and Boundary Rules

- `src/app/**`: route composition only; avoid embedding business logic here.
- `src/components/Modes/**`: feature-level UI and state orchestration.
- `src/components/shared/**`: reusable cross-feature components and shared models.
- `src/components/ui/**`: design-system-like primitives; keep feature logic out.
- `src/hooks/**`, `src/constants/**`, `src/enums/**`: shared domain logic and contracts.

## Mutation and React Behavior Policy

- Prefer immutable updates by default.
- If mutation is temporarily used in legacy areas, document the reason and add a follow-up item.
- Use stable keys derived from ids, not array indexes.
- Prefer refs and React-driven focus management over direct DOM querying when feasible.

## Current Scoped Exceptions

- `jsx-a11y/label-has-associated-control` remains off until custom input wrappers are fully mapped.
- Contest flow still has known mutation-based transitions that are planned for high-risk refactor phase.

## Monthly Maintenance Cadence

- Run a monthly conventions audit:
- Ensure new non-JSX files are `.ts`.
- Ensure new symbol names follow casing rules.
- Review lint rule exceptions and remove stale suppressions.
- Validate docs still match route and mode behavior.
