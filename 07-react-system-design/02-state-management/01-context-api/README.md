# Context API

Use Context to make a value available to a subtree when prop drilling becomes inconvenient. Typical examples include theme, locale and authenticated-user presentation context.

```tsx
import { createContext, useContext, useMemo, useState } from "react";

type Theme = "light" | "dark";
type ThemeContextValue = { theme: Theme; toggleTheme: () => void };

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: React.PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>("light");
  const value = useMemo(
    () => ({ theme, toggleTheme: () => setTheme(t => t === "light" ? "dark" : "light") }),
    [theme]
  );
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) throw new Error("useTheme must be used inside ThemeProvider");
  return value;
}
```

## Design guidance
- Split unrelated contexts so consumers do not subscribe to an unnecessarily broad value.
- Memoize provider values when referential stability matters.
- Context is not automatically a replacement for a server-state cache or a complex event/state model.
- Avoid placing rapidly changing, high-frequency data into a broad provider without measuring render impact.

## Exercise
Add locale and compact-layout preferences. Keep each provider focused.
