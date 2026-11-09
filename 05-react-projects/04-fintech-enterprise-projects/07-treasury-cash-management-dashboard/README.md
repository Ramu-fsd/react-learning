# Treasury Cash Management Dashboard

A treasury visibility dashboard for cash positions, currency exposure, upcoming obligations and liquidity threshold monitoring.

## Features
- Cash position by account and currency
- Currency exposure summary
- Upcoming payment obligations
- Liquidity threshold warnings
- Filter by legal entity
- Synthetic cash movement trend

## Run
```bash
npm install
npm run dev
npm run build
npm run lint
```

## Production considerations
FX rates, balances and forecasts must come from governed treasury sources with timestamps and valuation conventions. Do not use this mock dashboard for liquidity or trading decisions.

## Author
**Ramu Boya** · [GitHub](https://github.com/Ramu-fsd) · [LinkedIn](https://www.linkedin.com/in/ramuboya)
