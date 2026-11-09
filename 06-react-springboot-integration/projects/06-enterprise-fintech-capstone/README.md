# Enterprise Fintech Operations Capstone

A capstone starter combining React, Java 21, Spring Boot, PostgreSQL and Kafka into a modular payment-operations learning application.

**Author:** Ramu Boya  
GitHub: https://github.com/Ramu-fsd · LinkedIn: https://www.linkedin.com/in/ramuboya

## Included capabilities

- Payment instruction submission and listing
- PostgreSQL persistence with Spring Data JPA
- Kafka event publication for accepted payment instructions
- React operations dashboard with status refresh
- Docker Compose for PostgreSQL and Kafka
- Backend validation and service/controller separation

## Run infrastructure

```bash
docker compose up -d
```

## Run backend

```bash
cd backend
mvn spring-boot:run
```

API: `http://localhost:8087/api/payments`

## Run frontend

```bash
cd frontend
npm install
npm run dev
```

UI: `http://localhost:5178`

## API

- `POST /api/payments`
- `GET /api/payments`

## Capstone extensions

1. Add Spring Security resource-server JWT validation.
2. Add account and beneficiary services.
3. Add idempotency keys and transactional outbox.
4. Add payment state machine and maker-checker approval.
5. Add ledger entries and double-entry accounting.
6. Add reconciliation, audit events and operational metrics.
7. Add Testcontainers, contract tests and CI pipeline.

## Scope and safety

This is a portfolio learning starter, not a production payment platform. It does not connect to banking rails, move money, perform sanctions screening, implement maker-checker controls, or guarantee exactly-once processing. Use synthetic data only.
