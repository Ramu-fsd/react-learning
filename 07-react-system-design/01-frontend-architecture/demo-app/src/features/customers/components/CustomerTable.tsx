import type { Customer } from "../types/customer";
import { StatusBadge } from "../../../shared/components/StatusBadge";

interface CustomerTableProps {
  customers: Customer[];
}

export function CustomerTable({ customers }: CustomerTableProps) {
  if (customers.length === 0) {
    return <div className="empty-state">No customers match your search.</div>;
  }

  return (
    <div className="table-wrap">
      <table>
        <thead><tr><th>Customer</th><th>Customer ID</th><th>Segment</th><th>Status</th></tr></thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td><strong>{customer.name}</strong><small>{customer.email}</small></td>
              <td>{customer.id}</td>
              <td>{customer.segment}</td>
              <td><StatusBadge status={customer.status} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
