# Testing and Deployment

## Backend

- Unit-test service behavior.
- Use Spring Boot integration tests for controller, validation and persistence behavior.
- Test 400, 404 and unexpected failure responses.
- Test authorization once Spring Security is added.
- Use Testcontainers for realistic database integration tests when adopting PostgreSQL.

## Frontend

- Test user-visible behavior rather than implementation details.
- Cover loading, empty, success and error states.
- Test form validation and API failure paths.
- Add accessibility checks.
- Run production build and lint checks.

## Deployment model

A common deployment model is:
- React static assets hosted on S3 or another static host.
- CloudFront or another CDN in front of static assets.
- Spring Boot APIs hosted separately behind an API gateway or load balancer.
- HTTPS and environment-specific configuration.
- Centralized logs, metrics, tracing and correlation IDs.

Configure SPA route fallback, cache immutable hashed assets aggressively, and avoid long-lived caching of `index.html`. Keep secrets on the server, not in Vite environment variables: variables prefixed with `VITE_` are bundled into client-side code.
