# JWT and Token Management

- Prefer OpenID Connect with Authorization Code + PKCE for browser-based sign-in.
- Consider a Backend-for-Frontend (BFF) session design for enterprise systems.
- Avoid storing long-lived tokens in localStorage because JavaScript executing in the origin can read them.
- HttpOnly cookies reduce JavaScript access but require CSRF protections and careful SameSite/Secure configuration.
- Validate JWT signature, issuer, audience, expiry and authorization claims on backend services.
- Keep tokens out of logs, URLs, analytics events and screenshots.

A JWT is a signed token format, not encryption by default. Do not place secrets or sensitive personal data in its claims.
