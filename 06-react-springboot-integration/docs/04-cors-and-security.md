# CORS and Security Boundaries

## Why CORS appears

A browser considers scheme, host, and port when evaluating an origin. A Vite frontend at `http://localhost:5173` and an API at `http://localhost:8080` are different origins.

The backend sample explicitly allows the local frontend origin for `/api/**`.

## Production guidance

- Allow only known frontend origins.
- Restrict methods and headers to what the application needs.
- Do not combine wildcard origins with credentialed requests.
- Use HTTPS.
- Configure CSRF protections appropriately for the chosen authentication mechanism.
- Enforce authorization in Spring Security and the service layer.
- Validate all input on the server.

CORS is a browser access policy, not authentication and not an authorization mechanism.
