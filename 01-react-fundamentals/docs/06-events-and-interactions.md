# 06. Events and Interactions

React event props use camelCase, such as `onClick`, `onChange`, and `onSubmit`.

```tsx
function ApproveButton() {
  function handleApprove() {
    console.log('Approval selected');
  }

  return <button onClick={handleApprove}>Approve</button>;
}
```

Pass a function reference, not the result of calling the function:

```tsx
<button onClick={handleApprove}>Approve</button>
```

For an event that needs an argument:

```tsx
<button onClick={() => handleSelect('PAY-1001')}>Select</button>
```

## Typing event handlers

```tsx
import type { ChangeEvent, FormEvent } from 'react';

function handleChange(event: ChangeEvent<HTMLInputElement>) {
  console.log(event.target.value);
}

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
}
```

## Good practices

- Use descriptive handler names such as `handleSubmit` or `handleDelete`.
- Keep event handlers readable.
- Use semantic controls such as `<button>` for actions.
- Do not use clickable `<div>` elements when a button is appropriate.
- Prevent the browser's default form submission when handling it in React.
