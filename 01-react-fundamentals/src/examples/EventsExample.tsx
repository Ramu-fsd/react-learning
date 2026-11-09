import { useState } from 'react';

export function EventsExample() {
  const [message, setMessage] = useState('No action selected yet.');

  function handleApprove() {
    setMessage('Payment approval action selected.');
  }

  return (
    <article className="example-card">
      <h3>Event handling</h3>
      <p>{message}</p>
      <button onClick={handleApprove}>Approve payment</button>
      <button
        className="button-secondary"
        onClick={() => setMessage('No action selected yet.')}
      >
        Clear
      </button>
    </article>
  );
}
