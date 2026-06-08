# Anclora Template - Next.js Enterprise SaaS Starter

🚀 **Anclora Template** is a modern, type-safe, and highly opinionated Next.js starter kit designed for rapid development of enterprise-grade SaaS applications. It builds upon a solid foundation of Next.js 16+, Tailwind CSS 4, and TypeScript, optimized for developer productivity and long-term maintainability.

## 🌟 Key Features

### 🏗️ Core Architecture
- ⚡ **Next.js (App Router)**: Utilizing the latest features of Next.js 16+.
- 🔥 **TypeScript & Strict Typing**: Ensuring complete type safety across the entire codebase.
- 🎨 **Tailwind CSS 4**: Modern utility-first styling with the latest Tailwind features.
- 🗃️ **Drizzle ORM**: Type-safe database management supporting PostgreSQL (via Neon or PGlite).
- 💽 **Local-First DB**: Seamless local development using PGlite (Postgres in the browser/node).

### 🔐 Authentication & Security
- 🔒 **Clerk Integration**: Comprehensive user management and authentication (Social Login, MFA, Magic Links).
- 🛡️ **Arcjet Protection**: Integrated bot detection, rate limiting, and WAF protection.
- 🔑 **Type-Safe Env**: Secure environment variable handling with T3 Env.

### 🌐 Internationalization (i18n)
- 🌍 **next-intl**: robust i18n support with support for localized routing and server-side translations.
- 🔄 **Crowdin Ready**: Pre-configured for automated translation management.

### 🚓 Quality & Testing
- 📏 **Linter & Formatter**: Ultra-fast static analysis using Oxlint (Ultracite) and Oxfmt.
- ✅ **Automated Testing**: Comprehensive coverage with Vitest (unit/integration) and Playwright (E2E/Visual).
- 🧪 **Storybook**: Isolated UI component development.
- 🔍 **Bundle Analysis**: Built-in tools to monitor and optimize application size.

### 🚨 Monitoring & Observability
- 🚨 **Sentry**: Full-stack error monitoring with Spotlight for local development.
- 📝 **LogTape & Better Stack**: Structured logging and log management.
- 🖥️ **Checkly**: Synthetic monitoring as code for uptime and E2E validation.

## 🚀 Getting Started

### 1. Clone the repository
```shell
git clone https://github.com/ToniIAPro73/anclora-template.git my-app
cd my-app
```

### 2. Install dependencies
```shell
npm install
```

### 3. Environment Setup
Create a `.env.local` file based on `.env.example`:
```shell
cp .env.example .env.local
```
Fill in your Clerk and Database credentials.

### 4. Run Development Server
```shell
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to see your app.

## 📖 Available Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Starts development server |
| `npm run build` | Builds for production |
| `npm run test` | Runs unit tests (Vitest) |
| `npm run test:e2e` | Runs E2E tests (Playwright) |
| `npm run lint` | Runs linter (Oxlint) |
| `npm run storybook` | Starts Storybook |
| `npm run db:migrate` | Applies database migrations |

## 🏗️ Project Structure

- `src/app`: Next.js App Router pages and layouts.
- `src/components`: Shared React components.
- `src/libs`: Configuration for 3rd party services.
- `src/models`: Database schema and models.
- `src/locales`: Internationalization messages.
- `tests/`: Integration and E2E test suites.

## 📄 License

Licensed under the MIT License.

---

Built with precision for the Anclora ecosystem.
