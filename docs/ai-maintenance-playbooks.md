# AI Maintenance Playbooks

Use these playbooks when making common repository edits.

## New Mode Playbook

1. Add feature entry point in `src/components/Modes/<ModeName>/`.
2. Add route in `src/app/<route>/page.tsx`.
3. Add navigation entry in sidebar when route is user-facing.
4. Document the mode contract in `README.md`.
5. Run `npm run verify`.

## Route Change Playbook

1. Update route page component under `src/app/**`.
2. Update route contract section in `README.md`.
3. Update `src/components/Navigation/Menu/sidebar.tsx` if visibility changes.
4. Validate alias vs distinct behavior is explicit.
5. Run `npm run verify`.

## Scoring Logic Change Playbook

1. Update contest scoring logic in `src/components/Modes/Contest/hooks/use-contest.ts`.
2. Add or update unit tests for score calculation paths.
3. Validate tie handling and winner assignment.
4. Run `npm run verify`.

## Shared Question UI Change Playbook

1. Update shared components in `src/components/shared/Components/**`.
2. Validate behavior in both Exercises and Contest flows.
3. Validate keyboard navigation and answer progression.
4. Run `npm run verify`.

## Change-Impact Checklist

- Contest flow edits:
- Check active player progression.
- Check question index progression.
- Check completion and score rendering.
- Question generation edits:
- Check operator-specific constraints.
- Check max-number bounds.
- Check question count generation.
- Route wiring edits:
- Check navigation links.
- Check route behavior contract in docs.
- Check alias notices where applicable.

## No-Blind-Refactor Areas

Before editing these files, run targeted checks and document expected behavior:

- `src/components/Modes/Contest/contest-main.tsx`
- `src/components/Modes/Contest/hooks/use-contest.ts`
- `src/components/shared/Components/math-question.tsx`

Required before merge:

1. Run `npm run verify`.
2. Manually validate contest completion with multiple players.
3. Manually validate keyboard answer progression in shared question UI.
