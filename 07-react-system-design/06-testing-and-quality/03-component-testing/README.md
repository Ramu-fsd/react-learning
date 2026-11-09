# Component Testing

React Testing Library encourages tests that interact with the UI as a user would.

```tsx
render(<SearchBox value="" onChange={onChange} />);
await user.type(screen.getByRole("textbox", { name: /search/i }), "Ramu");
expect(onChange).toHaveBeenLastCalledWith("Ramu");
```

Prefer accessible queries such as role and label. Verify keyboard and focus behavior for interactive components.
