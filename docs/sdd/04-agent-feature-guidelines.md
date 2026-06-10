# Agent Feature Guidelines

## Purpose

This document defines how an AI agent must implement a new feature in an Anclora application cloned from `anclora-template` or aligned with its SDD structure.

Use it with:

- `docs/sdd/00-constitution.md`
- `docs/sdd/03-sdd-workflow.md`
- `docs/sdd/specs/feature-template.md`
- `docs/sdd/plans/plan-template.md`
- `docs/sdd/tasks/tasks-template.md`
- `docs/sdd/decisions/adr-template.md`

## Required Flow

### 1. Discover

Before writing code, the agent must identify:

- Product/app and contractual family: Internal, Premium, Ultra Premium, Portfolio or independent utility.
- Affected surfaces: UI, API, DB, i18n, public copy, dashboard, prompts, docs, metadata.
- Applicable Boveda contracts.
- Whether the feature affects Real Estate dashboard semantics.

Minimum context:

- Local repo `AGENTS.md`.
- SDD constitution and workflow.
- Architecture/contracts document.
- Boveda contracts explicitly referenced by the feature.

### 2. Specify

Create or update a spec in `docs/sdd/specs/spec-<ID>.md`.

The spec must include:

- Feature ID.
- Outcomes.
- Scope boundaries.
- Functional requirements in EARS format.
- Security, privacy and performance constraints.
- Data model impact.
- Verification criteria.
- Real Estate dashboard impact, if any.

No implementation should begin while the spec is still vague.

### 3. Plan

Create or update `docs/sdd/plans/plan-<ID>.md`.

The plan must map each relevant requirement to:

- Code paths.
- Data or migration changes.
- UI components.
- i18n changes.
- Tests.
- Deployment and rollback considerations.
- Observability.

If the solution requires a durable architecture decision, create an ADR in `docs/sdd/decisions/`.

### 4. Define Tasks

Create or update `docs/sdd/tasks/tasks-<ID>.md`.

Tasks must be small enough for focused commits and must include validation. A task is not complete until its relevant tests or checks have run.

### 5. Implement

Implementation context must stay narrow:

- Active spec.
- Active plan.
- Active task.
- Files directly affected.
- Required contracts.

Do not load the whole repo or the whole Boveda unless there is a specific reason.

### 6. Verify

Run the smallest relevant check first, then the wider suite.

Baseline checks:

```bash
npm run check:types
npm run lint
npm run test
```

When relevant:

```bash
npm run check:i18n
npm run check:deps
npm run test:e2e
```

For visible copy, locale files, metadata, schema, SEO, GEO or AEO:

```bash
npm run check:text-quality
```

Use `npm run check:text-quality:strict` before publication if warnings should block release.

### 7. Reconcile

After implementation:

- Compare code against spec.
- Update spec first if implementation legitimately diverged.
- Update plan/tasks status.
- Add ADRs for durable decisions.
- Propose Boveda updates instead of editing master contracts from an app repo, unless explicitly instructed.

## Real Estate Dashboard Features

Use this path when the feature affects dashboard metrics, dataset semantics or cross-app Real Estate flows.

Required references:

- Boveda `dashboard/indice-sdd-dashboard-real-estate.md`.
- Boveda `dashboard/spec-template-dashboard-real-estate.md`.
- Boveda `dashboard/plan-template-dashboard-real-estate.md`.
- Real Estate dataset source of truth defined in the Boveda dashboard index.

Feature IDs:

- `REAL-<TOPIC>-<NNN>`

The spec must identify affected apps:

- `APE`: Anclora Private Estates.
- `ADL`: Anclora Data Lab.
- `AES`: Anclora EnergyScan.
- `ASY`: Anclora Synergi.
- `ANX`: Anclora Nexus.
- `ACG`: Anclora Content Generator AI.
- `Command Center`: dashboard implementation.

## Gates

The agent must not bypass these gates:

- Spec approval before plan.
- Plan approval before tasks.
- Tasks defined before implementation.
- Tests before completion.
- Human review for legal, claims, privacy, sensitive domains or contract changes.

## Template Readiness Criteria

For `anclora-template` to be considered production-ready as an Anclora template, it should satisfy:

- No real `.env` or production env files tracked.
- No generated build/test artifacts tracked.
- `check:types`, `lint`, `test`, `check:deps` and `check:i18n` pass.
- SDD docs reference current Boveda contracts, including text quality and SEO/GEO/AEO.
- `AGENTS.md`, `CLAUDE.md` and `GEMINI.md` point agents to the same SDD workflow.
- i18n defaults match the Anclora language contract or are explicitly declared as template placeholders.
- App identity, branding, metadata and demo content are clearly marked as placeholders.
