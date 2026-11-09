import type { ReactNode } from 'react';

function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="example-card">
      <h3>{title}</h3>
      {children}
    </article>
  );
}

export function CompositionExample() {
  return (
    <div className="example-grid">
      <Panel title="Account summary">
        <p>Available balance: <strong>₹1,25,450.75</strong></p>
      </Panel>
      <Panel title="Next action">
        <p>Review pending transactions before end of day.</p>
      </Panel>
    </div>
  );
}
