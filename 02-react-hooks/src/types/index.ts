export type TransactionStatus = 'Completed' | 'Pending' | 'Failed';

export interface Transaction {
  id: string;
  customer: string;
  description: string;
  amount: number;
  status: TransactionStatus;
  createdAt: string;
}
