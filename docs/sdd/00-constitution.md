# Anclora Template – Constitución SDD

## 1. Propósito

Este repositorio actúa como **plantilla base** para aplicaciones SaaS del ecosistema Anclora.
Define un conjunto mínimo de contratos SDD y estándares técnicos que todos los proyectos derivados deben respetar.[cite:115][cite:3]

## 2. Principios SDD

- La **especificación en Markdown** es la única fuente de verdad de requisitos y comportamiento.
- El código es un **subproducto transitorio** derivado de la especificación.[cite:3][cite:115]
- Toda feature sigue el ciclo: **Especificar → Planificar → Definir Tareas → Implementar**.
- Los cambios se validan con **revisiones humanas en los límites de fase** (Specify→Plan, Plan→Tasks, Tasks→Implement).[cite:3]

## 3. Alcance

- Tipo de proyecto: Plantilla Next.js 16+ / SaaS enterprise.[cite:105]
- Stack de referencia: Next.js App Router, TypeScript estricto, Tailwind 4, Drizzle/PostgreSQL, Clerk, Sentry, Playwright, Vitest.[cite:105]
- Enfoque SDD: pensado tanto para **greenfield** como para proyectos clonados y extendidos.

## 4. Contratos globales (referencias Bóveda Anclora)

- Arquitectura ecosistema → `contracts/core/ANCLORA_ECOSYSTEM_ARCHITECTURE_CONTRACT.md`.[cite:2]
- Branding y familias → `ANCLORA_BRANDING_MASTER_CONTRACT.md`, `ANCLORA_ECOSYSTEM_CONTRACT_GROUPS.md`, contratos Internal/Premium/Ultra/Portfolio.[cite:2]
- UX universales → `UI_MOTION_CONTRACT.md`, `MODAL_CONTRACT.md`, `LOCALIZATION_CONTRACT.md`.[cite:2]

## 5. Flujo SDD resumido

1. Crear/actualizar spec en `docs/sdd/specs/`.
2. Crear/actualizar plan técnico en `docs/sdd/plans/`.
3. Generar tareas atómicas en `docs/sdd/tasks/`.
4. Ejecutar tareas con agentes siguiendo el playbook (`docs/sdd/playbooks/gsd-runbook.md`).[cite:115]
5. Reconciliar spec ↔ código y registrar decisiones en ADRs (`docs/sdd/decisions/`).[cite:3]
