# Feature-Based Architecture

Feature-based architecture groups files by business capability instead of technical file type.

## Example
```text
src/
  app/
    App.tsx
    router.tsx
  features/
    customers/
      api/
      components/
      hooks/
      pages/
      types/
      index.ts
    payments/
      api/
      components/
      hooks/
      pages/
      types/
      index.ts
  shared/
    api/
    components/
    hooks/
    utils/
```

## Why use it?
- Related code changes together.
- Teams can own business capabilities more easily.
- Feature-specific types and helpers stay close to their consumers.
- The application can grow without a single enormous `components` or `services` directory.

## Dependency direction
A practical default is:

`app -> features -> shared`

- `app` composes features and configures global concerns.
- A feature may use `shared`.
- `shared` must not import a feature.
- Avoid direct imports from one feature's internal files into another feature. If cross-feature reuse is necessary, expose a deliberate public API or move genuinely generic code to `shared`.

## Public entry point
A feature can expose a small API from `index.ts`:

```ts
export { CustomerPage } from "./pages/CustomerPage";
export type { Customer } from "./types/customer";
```

Do not export every internal file. The public API should protect the feature's implementation details.

## Exercise
Add a `payments` feature next to `customers`. Ensure shared UI does not import from either feature.
