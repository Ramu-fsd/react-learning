# Advanced React Exercises

Use the payment operations demo as a starting point.

## 1. Profile a payment table
Render several thousand mock payment rows. Use React Profiler to identify expensive work. Record the baseline and the result after one justified optimization.

## 2. Add server-style pagination
Implement page number, page size, and total count in the UI using mock data. Explain which filtering and pagination operations should move to the backend for large datasets.

## 3. Lazy-load a chargeback workspace
Create a `ChargebackWorkspace` module and load it with `React.lazy` and `Suspense`. Verify the production build emits a separate chunk.

## 4. Add a feature error boundary
Create a deliberately failing demo component behind a user-triggered action. Confirm the feature fallback appears and other workspaces remain usable. Do not leave an intentional crash enabled by default.

## 5. Build a reusable HOC
Create `withPageMetadata` that adds a title and description around an existing feature. Preserve the wrapped component's props.

## 6. Build compound filter controls
Create `PaymentFilters`, `PaymentFilters.Status`, and `PaymentFilters.DateRange` sharing state through context.

## 7. Add accessible tabs
Extend the compound tabs example with keyboard arrow navigation, Home/End support, focus management, and correct ARIA relationships.

## 8. Optimize a reconciliation summary
Calculate matched/unmatched counts and totals from a large dataset. Profile before deciding whether `useMemo` helps.

## 9. Add retry for lazy chunk failures
Design a safe recovery experience for a failed dynamic import. Explain when a full page reload may be appropriate.

## 10. Document frontend authorization boundaries
Create a role-based UI example and document which checks must still be enforced by backend APIs.

## Deliverables

- Working TypeScript implementation.
- Short explanation of the React concept.
- Before/after performance measurements for optimization exercises.
- Tests for important interactions and failure states.
- Accessibility notes for interactive components.
