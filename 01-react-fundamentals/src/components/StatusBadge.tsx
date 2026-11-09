interface StatusBadgeProps {
  status: 'Completed' | 'Pending' | 'Failed';
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return <span className={`status status-${status.toLowerCase()}`}>{status}</span>;
}
