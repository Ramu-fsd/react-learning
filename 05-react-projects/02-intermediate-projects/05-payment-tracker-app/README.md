# Payment Tracker App

A payment lifecycle tracker for operations teams, with status filtering, detail view and safe demo transitions.

## Features
- Track payment lifecycle: INITIATED, PROCESSING, COMPLETED, FAILED
- Search payment and beneficiary references
- Filter by status
- Inspect payment details and timeline
- Retry failed payments in demo state
- KPI cards for volume and in-flight payments

## Run
```bash
npm install
npm run dev
npm run build
npm run lint
```

## Production considerations
A frontend retry button must call a backend operation designed for idempotent retries. Never simulate a real money movement in the browser. A production tracker should consume trusted lifecycle events and expose trace/correlation references.

## Author
**Ramu Boya** · [GitHub](https://github.com/Ramu-fsd) · [LinkedIn](https://www.linkedin.com/in/ramuboya)
