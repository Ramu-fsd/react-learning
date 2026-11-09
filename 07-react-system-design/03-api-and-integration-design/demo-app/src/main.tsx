import React,{useEffect,useState} from "react";
import ReactDOM from "react-dom/client";
import {listPayments,type Payment} from "./features/payments/api/paymentApi";
import "./styles.css";
function App(){
 const [payments,setPayments]=useState<Payment[]>([]);
 const [loading,setLoading]=useState(true);
 const [message,setMessage]=useState("Loading payment data…");
 async function load(){setLoading(true);setMessage("Loading payment data…");try{const rows=await listPayments();setPayments(rows);setMessage("Showing API data when available; demo data is used if the endpoint is unavailable.");}catch{setMessage("Unable to load payment data. Please retry.");}finally{setLoading(false);}}
 useEffect(()=>{void load();},[]);
 return <main><header><small>API INTEGRATION LAB</small><h1>Payment status</h1><p>Shared transport client · feature API module · explicit loading and retry states</p></header><section className="panel"><div className="row"><h2>Recent payments</h2><button onClick={()=>void load()} disabled={loading}>Refresh</button></div>{loading?<p>Loading records…</p>:payments.map(p=><article key={p.id}><b>{p.id}</b><span>₹{p.amount.toLocaleString("en-IN")}</span><em>{p.status}</em></article>)}<p className="hint" role="status">{message}</p></section><footer>Demo uses synthetic fallback data. Configure a backend endpoint to connect a service.</footer></main>
}
ReactDOM.createRoot(document.getElementById("root")!).render(<React.StrictMode><App/></React.StrictMode>);
