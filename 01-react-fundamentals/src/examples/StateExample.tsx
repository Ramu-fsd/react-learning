import { useState } from 'react';

export function StateExample() {
  const [count, setCount] = useState(0);

  return (
    <article className="example-card">
      <h3>Local state</h3>
      <p className="large-number">{count}</p>
      <div className="button-row">
        <button onClick={() => setCount((current) => current - 1)}>Decrease</button>
        <button onClick={() => setCount(0)} className="button-secondary">Reset</button>
        <button onClick={() => setCount((current) => current + 1)}>Increase</button>
      </div>
      <p className="hint">The functional updater uses the previous state value.</p>
    </article>
  );
}
