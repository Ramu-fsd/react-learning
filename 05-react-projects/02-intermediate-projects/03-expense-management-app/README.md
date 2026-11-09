# Expense Management App

An employee expense submission and manager review application.

## Features
- Submit an expense with category, date, amount and business purpose
- Validate positive amounts and required fields
- Filter expenses by workflow status
- Approve or reject pending expenses
- Summary cards for submitted, pending and approved totals
- Synthetic seeded expense records

## Run
```bash
npm install
npm run dev
npm run build
npm run lint
```

## Workflow
`SUBMITTED -> APPROVED | REJECTED`. The demo stores changes in component state only. A production workflow should persist decisions on the backend and record reviewer identity, timestamps and reasons.

## Author
**Ramu Boya** · [GitHub](https://github.com/Ramu-fsd) · [LinkedIn](https://www.linkedin.com/in/ramuboya)
