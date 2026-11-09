# API Integration

## Concepts
- Typed API response contracts
- Async/await and Promise handling
- Loading, success and error UI states
- `AbortController` for cancelling an in-flight request
- Separating API access from presentation components

## Example
`paymentApi.ts` represents a service layer. `ApiIntegration.tsx` owns the UI state and calls the service. The data is mocked in memory so the module runs without a backend.

## Production considerations
Add a shared HTTP client, authentication token handling, request correlation IDs, timeouts, safe retry policies, schema validation at trust boundaries, and centralized error mapping. Never retry non-idempotent payment operations blindly.

## Exercises
1. Add a search input to filter by payment ID or beneficiary.
2. Add pagination and page-size selection.
3. Introduce a typed API error with HTTP status and application error code.
4. Add a request timeout and distinguish timeout from user cancellation.
5. Explain why a payment submission endpoint needs an idempotency key.
