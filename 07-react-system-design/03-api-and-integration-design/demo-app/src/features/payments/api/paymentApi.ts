import { getJson } from "../../../api/client";
export interface Payment { id: string; amount: number; status: string; }
const demoPayments: Payment[] = [
  {id:"PMT-7812",amount:24500,status:"PROCESSING"},
  {id:"PMT-7813",amount:9800,status:"COMPLETED"},
  {id:"PMT-7814",amount:120000,status:"PENDING"}
];
export async function listPayments(): Promise<Payment[]> {
  try { return await getJson<Payment[]>("/api/payments"); }
  catch { return demoPayments; }
}
