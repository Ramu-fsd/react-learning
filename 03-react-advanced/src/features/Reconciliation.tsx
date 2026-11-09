const batches = [
  { id: 'REC-2026-1109-A', matched: 12840, exceptions: 12, total: 12852 },
  { id: 'REC-2026-1109-B', matched: 9740, exceptions: 4, total: 9744 },
  { id: 'REC-2026-1109-C', matched: 8021, exceptions: 31, total: 8052 },
];

export default function Reconciliation() {
  return (
    <div className="table-wrap">
      <table>
        <thead><tr><th>Batch</th><th>Matched</th><th>Exceptions</th><th>Total records</th></tr></thead>
        <tbody>{batches.map((batch) => (
          <tr key={batch.id}>
            <td><strong>{batch.id}</strong></td>
            <td>{batch.matched.toLocaleString('en-IN')}</td>
            <td className="exception-count">{batch.exceptions}</td>
            <td>{batch.total.toLocaleString('en-IN')}</td>
          </tr>
        ))}</tbody>
      </table>
    </div>
  );
}
