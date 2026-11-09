# Rendering Optimization

## Tools and techniques
- React DevTools Profiler to identify expensive commits.
- `memo`, `useMemo` and `useCallback` only where they prevent measured work or stabilize required references.
- Keep state close to consumers to reduce broad rerenders.
- Virtualize very large tables and lists.
- Debounce high-volume text input when it reduces expensive work.
- Avoid expensive calculations inside render when they can be derived efficiently.

## NFR examples
Define measurable targets for initial render, interaction latency, route transition, bundle size and large-list responsiveness. Validate against realistic data volumes and device profiles.
