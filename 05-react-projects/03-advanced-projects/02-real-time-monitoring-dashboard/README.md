# Real-time Monitoring Dashboard

An operational service-health and payment-stream dashboard demonstrating periodic refresh, event simulation and alert filtering.

## Features
- Service availability and latency KPIs
- Simulated live event stream with pause/resume
- Filter events by severity
- Service health table and status badges
- Acknowledge alert action in local state

## Run
```bash
npm install
npm run dev
npm run build
npm run lint
```

## Architecture
A timer simulates incoming telemetry. Replace the simulator with SSE or WebSocket subscriptions for a real event source. Always clean up subscriptions when the component unmounts.

## Production extensions
Use server timestamps, bounded event buffers, reconnect/backoff policies, observability correlation IDs, alert deduplication and authorization.

## Author
**Ramu Boya** · [GitHub](https://github.com/Ramu-fsd) · [LinkedIn](https://www.linkedin.com/in/ramuboya)
