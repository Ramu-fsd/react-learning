# Enterprise React Performance Checklist

- Keep state close to the components that need it.
- Avoid broad context updates for high-frequency state.
- Debounce user-driven searches where appropriate.
- Prefer server-side filtering and pagination for large datasets.
- Lazy-load infrequently used feature routes.
- Avoid unnecessary effects and derived state duplication.
- Use stable keys based on durable identifiers.
- Measure with production-like data and realistic devices.
- Do not use memoization as a substitute for sound component design.
