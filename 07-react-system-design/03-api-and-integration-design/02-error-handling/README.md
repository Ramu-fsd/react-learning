# API Error Handling

## Normalize errors
Convert network, HTTP and parsing failures into a consistent application error model. Preserve safe diagnostic metadata such as status code and correlation ID, not secrets or full sensitive response bodies.

## UI states
- Loading: skeleton or progress indicator.
- Empty: explain that there are no matching records.
- Recoverable error: retry action.
- Validation error: associate field messages with the relevant inputs.
- Unauthorized/forbidden: redirect or show access guidance as appropriate.
- Conflict: refresh and explain that the resource changed.

## Resilience
Use bounded retries only for appropriate transient failures. Avoid retrying non-idempotent operations blindly. Use request timeouts/cancellation where appropriate, and provide idempotency keys for backend-supported commands that may be retried.

## Exercise
Design error states for a payment submission form covering validation failure, timeout, conflict and server unavailability.
