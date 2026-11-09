# Multi-tenant SaaS Dashboard

A tenant-aware SaaS administration UI demonstrating organization switching, tenant-scoped records, configurable settings and member management.

## Features
- Switch between synthetic organizations
- Display tenant-specific KPIs and payment records
- Add and deactivate tenant members
- Update tenant display settings
- Tenant-scoped UI state and clear organization context

## Run
```bash
npm install
npm run dev
npm run build
npm run lint
```

## Security
Tenant selection in the browser is not tenant isolation. A production API must derive tenant context from authenticated identity and enforce tenant scoping for every read and write.

## Author
**Ramu Boya** · [GitHub](https://github.com/Ramu-fsd) · [LinkedIn](https://www.linkedin.com/in/ramuboya)
