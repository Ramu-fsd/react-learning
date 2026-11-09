import type { CustomerStatus } from "../../features/customers/types/customer";

export function StatusBadge({ status }: { status: CustomerStatus }) {
  return <span className={`status status-${status.toLowerCase()}`}>{status}</span>;
}
