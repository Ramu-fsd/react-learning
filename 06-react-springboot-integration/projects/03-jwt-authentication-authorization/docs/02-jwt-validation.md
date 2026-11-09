# JWT Validation

A JWT is a compact token format. A signed JWT commonly has three Base64URL-encoded parts: header, payload and signature.

## Important claims

- `iss`: issuer
- `sub`: subject
- `aud`: intended audience
- `exp`: expiration time
- `nbf`: not-before time
- `iat`: issued-at time
- `scope` or role claims: authorization data, depending on the provider's contract

## Resource-server validation

The API must validate the signature using trusted issuer metadata/JWKs and validate issuer, audience and temporal claims. It must not trust a token merely because it can decode the payload.

The sample configures issuer validation through Spring Security and a custom audience validator. Key rotation is handled through provider metadata/JWK support.

## Common failure cases

- Wrong issuer
- Wrong audience
- Expired token
- Invalid signature
- Token not yet valid
- Missing required scope
- Identity provider/JWK endpoint unavailable

Never log complete bearer tokens.
