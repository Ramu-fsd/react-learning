const alerts = [
  { id: 'FRD-501', merchant: 'Orion Electronics', score: 92, reason: 'Unusual transaction velocity' },
  { id: 'FRD-502', merchant: 'Metro Travel', score: 78, reason: 'Device and location mismatch' },
  { id: 'FRD-503', merchant: 'Aster Retail', score: 66, reason: 'Deviation from spending pattern' },
];

export default function FraudReview() {
  return (
    <div>
      <p className="feature-intro">Illustrative fraud-review queue. Risk scores are mock values, not a real fraud model.</p>
      <div className="alert-grid">
        {alerts.map((alert) => (
          <article className="alert-card" key={alert.id}>
            <div><strong>{alert.id}</strong><span className="risk-score">Risk {alert.score}/100</span></div>
            <h3>{alert.merchant}</h3>
            <p>{alert.reason}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
