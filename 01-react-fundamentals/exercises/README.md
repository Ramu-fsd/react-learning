# React Fundamentals Exercises

Complete these exercises after reviewing the lessons. Try them before reading the suggested solutions.

## Exercise 1 — Profile card
Create a `CustomerProfile` component with typed props: `name`, `customerId`, and optional `segment`. Render two different customers.

## Exercise 2 — Account balance toggle
Create a component that displays an account balance. Add a button to hide and reveal the balance. The hidden state should display a masked value.

## Exercise 3 — Transaction filter
Given an array of transactions, add buttons to show All, Completed, and Pending transactions. Use stable transaction IDs as keys.

## Exercise 4 — Add transaction form
Create a controlled form with description and amount fields. On submit, add a new transaction to a list. Validate that the amount is a valid non-zero number.

## Exercise 5 — Child-to-parent callback
Create a `TransactionRow` child component with an Approve button. Pass an `onApprove` callback from the parent and display the selected transaction ID in the parent.

## Exercise 6 — UI states
Create a data panel with Loading, Error, Empty, and Success states. Ensure the error uses `role="alert"` and loading uses `role="status"`.

## Exercise 7 — Search with lifted state
Create a search input and results list as sibling components. Keep the search query in their common parent and filter the list as the user types.

## Exercise 8 — Reusable button
Create a typed `Button` component supporting `children`, `variant`, `disabled`, and native button attributes. Preserve keyboard accessibility.

## Review checklist

- [ ] Components use PascalCase names.
- [ ] Props are typed and treated as read-only.
- [ ] State is not mutated directly.
- [ ] State is placed at the closest common owner.
- [ ] Event handlers are passed as functions.
- [ ] Dynamic lists use stable keys.
- [ ] Forms have labels and useful validation.
- [ ] Loading, error, empty, and success states are considered.
