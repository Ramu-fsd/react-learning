import { useCallback, useEffect, useState } from "react";
import CustomerForm from "./components/CustomerForm";
import { customerApi } from "./services/customerApi";
import type { Customer, CustomerRequest, PageResponse } from "./types/customer";

const PAGE_SIZE = 8;

export default function App() {
  const [data, setData] = useState<PageResponse<Customer> | null>(null);
  const [page, setPage] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [editing, setEditing] = useState<Customer | null>(null);

  const loadCustomers = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      setData(await customerApi.list(page, PAGE_SIZE, search));
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Unable to load customers.");
    } finally {
      setLoading(false);
    }
  }, [page, search]);

  useEffect(() => { void loadCustomers(); }, [loadCustomers]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setPage(0);
      setSearch(searchInput.trim());
    }, 300);
    return () => window.clearTimeout(timer);
  }, [searchInput]);

  async function saveCustomer(payload: CustomerRequest) {
    setSaving(true);
    try {
      if (editing) await customerApi.update(editing.id, payload);
      else await customerApi.create(payload);
      setFormOpen(false);
      setEditing(null);
      await loadCustomers();
    } finally {
      setSaving(false);
    }
  }

  async function deleteCustomer(customer: Customer) {
    if (!window.confirm(`Delete ${customer.fullName}?`)) return;
    try {
      await customerApi.remove(customer.id);
      if (data?.content.length === 1 && page > 0) setPage(page - 1);
      else await loadCustomers();
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Unable to delete customer.");
    }
  }

  function openCreate() {
    setEditing(null);
    setFormOpen(true);
  }

  function openEdit(customer: Customer) {
    setEditing(customer);
    setFormOpen(true);
  }

  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="Customer Operations home">
          <span className="brand-mark">N</span>
          <span>NORTHSTAR <small>FINANCIAL</small></span>
        </a>
        <span className="environment"><i /> LOCAL LEARNING ENVIRONMENT</span>
      </header>

      <section className="page-intro">
        <div>
          <p className="eyebrow">CUSTOMER OPERATIONS / DIRECTORY</p>
          <h1>Customer management</h1>
          <p className="subtitle">Manage customer records through a React interface and Spring Boot REST API.</p>
        </div>
        <button className="button primary" onClick={openCreate}>＋ Add customer</button>
      </section>

      <section className="metric-grid" aria-label="Customer metrics">
        <article className="metric-card"><span>Total matching records</span><strong>{data?.totalElements ?? "—"}</strong><small>Based on current search</small></article>
        <article className="metric-card"><span>Active on this page</span><strong>{data?.content.filter(c => c.status === "ACTIVE").length ?? "—"}</strong><small>Current page only</small></article>
        <article className="metric-card"><span>API status</span><strong className={error ? "status-down" : "status-up"}>{error ? "Attention" : loading ? "Checking" : "Connected"}</strong><small>Spring Boot · localhost:8080</small></article>
      </section>

      <section className="content-card">
        <div className="table-toolbar">
          <div><h2>Customer directory</h2><p>Search by name, email or customer ID.</p></div>
          <div className="search-box"><span>⌕</span><input aria-label="Search customers" placeholder="Search customers…" value={searchInput} onChange={e => setSearchInput(e.target.value)} /></div>
        </div>

        {error && <div className="error-banner" role="alert"><span>{error}</span><button onClick={() => void loadCustomers()}>Retry</button></div>}

        <div className="table-wrap">
          <table>
            <thead><tr><th>CUSTOMER</th><th>CUSTOMER ID</th><th>STATUS</th><th className="actions-heading">ACTIONS</th></tr></thead>
            <tbody>
              {loading ? <tr><td colSpan={4} className="table-message">Loading customer records…</td></tr>
                : data?.content.length ? data.content.map(customer => (
                  <tr key={customer.id}>
                    <td><div className="customer-cell"><span className="avatar">{customer.fullName.split(" ").map(part => part[0]).slice(0, 2).join("").toUpperCase()}</span><span><strong>{customer.fullName}</strong><small>{customer.email}</small></span></div></td>
                    <td><code>{customer.id}</code></td>
                    <td><span className={`status-pill ${customer.status.toLowerCase()}`}><i />{customer.status}</span></td>
                    <td><div className="row-actions"><button onClick={() => openEdit(customer)}>Edit</button><button className="delete-action" onClick={() => void deleteCustomer(customer)}>Delete</button></div></td>
                  </tr>
                )) : <tr><td colSpan={4} className="table-message">No customers found. Try another search or add a customer.</td></tr>}
            </tbody>
          </table>
        </div>

        <footer className="table-footer">
          <span>{data ? `Showing ${data.totalElements === 0 ? 0 : page * PAGE_SIZE + 1}–${Math.min((page + 1) * PAGE_SIZE, data.totalElements)} of ${data.totalElements}` : " "}</span>
          <div className="pagination">
            <button disabled={page === 0 || loading} onClick={() => setPage(p => p - 1)}>Previous</button>
            <span>Page {data ? page + 1 : "—"} of {data ? Math.max(data.totalPages, 1) : "—"}</span>
            <button disabled={!data || page + 1 >= data.totalPages || loading} onClick={() => setPage(p => p + 1)}>Next</button>
          </div>
        </footer>
      </section>

      <footer className="app-footer"><span>Northstar Financial · Customer Operations</span><span>Portfolio learning application · Synthetic data only</span></footer>

      {formOpen && <div className="modal-backdrop" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) setFormOpen(false); }}>
        <div className="modal-panel" role="dialog" aria-modal="true" aria-label={editing ? "Edit customer" : "Add customer"}>
          <CustomerForm customer={editing} saving={saving} onCancel={() => setFormOpen(false)} onSave={saveCustomer} />
        </div>
      </div>}
    </main>
  );
}
