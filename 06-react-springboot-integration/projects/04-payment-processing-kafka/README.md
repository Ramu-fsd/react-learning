# Payment Processing Integration — React + Spring Boot + Kafka

Demonstrates a payment instruction lifecycle with REST initiation, Kafka event publication, asynchronous status progression and a React operations dashboard.

**Author:** Ramu Boya  
GitHub: https://github.com/Ramu-fsd · LinkedIn: https://www.linkedin.com/in/ramuboya

## Architecture

React UI → Spring Boot Payment API → Kafka topic `payment-events` → event consumer → payment status update → UI polling.

## Run

Start Kafka using Docker Compose:

```bash
docker compose up -d
```

Start backend:

```bash
cd backend
mvn spring-boot:run
```

Start frontend in another terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend: `http://localhost:5176` · API: `http://localhost:8083/api`

## API

- `POST /api/payments` — submit a payment instruction
- `GET /api/payments` — list payment instructions
- `GET /api/payments/{id}` — retrieve payment status

## Learning focus

Kafka producer/consumer, event key, consumer group, asynchronous state transitions, REST command vs event notification, idempotency considerations, retries and dead-letter topics.

## Safety and scope

This is a local learning simulation. The consumer advances a payment through demo statuses; no bank rails, settlement, ledger posting, sanctions screening or real money movement are implemented. Data is in memory and resets on restart.
