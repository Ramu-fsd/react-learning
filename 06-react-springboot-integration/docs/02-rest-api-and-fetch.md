# REST API Integration with Fetch

## Responsibilities

Keep HTTP calls in a service module rather than scattering `fetch()` calls across UI components.

## Request lifecycle

1. User performs an action.
2. A feature hook or component invokes a service function.
3. The service sends an HTTP request.
4. Spring Boot validates input and executes business logic.
5. The backend returns a status code and response body.
6. The service parses success or error responses.
7. The UI updates loading, success, or error state.

## Fetch considerations

- `fetch()` rejects on network failures, not on HTTP 4xx/5xx responses.
- Check `response.ok` or `response.status`.
- Set `Content-Type: application/json` when sending JSON.
- Use `AbortController` to cancel obsolete requests when appropriate.
- Do not assume every successful response contains JSON (for example, HTTP 204).

The sample project demonstrates a typed API service and centralized error parsing.
