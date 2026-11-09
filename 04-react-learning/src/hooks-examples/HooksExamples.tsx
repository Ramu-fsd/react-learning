import { useMemo, useState } from 'react';
import { useDebouncedValue } from './useDebouncedValue';
import { useOnlineStatus } from './useOnlineStatus';

const accounts = [
  { id: 'ACC-001', name: 'Operating Account', balance: 125000 },
  { id: 'ACC-002', name: 'Settlement Reserve', balance: 78000 },
  { id: 'ACC-003', name: 'International Payments', balance: 214500 },
];

export default function HooksExamples() {
  const [query, setQuery] = useState('');
  const [showBalances, setShowBalances] = useState(true);
  const debouncedQuery = useDebouncedValue(query, 250);
  const isOnline = useOnlineStatus();
  const filtered = useMemo(
    () => accounts.filter((account) => `${account.id} ${account.name}`.toLowerCase().includes(debouncedQuery.toLowerCase())),
    [debouncedQuery],
  );

  return (
    <section className="panel">
      <p className="eyebrow">MODULE 03</p>
      <h2>Hooks in account operations</h2>
      <p>Explore state, effects, memoized derived data and reusable custom hooks.</p>
      <div className="metrics"><div className="metric"><strong>{isOnline ? 'Online' : 'Offline'}</strong><span>Browser connectivity</span></div><div className="metric"><strong>{filtered.length}</strong><span>Matching accounts</span></div></div>
      <div className="toolbar">
        <input aria-label="Search accounts" placeholder="Search account…" value={query} onChange={(event) => setQuery(event.target.value)} />
        <button className="secondary" onClick={() => setShowBalances((visible) => !visible)}>{showBalances ? 'Hide balances' : 'Show balances'}</button>
      </div>
      <table className="data-table"><thead><tr><th>Account</th><th>Name</th><th>Available balance</th></tr></thead><tbody>
        {filtered.map((account) => <tr key={account.id}><td>{account.id}</td><td>{account.name}</td><td>{showBalances ? `$${account.balance.toLocaleString()}` : '••••••'}</td></tr>)}
      </tbody></table>
      <p className="note">The demo uses mock balances. Visibility toggling is not a substitute for authorization or data masking.</p>
    </section>
  );
}
