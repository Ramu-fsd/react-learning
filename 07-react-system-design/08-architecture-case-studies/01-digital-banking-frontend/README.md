# Digital Banking Frontend


## Context
A retail banking portal allows authenticated customers to view accounts, balances, statements and transactions, and initiate selected service requests.

## Functional requirements
- Account overview and masked account identifiers.
- Transaction history with search, date filters and pagination.
- Statements download through an authorized backend endpoint.
- Profile and service request workflows.
- Responsive and accessible experience.

## Non-functional requirements
- Fast initial load and route navigation.
- Strong session security and backend authorization.
- Resilient handling of account-service outages.
- No cross-customer data exposure.
- Auditability for sensitive user actions.

## High-level architecture
```text
Browser
  -> CDN / WAF
  -> React SPA (app shell, routes, feature modules)
      -> BFF / API Gateway
          -> Identity Provider
          -> Customer Service
          -> Account Service
          -> Transaction Service
          -> Document Service
```

## Key decisions
- Use OIDC for authentication and enforce authorization in backend services.
- Use server-state caching with account/customer context in cache keys.
- Mask sensitive identifiers by default.
- Avoid caching sensitive responses in shared browser/CDN caches.
- Provide explicit empty, error and retry states.

## Interview prompts
- How do you avoid stale account balances?
- How do you prevent IDOR?
- What should happen if transaction history is unavailable but account overview is healthy?

