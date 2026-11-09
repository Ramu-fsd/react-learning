import React from "react";
import ReactDOM from "react-dom/client";
import { createContext, useContext, useMemo, useState } from "react";
import "./styles.css";

type Theme = "light" | "dark";
const ThemeContext = createContext<{theme: Theme; toggle: () => void} | null>(null);
function ThemeProvider({children}: React.PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>("light");
  const value = useMemo(() => ({theme, toggle: () => setTheme(t => t === "light" ? "dark" : "light")}), [theme]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) throw new Error("ThemeProvider missing");
  return value;
}
function PaymentQueue() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<string | null>(null);
  const rows = [{id:"PAY-2041",amount:"₹84,500",status:"Pending"},{id:"PAY-2042",amount:"₹12,200",status:"Approved"},{id:"PAY-2043",amount:"₹2,40,000",status:"Pending"}];
  const visible = rows.filter(r => filter === "All" || r.status === filter);
  return <section className="panel"><div className="heading"><div><small>FEATURE-LOCAL STATE</small><h2>Payment review queue</h2></div><select value={filter} onChange={e=>setFilter(e.target.value)}><option>All</option><option>Pending</option><option>Approved</option></select></div>
    {visible.map(r=><button className={selected===r.id?"payment selected":"payment"} key={r.id} onClick={()=>setSelected(r.id)}><span><b>{r.id}</b><small>{r.status}</small></span><strong>{r.amount}</strong></button>)}
    <p className="hint">Selected payment: {selected ?? "None"} · Filter and selection are local to this feature.</p>
  </section>;
}
function App() {
  const {theme,toggle}=useTheme();
  return <main className={theme}><header><div><small>REACT STATE MANAGEMENT</small><h1>Operations workspace</h1><p>Context for shared preferences; local state for feature interactions.</p></div><button onClick={toggle}>Switch to {theme==="light"?"dark":"light"} theme</button></header><PaymentQueue/><footer>Illustrative synthetic data only.</footer></main>;
}
ReactDOM.createRoot(document.getElementById("root")!).render(<React.StrictMode><ThemeProvider><App/></ThemeProvider></React.StrictMode>);
