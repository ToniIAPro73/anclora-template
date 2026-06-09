# Playbook SDD – GSD + OpenSpec para Anclora Template

## 1. Objetivo

Definir cómo usar GSD y OpenSpec (ai-specs) en este repo siguiendo el Playbook SDD de Anclora.[cite:115]

## 2. Flujos básicos

### 2.1. Crear nueva feature

1. Crear spec desde plantilla:
   - `docs/sdd/specs/feature-template.md` → `spec-<ID>.md`.
2. Crear plan técnico:
   - `docs/sdd/plans/plan-template.md` → `plan-<ID>.md`.
3. Crear tasks:
   - `docs/sdd/tasks/tasks-template.md` → `tasks-<ID>.md`.
4. Ejecutar GSD/agents usando estos artefactos como entrada.[cite:69]

### 2.2. Brownfield / repos clonados

Cuando esta plantilla se clone para una app existente:

- Usar ai-specs / OpenSpec para describir deltas sobre código actual.
- Mantener specs delta junto a la spec base.[cite:115][cite:1]

## 3. Integración con Memanto y Bóveda

- Toda decisión estratégica se refleja en Bóveda (contratos, planes, dashboard Real Estate).[cite:2][cite:115]
- Memanto/Command Center se usan como capas de memoria semántica y monitorización.

## 4. Notas para agentes

- Leer primero `docs/sdd/00-constitution.md` y este playbook.
- No escribir código si la spec/plan no están al menos en estado `In Review`.
