# 03. Components and Composition

## Function components

A function component is a JavaScript or TypeScript function whose name starts with an uppercase letter and which returns React elements.

```tsx
function PageHeader() {
  return <header><h1>Accounts</h1></header>;
}
```

## Component composition

Build a page by composing smaller components:

```tsx
function AccountPage() {
  return (
    <>
      <PageHeader />
      <AccountSummary />
      <TransactionList />
    </>
  );
}
```

Each component should have a clear responsibility. A component can render other components and can accept content through the `children` prop.

## Children composition

```tsx
import type { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
}

function Card({ title, children }: CardProps) {
  return <section><h2>{title}</h2>{children}</section>;
}
```

## Good practices

- Prefer small components with cohesive responsibilities.
- Name components after the UI concept they represent.
- Keep reusable UI independent of a specific page where practical.
- Avoid creating a component for every single HTML element without a reuse or clarity benefit.
- Use composition rather than adding many boolean props to handle unrelated layouts.
