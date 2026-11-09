const BASE = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8082/api";
export interface ApiResult { status: number; body: unknown; }
export async function callApi(path: string, token: string, method = "GET", body?: unknown): Promise<ApiResult> {
  const response = await fetch(`${BASE}${path}`, {
    method,
    headers: { Accept: "application/json", Authorization: `Bearer ${token}`, ...(body ? { "Content-Type": "application/json" } : {}) },
    ...(body ? { body: JSON.stringify(body) } : {})
  });
  let payload: unknown = null;
  try { payload = await response.json(); } catch { /* empty response */ }
  return { status: response.status, body: payload };
}
export async function getPublicInfo(): Promise<ApiResult> {
  const response = await fetch(`${BASE}/public/info`);
  let body: unknown = null; try { body = await response.json(); } catch { /* ignore */ }
  return { status: response.status, body };
}
