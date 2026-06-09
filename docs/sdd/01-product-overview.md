# Anclora Template – Overview de Producto

## 1. Rol en el ecosistema Anclora

**Anclora Template** es el starter SaaS enterprise de referencia para nuevas aplicaciones de Anclora Group.[cite:105]

- Proporciona la base técnica estándar (Next.js, Tailwind, Drizzle, Clerk, Sentry, etc.).[cite:105]
- Implementa el esqueleto SDD mínimo para cualquier app futura.
- Se alinea con los contratos de ecosistema y branding de la bóveda.[cite:2]

## 2. Casos de uso tipo

- Lanzar MVPs de productos premium o internos siguiendo contratos de familia.
- Servir como sandbox para experimentos de features (p.ej. autenticación OTP, dashboards pequeños).
- Prototipar integraciones entre apps Real Estate antes de mover la lógica a repos específicos.[cite:2]

## 3. Usuarios objetivo

- Desarrollador principal de Anclora (Toni) trabajando con agentes.
- Agentes de desarrollo (Claude Code, GSD, OpenSpec) bajo el Playbook de SDD de Anclora.[cite:115]

## 4. Relación con Dashboard Real Estate

Aunque `anclora-template` no es una app de producción, sus specs pueden referenciar patrones de Real Estate cuando se usa para prototipos o PoCs.

- Los IDs de feature pueden alinearse con el índice de Dashboard Real Estate (p.ej. `REAL-OTP-001`).[cite:2]
- Cualquier spec que impacte el vertical inmobiliario debe referenciar `resources/dashboard-real-estate/indice-dashboard-real-estate.md` en la bóveda.[cite:2]
