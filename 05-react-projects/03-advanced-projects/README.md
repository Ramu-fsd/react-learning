# 03 - Advanced React Projects

Six standalone enterprise-oriented React 19 + TypeScript + Vite applications.

## Implemented applications

1. `01-enterprise-admin-portal` — team directory, role-aware UI and access request queue.
2. `02-real-time-monitoring-dashboard` — simulated telemetry, service health, event stream and alert acknowledgement.
3. `03-workflow-automation-platform` — workflow definitions, launch and step progression.
4. `04-document-management-system` — KYC document metadata registration and review status.
5. `05-analytics-and-reporting-dashboard` — payment metrics, trend chart, filters and CSV export.
6. `06-multi-tenant-saas-dashboard` — organization switcher, tenant-scoped UI data, member management and settings.

## Run any project

Open a terminal inside the selected project directory:

```bash
npm install
npm run dev
```

Validate:

```bash
npm run build
npm run lint
```

Each project includes its own package file, Vite/TypeScript/ESLint configuration, source, README and implementation notes.

## Important
These are frontend portfolio demos using synthetic data. They do not connect to real backend services. UI role checks and tenant selection are not security boundaries. Production systems must enforce authorization, tenant isolation, validation, audit and persistence on trusted services.

## Author
**Ramu Boya** · https://github.com/Ramu-fsd · https://www.linkedin.com/in/ramuboya
