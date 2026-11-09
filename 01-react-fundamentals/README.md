# 01 - React Fundamentals

A hands-on React + TypeScript learning module covering the foundational concepts needed to build maintainable component-based user interfaces.

**Author:** Ramu Boya  
**GitHub:** https://github.com/Ramu-fsd  
**LinkedIn:** https://www.linkedin.com/in/ramuboya

## Learning objectives

By completing this module, you should be able to:

- Explain React's component-based model and declarative rendering.
- Write JSX and understand its relationship to JavaScript expressions.
- Create function components and compose them into a UI.
- Pass data and callbacks through props.
- Manage local component state with `useState`.
- Handle user interactions with event handlers.
- Render content conditionally.
- Render collections with stable keys.
- Build controlled forms and handle form submission.
- Lift state to a common parent when components need shared data.
- Use TypeScript to define component props and event types.

## Prerequisites

- Basic JavaScript: variables, functions, arrays, objects, modules, destructuring, and ES modules.
- Basic HTML and CSS.
- Node.js and npm installed.

## Run the examples

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

```bash
npm run build
npm run lint
```

## Module structure

```text
01-react-fundamentals/
├── README.md
├── package.json
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── eslint.config.js
├── .gitignore
├── public/
│   └── favicon.svg
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── styles.css
│   ├── components/
│   ├── examples/
│   └── types/
├── docs/
│   ├── 01-react-overview.md
│   ├── 02-jsx-and-rendering.md
│   ├── 03-components-and-composition.md
│   ├── 04-props-and-typescript.md
│   ├── 05-state-and-use-state.md
│   ├── 06-events-and-interactions.md
│   ├── 07-conditional-rendering.md
│   ├── 08-lists-and-keys.md
│   ├── 09-forms-and-controlled-inputs.md
│   └── 10-lifting-state-up.md
└── exercises/
    ├── README.md
    └── solutions/
```

## Learning sequence

| # | Topic | Practice |
|---:|---|---|
| 1 | React overview | Identify component boundaries in a page |
| 2 | JSX and rendering | Build a profile summary using JSX |
| 3 | Components and composition | Compose a dashboard from small components |
| 4 | Props and TypeScript | Create reusable typed components |
| 5 | State and `useState` | Build a counter and toggle |
| 6 | Events and interactions | Handle clicks, input, and submit events |
| 7 | Conditional rendering | Show loading, empty, error, and success states |
| 8 | Lists and keys | Render and update a transaction list |
| 9 | Forms | Build a controlled beneficiary form |
| 10 | Lifting state up | Share a search query between components |

## Important React practices

- Prefer function components and hooks for new application code.
- Keep components focused and give them clear responsibilities.
- Treat props as read-only.
- Never mutate React state directly; create a new object or array.
- Use stable IDs as list keys. Avoid array indexes when items can be inserted, removed, or reordered.
- Keep controlled inputs connected to state.
- Do not use array indexes or random values as keys for changing lists.
- Extract repeated UI into reusable components when it improves clarity.
- Keep business logic separate from presentation when complexity grows.
- Add accessible labels and semantic HTML to interactive elements.

## Notes

The examples in `src/examples` are imported into the demo application. The written lessons in `docs` explain the concepts, trade-offs, common mistakes, and interview talking points. Exercises are provided separately so you can practice before looking at the suggested solutions.
