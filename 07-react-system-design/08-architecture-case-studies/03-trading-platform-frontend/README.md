# Trading Platform Frontend


## Context
A professional trading workstation displays market data, watchlists, orders and positions. The exact regulatory and latency requirements depend on product and venue.

## Functional requirements
- Watchlists and instrument search.
- Live quote and position updates.
- Order entry and order status.
- Alerts and user-configurable workspaces.
- Connection and data freshness indicators.

## Non-functional requirements
- Low and predictable interaction latency.
- Explicit stale-data and disconnected states.
- Backpressure handling for high-frequency updates.
- Strong authorization and audit trail for orders.
- Resilience under bursty traffic.

## High-level architecture
```text
React Trading Workstation
  -> Market Data Gateway (stream)
  -> Order BFF / API
      -> Order Management System
      -> Risk and Entitlement Services
  -> Observability / Audit pipeline
```

## Key decisions
- Separate high-frequency market data from slower application state.
- Batch or coalesce UI updates to avoid rendering every tick.
- Show timestamps and stale indicators.
- Backend risk checks remain authoritative.
- Design reconnect and replay behavior explicitly.

## Interview prompts
- How do you prevent the UI from being overwhelmed by quote updates?
- How do you show stale data?
- What must be validated by the backend before order acceptance?

