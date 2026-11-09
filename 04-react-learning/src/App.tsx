import { NavLink, Route, Routes } from 'react-router-dom';
import ApiIntegration from './api-integration/ApiIntegration';
import BeneficiaryForm from './forms-validation/BeneficiaryForm';
import HooksExamples from './hooks-examples/HooksExamples';
import PerformanceDemo from './performance-optimization/PerformanceDemo';
import RoutingHome from './routing/RoutingHome';
import PaymentStateDemo from './state-management/PaymentStateDemo';

const modules = [
  { to: '/', label: 'Overview' },
  { to: '/api-integration', label: 'API integration' },
  { to: '/forms-validation', label: 'Forms & validation' },
  { to: '/hooks-examples', label: 'Hooks' },
  { to: '/performance', label: 'Performance' },
  { to: '/routing', label: 'Routing' },
  { to: '/state-management', label: 'State management' },
];

function Overview() {
  return (
    <section className="panel">
      <p className="eyebrow">REACT LEARNING SERIES</p>
      <h2>Practical React patterns for enterprise applications</h2>
      <p>Explore focused examples based on payment operations, beneficiary onboarding and transaction monitoring.</p>
      <div className="module-grid">
        {modules.slice(1).map((item) => (
          <NavLink className="module-card" key={item.to} to={item.to}>
            <strong>{item.label}</strong>
            <span>Open learning module →</span>
          </NavLink>
        ))}
      </div>
      <p className="note">All data is simulated. Do not use this demo as a real banking application.</p>
    </section>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div><span className="brand-mark">RB</span><strong>React Learning Lab</strong></div>
        <span className="topbar-caption">Enterprise & Fintech Examples</span>
      </header>
      <nav className="nav">
        {modules.map((item) => <NavLink end={item.to === '/'} key={item.to} to={item.to}>{item.label}</NavLink>)}
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/api-integration" element={<ApiIntegration />} />
          <Route path="/forms-validation" element={<BeneficiaryForm />} />
          <Route path="/hooks-examples" element={<HooksExamples />} />
          <Route path="/performance" element={<PerformanceDemo />} />
          <Route path="/routing/*" element={<RoutingHome />} />
          <Route path="/state-management" element={<PaymentStateDemo />} />
          <Route path="*" element={<section className="panel"><h2>Page not found</h2><p>Choose a module from the navigation.</p></section>} />
        </Routes>
      </main>
      <footer>Learning project · React 19 · TypeScript · Author: Ramu Boya</footer>
    </div>
  );
}
