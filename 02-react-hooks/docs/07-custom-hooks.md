# 07. Custom Hooks

A custom hook extracts reusable stateful behavior from components. Its name starts with `use`, and it may call other hooks.

## Example: online status

```tsx
function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const online = () => setIsOnline(true);
    const offline = () => setIsOnline(false);
    window.addEventListener('online', online);
    window.addEventListener('offline', offline);
    return () => {
      window.removeEventListener('online', online);
      window.removeEventListener('offline', offline);
    };
  }, []);

  return isOnline;
}
```

## Example: debounced search

A debounced-value hook delays publishing a rapidly changing value until it has remained unchanged for a specified interval. This can reduce unnecessary filtering or API requests.

## Design guidance

- Extract behavior, not merely a few lines of JSX.
- Keep the hook API small and domain-clear.
- Document whether the hook owns subscriptions or timers.
- Clean up resources in effects.
- Consider error, loading, and cancellation behavior for hooks that fetch data.
- Do not put authorization decisions exclusively in a client hook.
