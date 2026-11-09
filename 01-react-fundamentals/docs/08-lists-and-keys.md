# 08. Lists and Keys

Use JavaScript array methods such as `map` to render collections.

```tsx
interface Beneficiary {
  id: string;
  name: string;
}

function BeneficiaryList({ items }: { items: Beneficiary[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```

## Why keys matter

Keys help React match list items between renders, especially when items are inserted, deleted, or reordered. A key should be stable and unique among siblings.

## Key guidance

- Prefer a database ID or stable domain identifier.
- Do not generate a random key during render.
- Avoid array indexes when the collection can change order or membership.
- Keys are used by React and are not automatically passed as a normal component prop.

## Filtering

Filter the data before mapping:

```tsx
const visibleItems = items.filter((item) => item.status === 'Pending');
```

## Common mistake

Using the array index as a key for a list where items can be reordered may cause component state or DOM input state to be associated with the wrong item.
