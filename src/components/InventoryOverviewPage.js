import { useState } from "react";
import SummaryCard from "./SummaryCard";
import InventoryFilters from "./InventoryFilters";
import InventoryTable from "./InventoryTable";
import AddProductForm from "./AddProductForm";
import { getStockStatus, companies, warehouses, bookings } from "../data";
import "./Inventory.css";

const initialFilters = {
  search: "",
  company: "All",
  warehouse: "All",
  status: "All",
};

function InventoryOverviewPage({ products, currentUser, onAddProduct }) {
  const [filters, setFilters] = useState(initialFilters);

  function handleFilterChange(e) {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleClearFilters() {
    setFilters(initialFilters);
  }

  // Who is viewing?
  const isAdmin = currentUser === "admin";
  const currentCompany = companies.find((c) => c.id === currentUser);

  // Admin sees all products, a customer only sees their own
  const visibleProducts = isAdmin
    ? products
    : products.filter((product) => product.companyId === currentUser);

  // Summary numbers
  const totalProducts = visibleProducts.length;

  const totalUnits = visibleProducts.reduce(
    (acc, product) => acc + product.quantity,
    0
  );

  const lowStockCount = visibleProducts.filter(
    (product) => getStockStatus(product) === "Low Stock"
  ).length;

  const outOfStockCount = visibleProducts.filter(
    (product) => getStockStatus(product) === "Out of Stock"
  ).length;

  // Products that match the filters (for the table)
  const searchText = filters.search.toLowerCase();

  const filteredProducts = visibleProducts.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchText) ||
      product.sku.toLowerCase().includes(searchText);
    const matchesCompany =
      !isAdmin || filters.company === "All" || product.companyId === filters.company;
    const matchesWarehouse =
      !isAdmin || filters.warehouse === "All" || product.warehouseId === filters.warehouse;
    const matchesStatus =
      filters.status === "All" || getStockStatus(product) === filters.status;

    return matchesSearch && matchesCompany && matchesWarehouse && matchesStatus;
  });

  return (
    <div className="inventory-page">
      <h1>
        {isAdmin ? "Inventory Overview" : `My Inventory – ${currentCompany.name}`}
      </h1>

      <div className="summary-row">
        <SummaryCard label="Total Products" value={totalProducts} />
        <SummaryCard label="Total Units Stored" value={totalUnits} />
        <SummaryCard label="Low Stock" value={lowStockCount} color="orange" />
        <SummaryCard label="Out of Stock" value={outOfStockCount} color="red" />
      </div>

      <h2 className="section-title">{isAdmin ? "All Products" : "My Products"}</h2>

      <InventoryFilters
        filters={filters}
        companies={companies}
        warehouses={warehouses}
        isAdmin={isAdmin}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
      />

      <p className="result-count">
        Showing {filteredProducts.length} of {visibleProducts.length} products
      </p>

      <InventoryTable
        products={filteredProducts}
        companies={companies}
        warehouses={warehouses}
      />

      {isAdmin && (
        <>
          <h2 className="section-title">Add New Product</h2>
          <AddProductForm
            products={products}
            companies={companies}
            warehouses={warehouses}
            bookings={bookings}
            onAddProduct={onAddProduct}
          />
        </>
      )}
    </div>
  );
}

export default InventoryOverviewPage;