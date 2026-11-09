# Enterprise Banking Operations Platform

A unified banking operations workspace combining payment queue monitoring, fraud case triage, reconciliation exceptions and beneficiary service tasks.

## Features
- Operations overview with workload metrics
- Unified work queue with category and priority filters
- Payment operations with review actions
- Fraud alert queue and case disposition
- Reconciliation exception work items
- Beneficiary service request work items
- Assignment and status changes in local state

## Run
```bash
npm install
npm run dev
npm run build
npm run lint
```

## Architecture direction
The UI is organized around operational work items. A production platform should integrate domain services through stable APIs, use a backend workflow/orchestration layer, enforce maker-checker policies and capture immutable audit events.

## Author
**Ramu Boya** · [GitHub](https://github.com/Ramu-fsd) · [LinkedIn](https://www.linkedin.com/in/ramuboya)
