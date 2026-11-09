# Error Handling and Validation

## Backend responsibilities

- Validate request DTOs with Jakarta Bean Validation.
- Return stable error codes and safe messages.
- Map validation failures to HTTP 400.
- Map missing resources to HTTP 404.
- Avoid exposing stack traces, SQL details, secrets or internal exception messages.

## Frontend responsibilities

- Show field-level validation feedback when available.
- Distinguish network failures from HTTP errors.
- Provide retry guidance for transient failures.
- Avoid silently swallowing exceptions.
- Keep technical diagnostics out of end-user messages.

The sample backend returns a consistent `ApiError` response for validation and not-found cases.
