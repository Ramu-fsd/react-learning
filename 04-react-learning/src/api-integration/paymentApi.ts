export type Payment = {
  id: string;
  beneficiary: string;
  amount: number;
  currency: string;
  status: 'SETTLED' | 'PENDING' | 'REJECTED';
};

const payments: Payment[] = [
  { id: 'PAY-1001', beneficiary: 'Northstar Supplies', amount: 12500, currency: 'USD', status: 'SETTLED' },
  { id: 'PAY-1002', beneficiary: 'Aster Technologies', amount: 8400, currency: 'USD', status: 'PENDING' },
  { id: 'PAY-1003', beneficiary: 'Meridian Logistics', amount: 3200, currency: 'USD', status: 'REJECTED' },
  { id: 'PAY-1004', beneficiary: 'Cedar Financial Services', amount: 18750, currency: 'USD', status: 'SETTLED' },
];

export async function fetchPayments(signal?: AbortSignal): Promise<Payment[]> {
  // Simulates network latency and supports AbortController cancellation.
  await new Promise<void>((resolve, reject) => {
    const timer = window.setTimeout(resolve, 450);
    signal?.addEventListener('abort', () => {
      window.clearTimeout(timer);
      reject(new DOMException('Request cancelled', 'AbortError'));
    }, { once: true });
  });
  return payments;
}
