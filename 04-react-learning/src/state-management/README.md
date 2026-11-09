# State Management

## Concepts
- Local component state versus shared application state
- Redux Toolkit `configureStore` and `createSlice`
- Typed dispatch and selectors
- Immutable update semantics through Redux Toolkit's Immer integration
- Keeping derived values out of duplicated state

## Demo
The payment operations module shares a list of mock payments and a selected payment across components through Redux.

## When to use what
- `useState`: local UI state such as an open dialog.
- Context: relatively stable cross-cutting values such as theme or locale.
- Redux Toolkit: shared, structured state with multiple consumers and explicit update flows.
- Server-state libraries: remote cache, refetching and synchronization (evaluate React Query or RTK Query for real applications).

## Exercises
1. Add a filter state for payment status.
2. Move payment loading into an async thunk.
3. Add selectors for pending count and total pending value.
4. Add unit tests for reducer transitions.
5. Compare Context and Redux Toolkit for a large operations portal.
