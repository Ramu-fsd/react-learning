import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store';
import { selectPayment, updateStatus } from './paymentSlice';

export default function PaymentStateDemo() {
  const dispatch = useDispatch<AppDispatch>();
  const records = useSelector((state: RootState) => state.payments.records);
  const selectedId = useSelector((state: RootState) => state.payments.selectedPaymentId);
  const selected = records.find((item) => item.id === selectedId);

  return (
    <section className="panel">
      <p className="eyebrow">MODULE 06</p>
      <h2>State management: payment operations</h2>
      <p>Redux Toolkit provides a predictable shared state model for features that need the same payment data.</p>
      <table className="data-table"><thead><tr><th>Payment</th><th>Beneficiary</th><th>Amount</th><th>Status</th><th>Action</th></tr></thead><tbody>
        {records.map((payment) => <tr key={payment.id}>
          <td>{payment.id}</td><td>{payment.beneficiary}</td><td>${payment.amount.toLocaleString()}</td><td><span className="status">{payment.status}</span></td>
          <td><button className="secondary" onClick={() => dispatch(selectPayment(payment.id))}>Select</button></td>
        </tr>)}
      </tbody></table>
      {selected && <div className="metrics"><div className="metric"><strong>{selected.id}</strong><span>Selected payment</span></div><div className="metric"><strong>{selected.status}</strong><span>Current status</span></div></div>}
      <div className="inline-actions">
        <button disabled={!selected || selected.status === 'APPROVED'} onClick={() => selected && dispatch(updateStatus({ id: selected.id, status: 'APPROVED' }))}>Approve demo payment</button>
        <button className="secondary" disabled={!selected || selected.status === 'REJECTED'} onClick={() => selected && dispatch(updateStatus({ id: selected.id, status: 'REJECTED' }))}>Reject demo payment</button>
      </div>
      <p className="note">This changes only client-side demo state. Real payment approval requires backend authorization, audit logging, maker-checker controls and durable workflow processing.</p>
    </section>
  );
}
