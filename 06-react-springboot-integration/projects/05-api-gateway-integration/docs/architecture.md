# Gateway Routing Notes

Spring Cloud Gateway routes `/api/customers/**` to the customer service and `/api/accounts/**` to the account service.

Production considerations: authentication/token relay, authorization, rate limits, quotas, request size limits, TLS, service discovery, circuit breakers, retries with idempotency awareness, timeouts, observability, correlation IDs, API versioning and centralized policy governance.
