# API Gateway Integration — React + Spring Cloud Gateway + Spring Boot

Demonstrates routing a React application through a Spring Cloud Gateway to separate account and customer services.

**Author:** Ramu Boya  
GitHub: https://github.com/Ramu-fsd · LinkedIn: https://www.linkedin.com/in/ramuboya

## Architecture

Browser → React (5177) → API Gateway (8084) → Customer Service (8085) / Account Service (8086).

## Run

Start each backend in its own terminal:
- `services/customer-service`: `mvn spring-boot:run`
- `services/account-service`: `mvn spring-boot:run`
- `gateway`: `mvn spring-boot:run`

Then start the UI from `frontend` using `npm install` and `npm run dev`.

## Gateway routes

- `/api/customers/**` → customer-service
- `/api/accounts/**` → account-service

The services return synthetic data. The gateway demonstrates routing, not a complete production API management or security platform.
