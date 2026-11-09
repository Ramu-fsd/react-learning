# Code Splitting

Use dynamic imports to create separate bundles that can be loaded when needed.

```tsx
import { lazy, Suspense } from "react";
const ReconciliationPage = lazy(() => import("./ReconciliationPage"));

export function Routes() {
  return <Suspense fallback={<p>Loading module…</p>}><ReconciliationPage /></Suspense>;
}
```

Consider route-level splitting first. Too many tiny chunks can increase request overhead and complexity. Provide meaningful loading states and ensure errors from lazy chunks can be recovered from.
