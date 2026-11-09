# Performance Optimization

## Concepts
- `React.memo` for components with stable props
- `useMemo` for expensive derived calculations
- Stable keys for list reconciliation
- Route-level lazy loading and Suspense
- React DevTools Profiler and browser performance tools
- Pagination and virtualization for large datasets

## Demo
The transfer-monitoring table filters 350 mock records, memoizes the filtered result, and memoizes each row. This is a teaching example, not proof that memoization always improves performance.

## Practical checklist
1. Reproduce and measure the slow interaction.
2. Profile to identify expensive renders or calculations.
3. Check state placement and component boundaries.
4. Apply the smallest effective optimization.
5. Profile again and verify the result.

## Exercises
1. Add React Profiler around the table and inspect commit durations.
2. Compare the demo with and without `memo`.
3. Implement pagination and compare render cost.
4. Add route-level `React.lazy` for a large feature.
5. Explain when virtualization is preferable to rendering every row.
