# React + Spring Boot Integration Learning Path

## Target outcome

Build a typed React application that consumes Java 21 / Spring Boot REST APIs and handles real-world API states cleanly.

## Sequence

1. HTTP and REST fundamentals: methods, headers, JSON, status codes.
2. Backend contract: controllers, DTOs, validation, service layer and exception mapping.
3. Frontend API boundary: base URL, typed service functions and error parsing.
4. UI lifecycle: loading, success, empty and failure states.
5. Forms: client-side feedback plus authoritative backend validation.
6. Search and pagination: query parameters and server-owned page metadata.
7. Cross-origin access: local CORS configuration and production origin restrictions.
8. Identity: OAuth2/OIDC concepts, JWT validation and session lifecycle.
9. Testing: backend integration tests and frontend component tests.
10. Deployment: static frontend hosting, API hosting, HTTPS and environment configuration.

## Suggested practice

- First, run the supplied customer-management application unchanged.
- Add a customer status filter.
- Add sorting and a customer details view.
- Replace in-memory storage with PostgreSQL.
- Add Spring Security and a proper identity provider.
- Add a payment instruction workflow only after authorization and audit requirements are designed.

## Exit criteria

You should be able to explain the full request lifecycle, type the API contract, handle errors, diagnose CORS failures, and distinguish authentication from authorization.
