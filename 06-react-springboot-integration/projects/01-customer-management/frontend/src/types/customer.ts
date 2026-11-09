export type CustomerStatus = "ACTIVE" | "INACTIVE";

export interface Customer {
  id: string;
  fullName: string;
  email: string;
  status: CustomerStatus;
}

export interface CustomerRequest {
  fullName: string;
  email: string;
  status: CustomerStatus;
}

export interface PageResponse<T> {
  content: T[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export interface ApiError {
  timestamp: string;
  status: number;
  code: string;
  message: string;
  fieldErrors?: Record<string, string>;
}
