# Server-State Management

Server state is remote, shared, asynchronous and can become stale independently of the browser.

## Lifecycle
1. Query: request data with a stable key.
2. Loading: present skeleton or progress state.
3. Success: render data and freshness information where useful.
4. Error: show actionable feedback and retry behavior.
5. Mutation: submit a change, then reconcile the cached result.
6. Invalidation: mark dependent queries stale and refetch when appropriate.

## Example with TanStack Query
```tsx
import { useQuery } from "@tanstack/react-query";

function useCustomers() {
  return useQuery({
    queryKey: ["customers"],
    queryFn: async () => {
      const response = await fetch("/api/customers");
      if (!response.ok) throw new Error("Unable to load customers");
      return response.json() as Promise<Customer[]>;
    }
  });
}
```

## Important concerns
- Query keys must include parameters that change the result.
- Mutations need a clear success/error path.
- Avoid logging sensitive response bodies.
- Define stale-time and retry behavior intentionally.
- Handle cancellation or stale responses when users rapidly change filters.

## Exercise
Add customer detail query and an update mutation. Invalidate only the affected customer and list queries.
