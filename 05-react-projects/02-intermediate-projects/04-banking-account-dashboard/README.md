# Banking Account Dashboard

A customer-facing banking overview with account balances, transaction history, search and visibility controls.

## Features
- Multiple account cards with account type and masked number
- Aggregate balance and account count
- Hide/show balance preference
- Search transaction history
- Debit and credit transaction indicators
- Synthetic account and transaction data

## Run
```bash
npm install
npm run dev
npm run build
npm run lint
```

## Production considerations
Use authenticated backend APIs, mask account identifiers, enforce account ownership server-side, and avoid persisting sensitive balances in browser storage. Currency conversion must use trusted rates and clear valuation timestamps.

## Author
**Ramu Boya** · [GitHub](https://github.com/Ramu-fsd) · [LinkedIn](https://www.linkedin.com/in/ramuboya)
