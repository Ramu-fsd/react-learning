# Reconciliation Management System

An operations workspace for matching internal ledger entries with external bank or payment-rail statements and managing exceptions.

## Features
- Synthetic internal and external statement records
- Automatic matching by reference and amount
- Matched, unmatched and amount-mismatch classifications
- Exception queue with investigation notes
- Filter by reconciliation outcome
- Summary metrics and CSV export

## Run
```bash
npm install
npm run dev
npm run build
npm run lint
```

## Reconciliation design
The frontend illustrates matching outcomes. A production reconciliation engine must define match keys, tolerances, currency/date rules, duplicate handling, partial matches, reversals, settlement windows and maker-checker exception closure.

## Author
**Ramu Boya** · [GitHub](https://github.com/Ramu-fsd) · [LinkedIn](https://www.linkedin.com/in/ramuboya)
