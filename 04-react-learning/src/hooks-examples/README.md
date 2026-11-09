# Hooks Examples

## Hooks demonstrated
- `useState`: local UI state for search and balance visibility
- `useEffect`: subscriptions and cleanup inside the custom online-status hook
- `useMemo`: memoized derived account list
- Custom hooks: `useDebouncedValue` and `useOnlineStatus`

## Rules of Hooks
1. Call hooks at the top level of React components or custom hooks.
2. Do not call hooks conditionally, in loops or in ordinary functions.
3. Keep effect dependencies accurate.
4. Clean up subscriptions, timers and external resources.

## Exercises
1. Implement `useLocalStorage` for a non-sensitive preference.
2. Implement `usePrevious` and explain its use cases.
3. Add a `useWindowSize` hook with resize cleanup.
4. Build a `useFetch` hook that supports cancellation and typed results.
5. Explain when `useMemo` adds complexity without meaningful benefit.
