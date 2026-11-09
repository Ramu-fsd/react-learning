# Payment Platform Frontend


## Context
Operations users monitor payment instructions, review exceptions and initiate authorized payment actions.

## Functional requirements
- Payment queue with filters and saved views.
- Payment details and lifecycle timeline.
- Role-aware action controls.
- Submission confirmation and status tracking.
- Live updates for status changes.

## Non-functional requirements
- Prevent duplicate user submissions.
- Display authoritative backend status.
- Support high-volume tables.
- Maintain traceability and safe telemetry.
- Handle temporary service and event-stream failures.

## High-level architecture
```text
React Operations UI
  -> BFF / API Gateway
      -> Payment Command API
      -> Payment Query API
      -> Entitlement Service
      -> Audit Service
  <- SSE/WebSocket status events (or polling fallback)
```

## Key decisions
- Separate query screens from command workflows.
- Use backend-supported idempotency keys for retryable commands.
- Treat UI confirmation as intent capture, not proof of settlement.
- Show lifecycle states from authoritative services.
- Virtualize large queues and preserve filter state in URL where useful.

## Interview prompts
- How do you handle a timeout after a payment command?
- How do you prevent double-click and network retry duplicates?
- How do you display eventual consistency between command and query services?

