# Designing Scalable React Applications

Scalability is not just handling more users. For frontend architecture, it also means the codebase can accommodate more features, contributors, integrations and release activity without becoming fragile.

## Core concerns
1. **Modularity:** clear ownership of features and shared capabilities.
2. **State boundaries:** local UI state, shared client state and remote server state should be treated differently.
3. **API boundaries:** centralize transport concerns such as base URLs, headers, serialization and error normalization.
4. **Routing:** lazy-load suitable route-level features where it improves initial loading.
5. **Security:** enforce authorization on the server; frontend route guards are user-experience controls, not security boundaries.
6. **Observability:** capture actionable client errors and performance signals while avoiding sensitive data.
7. **Testing:** test business behavior at component, feature and end-to-end levels.
8. **Accessibility:** use semantic HTML, keyboard support and accessible feedback.

## Suggested dependency map
```text
Browser
  |
  v
app (bootstrap, routes, providers)
  |
  +---- features/customers ----+
  |                            |
  +---- features/payments -----+----> shared/api-client
  |                            |
  +---- features/operations ---+----> shared/ui
                               |
                               +----> shared/utils
```

## NFR questions for frontend design
- What is the target initial-load and route-transition experience?
- Which screens need real-time updates?
- What happens when an API is slow, unavailable or returns partial data?
- How are duplicate submissions prevented in the UI?
- How are large tables paginated or virtualized?
- How is accessibility measured?
- What telemetry is collected, and how is sensitive data excluded?
- How do we support browser compatibility and responsive layouts?

## Growth strategy
Start with a modular monolith frontend. Introduce additional complexity only when justified:
- Shared component library when multiple features need consistent UI.
- Dedicated server-state library when caching, invalidation and synchronization become non-trivial.
- Micro-frontends only when independent ownership/deployment has a concrete organizational or technical benefit.

## Exercise
For a digital banking portal, document feature boundaries for customers, accounts, payments and service requests. Define shared capabilities and identify the APIs each feature consumes.
