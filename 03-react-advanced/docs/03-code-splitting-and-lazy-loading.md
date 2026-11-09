# 03. Code Splitting and Lazy Loading

Code splitting separates an application bundle into chunks that can be loaded when needed. It can reduce the initial download when users do not need every feature immediately.

## React.lazy

```tsx
import { lazy, Suspense } from 'react';

const ReconciliationWorkspace = lazy(
  () => import('./features/ReconciliationWorkspace'),
);

function ReconciliationRoute() {
  return (
    <Suspense fallback={<p role="status">Loading reconciliation…</p>}>
      <ReconciliationWorkspace />
    </Suspense>
  );
}
```

## Good split points

- Route-level business modules.
- Infrequently used admin or audit screens.
- Large reporting and analytics features.
- Optional workflows that only some roles use.

## Considerations

- Provide meaningful loading UI.
- Handle chunk-load failures and offer retry or reload guidance.
- Avoid splitting every tiny component.
- Inspect the generated bundle to verify the split happened.
- Lazy loading is not access control. The API must still authorize requests.
