# 04 - Fintech Enterprise Projects

Eight standalone React 19 + TypeScript + Vite applications based on banking and fintech workflows.

## Implemented applications

1. `01-digital-banking-portal` — account overview, masked balances, transaction search and simulated own-account transfer.
2. `02-payment-processing-dashboard` — payment instruction capture, checker approval simulation and lifecycle timeline.
3. `03-fraud-detection-monitoring-ui` — risk alert queue, investigation, analyst assignment and case disposition.
4. `04-kyc-onboarding-portal` — multi-step applicant intake, document checklist and submission.
5. `05-loan-origination-platform` — loan intake, illustrative EMI calculation and application pipeline.
6. `06-reconciliation-management-system` — internal/external record matching, exception classification and CSV export.
7. `07-treasury-cash-management-dashboard` — multi-currency cash positions, thresholds and upcoming obligations.
8. `08-enterprise-banking-operations-platform` — unified work queue across payment, fraud, reconciliation and beneficiary operations.

## Run any application

Open a terminal in the selected project folder:

```bash
npm install
npm run dev
```

Validate:

```bash
npm run build
npm run lint
```

Each project includes its own package file, React source, Vite/TypeScript/ESLint configuration, README and implementation notes.

## Important safety and production boundaries

These are frontend portfolio demonstrations with synthetic data and local state. They do not connect to real financial systems, process money, verify identity, make credit decisions or detect actual fraud. Frontend role checks, balance masking and tenant-like UI state are not security controls. Production systems must enforce authorization, validation, limits, idempotency, audit, privacy, persistence and business invariants in trusted backend services.

## Author

**Ramu Boya**
- GitHub: https://github.com/Ramu-fsd
- LinkedIn: https://www.linkedin.com/in/ramuboya
