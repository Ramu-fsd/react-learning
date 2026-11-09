import { useState } from 'react';
import { StatusBadge } from '../components/StatusBadge';
import type { Transaction } from '../types';

const initialTransactions: Transaction[] = [
  { id: 101, description: 'Salary credit', amount: 85_000, status: 'Completed' },
  { id: 102, description: 'Utility payment', amount: -2_450, status: 'Pending' },
  { id: 103, description: 'Online purchase', amount: -1_299, status: 'Failed' },
];

export function ListsAndKeysExample() {
  const [transactions, setTransactions] = useState(initialTransactions);

  function addTransaction() {
    const nextId = Math.max(...transactions.map((item) => item.id), 100) + 1;
    setTransactions((current) => [
      ...current,
      {
        id: nextId,
        description: `Sample transaction ${nextId}`,
        amount: -500,
        status: 'Pending',
      },
    ]);
  }

  return (
    <article className="example-card">
      <div className="card-title-row">
        <h3>Recent transactions</h3>
        <button onClick={addTransaction}>Add sample</button>
      </div>
      <ul className="transaction-list">
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <div>
              <strong>{transaction.description}</strong>
              <small>Reference #{transaction.id}</small>
            </div>
            <div className="transaction-meta">
              <strong>{transaction.amount.toLocaleString('en-IN', {
                style: 'currency',
                currency: 'INR',
              })}</strong>
              <StatusBadge status={transaction.status} />
            </div>
          </li>
        ))}
      </ul>
      <p className="hint">Each row uses a stable transaction ID as its key.</p>
    </article>
  );
}
