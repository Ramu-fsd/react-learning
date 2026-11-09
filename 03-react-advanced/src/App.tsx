import { lazy, Suspense, useCallback, useMemo, useState } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { PaymentRow } from './components/PaymentRow';
import { RoleGate } from './components/RoleGate';
import { WorkspaceTabs } from './components/WorkspaceTabs';
import type { Payment } from './types';

const FraudReview = lazy(() => import('./features/FraudReview'));
const Reconciliation = lazy(() => import('./features/Reconciliation'));

const payments: Payment[] = [
  { id: 'PAY-70081', merchant: 'Northstar Retail', reference: 'REF-AX9102', amount: 125000, status: 'Settled', riskScore: 12 },
  { id: 'PAY-70082', merchant: 'Orion Electronics', reference: 'REF-BK2201', amount: 48500, status: 'Under Review', riskScore: 92 },
  { id: 'PAY-70083', merchant: 'Metro Travel', reference: 'REF-CL3304', amount: 17990, status: 'Pending', riskScore: 28 },
  { id: 'PAY-70084', merchant: 'Aster Retail', reference: 'REF-DM4410', amount: 8650, status: 'Settled', riskScore: 8 },
  { id: 'PAY-70085', merchant: 'BluePeak Services', reference: 'REF-EN5512', amount: 212000, status: 'Under Review', riskScore: 78 },
  { id: 'PAY-70086', merchant: 'Cedar Foods', reference: 'REF-FP6618', amount: 7200, status: 'Pending', riskScore: 18 },
];

function PaymentOperations() {
  const [filter, setFilter] = useState('All');
  const [selectedId, setSelectedId] = useState('');
  const filteredPayments = useMemo(
    () => payments.filter((payment) => filter === 'All' || payment.status === filter),
    [filter],
  );
  const handleInspect = useCallback((id: string) => setSelectedId(id), []);

  return (
    <>
      <div className="toolbar">
        <label htmlFor="payment-filter">Payment status</label>
        <select id="payment-filter" value={filter} onChange={(event) => setFilter(event.target.value)}>
          <option>All</option><option>Settled</option><option>Pending</option><option>Under Review</option>
        </select>
        <span className="record-count">{filteredPayments.length} records</span>
      </div>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Payment / Reference</th><th>Merchant</th><th>Amount</th><th>Status</th><th>Action</th></tr></thead>
          <tbody>{filteredPayments.map((payment) => (
            <PaymentRow key={payment.id} payment={payment} onInspect={handleInspect} />
          ))}</tbody>
        </table>
      </div>
      <p className="selection" role="status">{selectedId ? `Selected ${selectedId} for inspection.` : 'Select a payment to inspect.'}</p>
    </>
  );
}

function AuthorizationDemo() {
  const [role, setRole] = useState<'Operations' | 'Risk Analyst' | 'Auditor'>('Operations');
  return (
    <div className="auth-demo">
      <label htmlFor="demo-role">Simulated signed-in role</label>
      <select id="demo-role" value={role} onChange={(event) => setRole(event.target.value as typeof role)}>
        <option>Operations</option><option>Risk Analyst</option><option>Auditor</option>
      </select>
      <RoleGate currentRole={role} allowedRoles={['Operations', 'Risk Analyst']}>
        <button onClick={() => window.alert('Demo action only. No payment was changed.')}>Open payment action</button>
      </RoleGate>
      <p className="note">This is a presentation example only. Real authorization must be enforced by backend APIs on every protected operation.</p>
    </div>
  );
}

function SlowFeatureFallback() {
  return <div className="loading-panel" role="status"><span className="spinner" /> Loading enterprise module…</div>;
}

export default function App() {
  return (
    <main className="shell">
      <header className="hero">
        <p className="eyebrow">Module 03 · Advanced React</p>
        <h1>Enterprise Payment Operations</h1>
        <p>Explore advanced rendering, performance, lazy-loaded business modules, error isolation, and reusable component patterns.</p>
        <div className="metrics">
          <div><strong>24,812</strong><span>Payments processed today</span></div>
          <div><strong>37</strong><span>Items requiring review</span></div>
          <div><strong>99.94%</strong><span>Illustrative processing success</span></div>
        </div>
      </header>

      <section className="section">
        <div className="section-title"><h2>Payment operations</h2><p>Memoized rows and derived filtering for an operational payment queue.</p></div>
        <div className="surface"><PaymentOperations /></div>
      </section>

      <section className="section">
        <div className="section-title"><h2>Role-aware UI example</h2><p>A higher-order access pattern can be built with wrappers; this example uses a composition-based gate.</p></div>
        <div className="surface"><AuthorizationDemo /></div>
      </section>

      <section className="section">
        <div className="section-title"><h2>Operational workspaces</h2><p>Compound tabs keep tab state inside a reusable component family.</p></div>
        <div className="surface">
          <WorkspaceTabs defaultValue="fraud">
            <WorkspaceTabs.List>
              <WorkspaceTabs.Trigger value="fraud">Fraud review</WorkspaceTabs.Trigger>
              <WorkspaceTabs.Trigger value="reconciliation">Reconciliation</WorkspaceTabs.Trigger>
            </WorkspaceTabs.List>
            <WorkspaceTabs.Panel value="fraud">
              <ErrorBoundary fallbackTitle="Fraud review is unavailable">
                <Suspense fallback={<SlowFeatureFallback />}><FraudReview /></Suspense>
              </ErrorBoundary>
            </WorkspaceTabs.Panel>
            <WorkspaceTabs.Panel value="reconciliation">
              <ErrorBoundary fallbackTitle="Reconciliation is unavailable">
                <Suspense fallback={<SlowFeatureFallback />}><Reconciliation /></Suspense>
              </ErrorBoundary>
            </WorkspaceTabs.Panel>
          </WorkspaceTabs>
        </div>
      </section>

      <footer>Created by <strong>Ramu Boya</strong> · <a href="https://github.com/Ramu-fsd">GitHub</a> · <a href="https://www.linkedin.com/in/ramuboya">LinkedIn</a></footer>
    </main>
  );
}
