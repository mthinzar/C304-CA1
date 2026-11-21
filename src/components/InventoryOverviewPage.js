import SummaryCard from "./SummaryCard";
import InventoryTable from "./InventoryTable";
import { getStockStatus, companies, warehouses } from "../data";
import "./Inventory.css";

function InventoryOverviewPage({ products }) {
  const totalProducts = products.length;

  const totalUnits = products.reduce(
    (acc, product) => acc + product.quantity,
    0
  );

  const lowStockCount = products.filter(
    (product) => getStockStatus(product) === "Low Stock"
  ).length;

  const outOfStockCount = products.filter(
    (product) => getStockStatus(product) === "Out of Stock"
  ).length;

  return (
    <div className="inventory-page">
      <h1>Inventory Overview</h1>

      <div className="summary-row">
        <SummaryCard label="Total Products" value={totalProducts} />
        <SummaryCard label="Total Units Stored" value={totalUnits} />
        <SummaryCard label="Low Stock" value={lowStockCount} color="orange" />
        <SummaryCard label="Out of Stock" value={outOfStockCount} color="red" />
        <h2 className="section-title">All Products</h2>
        <InventoryTable
            products={products}
            companies={companies}
            warehouses={warehouses}
        />
      </div>
    </div>
  );
}

export default InventoryOverviewPage;