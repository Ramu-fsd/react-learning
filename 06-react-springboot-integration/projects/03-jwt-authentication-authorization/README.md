# JWT Authentication & Authorization — React + Spring Security

A full-stack learning project demonstrating a standards-oriented authentication architecture for a React + TypeScript SPA and Java 21 / Spring Boot resource server.

**Author:** Ramu Boya  
**GitHub:** https://github.com/Ramu-fsd  
**LinkedIn:** https://www.linkedin.com/in/ramuboya

## Important architecture choice

This project uses an external OpenID Connect identity provider as the issuer of tokens. Spring Boot is configured as an OAuth2 Resource Server and validates bearer JWTs. The React app demonstrates a protected UI and sends an access token to the API.

The frontend's demo token entry is a local learning convenience only. It is not a login implementation, does not issue tokens, and must never be used as a production credential collection pattern. For real login, use an approved OIDC client flow (Authorization Code with PKCE) and a trusted identity provider.

## Project structure

```text
03-jwt-authentication-authorization/
├── README.md
├── docs/
│   ├── 01-oauth2-oidc-overview.md
│   ├── 02-jwt-validation.md
│   ├── 03-react-token-handling.md
│   ├── 04-spring-security-resource-server.md
│   ├── 05-roles-scopes-and-authorization.md
│   └── 06-security-test-cases.md
├── frontend/
└── backend/
```

## Prerequisites

- Java 21
- Maven 3.9+
- Node.js LTS and npm
- An OIDC provider that can issue signed JWT access tokens (optional for UI-only exploration)

## Run the backend

The resource server requires an issuer URI. Configure `OIDC_ISSUER_URI` to match your identity provider's issuer:

```bash
cd backend
```

Windows PowerShell example:

```powershell
$env:OIDC_ISSUER_URI="https://your-identity-provider.example/issuer"
mvn spring-boot:run
```

Linux/macOS:

```bash
export OIDC_ISSUER_URI="https://your-identity-provider.example/issuer"
mvn spring-boot:run
```

The app will not validate real tokens until this issuer is configured and reachable. The API starts on port 8082.

## Run the frontend

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5175`.

Set `VITE_API_BASE_URL=http://localhost:8082/api` in a local `.env` file if needed. Do not place client secrets in Vite environment variables.

## Endpoints

| Method | Endpoint | Access |
|---|---|---|
| GET | `/api/public/info` | Public |
| GET | `/api/me` | Authenticated |
| GET | `/api/operations` | `SCOPE_operations.read` |
| POST | `/api/operations/approve` | `SCOPE_operations.approve` |

## Claims and authorization

The sample expects an access token with:
- `iss`: configured issuer
- `aud`: `northstar-api`
- `scope`: one or more scopes such as `operations.read operations.approve`

The API validates JWT signature and standard temporal/issuer claims through Spring Security. A custom audience validator is included. The identity provider must be configured to issue the expected audience and scopes.

## Security warning

Never paste real production access tokens into demos, source code, screenshots, issue trackers or chat. The frontend demo accepts a token typed locally for testing; this is not a secure sign-in flow. Do not use localStorage for long-lived bearer tokens without a deliberate threat assessment. Prefer an approved OIDC integration, secure session/BFF pattern where suitable, HTTPS, least privilege and server-side authorization.

The sample operation approval endpoint is illustrative only and does not approve real financial transactions.
