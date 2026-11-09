# 03. useEffect

`useEffect` synchronizes a component with an external system: subscriptions, browser APIs, timers, or third-party widgets.

```tsx
useEffect(() => {
  const handleOnline = () => setIsOnline(true);
  window.addEventListener('online', handleOnline);

  return () => window.removeEventListener('online', handleOnline);
}, []);
```

## Dependency array

- No dependency array: effect runs after every commit.
- Empty array: effect setup runs after the initial mount (with development Strict Mode checks).
- Dependencies: effect re-runs when a dependency changes.

Include every reactive value used by the effect. Do not silence dependency warnings without understanding the lifecycle.

## Cleanup

Clean up subscriptions, timers, observers, and event listeners. For network requests, use `AbortController` or another cancellation strategy where appropriate to avoid stale results.

## Avoid unnecessary effects

Do not use an effect just to calculate a value from props or state:

```tsx
// Prefer deriving during render:
const visiblePayments = payments.filter((payment) => payment.status === filter);
```

Effects are not a general-purpose way to react to every state change. First ask whether an external system needs synchronization.
