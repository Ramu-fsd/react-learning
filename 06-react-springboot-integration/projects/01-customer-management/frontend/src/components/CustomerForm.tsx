import { useEffect, useState, type FormEvent } from "react";
import type { Customer, CustomerRequest, CustomerStatus } from "../types/customer";

interface Props {
  customer: Customer | null;
  saving: boolean;
  onCancel: () => void;
  onSave: (payload: CustomerRequest) => Promise<void>;
}

export default function CustomerForm({ customer, saving, onCancel, onSave }: Props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<CustomerStatus>("ACTIVE");
  const [error, setError] = useState("");

  useEffect(() => {
    setFullName(customer?.fullName ?? "");
    setEmail(customer?.email ?? "");
    setStatus(customer?.status ?? "ACTIVE");
    setError("");
  }, [customer]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!fullName.trim() || !email.trim()) {
      setError("Enter the customer's name and email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    try {
      await onSave({ fullName: fullName.trim(), email: email.trim(), status });
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Unable to save customer.");
    }
  }

  return (
    <form className="customer-form" onSubmit={submit}>
      <div className="form-heading">
        <div>
          <p className="eyebrow">{customer ? "UPDATE RECORD" : "NEW RECORD"}</p>
          <h2>{customer ? "Edit customer" : "Add customer"}</h2>
        </div>
        <button className="icon-button" type="button" onClick={onCancel} aria-label="Close form">×</button>
      </div>
      <label>Full name<input value={fullName} onChange={e => setFullName(e.target.value)} maxLength={80} required /></label>
      <label>Email address<input type="email" value={email} onChange={e => setEmail(e.target.value)} maxLength={120} required /></label>
      <label>Status
        <select value={status} onChange={e => setStatus(e.target.value as CustomerStatus)}>
          <option value="ACTIVE">Active</option>
          <option value="INACTIVE">Inactive</option>
        </select>
      </label>
      {error && <p className="form-error" role="alert">{error}</p>}
      <div className="form-actions">
        <button className="button secondary" type="button" onClick={onCancel}>Cancel</button>
        <button className="button primary" type="submit" disabled={saving}>{saving ? "Saving…" : "Save customer"}</button>
      </div>
    </form>
  );
}
