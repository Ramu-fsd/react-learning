# Unit Testing

Unit-test pure functions and isolated state transitions. Vitest is a common Vite-friendly test runner.

```ts
export function maskAccount(accountNumber: string) {
  return `•••• ${accountNumber.slice(-4)}`;
}
```

Test normal, boundary and invalid inputs. Avoid testing trivial implementation details that do not represent a contract.
