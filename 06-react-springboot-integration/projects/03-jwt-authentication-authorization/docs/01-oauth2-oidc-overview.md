# OAuth 2.0 and OpenID Connect Overview

## Distinguish the protocols

- OAuth 2.0 is an authorization framework for delegated access to APIs.
- OpenID Connect (OIDC) adds an identity layer on top of OAuth 2.0.
- An ID token communicates authentication information to the client.
- An access token is presented to a resource server to access protected APIs.

## Authorization Code with PKCE

For browser-based public clients, Authorization Code with PKCE is the recommended baseline flow. The client redirects the user to the identity provider, receives an authorization code, and exchanges it using a verifier. A trusted OIDC client library should handle protocol details.

## Typical enterprise flow

1. User opens the React application.
2. React redirects to the enterprise identity provider.
3. User authenticates and completes required MFA.
4. Identity provider returns the authorization response.
5. Client obtains an access token through the OIDC flow.
6. React calls the API with the access token.
7. Spring Security validates the token and enforces authorization.

The exact token storage and session model should be selected using the organization's security architecture and threat model.
