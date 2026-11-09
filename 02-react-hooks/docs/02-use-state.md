# 02. useState

`useState` adds a state variable to a function component.

```tsx
const [status, setStatus] = useState<'Pending' | 'Approved'>('Pending');
```

Use a functional update when the next state depends on the previous state:

```tsx
setAttempts((current) => current + 1);
```

State updates are queued and React may batch updates. State is a snapshot for the current render; a setter does not change the current local variable.

For objects and arrays, create new values rather than mutating existing state:

```tsx
setFilters((current) => ({ ...current, status: 'Pending' }));
setApprovals((current) => [...current, newApproval]);
```

Choose the smallest state shape that represents the UI. Derive totals, filtered lists, and formatted values from existing state when possible instead of storing redundant copies.
