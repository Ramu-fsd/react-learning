# Digital Banking Portal

A customer-facing digital banking overview with account balances, transaction history, transfers between owned accounts and beneficiary shortcuts.

## Features
- Account summary and available balance visibility toggle
- Search and filter transaction history
- Transfer form between demo accounts with positive-amount and available-balance checks
- Recent activity and account selection
- Responsive customer dashboard

## Run
```bash
npm install
npm run dev
npm run build
npm run lint
```

## Domain notes
The transfer is simulated in local UI state and does not move money. A real transfer requires backend authorization, funds/limits checks, idempotency, fraud controls, ledger posting and audit events.

## Author
**Ramu Boya** · [GitHub](https://github.com/Ramu-fsd) · [LinkedIn](https://www.linkedin.com/in/ramuboya)
