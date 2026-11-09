# 02 - React Hooks

A practical React + TypeScript module explaining built-in hooks and custom hooks through realistic fintech and enterprise workflows.

**Author:** Ramu Boya  
**GitHub:** https://github.com/Ramu-fsd  
**LinkedIn:** https://www.linkedin.com/in/ramuboya

## Learning objectives

- Understand the Rules of Hooks and why hook call order matters.
- Manage local state with `useState`.
- Synchronize with external systems using `useEffect`.
- Share cross-cutting values with `useContext`.
- Access DOM elements and retain mutable values with `useRef`.
- Cache calculations with `useMemo` and callback identities with `useCallback`.
- Extract reusable behavior into custom hooks.
- Understand when not to use an effect or memoization.

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
02-react-hooks/
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
│   ├── context/
│   ├── hooks/
│   └── types/
├── docs/
│   ├── 01-rules-of-hooks.md
│   ├── 02-use-state.md
│   ├── 03-use-effect.md
│   ├── 04-use-context.md
│   ├── 05-use-ref.md
│   ├── 06-use-memo-and-use-callback.md
│   └── 07-custom-hooks.md
└── exercises/
    └── README.md
```

## Examples in the demo

1. `useState`: toggle visibility of a customer account balance.
2. `useEffect`: subscribe to a simulated payment-status event stream and clean up the subscription.
3. `useContext`: read the selected operating region and currency from application context.
4. `useRef`: focus a transaction search field and retain a render-independent timer ID.
5. `useMemo`: derive filtered and sorted transaction data.
6. `useCallback`: provide a stable callback to a memoized transaction row.
7. Custom hooks: reusable online-status and debounced-value behavior.

## Rules of Hooks

- Call hooks at the top level of function components or custom hooks.
- Do not call hooks inside conditions, loops, nested functions, or event handlers.
- Call hooks in the same order on every render.
- Only call React hooks from React function components or custom hooks.

## Important guidance

- An effect is for synchronizing with an external system, not for deriving ordinary render data.
- Always clean up subscriptions, timers, and event listeners created by an effect.
- Prefer derived values during render over state plus an effect when no external synchronization is required.
- `useMemo` and `useCallback` are performance tools, not correctness requirements.
- A ref persists between renders but changing `ref.current` does not trigger a render.
- Context is useful for values needed by many descendants; avoid using it as a default replacement for all state management.
