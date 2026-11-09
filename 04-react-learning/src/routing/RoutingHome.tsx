import { Link, Route, Routes, useParams } from 'react-router-dom';

const cases = [
  { id: 'CASE-701', title: 'Large-value transfer review', status: 'UNDER_REVIEW' },
  { id: 'CASE-702', title: 'Beneficiary verification', status: 'OPEN' },
];

function CaseList() {
  return (
    <div><h3>Operations cases</h3><table className="data-table"><thead><tr><th>Case ID</th><th>Case</th><th>Status</th></tr></thead><tbody>
      {cases.map((item) => <tr key={item.id}><td><Link to={`cases/${item.id}`}>{item.id}</Link></td><td>{item.title}</td><td><span className="status">{item.status}</span></td></tr>)}
    </tbody></table></div>
  );
}

function CaseDetails() {
  const { caseId } = useParams();
  const item = cases.find((entry) => entry.id === caseId);
  return item ? <div><h3>{item.title}</h3><p>Case reference: {item.id}</p><p>Current status: {item.status}</p><Link to="..">← Back to cases</Link></div> : <p>Case not found.</p>;
}

export default function RoutingHome() {
  return (
    <section className="panel">
      <p className="eyebrow">MODULE 05</p>
      <h2>Routing: operations case workspace</h2>
      <p>Nested routes and URL parameters make operational records directly addressable.</p>
      <nav className="inline-actions"><Link to=".">Case list</Link><Link to="cases/CASE-701">Open CASE-701</Link></nav>
      <div style={{ marginTop: 20 }}><Routes><Route index element={<CaseList />} /><Route path="cases/:caseId" element={<CaseDetails />} /></Routes></div>
    </section>
  );
}
