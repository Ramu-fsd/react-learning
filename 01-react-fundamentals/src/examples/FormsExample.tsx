import { useState, type FormEvent } from 'react';

interface BeneficiaryForm {
  name: string;
  accountNumber: string;
}

export function FormsExample() {
  const [form, setForm] = useState<BeneficiaryForm>({
    name: '',
    accountNumber: '',
  });
  const [submittedName, setSubmittedName] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmittedName(form.name.trim());
  }

  return (
    <article className="example-card">
      <h3>Add a beneficiary (demo)</h3>
      <form onSubmit={handleSubmit} className="beneficiary-form">
        <label>
          Beneficiary name
          <input
            value={form.name}
            onChange={(event) => {
              setForm((current) => ({ ...current, name: event.target.value }));
            }}
            required
            minLength={2}
            placeholder="Enter full name"
          />
        </label>
        <label>
          Account number
          <input
            value={form.accountNumber}
            onChange={(event) => {
              setForm((current) => ({
                ...current,
                accountNumber: event.target.value,
              }));
            }}
            required
            minLength={6}
            inputMode="numeric"
            placeholder="Enter account number"
          />
        </label>
        <button type="submit">Save beneficiary</button>
      </form>
      {submittedName && (
        <p className="success-message" role="status">
          Demo beneficiary details captured for {submittedName}. No data was sent to a server.
        </p>
      )}
    </article>
  );
}
