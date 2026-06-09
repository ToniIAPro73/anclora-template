# Plan técnico – Plantilla

> **Uso**: copia este archivo como `plan-<ID>.md`.

## 1. Resumen

- **ID**: `<VERTICAL>-<TOPICO>-<NNN>`.
- **Spec**: `../specs/spec-<ID>.md`.
- Breve descripción técnica de la solución propuesta.

## 2. Contexto técnico

- Repos afectados.
- Módulos/paths (`src/app/...`, `src/libs/*`, `src/models/Schema.ts`, etc.).[cite:105]

## 3. Arquitectura propuesta

- Diagrama lógico de componentes.
- Patrones: auth, validación, caching, colas, etc.
- Impacto en contratos de la bóveda.

## 4. Cambios en modelo de datos

- Nuevas tablas/migraciones.
- Políticas de expiración/retención.

## 5. Flujos principales

Describe cada flujo end-to-end con referencia a los REQ de la spec.[cite:116]

## 6. Estrategia de tests

- Unit (Vitest).
- Integration (DB, API routes).
- E2E (Playwright/Checkly).[cite:105]

## 7. Riesgos técnicos

- Riesgos + mitigaciones.

## 8. Rutas de despliegue

- Ramas, entornos, toggles.

## 9. Aprobaciones

- Arquitectura.
- Producto.
- Seguridad (si aplica).
