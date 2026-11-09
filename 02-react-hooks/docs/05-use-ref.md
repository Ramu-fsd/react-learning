# 05. useRef

`useRef` returns a stable object whose `.current` property persists across renders. Updating it does not cause a render.

## DOM access

```tsx
const searchRef = useRef<HTMLInputElement>(null);

function focusSearch() {
  searchRef.current?.focus();
}

return <input ref={searchRef} />;
```

## Mutable values

A ref can retain a timeout ID, interval ID, or an imperative handle that should not itself appear in the UI.

Use state instead when changing a value should update the rendered output.

## Avoid

- Using refs as a substitute for normal state.
- Mutating DOM nodes for UI that React should render.
- Reading or writing refs during render in ways that break render purity.
- Assuming a ref is available before the element has mounted.
