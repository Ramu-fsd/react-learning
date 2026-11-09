import type { Account, PageResponse, Transaction } from "./types";
const BASE = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8081/api";

async function get<T>(path: string): Promise<T> {
  let response: Response;
  try { response = await fetch(`${BASE}${path}`, { headers: { Accept: "application/json" } }); }
  catch { throw new Error("Cannot connect to the banking API. Confirm that the backend is running on port 8081."); }
  if (!response.ok) {
    let message = `API request failed (${response.status})`;
    try { const body = await response.json() as { message?: string }; message = body.message ?? message; } catch { /* safe fallback */ }
    throw new Error(message);
  }
  return response.json() as Promise<T>;
}
export const bankingApi = {
  accounts: () => get<Account[]>("/accounts"),
  transactions: (accountId: string, page: number, type: string, search: string) => {
    const params = new URLSearchParams({ page: String(page), size: "6", type, search });
    return get<PageResponse<Transaction>>(`/accounts/${accountId}/transactions?${params}`);
  },
  transaction: (id: string) => get<Transaction>(`/transactions/${id}`)
};
