import { memo, useMemo, useState } from 'react';

type Transfer = { id: string; counterparty: string; amount: number; risk: 'LOW' | 'MEDIUM' | 'HIGH' };
const transfers: Transfer[] = Array.from({ length: 350 }, (_, index) => ({
  id: `TRF-${String(index + 1).padStart(4, '0')}`,
  counterparty: ['Northstar Supplies', 'Meridian Logistics', 'Aster Technologies'][index % 3],
  amount: 500 + ((index * 137) % 24000),
  risk: index % 17 === 0 ? 'HIGH' : index % 5 === 0 ? 'MEDIUM' : 'LOW',
}));

const TransferRow = memo(function TransferRow({ transfer }: { transfer: Transfer }) {
  return <tr><td>{transfer.id}</td><td>{transfer.counterparty}</td><td>${transfer.amount.toLocaleString()}</td><td><span className="status">{transfer.risk}</span></td></tr>;
});

export default function PerformanceDemo() {
  const [query, setQuery] = useState('');
  const [risk, setRisk] = useState('ALL');
  const filtered = useMemo(() => transfers.filter((item) =>
    `${item.id} ${item.counterparty}`.toLowerCase().includes(query.toLowerCase()) &&
    (risk === 'ALL' || item.risk === risk),
  ), [query, risk]);

  return (
    <section className="panel">
      <p className="eyebrow">MODULE 04</p>
      <h2>Performance: transfer monitoring</h2>
      <p>Use memoized derived data and memoized rows as a teaching example. Measure before optimizing.</p>
      <div className="metrics"><div className="metric"><strong>{transfers.length}</strong><span>Total transfers</span></div><div className="metric"><strong>{filtered.length}</strong><span>Visible results</span></div></div>
      <div className="toolbar">
        <input placeholder="Search transfer or counterparty…" value={query} onChange={(event) => setQuery(event.target.value)} />
        <select aria-label="Risk filter" value={risk} onChange={(event) => setRisk(event.target.value)}><option value="ALL">All risk levels</option><option value="LOW">Low</option><option value="MEDIUM">Medium</option><option value="HIGH">High</option></select>
      </div>
      <div style={{ overflowX: 'auto' }}><table className="data-table"><thead><tr><th>Transfer ID</th><th>Counterparty</th><th>Amount</th><th>Risk</th></tr></thead><tbody>
        {filtered.slice(0, 60).map((transfer) => <TransferRow key={transfer.id} transfer={transfer} />)}
      </tbody></table></div>
      <p className="note">Showing up to 60 rows in the UI. For very large datasets, use server-side pagination or list virtualization.</p>
    </section>
  );
}
