# Spring Security OAuth2 Resource Server

The backend uses Spring Security's OAuth2 Resource Server support. It does not implement a username/password login endpoint and does not issue tokens.

## Configuration

- Configure the trusted issuer URI.
- Validate the expected audience.
- Use JWT decoder support backed by trusted JWK metadata.
- Map scope claims to `SCOPE_` authorities.
- Protect routes using method/request authorization rules.

## Why this matters

The API is the enforcement point. Every request to a protected endpoint must be authenticated and authorized independently of what the React application displays.

## Operations

- `GET /api/me`: any authenticated caller
- `GET /api/operations`: requires `SCOPE_operations.read`
- `POST /api/operations/approve`: requires `SCOPE_operations.approve`

The sample approval endpoint returns an illustrative response; it does not perform a real financial approval.
