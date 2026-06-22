# Make Math

Make Math is a Next.js math-practice app for children and families.
It provides three route-level learning modes:

- Home: welcome and quick orientation.
- Exercises: single-player free practice with immediate feedback.
- Exam: temporary alias of Exercises (same behavior and UI contract for now).
- Contest: multiplayer turn-based scoring mode.

Engineering documentation is English-first.
UI text can remain Dutch while product and code contracts are documented in English.

## Product Intent

- Audience: learners practicing basic arithmetic and adults guiding practice sessions.
- Core value: quick arithmetic repetition with configurable difficulty and operator type.
- Constraints:
- Question counts and number ranges are bounded by shared constants.
- Question generation must remain deterministic for a chosen operator contract.
- Contest scoring compares submitted answers against generated answers.

## Route Contracts

- `/`: static welcome route.
- `/exercises`: canonical route for training behavior.
- `/exam`: temporary alias of `/exercises`; do not implement divergent exam logic here until alias status is removed.
- `/contest`: multiplayer flow (player setup, settings, active rounds, results).

Navigation intentionally exposes both `/exercises` and `/exam` while they are aliases so product intent remains visible.

## Architecture Overview

- Route layer: `src/app/**`
- Feature layer: `src/components/Modes/**`
- Shared reusable UI/domain components: `src/components/shared/**`
- Shared primitives: `src/components/ui/**`
- Shared domain and utilities: `src/constants/**`, `src/enums/**`, `src/hooks/**`, `src/lib/**`

Additional repository standards and boundaries are documented in:

- `docs/repository-conventions.md`
- `docs/ai-maintenance-playbooks.md`
- `AGENTS.md`

## Glossary

- Question: one generated arithmetic exercise with operands, operator, and expected answer.
- Operator: arithmetic operation (`+`, `-`, `x`, `:`).
- Player: contest participant with an id, display name, and submitted answers.
- Round: one active question for one active player during contest progression.
- Exam session: currently equivalent to an Exercises session until exam behavior is split.
- Contest result: score summary per player with one or more winners.

## Contributor Workflow

1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Run standard verification: `npm run verify`

`npm run verify` runs lint, typecheck, tests, and formatting checks.

For planned high-risk areas (contest state transitions and focus behavior), follow the no-blind-refactor checklist in `docs/ai-maintenance-playbooks.md` before changing code.
