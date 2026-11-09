export type PaymentStatus = 'Settled' | 'Pending' | 'Under Review';

export interface Payment {
  id: string;
  merchant: string;
  reference: string;
  amount: number;
  status: PaymentStatus;
  riskScore: number;
}
