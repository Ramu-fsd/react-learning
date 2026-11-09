# 07. Suspense and Loading Boundaries

`Suspense` displays a fallback while a descendant is waiting on a Suspense-enabled resource, including a component loaded with `React.lazy`.

```tsx
<Suspense fallback={<p role="status">Loading risk workspace…</p>}>
  <RiskWorkspace />
</Suspense>
```

## Design guidance

- Place boundaries around meaningful features.
- Avoid replacing an entire page for a small panel's loading state.
- Make loading feedback understandable and accessible.
- Pair loading boundaries with error handling for failures.
- Understand which data-fetching library or framework features actually integrate with Suspense; ordinary fetch calls in an effect do not automatically suspend.

## Banking example

A user can continue reviewing the payment queue while an optional reconciliation module is being downloaded.
