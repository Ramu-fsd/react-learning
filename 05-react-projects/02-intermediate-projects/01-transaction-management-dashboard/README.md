# Transaction Management Dashboard

A payment-operations workspace for searching, filtering and reviewing transaction records.

## Features
- KPI cards for transaction count, value and pending items
- Search by transaction ID, customer or beneficiary
- Filter by lifecycle status
- Paginated transaction table
- Select a transaction to inspect details
- Simulated CSV export

## Run
```bash
npm install
npm run dev
npm run build
npm run lint
```

## Architecture
`src/data/transactions.ts` contains typed mock records. `App.tsx` owns search, filter, pagination and selected-record UI state. Replace the mock repository with a typed API client when connecting a backend.

## Domain and security notes
All records are synthetic. A real implementation should use server-side filtering/pagination, enforce record-level authorization on the backend, mask sensitive fields, and audit exports.

## Author
**Ramu Boya** · [GitHub](https://github.com/Ramu-fsd) · [LinkedIn](https://www.linkedin.com/in/ramuboya)
