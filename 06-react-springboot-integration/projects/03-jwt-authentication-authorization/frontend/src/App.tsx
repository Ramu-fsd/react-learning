import { useState } from "react";
import { callApi, getPublicInfo } from "./api";

type Result = { status: number; body: unknown } | null;
const pretty = (value: unknown) => JSON.stringify(value, null, 2);

export default function App() {
  const [token, setToken] = useState("");
  const [result, setResult] = useState<Result>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function run(action: () => Promise<Result>) {
    setBusy(true); setError("");
    try { setResult(await action()); }
    catch (e) { setError(e instanceof Error ? e.message : "Request failed"); setResult(null); }
    finally { setBusy(false); }
  }

  const protectedCall = (path: string, method = "GET", body?: unknown) => {
    if (!token.trim()) { setError("Enter a short-lived test access token from your non-production OIDC provider."); return; }
    void run(() => callApi(path, token.trim(), method, body));
  };

  return <main className="shell">
    <header><div className="brand"><span className="logo">N</span><span>NORTHSTAR <small>IDENTITY & ACCESS</small></span></div><span className="tag">SECURITY LEARNING LAB</span></header>
    <section className="hero"><p className="eyebrow">OAUTH 2.0 · OPENID CONNECT · JWT</p><h1>Authentication & authorization</h1><p>Explore how a React client calls Spring Security-protected APIs using bearer access tokens.</p></section>
    <div className="warning"><strong>Learning demo:</strong> This token field is not a login screen. Use only a short-lived, non-production test token. Never enter production credentials or tokens.</div>
    <section className="panel">
      <div className="panel-title"><div><p className="eyebrow">CLIENT CREDENTIAL CONTEXT</p><h2>Test access token</h2></div><span className="badge">Not persisted</span></div>
      <label htmlFor="token">Bearer access token</label>
      <textarea id="token" rows={3} value={token} onChange={e=>setToken(e.target.value)} placeholder="Paste a short-lived test JWT from your development identity provider…"/>
      <p className="hint">The token stays in component memory and is not saved to localStorage or cookies.</p>
    </section>
    <section className="panel">
      <div className="panel-title"><div><p className="eyebrow">API ACCESS TESTS</p><h2>Try an endpoint</h2></div></div>
      <div className="endpoint-list">
        <div className="endpoint"><div><span className="method public">GET</span><code>/api/public/info</code><small>Public · no token required</small></div><button onClick={()=>void run(getPublicInfo)} disabled={busy}>Call endpoint</button></div>
        <div className="endpoint"><div><span className="method">GET</span><code>/api/me</code><small>Authenticated · any valid access token</small></div><button onClick={()=>protectedCall("/me")} disabled={busy}>Call endpoint</button></div>
        <div className="endpoint"><div><span className="method">GET</span><code>/api/operations</code><small>Requires operations.read scope</small></div><button onClick={()=>protectedCall("/operations")} disabled={busy}>Call endpoint</button></div>
        <div className="endpoint"><div><span className="method post">POST</span><code>/api/operations/approve</code><small>Requires operations.approve scope · illustrative only</small></div><button onClick={()=>protectedCall("/operations/approve","POST",{reference:"DEMO-OPS-1001"})} disabled={busy}>Call endpoint</button></div>
      </div>
    </section>
    <section className="panel response-panel">
      <div className="panel-title"><div><p className="eyebrow">HTTP RESPONSE</p><h2>Result inspector</h2></div>{result && <span className={`http-status ${result.status<300?"ok":result.status<500?"client":"server"}`}>HTTP {result.status}</span>}</div>
      {busy ? <p className="placeholder">Request in progress…</p> : error ? <p className="error" role="alert">{error}</p> : result ? <pre>{pretty(result.body)}</pre> : <p className="placeholder">Choose an endpoint above to inspect its response.</p>}
    </section>
    <footer>Northstar Financial · Security learning sample · No real authentication or financial approval is performed</footer>
  </main>;
}
