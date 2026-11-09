# 05. Higher-Order Components

A higher-order component (HOC) is a function that takes a component and returns an enhanced component.

```tsx
function withAuditLabel<P extends object>(
  Component: React.ComponentType<P>,
) {
  return function AuditedView(props: P) {
    return (
      <section>
        <small>Audit workspace</small>
        <Component {...props} />
      </section>
    );
  };
}
```

## Potential uses

- Cross-cutting presentation concerns.
- Instrumentation or display wrappers.
- Adapting legacy component APIs.

## Trade-offs

HOCs can create wrapper nesting, prop-name collisions, and more complex component trees. Hooks and composition are often simpler for new code.

A HOC that hides a button based on a role is only a UI convenience. Authorization must be checked by the backend.
