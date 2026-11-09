interface WelcomeCardProps {
  name: string;
  role: string;
  isActive?: boolean;
}

function WelcomeCard({ name, role, isActive = true }: WelcomeCardProps) {
  return (
    <article className="example-card">
      <h3>Welcome, {name}</h3>
      <p>{role}</p>
      <p>{isActive ? 'Account active' : 'Account inactive'}</p>
    </article>
  );
}

export function PropsExample() {
  return (
    <div className="example-grid">
      <WelcomeCard name="Priya" role="Relationship Manager" />
      <WelcomeCard name="Daniel" role="Auditor" isActive={false} />
    </div>
  );
}
