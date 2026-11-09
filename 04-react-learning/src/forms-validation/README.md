# Forms and Validation

## Concepts
- React Hook Form registration and submission
- Schema-based validation with Zod
- Type inference using `z.infer`
- Field-level validation messages
- Submit/loading/success states

## Fintech example
Beneficiary onboarding validates a legal name, account-number format, country and notification email. The form does not send data to a server.

## Exercises
1. Add a confirm-account-number field with a cross-field validation rule.
2. Add conditional fields for domestic and international beneficiaries.
3. Disable submission until required fields are valid.
4. Add server-side validation errors to the relevant field.
5. Explain why frontend validation is not a security boundary.
