export function JsxExample() {
  const account = {
    holder: 'Alex Morgan',
    accountNumber: '•••• 4821',
    availableBalance: 125_450.75,
  };

  return (
    <article className="example-card">
      <p className="eyebrow">JSX + JavaScript expressions</p>
      <h3>{account.holder}</h3>
      <p>Account {account.accountNumber}</p>
      <strong className="balance">
        {account.availableBalance.toLocaleString('en-IN', {
          style: 'currency',
          currency: 'INR',
        })}
      </strong>
    </article>
  );
}
