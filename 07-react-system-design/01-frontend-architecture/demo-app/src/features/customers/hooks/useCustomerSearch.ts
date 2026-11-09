import { useMemo, useState } from "react";
import { customers } from "../data/customers";

export function useCustomerSearch() {
  const [query, setQuery] = useState("");
  const filteredCustomers = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return customers;
    return customers.filter((customer) =>
      [customer.id, customer.name, customer.email, customer.segment]
        .some((value) => value.toLowerCase().includes(normalized))
    );
  }, [query]);

  return { query, setQuery, customers: filteredCustomers };
}
