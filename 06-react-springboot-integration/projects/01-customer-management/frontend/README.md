# Customer Management — React + Spring Boot

A full-stack customer directory demonstrating React-to-Spring Boot REST integration with create, read, update, delete, search, and server-side pagination.

## Features

- Customer directory with synthetic seed data
- Search by customer name, email, or ID
- Create and update customer records
- Delete with confirmation
- Backend-side validation and duplicate-email check
- Consistent API error responses
- Server-side pagination
- Local CORS configuration
- Responsive React + TypeScript interface

## Run

Start the backend first:

```bash
cd backend
mvn spring-boot:run
```

Then start the frontend in a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173`.

## API endpoints

| Method | Endpoint |
|---|---|
| GET | `/api/customers?page=0&size=8&search=` |
| GET | `/api/customers/{id}` |
| POST | `/api/customers` |
| PUT | `/api/customers/{id}` |
| DELETE | `/api/customers/{id}` |

## Sample create request

```json
{
  "fullName": "Sample Customer",
  "email": "sample.customer@example.com",
  "status": "ACTIVE"
}
```

## Notes

The backend stores data in memory using a concurrent map. This is for learning API integration and is not durable persistence. There is no login or authorization in this baseline. Do not use real customer data.

**Author:** Ramu Boya  
GitHub: https://github.com/Ramu-fsd  
LinkedIn: https://www.linkedin.com/in/ramuboya
