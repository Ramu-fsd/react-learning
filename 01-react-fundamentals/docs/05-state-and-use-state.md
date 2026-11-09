# 05. State and useState

## What is state?

State is data a component remembers between renders. When state is updated, React schedules a re-render so the UI can reflect the new value.

```tsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((current) => current + 1)}>
      Count: {count}
    </button>
  );
}
```

## Functional state updates

Use the functional updater when the next value depends on the previous value:

```tsx
setCount((current) => current + 1);
```

## State is a snapshot

A render sees the state snapshot for that render. Calling a setter requests a future render; it does not mutate the variable in the currently executing function.

## Do not mutate state

Incorrect:

```tsx
items.push(newItem);
setItems(items);
```

Correct:

```tsx
setItems((current) => [...current, newItem]);
```

For objects:

```tsx
setProfile((current) => ({ ...current, city: 'Hyderabad' }));
```

## State placement

Keep state in the closest common parent that needs to coordinate the value. Avoid duplicating the same source of truth in multiple components.

## Common mistakes

- Mutating arrays or objects in state.
- Updating state unconditionally during render.
- Expecting a setter to update the current render's variable immediately.
- Storing values that can be calculated from existing props or state without a reason.
