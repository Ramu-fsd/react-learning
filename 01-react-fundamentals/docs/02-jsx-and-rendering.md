# 02. JSX and Rendering

## What is JSX?

JSX is a syntax extension that lets you write markup-like expressions in JavaScript or TypeScript. Build tooling transforms JSX into JavaScript calls that React can use.

```tsx
const customerName = 'Asha';
const heading = <h1>Welcome, {customerName}</h1>;
```

## JSX rules

- Return one parent element, or use a fragment (`<>...</>`).
- Close all elements.
- Use `className` instead of HTML's `class`.
- Use camelCase for most DOM event props, such as `onClick`.
- Embed JavaScript expressions inside curly braces.
- Use a ternary or logical expression for inline conditional content.

## Expressions versus statements

JSX braces accept expressions:

```tsx
<p>{2 + 2}</p>
<p>{customerName.toUpperCase()}</p>
```

A statement such as `if` cannot be placed directly inside JSX braces. Compute a value before the return or use a conditional expression.

## Rendering mental model

When state or props change, React may call the component again to calculate the next UI. Rendering should remain pure: do not perform network requests, mutate external data, or change the DOM during render.

## Common mistakes

- Returning adjacent JSX elements without a parent or fragment.
- Using `if` directly inside JSX.
- Writing `class` instead of `className`.
- Calling side effects during rendering.
- Expecting JSX braces to accept arbitrary statements.
