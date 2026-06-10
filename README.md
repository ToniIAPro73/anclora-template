# Anclora Template

Base oficial para crear aplicaciones Next.js dentro del ecosistema Anclora Group.

El objetivo de este repo no es ser una demo aislada, sino una plantilla gobernada por SDD, contratos de la Bóveda y gates de calidad reutilizables por Codex, Claude Code, Gemini CLI y otros agentes.

## Cuándo usarla

Usa esta plantilla para crear una nueva app Anclora cuando necesites:

- Next.js App Router con TypeScript estricto.
- Rutas localizadas con `next-intl`.
- Autenticación con Clerk.
- Persistencia PostgreSQL mediante Drizzle y PGlite para desarrollo local.
- Observabilidad con Sentry, Checkly y tests automatizados.
- Flujo Spec-Driven Development documentado en `docs/sdd`.
- Comprobación transversal de copy, ortografía, humanización, SEO, GEO y AEO.

## Flujo obligatorio para agentes IA

Antes de implementar una feature, cualquier agente debe leer:

- `AGENTS.md`.
- `docs/sdd/00-constitution.md`.
- `docs/sdd/02-architecture-and-contracts.md`.
- `docs/sdd/03-sdd-workflow.md`.
- `docs/sdd/04-agent-feature-guidelines.md`.

El ciclo mínimo es:

1. Crear o actualizar `docs/sdd/specs/spec-<ID>.md`.
2. Crear o actualizar `docs/sdd/plans/plan-<ID>.md`.
3. Crear o actualizar `docs/sdd/tasks/tasks-<ID>.md`.
4. Implementar solo las tareas aprobadas.
5. Ejecutar los checks relevantes.
6. Reconciliar spec, plan, tasks y ADRs si la implementación cambia alguna decisión.

Para features Real Estate, usa IDs `REAL-<TOPIC>-<NNN>` y consulta los documentos dashboard SDD de la Bóveda.

## Crear una app desde la plantilla

```bash
git clone git@github.com:ToniIAPro73/anclora-template.git nueva-app
cd nueva-app
npm install
cp .env.example .env.local
npm run dev
```

Después de clonar:

- Cambia `name`, metadatos y branding.
- Ajusta `src/utils/AppConfig.ts` a los idiomas reales del producto.
- Declara la familia contractual de la app en `docs/sdd/02-architecture-and-contracts.md`.
- Sustituye contenido demo por copy validado.
- Mantén `.env`, `.env.production` y secretos fuera de Git.

## Checks

Checks base:

```bash
npm run check:types
npm run lint
npm run test
npm run check:deps
npm run check:i18n
```

Cuando haya copy visible, traducciones, documentación pública, metadatos, schema, SEO, GEO o AEO:

```bash
npm run check:text-quality
```

Antes de publicación externa:

```bash
npm run check:text-quality:strict
```

El auditor vive en `anclora-agent-skills`; este repo solo incluye un wrapper para localizarlo en local o en CI.

## Stack

- Next.js App Router.
- React.
- TypeScript.
- Tailwind CSS.
- Drizzle ORM.
- PGlite / PostgreSQL.
- Clerk.
- Sentry.
- Vitest.
- Playwright.
- Storybook.
- `next-intl`.

## Estructura principal

- `src/app`: rutas App Router.
- `src/components`: componentes compartidos.
- `src/libs`: integraciones y configuración.
- `src/models`: esquema de datos.
- `src/locales`: mensajes i18n.
- `docs/sdd`: constitución, workflow, specs, planes, tasks y ADRs.
- `scripts`: wrappers de automatización, sin duplicar lógica central.
- `tests`: pruebas de integración y E2E.
