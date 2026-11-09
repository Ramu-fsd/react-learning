# React Hooks Exercises

Use fintech and enterprise workflows to practice hooks. Try each exercise before reviewing the source examples.

## 1. useState — payment approval filter
Build a pending/approved filter for a payment queue. Keep the selected filter in state and derive the visible payments during render.

## 2. useEffect — browser connectivity
Create an online/offline indicator. Add and remove browser event listeners correctly.

## 3. useEffect — cancellable account lookup
Build a customer lookup that calls a mock API. Cancel the previous request when the query changes or the component unmounts. Handle loading, empty, error, and success states.

## 4. useContext — business unit
Create a context for the selected business unit (Retail, Corporate, Treasury). Consume it in a deeply nested page header and filter panel.

## 5. useRef — transaction search
Focus the transaction reference input when the user selects a keyboard shortcut or clicks a focus button.

## 6. useMemo — reconciliation totals
Given a list of reconciliation records, calculate matched count, unmatched count, and total unmatched amount. Memoize only if the calculation or render profile justifies it.

## 7. useCallback — approval table
Pass an approval handler to memoized rows. Explain when a stable callback matters and when it does not.

## 8. Custom hook — debounced search
Implement `useDebouncedValue<T>` and use it to filter a customer or transaction list.

## 9. Custom hook — connection state
Create `useOnlineStatus` with correct subscription cleanup and test the state transitions.

## 10. Custom hook — reusable polling
Create a configurable polling hook for a mock payment status endpoint. Support an enabled flag, interval, cleanup, and request cancellation. Avoid overlapping requests.

## Review checklist

- [ ] Hooks are called only at the top level.
- [ ] Effects synchronize with external systems.
- [ ] Effect dependencies are complete.
- [ ] Subscriptions and timers are cleaned up.
- [ ] Derived data is not unnecessarily copied into state.
- [ ] Refs are used for imperative access or mutable values not needed for rendering.
- [ ] Memoization has a clear reason.
- [ ] Custom hooks have focused responsibilities.
- [ ] Frontend state is not treated as backend authorization.
