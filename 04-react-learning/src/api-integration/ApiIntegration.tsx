import { useEffect, useState } from 'react';
import { fetchPayments, type Payment } from './paymentApi';

export default function ApiIntegration() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  async function load(signal?: AbortSignal) {
    setLoading(true);
    setError('');
    try {
      const result = await fetchPayments(signal);
      setPayments(result);
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') return;
      setError(err instanceof Error ? err.message : 'Unable to load payments');
    } finally {
      if (!signal?.aborted) setLoading(false);
    }
  }

  useEffect(() => {
    const controller = new AbortController();
    void load(controller.signal);
    return () => controller.abort();
  }, []);

  return (
    <section className="panel">
      <p className="eyebrow">MODULE 01</p>
      <h2>API integration: payment search</h2>
      <p>Understand asynchronous data loading, typed responses, loading and error states, and request cancellation.</p>
      <div className="toolbar"><span>Payment service · simulated API</span><button onClick={() => void load()}>Refresh payments</button></div>
      {loading && <p>Loading payments…</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && (
        <table className="data-table">
          <thead><tr><th>Payment ID</th><th>Beneficiary</th><th>Amount</th><th>Status</th></tr></thead>
          <tbody>{payments.map((payment) => (
            <tr key={payment.id}><td>{payment.id}</td><td>{payment.beneficiary}</td><td>{payment.currency} {payment.amount.toLocaleString()}</td><td><span className="status">{payment.status}</span></td></tr>
          ))}</tbody>
        </table>
      )}
    </section>
  );
}
