# 01. Rules of Hooks

Hooks let function components use React features. React relies on hooks being called in the same order on every render.

## Rules

1. Call hooks only at the top level of a React function component or custom hook.
2. Do not call hooks inside conditions, loops, nested functions, or event handlers.
3. Do not call hooks from ordinary JavaScript functions.
4. Keep hook calls in a consistent order across renders.

## Incorrect

```tsx
if (isAdmin) {
  const [filter, setFilter] = useState('All'); // Incorrect
}
```

## Correct

```tsx
const [filter, setFilter] = useState('All');

if (!isAdmin) {
  return <p>Access restricted</p>;
}
```

The `eslint-plugin-react-hooks` rules help detect common violations. Custom hooks should start with `use` and follow the same rules.
