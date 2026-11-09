# 07. Conditional Rendering

Conditional rendering chooses which UI to display based on props or state.

## Ternary operator

```tsx
return isAuthenticated
  ? <AccountDashboard />
  : <LoginPage />;
```

## Logical AND

```tsx
{hasPendingApprovals && <PendingApprovalBanner />}
```

Be careful with numeric values: `{count && <Badge />}` can render `0` when count is zero. Use `{count > 0 && <Badge />}` when appropriate.

## Multiple states

For loading, error, empty, and success states, an explicit `if` chain before the return can be easier to read:

```tsx
if (isLoading) return <p>Loading…</p>;
if (error) return <p role="alert">Unable to load data.</p>;
if (items.length === 0) return <p>No records found.</p>;

return <TransactionTable items={items} />;
```

## UX checklist

- Loading state communicates progress.
- Error state explains what happened and, where possible, offers retry.
- Empty state explains that there is no data and may suggest the next action.
- Success state confirms completion.
- Use `role="status"` or `role="alert"` when appropriate for assistive technology.
