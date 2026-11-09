# 02. Performance Optimization

Optimize based on observed user impact and measurements.

## Enterprise dashboard bottlenecks

- Large transaction tables.
- Expensive filtering, grouping, and sorting.
- Too many context consumers re-rendering.
- Large initial JavaScript bundles.
- Repeated network requests.
- Unoptimized images and charts.
- Rendering too many off-screen rows.

## Optimization toolkit

- Keep state close to the components that need it.
- Derive data during render; memoize only expensive calculations.
- Use `memo`, `useMemo`, and `useCallback` when profiling demonstrates value.
- Lazy-load infrequently used modules.
- Consider list virtualization for very large datasets.
- Paginate or filter large datasets on the server when appropriate.
- Avoid sending unnecessary fields to the browser.
- Use production builds and representative data when measuring.

## Security reminder

Performance techniques do not replace authorization, input validation, or backend data access controls. A hidden transaction row is not protected data.
