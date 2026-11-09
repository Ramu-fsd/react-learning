# Authentication Flow

For enterprise applications, prefer a standards-based OpenID Connect provider and a backend-for-frontend or carefully designed token architecture where appropriate.

## Browser flow at a high level
1. User starts sign-in.
2. Identity provider authenticates the user.
3. Authorization Code flow with PKCE returns an authorization response.
4. Application obtains tokens according to the selected architecture.
5. API requests are authenticated by the backend.
6. Logout clears local session state and follows provider logout behavior where configured.

## Security notes
- Do not store long-lived access or refresh tokens in localStorage.
- HttpOnly, Secure, SameSite cookies can reduce JavaScript token exposure when using a BFF/session design; they require CSRF defenses.
- Validate issuer, audience, signature, expiry and scopes/claims on the server.
- Never treat hidden buttons or client-side route guards as authorization.
- Do not implement your own password storage or token signing in the React app.
