# 04. useContext

Context lets a component read a value from the closest matching provider above it in the component tree.

Useful cross-cutting examples include:
- Current user/session information.
- Selected business unit or operating region.
- Display locale or currency preference.
- Theme and accessibility preferences.

```tsx
const preferences = useContext(BankingPreferencesContext);
```

Create the context with a meaningful type and a safe default strategy. A custom hook can validate that the provider exists and provide a clearer error.

## Trade-offs

Context is not automatically a complete state-management solution. When a provider value changes, consumers that read it may re-render. Split unrelated contexts and keep provider values appropriately stable when profiling shows a need.

Do not store secrets or treat frontend context as an authorization boundary. The backend must enforce permissions.
