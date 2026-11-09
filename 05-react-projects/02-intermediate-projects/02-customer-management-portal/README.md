# Customer Management Portal

A customer-service workspace demonstrating customer search, profile creation, profile updates and status management.

## Features
- Search customer records by name, email or customer ID
- Add a customer with field validation
- Edit existing customer profile details
- Activate/deactivate a customer in local demo state
- Customer type and lifecycle status badges

## Run
```bash
npm install
npm run dev
npm run build
npm run lint
```

## Architecture
The UI uses typed in-memory customer records. The form is intentionally implemented with React state and native validation to keep the example focused on CRUD and component state.

## Production considerations
A real portal requires server-side validation, authorization, consent and data-retention controls, secure handling of personal information, and audit logging. Do not use real customer data in this demo.

## Author
**Ramu Boya** · [GitHub](https://github.com/Ramu-fsd) · [LinkedIn](https://www.linkedin.com/in/ramuboya)
