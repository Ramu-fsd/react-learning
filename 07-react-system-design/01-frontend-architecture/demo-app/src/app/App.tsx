import { useMemo, useState } from "react";
import { CustomerFeature } from "../features/customers";
import { PageShell } from "../shared/components/PageShell";
import { SummaryCard } from "../shared/components/SummaryCard";

export function App() {
  const [activeView, setActiveView] = useState<"customers" | "architecture">("customers");
  const summary = useMemo(() => [
    { label: "Active customers", value: "1,284", detail: "+4.8% this month" },
    { label: "Pending reviews", value: "32", detail: "Across onboarding queues" },
    { label: "Service health", value: "99.95%", detail: "Illustrative availability" }
  ], []);

  return (
    <PageShell>
      <header className="topbar">
        <div>
          <span className="eyebrow">REACT ARCHITECTURE LAB</span>
          <h1>Banking Operations Portal</h1>
          <p>Feature-based modules, reusable UI and explicit boundaries.</p>
        </div>
        <nav aria-label="Main navigation">
          <button className={activeView === "customers" ? "nav active" : "nav"} onClick={() => setActiveView("customers")}>Customers</button>
          <button className={activeView === "architecture" ? "nav active" : "nav"} onClick={() => setActiveView("architecture")}>Architecture</button>
        </nav>
      </header>

      <section className="summary-grid" aria-label="Operational summary">
        {summary.map((item) => <SummaryCard key={item.label} {...item} />)}
      </section>

      {activeView === "customers" ? <CustomerFeature /> : (
        <section className="panel">
          <span className="eyebrow">MODULE BOUNDARIES</span>
          <h2>How this application is organized</h2>
          <div className="architecture-grid">
            <article><h3>app/</h3><p>Bootstrapping, page composition and global navigation.</p></article>
            <article><h3>features/customers/</h3><p>Customer types, filtering behavior and customer-specific UI.</p></article>
            <article><h3>shared/components/</h3><p>Generic visual components reused across business features.</p></article>
            <article><h3>shared/utils/</h3><p>Pure helpers with no dependency on a specific feature.</p></article>
          </div>
          <p className="note">Dependency rule: app can compose features; features can use shared; shared must not import features.</p>
        </section>
      )}
      <footer>Learning demo · Synthetic data only · Not connected to a banking system</footer>
    </PageShell>
  );
}
