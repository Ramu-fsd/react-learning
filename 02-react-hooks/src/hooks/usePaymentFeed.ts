import { useEffect, useState } from 'react';

export interface PaymentEvent {
  id: string;
  status: 'Processing' | 'Settled';
  message: string;
  time: string;
}

// Demonstration only: emits local simulated events, not real bank/payment events.
export function usePaymentFeed() {
  const [events, setEvents] = useState<PaymentEvent[]>([
    {
      id: 'PAY-80421',
      status: 'Processing',
      message: 'Payment submitted for processing',
      time: new Date().toLocaleTimeString(),
    },
  ]);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setEvents((current) => [
        {
          id: 'PAY-80421',
          status: 'Settled',
          message: 'Simulated payment settlement received',
          time: new Date().toLocaleTimeString(),
        },
        ...current,
      ]);
    }, 5000);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return events;
}
