import { useState } from 'react';

export function ConditionalRenderingExample() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  let content;
  if (isLoading) {
    content = <p role="status">Loading account information…</p>;
  } else if (hasError) {
    content = <p role="alert">Unable to load account information.</p>;
  } else {
    content = <p className="success-message">Account information loaded.</p>;
  }

  return (
    <article className="example-card">
      <h3>Conditional UI states</h3>
      {content}
      <div className="button-row">
        <button onClick={() => { setIsLoading(true); setHasError(false); }}>
          Loading
        </button>
        <button onClick={() => { setIsLoading(false); setHasError(true); }}>
          Error
        </button>
        <button onClick={() => { setIsLoading(false); setHasError(false); }}>
          Success
        </button>
      </div>
    </article>
  );
}
