# State Management Comparison

| Need | Good starting point | Notes |
|---|---|---|
| Input field, modal, tab | `useState` / `useReducer` | Keep state close to the component |
| Shared theme or locale | Context | Scope provider to relevant subtree |
| Complex shared client workflow | Redux Toolkit | Explicit transitions and tooling |
| Remote API data and cache | TanStack Query or equivalent | Query lifecycle, caching, invalidation |
| URL-shareable filters | Router/search params | Enables deep links and browser navigation |

## Decision questions
1. Who owns the source of truth?
2. How many components need the value?
3. Is the value remote or purely client-side?
4. Does it need persistence or URL sharing?
5. How frequently does it change?
6. What consistency and freshness are required?

There is no universal winner. Select based on state characteristics and operational needs.
