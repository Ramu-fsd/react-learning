# Fraud Detection Monitoring UI

A fraud-operations workbench for triaging alerts, reviewing risk indicators and recording case dispositions.

## Features
- Fraud alert queue with risk score and severity
- Filter by severity and investigation status
- Search by alert, customer or payment reference
- Case detail with synthetic risk indicators
- Assign an analyst and record disposition
- Alert review timeline in local state

## Run
```bash
npm install
npm run dev
npm run build
npm run lint
```

## Important
Risk scores and alerts are illustrative. Do not use this UI to make real fraud decisions. Production systems need validated models, explainability, analyst controls, privacy safeguards and backend audit records.

## Author
**Ramu Boya** · [GitHub](https://github.com/Ramu-fsd) · [LinkedIn](https://www.linkedin.com/in/ramuboya)
