# Designing Custom Hooks

A custom hook packages reusable stateful behavior, not necessarily reusable UI.

Good candidates include:
- Browser online/offline subscription
- Debounced search input
- Pagination state
- Reusable request lifecycle
- WebSocket subscription lifecycle

Keep domain authorization and critical business rules on the backend. A custom hook should expose a small, predictable API and clean up external subscriptions.
