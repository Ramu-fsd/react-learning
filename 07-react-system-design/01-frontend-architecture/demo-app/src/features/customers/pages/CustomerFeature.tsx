import { CustomerTable } from "../components/CustomerTable";
import { useCustomerSearch } from "../hooks/useCustomerSearch";

export function CustomerFeature() {
  const { query, setQuery, customers } = useCustomerSearch();

  return (
    <section className="panel">
      <div className="section-heading">
        <div>
          <span className="eyebrow">CUSTOMER DOMAIN</span>
          <h2>Customer directory</h2>
          <p>Search across customer identity, contact and segment fields.</p>
        </div>
        <span className="result-count">{customers.length} records</span>
      </div>
      <label className="search-label" htmlFor="customer-search">Search customers</label>
      <input
        id="customer-search"
        className="search-input"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search by name, ID, email or segment"
      />
      <CustomerTable customers={customers} />
    </section>
  );
}
