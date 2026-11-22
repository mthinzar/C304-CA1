import InventoryRow from "./InventoryRow";

function InventoryTable({ products, companies, warehouses }) {
  if (products.length === 0) {
    return <p className="empty-message">No products match your search.</p>;
  }

  return (
    <div className="table-wrapper">
      <table className="inventory-table">
        <thead>
          <tr>
            <th>SKU</th>
            <th>Product</th>
            <th>Company</th>
            <th>Location</th>
            <th>Quantity</th>
            <th>Min Level</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            const company = companies.find((c) => c.id === product.companyId);
            const warehouse = warehouses.find((w) => w.id === product.warehouseId);

            return (
              <InventoryRow
                key={product.id}
                product={product}
                companyName={company.name}
                warehouseName={warehouse.name}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default InventoryTable;