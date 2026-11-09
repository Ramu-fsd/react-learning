# React + Spring Boot Integration

A practical full-stack learning module connecting a React 19 + TypeScript frontend to a Java 21 + Spring Boot REST API.

**Author:** Ramu Boya  
**GitHub:** https://github.com/Ramu-fsd  
**LinkedIn:** https://www.linkedin.com/in/ramuboya

## What this repository demonstrates

- React feature-based structure and TypeScript API contracts
- REST API integration using the browser Fetch API
- Customer CRUD operations against a Spring Boot backend
- Server-side pagination and search
- Form validation and user-friendly error handling
- Spring Boot DTO validation and centralized exception handling
- Local CORS configuration
- Backend unit/integration testing foundations
- Security and JWT integration learning notes

## Project structure

```text
06-react-springboot-integration/
├── README.md
├── docs/
│   ├── 01-integration-learning-path.md
│   ├── 02-rest-api-and-fetch.md
│   ├── 03-axios-and-interceptors.md
│   ├── 04-cors-and-security.md
│   ├── 05-jwt-authentication.md
│   ├── 06-error-handling-and-validation.md
│   ├── 07-pagination-and-search.md
│   └── 08-testing-and-deployment.md
└── projects/
    └── 01-customer-management/
        ├── frontend/
        └── backend/
```

## Prerequisites

- Node.js LTS and npm
- Java 21
- Maven 3.9+
- IDE such as IntelliJ IDEA or VS Code

## Run the backend

From `projects/01-customer-management/backend`:

```bash
mvn spring-boot:run
```

Backend URL: `http://localhost:8080`  
Health endpoint: `http://localhost:8080/actuator/health`  
Customer API: `http://localhost:8080/api/customers`

## Run the frontend

From `projects/01-customer-management/frontend`:

```bash
npm install
npm run dev
```

Frontend URL: `http://localhost:5173`

## Verify

```bash
# Backend tests
mvn test

# Frontend checks
npm run build
npm run lint
```

## API overview

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/customers?page=0&size=8&search=` | List customers |
| GET | `/api/customers/{id}` | Get one customer |
| POST | `/api/customers` | Create customer |
| PUT | `/api/customers/{id}` | Update customer |
| DELETE | `/api/customers/{id}` | Delete customer |

The backend uses an in-memory repository for learning, so data resets when the application restarts. Replace it with PostgreSQL or another database in a later exercise.

## Important security note

This is a local learning implementation, not a production banking application. It does not implement real authentication, authorization, durable persistence, payment execution, or customer identity verification. The JWT and production security topics are documented separately; do not treat frontend route hiding as access control.

## Learning sequence

1. Start the backend and inspect the REST endpoints.
2. Start the frontend and create, search, update, and delete customers.
3. Inspect browser DevTools Network to understand HTTP requests and responses.
4. Read the integration notes in `docs/`.
5. Extend the backend with PostgreSQL, Spring Security, and JWT only after understanding the baseline.

## Author

**Ramu Boya**  
GitHub: https://github.com/Ramu-fsd  
LinkedIn: https://www.linkedin.com/in/ramuboya
