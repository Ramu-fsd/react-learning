import type { Customer } from "../types/customer";

export const customers: Customer[] = [
  { id: "C-10021", name: "Aarav Mehta", email: "aarav@example.test", segment: "Retail", status: "Active" },
  { id: "C-10022", name: "Maya Iyer", email: "maya@example.test", segment: "Private", status: "Pending" },
  { id: "C-10023", name: "Northstar Trading", email: "ops@northstar.example.test", segment: "Business", status: "Active" },
  { id: "C-10024", name: "Ishaan Rao", email: "ishaan@example.test", segment: "Retail", status: "Restricted" },
  { id: "C-10025", name: "BluePeak Logistics", email: "finance@bluepeak.example.test", segment: "Business", status: "Active" }
];
