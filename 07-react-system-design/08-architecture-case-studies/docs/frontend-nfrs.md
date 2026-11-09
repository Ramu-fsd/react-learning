# Frontend NFRs for Enterprise Applications

| Category | Example measure / question |
|---|---|
| Performance | Initial load, route transition, interaction latency, bundle size |
| Availability | Behavior when one backend domain is unavailable |
| Resilience | Retry, timeout, stale-data and reconnect behavior |
| Security | XSS, CSRF, session management, authorization enforcement |
| Privacy | PII masking, telemetry redaction, browser storage policy |
| Scalability | Large lists, high-frequency updates, concurrent users |
| Accessibility | Keyboard access, semantic structure, screen-reader feedback |
| Compatibility | Supported browsers, devices and viewport sizes |
| Observability | Error rate, Web Vitals, API latency, correlation IDs |
| Maintainability | Feature ownership, dependency boundaries, testability |

Set numeric targets only after gathering product, user, infrastructure and regulatory requirements. Do not invent generic SLOs and treat them as universal.
