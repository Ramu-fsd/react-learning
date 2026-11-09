# API Client Architecture

A shared HTTP client should handle cross-cutting transport concerns. Feature API modules should express business endpoints.

```ts
export class ApiError extends Error {
  constructor(message: string, public status: number) { super(message); }
}

export async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...init?.headers }
  });
  if (!response.ok) throw new ApiError("Request failed", response.status);
  if (response.status === 204) return undefined as T;
  return response.json() as Promise<T>;
}
```

Feature module:
```ts
export const customerApi = {
  list: () => request<Customer[]>("/customers"),
  get: (id: string) => request<Customer>(`/customers/${encodeURIComponent(id)}`)
};
```

Avoid building a generic abstraction that hides HTTP semantics or makes debugging difficult.
