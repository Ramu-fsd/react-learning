# API Client Pattern

A maintainable frontend keeps transport concerns outside components.

```ts
export type ApiError = {
  status: number;
  code: string;
  message: string;
};

export async function getJson<T>(url: string, signal?: AbortSignal): Promise<T> {
  const response = await fetch(url, { signal, headers: { Accept: 'application/json' } });
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  return response.json() as Promise<T>;
}
```

For production systems, validate untrusted JSON at runtime (for example with Zod), avoid exposing secrets in browser code, and handle authentication refresh carefully.
