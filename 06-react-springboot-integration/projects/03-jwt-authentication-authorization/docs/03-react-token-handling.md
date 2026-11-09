# React Token Handling

## Key principles

- React is a public client and cannot protect a client secret.
- Do not treat decoded JWT claims as verified identity.
- Do not implement authorization only by hiding buttons or routes.
- Do not store long-lived credentials in browser-accessible storage without a security review.
- Prefer a maintained OIDC client library and Authorization Code with PKCE for direct SPA integrations.
- Consider a backend-for-frontend (BFF) with secure, HttpOnly, SameSite cookies when appropriate for the architecture.

## Demo in this project

The UI includes a local token input so learners can observe:
- Public API access without a token
- Protected API access with a bearer token
- 401 responses for missing/invalid credentials
- 403 responses when a valid token lacks the required scope

The input is intentionally not persisted. Use only short-lived test tokens from a non-production identity provider. Do not paste production tokens into the demo.

## Production implementation exercise

Replace the demo input with an approved OIDC client integration. Document redirect URIs, logout, token renewal, session timeout, CSRF considerations, XSS mitigations and identity-provider configuration.
