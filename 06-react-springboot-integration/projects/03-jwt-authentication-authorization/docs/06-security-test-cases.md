# Security Test Cases

Use a non-production identity provider and test tokens.

| Scenario | Expected result |
|---|---|
| Public endpoint, no token | 200 |
| Protected endpoint, no token | 401 |
| Malformed bearer token | 401 |
| Expired token | 401 |
| Invalid signature | 401 |
| Wrong issuer | 401 |
| Wrong audience | 401 |
| Valid token, missing read scope | 403 |
| Valid token with read scope | 200 |
| Valid token with approve scope on approve endpoint | 200 illustrative response |

Also test:
- CORS from the approved frontend origin only
- Token key rotation
- Identity provider/JWK outage behavior
- Logout and session expiry in the chosen client architecture
- XSS and CSRF risks relevant to the token/session storage model

Do not use real customer information or production tokens in test fixtures.
