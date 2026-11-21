const statusOptions = ["All", "In Stock", "Low Stock", "Out of Stock"];

function InventoryFilters({ filters, companies, warehouses, isAdmin, onFilterChange, onClearFilters }) {
  return (
    <div className="filters">
      <input
        type="text"
        name="search"
        placeholder="Search by product name or SKU"
        value={filters.search}
        onChange={onFilterChange}
      />

      {isAdmin && (
        <>
          <select name="company" value={filters.company} onChange={onFilterChange}>
            <option value="All">All companies</option>
            {companies.map((company) => (
              <option key={company.id} value={company.id}>
                {company.name}
              </option>
            ))}
          </select>

          <select name="warehouse" value={filters.warehouse} onChange={onFilterChange}>
            <option value="All">All warehouses</option>
            {warehouses.map((warehouse) => (
              <option key={warehouse.id} value={warehouse.id}>
                {warehouse.name} ({warehouse.size})
              </option>
            ))}
          </select>
        </>
      )}

      <select name="status" value={filters.status} onChange={onFilterChange}>
        {statusOptions.map((status) => (
          <option key={status} value={status}>
            {status === "All" ? "All statuses" : status}
          </option>
        ))}
      </select>

      <button type="button" onClick={onClearFilters}>
        Clear
      </button>
    </div>
  );
}

export default InventoryFilters;