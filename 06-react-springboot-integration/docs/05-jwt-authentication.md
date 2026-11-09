# JWT Authentication — Learning Notes

The supplied customer-management baseline intentionally has no login endpoint. Add authentication only after selecting an identity architecture.

## Concepts to understand

- Authentication: establishing who the caller is.
- Authorization: deciding what the caller may do.
- Access token: short-lived credential presented to an API.
- Refresh token: credential used to obtain a new access token, requiring stronger protection.
- Claims: issuer, subject, audience, expiry, scopes or roles.
- Resource server: validates token signature and relevant claims before serving protected APIs.

## Recommended enterprise approach

For enterprise applications, prefer OAuth 2.0 / OpenID Connect with a trusted identity provider. A backend-for-frontend or secure server-managed session can reduce exposure of tokens to browser JavaScript. The right choice depends on deployment topology and threat model.

## Never assume

- Decoding a JWT in React does not validate it.
- Hiding a route or button does not secure an API.
- A token's presence does not prove it is valid.
- CORS does not protect an API from unauthorized clients.

## Implementation exercise

1. Configure Spring Security as an OAuth2 resource server.
2. Validate issuer, audience, signature and expiry.
3. Protect endpoints by scope/role.
4. Add frontend login using the chosen OIDC client pattern.
5. Test expired, malformed, missing and insufficient-scope tokens.
