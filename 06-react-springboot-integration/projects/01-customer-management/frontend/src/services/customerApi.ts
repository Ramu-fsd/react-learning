import type { ApiError, Customer, CustomerRequest, PageResponse } from "../types/customer";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8080/api";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  let response: Response;
  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      ...init,
      headers: {
        Accept: "application/json",
        ...(init?.body ? { "Content-Type": "application/json" } : {}),
        ...init?.headers
      }
    });
  } catch {
    throw new Error("Unable to reach the API. Check that the Spring Boot backend is running.");
  }

  if (!response.ok) {
    let payload: ApiError | undefined;
    try {
      payload = (await response.json()) as ApiError;
    } catch {
      // A non-JSON response is handled with a safe fallback message.
    }
    const message = payload?.message ?? `Request failed with status ${response.status}`;
    const error = new Error(message) as Error & { fieldErrors?: Record<string, string> };
    error.fieldErrors = payload?.fieldErrors;
    throw error;
  }

  if (response.status === 204) return undefined as T;
  return (await response.json()) as T;
}

export const customerApi = {
  list(page: number, size: number, search: string) {
    const params = new URLSearchParams({ page: String(page), size: String(size), search });
    return request<PageResponse<Customer>>(`/customers?${params.toString()}`);
  },
  create(payload: CustomerRequest) {
    return request<Customer>("/customers", { method: "POST", body: JSON.stringify(payload) });
  },
  update(id: string, payload: CustomerRequest) {
    return request<Customer>(`/customers/${id}`, { method: "PUT", body: JSON.stringify(payload) });
  },
  remove(id: string) {
    return request<void>(`/customers/${id}`, { method: "DELETE" });
  }
};
