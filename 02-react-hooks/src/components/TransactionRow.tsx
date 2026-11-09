import { memo } from 'react';
import type { Transaction } from '../types';

interface TransactionRowProps {
  transaction: Transaction;
  onSelect: (id: string) => void;
}

export const TransactionRow = memo(function TransactionRow({
  transaction,
  onSelect,
}: TransactionRowProps) {
  return (
    <tr>
      <td><strong>{transaction.id}</strong><small>{transaction.customer}</small></td>
      <td>{transaction.description}</td>
      <td>{transaction.amount.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</td>
      <td><span className={`status status-${transaction.status.toLowerCase()}`}>{transaction.status}</span></td>
      <td><button className="small-button" onClick={() => onSelect(transaction.id)}>Inspect</button></td>
    </tr>
  );
});
