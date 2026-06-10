# Anclora Template – Workflow SDD

## 1. Ciclo de vida de una feature

1. **Ticket / intención** (Bóveda o gestor externo).
2. **Especificación** (`docs/sdd/specs/spec-<ID>.md`).
3. **Plan técnico** (`docs/sdd/plans/plan-<ID>.md`).
4. **Tasks SDD** (`docs/sdd/tasks/tasks-<ID>.md`).
5. **Implementación** (ramas de código, PRs, tests).
6. **Verificación** (tipos, lint, tests, i18n, dependencias y calidad textual cuando aplique).

## 2. Patrón híbrido GSD + OpenSpec

- GSD se usa como motor de ejecución y aislamiento de contexto (subagentes, tasks atómicas).
- OpenSpec (o ai-specs) se usa como capa de gobernanza / delta specs en proyectos clonados.

## 3. Gates humanos

- Gate 1 – Aprobación de spec.
- Gate 2 – Aprobación de plan técnico.
- Gate 3 – Aprobación de PR principal.

Ningún agente puede saltarse gates.

## 4. Naming de IDs de feature

Para alinearse con Dashboard Real Estate y futuros índices de features:

- Formato genérico: `<VERTICAL>-<TOPICO>-<NNN>` (p.ej. `CORE-OTP-001`).
- Para Real Estate: `REAL-<TOPICO>-<NNN>` (p.ej. `REAL-OTP-001`, `REAL-LEADS-002`).

Estos IDs deben aparecer en:

- Nombre de archivo de spec: `spec-REAL-OTP-001.md`.
- Nombre de plan: `plan-REAL-OTP-001.md`.
- Nombre de tasks: `tasks-REAL-OTP-001.md`.

## 5. Limpieza de contexto

- No se acumulan conversaciones largas en el IDE.
- Toda decisión significativa se vuelca a specs, planes, ADRs o bóveda (Memanto, Command Center).

## 6. Checks mínimos por tipo de cambio

- Código TypeScript/React: `npm run check:types`, `npm run lint`, `npm run test`.
- Traducciones o claves visibles: `npm run check:i18n` y `npm run check:text-quality`.
- Dependencias, imports o exports públicos: `npm run check:deps`.
- Flujos críticos de usuario: `npm run test:e2e`.
- Copy, metadatos, schema, SEO, GEO o AEO: `npm run check:text-quality`; usar `npm run check:text-quality:strict` antes de publicación.
