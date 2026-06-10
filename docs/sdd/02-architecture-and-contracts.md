# Anclora Template – Arquitectura y Contratos

## 1. Arquitectura base

- Frontend: Next.js App Router (`src/app`) con rutas localizadas `[locale]` y segmentos `(auth)/(marketing)/(dashboard)`.
- Backend: API Routes (`src/app/api/*`) con Drizzle ORM (`src/models/Schema.ts`) y utilidades de DB (`src/utils/DBConnection.ts`).
- Infra: PostgreSQL (Neon/PGlite), Sentry, Checkly, Vitest, Playwright.

## 2. Contratos de ecosistema relevantes

Este repo está sujeto, como mínimo, a:

- `contracts/core/ANCLORA_ECOSYSTEM_ARCHITECTURE_CONTRACT.md`.
- `contracts/core/ANCLORA_ECOSYSTEM_CONTRACT_GROUPS.md`.
- Contratos de branding y UX en `docs/standards/` de la bóveda (color tokens, tipografía, favicon, gap analysis).

## 3. Mapeo con familias de apps

Cuando se clona esta plantilla para una app real, deberá declararse:

- Familia contractual: Internal / Premium / Ultra Premium / Portfolio (según `APPLICATION_FAMILY_MAP`).
- Contrato de familia aplicable: `ANCLORA_INTERNAL_APP_CONTRACT`, `ANCLORA_PREMIUM_APP_CONTRACT`, etc.

## 4. Relación con Real Estate

Las apps del vertical inmobiliario (Data Lab, Nexus, Command Center, Private Estates, EnergyScan, etc.) usan Dashboard Real Estate como índice de campos, interacciones y fuentes.

- Cualquier feature de esta plantilla que impacte ese vertical debe:
  - Declarar `real-estate: true` en su spec.
  - Referenciar el índice y, si aplica, la app objetivo (APE, ADL, ANX, AES, ACG).

## 5. Integración con el Playbook SDD

- Este archivo es la pieza de unión entre stack técnico real y el Playbook SDD Anclora.
- Los agentes deben leerlo antes de generar código para conocer límites y contratos.
