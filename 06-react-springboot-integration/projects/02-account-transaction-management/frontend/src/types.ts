export interface Account {
  id: string; accountName: string; accountType: string; maskedAccountNumber: string;
  currency: string; availableBalance: number; currentBalance: number; status: string;
}
export interface Transaction {
  id: string; accountId: string; reference: string; description: string; type: "CREDIT" | "DEBIT";
  status: "COMPLETED" | "PENDING" | "FAILED"; amount: number; currency: string;
  bookingDate: string; counterparty: string;
}
export interface PageResponse<T> {
  content: T[]; page: number; size: number; totalElements: number; totalPages: number;
}
