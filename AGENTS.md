# Agent Instructions

This repository is optimized for safe AI-assisted changes.

## First Read

1. `README.md`
2. `docs/repository-conventions.md`
3. `docs/ai-maintenance-playbooks.md`

## Working Rules

- Keep product and architecture docs in sync with behavior changes.
- Prefer minimal, localized diffs.
- Do not refactor high-risk contest state logic without targeted validation.
- Use `.ts` for non-JSX files and `.tsx` for JSX files.
- Respect feature boundaries (route, mode, shared, ui, domain).

## Required Verification

Run and pass:

- `npm run verify`

If changes touch no-blind-refactor areas, also perform manual checks described in `docs/ai-maintenance-playbooks.md`.

## Merge Hygiene

- Keep route contracts explicit in docs.
- Keep route visibility in sidebar aligned with documented strategy.
- Add tests when touching scoring or generation logic.
