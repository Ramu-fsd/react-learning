# Payment Processing Dashboard

An operations console for creating payment instructions and monitoring their lifecycle.

## Features
- Payment initiation form with beneficiary, amount, currency and reference
- Required-field and positive-amount validation
- Payment queue with status filters and search
- Detail panel with lifecycle timeline
- Maker-checker-style review simulation: submit then approve/reject
- Idempotency reference generated for each demo instruction

## Run
```bash
npm install
npm run dev
npm run build
npm run lint
```

## Important
This is not a payment gateway. The app does not connect to a bank, payment rail or ledger. Production payment execution requires backend controls, authenticated approvals, limits, idempotency, fraud screening, ledger integration and durable audit records.

## Author
**Ramu Boya** · [GitHub](https://github.com/Ramu-fsd) · [LinkedIn](https://www.linkedin.com/in/ramuboya)
