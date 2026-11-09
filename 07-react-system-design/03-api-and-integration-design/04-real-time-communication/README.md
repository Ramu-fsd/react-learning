# Real-Time Communication

Choose the transport based on interaction needs.

| Option | Best fit | Trade-off |
|---|---|---|
| Polling | Simple periodic refresh | Repeated requests and delayed updates |
| Server-Sent Events | Server-to-browser event stream | One-way stream; reconnect behavior matters |
| WebSocket | Bidirectional low-latency interaction | Connection lifecycle and scaling complexity |

## Enterprise concerns
- Authentication and authorization for subscriptions.
- Reconnection with backoff and jitter.
- Heartbeats and stale connection detection.
- Event ordering, duplicate delivery and replay strategy.
- Backpressure and bounded client buffers.
- Avoid placing sensitive data in browser logs.

## Exercise
Design a live payment-status panel. Explain whether polling, SSE or WebSocket is appropriate and how you handle reconnects.
