# Axios and Interceptors

The sample uses the native Fetch API to keep the baseline dependency-light. Axios is a useful alternative when an application benefits from a configured instance, interceptors, request cancellation conventions, and consistent response handling.

## Example instance

```ts
import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10_000,
  headers: { "Content-Type": "application/json" }
});
```

## Interceptor use cases

- Add correlation or client-version headers.
- Normalize error responses.
- Attach an access token only when the authentication design requires it.
- Handle a controlled refresh flow when supported by the identity architecture.

Avoid blindly retrying non-idempotent requests. Do not put refresh tokens in browser-accessible storage. Interceptors do not replace backend authorization.
