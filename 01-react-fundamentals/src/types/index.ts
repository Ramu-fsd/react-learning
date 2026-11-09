export interface Transaction {
  id: number;
  description: string;
  amount: number;
  status: 'Completed' | 'Pending' | 'Failed';
}

export interface UserProfile {
  name: string;
  role: string;
  location: string;
}
