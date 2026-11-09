# 02 - State Management Architecture

Practical reference for choosing and organizing state in React applications.

## Modules
- `01-context-api`: Context API, provider boundaries and examples.
- `02-redux-toolkit`: Redux Toolkit slices, store setup and async workflows.
- `03-server-state-management`: Remote data lifecycle, caching and invalidation concepts.
- `04-state-management-comparison`: Decision matrix and trade-offs.
- `demo-app`: Runnable React + TypeScript demo with Context-based preferences and local feature state.

## Key distinction
- **Local UI state:** modal visibility, active tab, temporary form input.
- **Shared client state:** user preferences or cross-feature client workflow state.
- **Server state:** data owned by backend services, with loading, error, caching and synchronization concerns.

Do not put every value into a global store. Choose the smallest state boundary that satisfies the consumers.

## Author
**Ramu Boya**

- GitHub: https://github.com/Ramu-fsd
- LinkedIn: https://www.linkedin.com/in/ramuboya
