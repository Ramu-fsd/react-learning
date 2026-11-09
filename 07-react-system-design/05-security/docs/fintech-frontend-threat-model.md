# Fintech Frontend Threat Model

| Asset | Threat | Frontend mitigation | Required backend control |
|---|---|---|---|
| Session | Token theft via XSS | Avoid JS-readable persistent tokens; CSP; safe rendering | Token/session validation, rotation and revocation |
| Payment command | CSRF or replay | CSRF defense for cookie sessions; confirmation UX | CSRF validation, idempotency, authorization |
| Customer data | Insecure direct object reference | Do not trust client IDs or hidden UI | Object-level authorization |
| API payload | Injection or malformed input | Client validation and safe display | Server validation and output encoding |
| Audit trail | Sensitive data in logs | Redact client telemetry | Controlled audit logging and access |

## Abuse cases
1. A user edits a customer ID in the browser request.
2. A malicious page submits a cookie-authenticated action.
3. Untrusted customer notes are rendered as HTML.
4. A payment is resubmitted after a timeout.
5. A browser error tracker captures authorization headers.

## Review outcome
For each abuse case, document prevention, detection, response, owner and test evidence.

## Author
**Ramu Boya**

- GitHub: https://github.com/Ramu-fsd
- LinkedIn: https://www.linkedin.com/in/ramuboya
