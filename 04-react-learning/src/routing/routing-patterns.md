# Routing Patterns

- Use path parameters for resource identity (`/payments/:paymentId`).
- Use query parameters for shareable filters (`?status=PENDING&page=2`).
- Use nested routes for shared layouts and feature workspaces.
- Keep route definitions understandable and avoid excessive nesting.
- Protect sensitive data at the API layer; frontend route guards are only a user-experience control.
