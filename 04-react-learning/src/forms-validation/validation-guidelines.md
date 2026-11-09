# Validation Guidelines

- Validate user experience rules in the browser, but repeat authoritative validation on the server.
- Normalize input before validation where appropriate.
- Do not log sensitive form values.
- Avoid storing account numbers or personal data in browser storage without a reviewed security design.
- Return actionable, non-sensitive validation messages.
- Use allowlists for enumerated values such as country and payment type.
