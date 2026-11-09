# Secure API Communication

- Use HTTPS and secure transport configuration.
- Do not put secrets in frontend environment variables; bundled variables are public.
- Validate all inputs on the server even when client-side validation exists.
- Apply authorization at each backend endpoint and object boundary.
- Use correlation IDs without exposing internal stack traces.
- Define safe error responses.
- Consider CSP, HSTS, secure cookie settings and dependency vulnerability management.
- Avoid exposing PII and account details in browser storage or telemetry.
