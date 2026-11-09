# 10. Lifting State Up

When sibling components need to read or update the same value, move that state to their closest common parent and pass the value and callbacks down through props.

## Example

```tsx
import { useState } from 'react';

function SearchPage() {
  const [query, setQuery] = useState('');

  return (
    <>
      <SearchInput value={query} onChange={setQuery} />
      <SearchResults query={query} />
    </>
  );
}

function SearchInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <input
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder="Search transactions"
    />
  );
}

function SearchResults({ query }: { query: string }) {
  return <p>Showing results for: {query || 'all transactions'}</p>;
}
```

## Benefits

- One source of truth.
- Sibling components stay synchronized.
- Data flow is explicit.
- Components can remain focused on presentation.

## Trade-off

Passing props through many intermediate layers can become cumbersome. Context or a state-management library may be appropriate when many distant components need the same state. Learn those patterns in the hooks and state-management modules.
