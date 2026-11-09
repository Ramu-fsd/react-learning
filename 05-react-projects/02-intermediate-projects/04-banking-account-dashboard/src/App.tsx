import { useMemo, useState } from 'react';
type Account={id:string;name:string;number:string;type:string;balance:number;currency:string};
type Tx={id:string;account:string;description:string;date:string;amount:number;direction:'DEBIT'|'CREDIT'};
const accounts:Account[]=[
{id:'A-001',name:'Primary Checking',number:'•••• 4821',type:'CHECKING',balance:18450.75,currency:'USD'},
{id:'A-002',name:'Savings Plus',number:'•••• 1937',type:'SAVINGS',balance:42800,currency:'USD'},
{id:'A-003',name:'Business Reserve',number:'•••• 7602',type:'BUSINESS',balance:125600.2,currency:'USD'}];
const txs:Tx[]=[
{id:'DBT-9001',account:'Primary Checking',description:'Card purchase · Market Street',date:'2026-11-08',amount:86.45,direction:'DEBIT'},
{id:'CRD-9002',account:'Primary Checking',description:'Payroll credit',date:'2026-11-07',amount:5200,direction:'CREDIT'},
{id:'DBT-9003',account:'Savings Plus',description:'Monthly transfer',date:'2026-11-06',amount:750,direction:'DEBIT'},
{id:'CRD-9004',account:'Business Reserve',description:'Client settlement',date:'2026-11-05',amount:12400,direction:'CREDIT'},
{id:'DBT-9005',account:'Primary Checking',description:'Utility payment',date:'2026-11-04',amount:142.8,direction:'DEBIT'},
{id:'DBT-9006',account:'Business Reserve',description:'Vendor payment',date:'2026-11-03',amount:2300,direction:'DEBIT'}];
export default function App(){
 const [visible,setVisible]=useState(false),[query,setQuery]=useState(''),[account,setAccount]=useState('ALL');
 const filtered=useMemo(()=>txs.filter(t=>(account==='ALL'||t.account===account)&&`${t.id} ${t.description} ${t.account}`.toLowerCase().includes(query.toLowerCase())),[query,account]);
 const money=(v:number)=>visible?`$${v.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}`:'••••••••';
 return <div className="shell"><header className="header"><span className="brand">Northstar Digital Banking</span><small>Personal & business banking overview</small></header><main className="container"><div className="toolbar" style={{justifyContent:'space-between'}}><div><h1>Good morning, Alex</h1><p className="sub">Here is your account overview.</p></div><button className="secondary" onClick={()=>setVisible(v=>!v)}>{visible?'Hide balances':'Show balances'}</button></div>
 <div className="grid"><div className="card metric"><span>Total available balance</span><strong>{money(accounts.reduce((s,a)=>s+a.balance,0))}</strong></div><div className="card metric"><span>Accounts</span><strong>{accounts.length}</strong></div><div className="card metric"><span>Recent transactions</span><strong>{txs.length}</strong></div></div>
 <h2>Your accounts</h2><div className="grid">{accounts.map(a=><article className="card" key={a.id}><div className="toolbar" style={{justifyContent:'space-between',marginTop:0}}><strong>{a.name}</strong><span className="badge">{a.type}</span></div><small>{a.number}</small><div style={{fontSize:24,fontWeight:800,marginTop:17}}>{money(a.balance)}</div><small>{a.currency} · Available balance</small></article>)}</div>
 <section className="panel"><h2>Recent activity</h2><div className="toolbar"><input placeholder="Search transactions" value={query} onChange={e=>setQuery(e.target.value)}/><select value={account} onChange={e=>setAccount(e.target.value)}><option value="ALL">All accounts</option>{accounts.map(a=><option key={a.id}>{a.name}</option>)}</select></div><div style={{overflowX:'auto'}}><table><thead><tr><th>Reference</th><th>Description</th><th>Account</th><th>Date</th><th>Amount</th></tr></thead><tbody>{filtered.map(t=><tr key={t.id}><td>{t.id}</td><td>{t.description}</td><td>{t.account}</td><td>{t.date}</td><td style={{fontWeight:700,color:t.direction==='CREDIT'?'#087443':'#b42318'}}>{t.direction==='CREDIT'?'+':'−'}{money(t.amount)}</td></tr>)}</tbody></table>{filtered.length===0&&<div className="empty">No transactions found.</div>}</div></section>
 <p className="sub" style={{marginTop:16}}>Synthetic account data only. Balance masking is a presentation feature, not a security control.</p></main><footer>Ramu Boya · React portfolio project</footer></div>;
}
