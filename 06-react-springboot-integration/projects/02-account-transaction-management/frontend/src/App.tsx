import { useEffect, useMemo, useState } from "react";
import { bankingApi } from "./api";
import type { Account, Transaction } from "./types";

const money = (amount: number, currency: string) => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);

export default function App() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [selected, setSelected] = useState("ACC-1001");
  const [rows, setRows] = useState<Transaction[]>([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [totalElements, setTotalElements] = useState(0);
  const [type, setType] = useState("ALL");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [detail, setDetail] = useState<Transaction | null>(null);

  const currentAccount = useMemo(() => accounts.find(a => a.id === selected), [accounts, selected]);

  useEffect(() => {
    bankingApi.accounts().then(setAccounts).catch(e => setError(e.message));
  }, []);

  useEffect(() => {
    if (!selected) return;
    let active = true;
    setLoading(true);
    setError("");
    bankingApi.transactions(selected, page, type, search)
      .then(result => {
        if (!active) return;
        setRows(result.content); setTotalPages(Math.max(1, result.totalPages)); setTotalElements(result.totalElements);
      })
      .catch(e => { if (active) setError(e.message); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [selected, page, type, search]);

  function selectAccount(id: string) { setSelected(id); setPage(0); setDetail(null); }

  return <main className="shell">
    <header className="topbar">
      <div className="brand"><span className="brand-icon">N</span><span>NORTHSTAR <small>FINANCIAL</small></span></div>
      <span className="top-label"><i/> SECURE BANKING EXPERIENCE · DEMO</span>
    </header>
    <section className="intro">
      <div><p className="eyebrow">ACCOUNTS / OVERVIEW</p><h1>Accounts & transactions</h1><p className="muted">A consolidated view of account balances and recent activity.</p></div>
      <span className="date-chip">◷ &nbsp; Account snapshot</span>
    </section>

    {error && <div className="error" role="alert">{error} <button onClick={() => window.location.reload()}>Retry</button></div>}

    <section className="account-grid">
      {accounts.map(account => <button key={account.id} className={`account-card ${selected === account.id ? "selected" : ""}`} onClick={() => selectAccount(account.id)}>
        <div className="account-top"><span className="account-type">{account.accountType} ACCOUNT</span><span className="account-menu">•••</span></div>
        <strong>{account.accountName}</strong><span className="masked">{account.maskedAccountNumber}</span>
        <span className="balance-label">AVAILABLE BALANCE</span><b>{money(account.availableBalance, account.currency)}</b>
        <span className="account-bottom"><span>{account.status}</span><span>View activity ↗</span></span>
      </button>)}
      {!accounts.length && !error && <div className="loading-card">Loading accounts…</div>}
    </section>

    {currentAccount && <section className="activity-card">
      <div className="activity-heading"><div><p className="eyebrow">ACCOUNT ACTIVITY</p><h2>{currentAccount.accountName}</h2><p className="muted">{currentAccount.maskedAccountNumber} · Current balance {money(currentAccount.currentBalance, currentAccount.currency)}</p></div>
        <div className="filters"><input aria-label="Search transactions" placeholder="Search reference or details" value={search} onChange={e => { setSearch(e.target.value); setPage(0); }}/><select aria-label="Transaction type" value={type} onChange={e => { setType(e.target.value); setPage(0); }}><option value="ALL">All activity</option><option value="CREDIT">Credits</option><option value="DEBIT">Debits</option></select></div>
      </div>
      <div className="table-wrap"><table><thead><tr><th>TRANSACTION</th><th>REFERENCE</th><th>DATE</th><th>STATUS</th><th className="amount">AMOUNT</th><th></th></tr></thead><tbody>
        {loading ? <tr><td colSpan={6} className="empty">Loading transactions…</td></tr> :
        rows.length ? rows.map(tx => <tr key={tx.id}>
          <td><div className="tx-name"><span className={`tx-icon ${tx.type.toLowerCase()}`}>{tx.type === "CREDIT" ? "↓" : "↑"}</span><span><b>{tx.description}</b><small>{tx.counterparty}</small></span></div></td>
          <td><code>{tx.reference}</code></td><td>{new Date(`${tx.bookingDate}T00:00:00`).toLocaleDateString("en-US",{month:"short",day:"2-digit",year:"numeric"})}</td>
          <td><span className={`pill ${tx.status.toLowerCase()}`}>{tx.status}</span></td>
          <td className={`amount ${tx.type === "CREDIT" ? "credit" : ""}`}>{tx.type === "CREDIT" ? "+" : "−"}{money(tx.amount,tx.currency)}</td>
          <td><button className="view-button" onClick={() => setDetail(tx)}>Details</button></td>
        </tr>) : <tr><td colSpan={6} className="empty">No transactions match the selected filters.</td></tr>}
      </tbody></table></div>
      <footer className="table-footer"><span>{totalElements} transaction(s)</span><div><button disabled={page===0 || loading} onClick={()=>setPage(p=>p-1)}>Previous</button><span>Page {page+1} of {totalPages}</span><button disabled={page+1>=totalPages || loading} onClick={()=>setPage(p=>p+1)}>Next</button></div></footer>
    </section>}
    <footer className="footnote">Northstar Financial · Synthetic sample data · No real accounts or financial transactions</footer>

    {detail && <div className="overlay" onMouseDown={e=>{if(e.target===e.currentTarget)setDetail(null);}}><section className="detail-panel" role="dialog" aria-modal="true" aria-label="Transaction details">
      <div className="detail-head"><div><p className="eyebrow">TRANSACTION DETAILS</p><h2>{detail.description}</h2></div><button onClick={()=>setDetail(null)}>×</button></div>
      <div className="detail-amount">{detail.type==="CREDIT"?"+":"−"}{money(detail.amount,detail.currency)}</div>
      <dl><dt>Reference</dt><dd>{detail.reference}</dd><dt>Counterparty</dt><dd>{detail.counterparty}</dd><dt>Booking date</dt><dd>{detail.bookingDate}</dd><dt>Transaction type</dt><dd>{detail.type}</dd><dt>Status</dt><dd>{detail.status}</dd><dt>Transaction ID</dt><dd>{detail.id}</dd></dl>
      <button className="close-button" onClick={()=>setDetail(null)}>Close details</button>
    </section></div>}
  </main>;
}
