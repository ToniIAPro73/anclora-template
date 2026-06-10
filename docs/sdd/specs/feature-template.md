# Plantilla de Especificación de Feature SDD

> **Uso**: copia este archivo como `spec-<ID>.md` (por ejemplo `spec-REAL-OTP-001.md`).

## 1. Metadatos

- **ID**: `<VERTICAL>-<TOPICO>-<NNN>` (ej. `REAL-OTP-001`).
- **Producto / App**: (ej. `anclora-template` → prototipo; `anclora-nexus`, `anclora-private-estates`, etc.).
- **Vertical**: Core / Real Estate / Energía / Internas / Premium / Ultra Premium.
- **Estado**: Draft / In Review / Approved / Implemented.
- **Fecha**: YYYY-MM-DD.

## 2. Outcomes (Resultados esperados)

Describe el objetivo de la feature y sus beneficios (seguridad, negocio, UX, etc.).

## 3. Scope Boundaries (Límites de alcance)

- **Dentro de alcance**:
  - …
- **Fuera de alcance**:
  - …

## 4. Functional Requirements (EARS)

Define requisitos siguiendo EARS, como en la especificación de OTP de Anclora:

- **REQ-X (Activado por Evento)**: CUANDO … EL sistema DEBERÁ …
- **REQ-Y (Estado No Deseado)**: SI … EL sistema DEBERÁ …
- **REQ-Z (Impulsado por el Estado)**: MIENTRAS … EL sistema DEBERÁ …
- **REQ-U (Ubicuo)**: El sistema DEBERÁ …

## 5. Security & Performance Constraints

- Requisitos de seguridad criptográfica, autenticación, autorización, privacidad.
- Requisitos de rendimiento (latencia máxima, throughput, SLAs, etc.).

## 6. Data Model

- Nuevas tablas/campos (Drizzle schemas, índices).
- Relación con modelos existentes.

## 7. Verification Criteria

- Pruebas automatizadas (unit/integration/e2e) y pasos manuales clave.
- Casos de Red Team cuando aplique (por ejemplo, fuerza bruta OTP).

## 8. Impacto en Real Estate Dashboard (si aplica)

- Apps afectadas (APE, ADL, AES, ANX, ACG, etc.).
- Métricas nuevas o modificadas.
- Flujos que deben reflejarse en `indice-dashboard-real-estate.md`.
