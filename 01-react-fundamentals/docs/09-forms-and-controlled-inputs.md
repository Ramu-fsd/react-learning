# 09. Forms and Controlled Inputs

A controlled input receives its value from React state and reports changes through an event handler.

```tsx
const [name, setName] = useState('');

<input
  value={name}
  onChange={(event) => setName(event.target.value)}
/>
```

## Form submission

```tsx
function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  // Validate and process the current form data.
}
```

## Controlled versus uncontrolled

- **Controlled:** React state is the source of truth for the input value.
- **Uncontrolled:** the DOM maintains the input value; a ref can be used to read it when needed.

Controlled inputs are useful when the UI needs immediate validation, conditional fields, derived values, or coordinated form behavior.

## Validation layers

1. Browser constraints such as `required`, `minLength`, and `type`.
2. Client-side validation for user experience.
3. Server-side validation for authoritative enforcement.

Never rely only on frontend validation for security or business rules.

## Financial application considerations

- Mask sensitive account identifiers in display views.
- Do not log passwords, full account numbers, or authentication tokens.
- Confirm high-impact actions before submission.
- Show clear field-level errors and submission status.
- Do not imply that a demo form actually creates a beneficiary or sends data to a bank.
