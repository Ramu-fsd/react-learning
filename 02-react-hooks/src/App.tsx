import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Panel } from './components/Panel';
import { TransactionRow } from './components/TransactionRow';
import { useBankingPreferences } from './context/BankingPreferencesContext';
import { useDebouncedValue } from './hooks/useDebouncedValue';
import { useOnlineStatus } from './hooks/useOnlineStatus';
import { usePaymentFeed } from './hooks/usePaymentFeed';
import type { Transaction } from './types';

const seedTransactions: Transaction[] = [
  { id: 'TXN-90031', customer: 'Aarav Mehta', description: 'Vendor settlement', amount: 125000, status: 'Completed', createdAt: '2026-11-09T09:30:00' },
  { id: 'TXN-90032', customer: 'Mira Shah', description: 'Utility payment', amount: -4250, status: 'Pending', createdAt: '2026-11-09T10:15:00' },
  { id: 'TXN-90033', customer: 'Northstar Retail', description: 'Merchant payout', amount: -78200, status: 'Failed', createdAt: '2026-11-09T11:00:00' },
  { id: 'TXN-90034', customer: 'Dev Kapoor', description: 'Loan repayment', amount: 18500, status: 'Completed', createdAt: '2026-11-09T12:05:00' },
];

function BalanceVisibilityDemo() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="balance-card">
      <span>Corporate operating account</span>
      <strong>{visible ? '₹ 48,72,950.00' : '₹ ••,••,•••.••'}</strong>
      <button className="secondary-button" onClick={() => setVisible((value) => !value)}>
        {visible ? 'Mask balance' : 'Reveal balance'}
      </button>
      <small>Demo data only — not connected to a bank.</small>
    </div>
  );
}

function PaymentFeedDemo() {
  const events = usePaymentFeed();
  return (
    <div className="event-list" aria-live="polite">
      {events.map((event, index) => (
        <div className="event-item" key={`${event.id}-${event.status}-${index}`}>
          <span className={`dot ${event.status === 'Settled' ? 'dot-green' : ''}`} />
          <div><strong>{event.id} · {event.status}</strong><small>{event.message} · {event.time}</small></div>
        </div>
      ))}
      <p className="note">A local timer simulates an event and is cleaned up when the component unmounts. This is not a production payment feed.</p>
    </div>
  );
}

function TransactionSearchDemo() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebouncedValue(query, 350);
  const inputRef = useRef<HTMLInputElement>(null);
  const matches = seedTransactions.filter((transaction) =>
    `${transaction.id} ${transaction.customer} ${transaction.description}`
      .toLowerCase()
      .includes(debouncedQuery.toLowerCase()),
  );

  return (
    <div>
      <div className="search-row">
        <input
          ref={inputRef}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search transaction ID, customer or description"
          aria-label="Search transactions"
        />
        <button className="secondary-button" onClick={() => inputRef.current?.focus()}>Focus search</button>
      </div>
      <p className="note">Search applies 350 ms after typing. Matching records: {matches.length}</p>
      <ul className="simple-list">
        {matches.map((item) => <li key={item.id}><strong>{item.id}</strong> — {item.description}</li>)}
      </ul>
    </div>
  );
}

function TransactionTableDemo() {
  const [filter, setFilter] = useState('All');
  const [selectedId, setSelectedId] = useState('');
  const filtered = useMemo(
    () => seedTransactions.filter((item) => filter === 'All' || item.status === filter),
    [filter],
  );
  const handleSelect = useCallback((id: string) => setSelectedId(id), []);

  return (
    <>
      <div className="toolbar">
        <label htmlFor="status-filter">Status</label>
        <select id="status-filter" value={filter} onChange={(event) => setFilter(event.target.value)}>
          <option>All</option><option>Completed</option><option>Pending</option><option>Failed</option>
        </select>
      </div>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Reference / Customer</th><th>Description</th><th>Amount</th><th>Status</th><th>Action</th></tr></thead>
          <tbody>
            {filtered.map((transaction) => (
              <TransactionRow key={transaction.id} transaction={transaction} onSelect={handleSelect} />
            ))}
          </tbody>
        </table>
      </div>
      <p className="note" role="status">{selectedId ? `Selected transaction: ${selectedId}` : 'Select a transaction to inspect it.'}</p>
    </>
  );
}

function PreferencesDemo() {
  const { currency, region, setCurrency } = useBankingPreferences();
  return (
    <div className="preferences">
      <p><strong>Operating region:</strong> {region}</p>
      <label htmlFor="currency">Display currency</label>
      <select id="currency" value={currency} onChange={(event) => setCurrency(event.target.value as 'INR' | 'USD')}>
        <option value="INR">INR — Indian Rupee</option>
        <option value="USD">USD — US Dollar</option>
      </select>
      <p className="note">This preference is shared through React context. It changes the selected display preference only; no currency conversion is performed.</p>
    </div>
  );
}

export default function App() {
  const isOnline = useOnlineStatus();
  const [lastChecked, setLastChecked] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = window.setInterval(() => setLastChecked(new Date().toLocaleTimeString()), 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <main className="shell">
      <header className="hero">
        <p className="eyebrow">Module 02 · React + TypeScript</p>
        <h1>React Hooks in Banking Workflows</h1>
        <p>Explore state, effects, context, refs, memoization, and custom hooks through realistic banking operations examples.</p>
        <div className="hero-meta">
          <span className={isOnline ? 'online' : 'offline'}>{isOnline ? '● Browser online' : '● Browser offline'}</span>
          <span>Local clock: {lastChecked}</span>
        </div>
      </header>

      <div className="grid">
        <Panel title="1. useState — account balance visibility" description="Keep a local UI preference in component state.">
          <BalanceVisibilityDemo />
        </Panel>
        <Panel title="2. useEffect — payment event subscription" description="Synchronize with an external process and clean up its timer.">
          <PaymentFeedDemo />
        </Panel>
        <Panel title="3. useContext — banking preferences" description="Share a cross-cutting display preference with descendants.">
          <PreferencesDemo />
        </Panel>
        <Panel title="4. useRef + custom debounce hook" description="Focus an input without querying the DOM manually; debounce search input.">
          <TransactionSearchDemo />
        </Panel>
        <Panel title="5 & 6. useMemo + useCallback" description="Derive filtered records and pass a stable callback to memoized rows.">
          <TransactionTableDemo />
        </Panel>
      </div>
      <footer>Created by <strong>Ramu Boya</strong> · <a href="https://github.com/Ramu-fsd">GitHub</a> · <a href="https://www.linkedin.com/in/ramuboya">LinkedIn</a></footer>
    </main>
  );
}
