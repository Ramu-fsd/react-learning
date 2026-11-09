# Payment Event Architecture

1. React submits a payment instruction to the REST API.
2. API validates input and stores an `ACCEPTED` demo record.
3. API publishes `PaymentEvent` to Kafka topic `payment-events`, keyed by payment ID.
4. Consumer receives event and advances the in-memory record to `PROCESSING`, then `COMPLETED`.
5. React polls the list endpoint to display status changes.

## Production design gaps to investigate

- Durable payment state and transactional outbox
- Idempotency keys and duplicate submission protection
- Retry policy, backoff and dead-letter topic
- Event schema evolution and compatibility
- Exactly-once misconceptions and business-level deduplication
- Ledger posting, reconciliation and audit trail
- Maker-checker, sanctions/fraud controls and authorization
- Observability, correlation IDs and trace propagation
