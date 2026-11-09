import type { ReactNode } from 'react';

type Role = 'Operations' | 'Risk Analyst' | 'Auditor';

export function RoleGate({
  allowedRoles,
  currentRole,
  children,
}: {
  allowedRoles: Role[];
  currentRole: Role;
  children: ReactNode;
}) {
  if (!allowedRoles.includes(currentRole)) {
    return <p className="restricted" role="status">This action is not available for the selected demo role.</p>;
  }

  return <>{children}</>;
}
