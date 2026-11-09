# 04. Props and TypeScript

## Props

Props are inputs passed from a parent to a child component. They are read-only from the child's perspective.

```tsx
interface AccountCardProps {
  accountName: string;
  balance: number;
  isPrimary?: boolean;
}

function AccountCard({
  accountName,
  balance,
  isPrimary = false,
}: AccountCardProps) {
  return (
    <article>
      <h2>{accountName} {isPrimary && '(Primary)'}</h2>
      <p>{balance}</p>
    </article>
  );
}
```

## Type common props

- `string`, `number`, `boolean` for primitive values.
- Union types for a fixed set of states.
- Interfaces or type aliases for object shapes.
- `ReactNode` for renderable children.
- Function types for callback props.

```tsx
interface SaveButtonProps {
  disabled?: boolean;
  onSave: () => void;
}
```

## Callback props

A child can notify its parent by calling a callback passed through props. The parent owns the state and decides what to do.

## Avoid

- Mutating props.
- Using `any` when a useful type can be expressed.
- Passing large unrelated objects when a smaller explicit contract is clearer.
- Making every prop optional without a reason.

## Interview talking points

Explain the difference between props and state, how TypeScript improves component contracts, and why callback props are useful for child-to-parent communication.
