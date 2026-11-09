# 06. useMemo and useCallback

## useMemo

Caches the result of a calculation between renders while dependencies remain unchanged.

```tsx
const visiblePayments = useMemo(
  () => payments.filter((payment) => payment.status === selectedStatus),
  [payments, selectedStatus],
);
```

## useCallback

Caches a function definition between renders while dependencies remain unchanged.

```tsx
const handleInspect = useCallback((paymentId: string) => {
  setSelectedPaymentId(paymentId);
}, []);
```

## When to use

- A calculation is measurably expensive.
- A memoized child benefits from stable props.
- A callback is used as a dependency by another hook and stability is useful.

## When not to use

Do not wrap every calculation and handler by default. Memoization adds complexity and has a cost. Start with clear code, measure performance, then optimize a demonstrated bottleneck.

`useMemo` and `useCallback` do not make code correct or provide security guarantees.
