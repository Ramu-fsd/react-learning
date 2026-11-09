import { memo } from 'react';
import type { Payment } from '../types';

export const PaymentRow = memo(function PaymentRow({
  payment,
  onInspect,
}: {
  payment: Payment;
  onInspect: (id: string) => void;
}) {
  return (
    <tr>
      <td><strong>{payment.id}</strong><small>{payment.reference}</small></td>
      <td>{payment.merchant}</td>
      <td>{payment.amount.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</td>
      <td><span className={`status status-${payment.status.toLowerCase().replaceAll(' ', '-')}`}>{payment.status}</span></td>
      <td><button className="small-button" onClick={() => onInspect(payment.id)}>Inspect</button></td>
    </tr>
  );
});
