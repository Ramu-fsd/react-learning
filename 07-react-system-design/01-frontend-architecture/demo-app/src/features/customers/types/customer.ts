export type CustomerStatus = "Active" | "Pending" | "Restricted";

export interface Customer {
  id: string;
  name: string;
  email: string;
  segment: "Retail" | "Business" | "Private";
  status: CustomerStatus;
}
