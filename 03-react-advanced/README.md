# 03 - Advanced React

Advanced React patterns and engineering practices demonstrated through realistic banking and enterprise operations scenarios.

**Author:** Ramu Boya  
**GitHub:** https://github.com/Ramu-fsd  
**LinkedIn:** https://www.linkedin.com/in/ramuboya

## Learning objectives

- Understand render and commit phases at a practical level.
- Explain reconciliation and how keys influence list identity.
- Optimize a large transaction dashboard based on measured bottlenecks.
- Split bundles and lazy-load less frequently used business modules.
- Handle rendering failures with error boundaries.
- Build reusable higher-order components and compound components.
- Understand Suspense boundaries and loading experiences.
- Use profiling and performance measurements rather than premature optimization.

## Run

```bash
npm install
npm run dev
```

Validation:

```bash
npm run build
npm run lint
```

## Structure

```text
03-react-advanced/
├── README.md
├── package.json
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── eslint.config.js
├── .gitignore
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── styles.css
│   ├── components/
│   ├── features/
│   └── utils/
├── docs/
│   ├── 01-rendering-and-reconciliation.md
│   ├── 02-performance-optimization.md
│   ├── 03-code-splitting-and-lazy-loading.md
│   ├── 04-error-boundaries.md
│   ├── 05-higher-order-components.md
│   ├── 06-compound-components.md
│   ├── 07-suspense-and-loading-boundaries.md
│   └── 08-profiling-and-measurement.md
└── exercises/
    └── README.md
```

## Demo features

- A large transaction list with search and status filters.
- Memoized transaction rows and derived data.
- Lazy-loaded Fraud Review and Reconciliation modules.
- A route-level error boundary with a recover action.
- A role-aware action wrapper (presentation only; backend authorization remains mandatory).
- A compound tabs component for operational workspaces.
- A profiling exercise and optimization checklist.

## Production engineering principles

- Measure before optimizing.
- Keep business authorization on the server; hiding a button is not access control.
- Split code along meaningful routes or feature boundaries.
- Keep error boundaries close enough to isolate recoverable UI regions.
- Provide useful loading and failure states.
- Avoid unstable keys and unnecessary state duplication.
- Test performance on representative data and realistic devices.
