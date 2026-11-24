import React, { useState } from "react";
import "./App.css";

import Dashboard from "./Dashboard";
import StockMovement from "./StockMovement";
import StockHistory from "./StockHistory";
import DeliveryTracking from "./DeliveryTracking";
import ManageDeliveries from "./ManageDeliveries";

// Mock inventory data
const initialProducts = [
  {
    id: "P001",
    name: "Office Chairs",
    quantity: 150
  },
  {
    id: "P002",
    name: "Office Desks",
    quantity: 80
  },
  {
    id: "P003",
    name: "Monitors",
    quantity: 120
  }
];

// Mock delivery data
const initialDeliveries = [
  {
    id: "D001",
    product: "Office Chairs",
    quantity: 20,
    status: "In Transit"
  },
  {
    id: "D002",
    product: "Monitors",
    quantity: 10,
    status: "Scheduled"
  },
  {
    id: "D003",
    product: "Office Desks",
    quantity: 5,
    status: "Completed"
  }
];

// Delivery status options
const statuses = [
  "Scheduled",
  "In Transit",
  "Arrived",
  "Completed"
];

function App() {

  // Shared state variables
  const [products, setProducts] =
    useState(initialProducts);

  const [deliveries, setDeliveries] =
    useState(initialDeliveries);

  const [history, setHistory] =
    useState([]);

  const [staff, setStaff] =
    useState(false);

  const [page, setPage] =
    useState("Dashboard");

  // Record stock movement
  function handleRecord(id, type, amount, remarks) {

    const product = products.find(
      item => item.id === id
    );

    let balance;

    if (type === "Stock In") {
      balance = product.quantity + amount;
    } else {
      balance = product.quantity - amount;
    }

    // Update inventory quantity
    const updatedProducts = products.map(item => {

      if (item.id === id) {
        return {
          ...item,
          quantity: balance
        };
      }

      return item;
    });

    setProducts(updatedProducts);

    // Create transaction record
    const newRecord = {
      id: "TX" + String(history.length + 1)
        .padStart(3, "0"),

      product: product.name,
      type: type,
      quantity: amount,
      balance: balance,
      remarks: remarks,
      date: new Date().toLocaleDateString()
    };

    // Add transaction to history
    setHistory([
      newRecord,
      ...history
    ]);
  }

  // Update delivery status
  function handleUpdate(id, status) {

    const updatedDeliveries = deliveries.map(item => {

      if (item.id === id) {
        return {
          ...item,
          status: status
        };
      }

      return item;
    });

    setDeliveries(updatedDeliveries);
  }

  // Change user role
  function handleRoleChange(event) {

    setStaff(event.target.value === "Staff");

    setPage("Dashboard");
  }

  return (
    <div className="smartstore">

      {/* Sidebar */}
      <aside className="sidebar">

        <h2 className="logo">SmartStore</h2>

        <p className="logo-description">
          Warehouse Management
        </p>

        <label htmlFor="role">User Role</label>

        <select
          id="role"
          value={staff ? "Staff" : "Customer"}
          onChange={handleRoleChange}
        >
          <option value="Customer">
            Customer
          </option>

          <option value="Staff">
            Staff / Admin
          </option>
        </select>

        {/* Navigation */}
        <nav>

          <button
            className={
              page === "Dashboard"
                ? "nav-button selected"
                : "nav-button"
            }
            onClick={() => setPage("Dashboard")}
          >
            Dashboard
          </button>

          {staff && (
            <button
              className={
                page === "Stock Movement"
                  ? "nav-button selected"
                  : "nav-button"
              }
              onClick={() => setPage("Stock Movement")}
            >
              Stock-In / Stock-Out
            </button>
          )}

          <button
            className={
              page === "Stock History"
                ? "nav-button selected"
                : "nav-button"
            }
            onClick={() => setPage("Stock History")}
          >
            Stock Movement History
          </button>

          {!staff && (
            <button
              className={
                page === "Delivery Tracking"
                  ? "nav-button selected"
                  : "nav-button"
              }
              onClick={() => setPage("Delivery Tracking")}
            >
              Delivery Tracking
            </button>
          )}

          {staff && (
            <button
              className={
                page === "Manage Deliveries"
                  ? "nav-button selected"
                  : "nav-button"
              }
              onClick={() => setPage("Manage Deliveries")}
            >
              Manage Deliveries
            </button>
          )}

        </nav>

        <div className="sidebar-footer">
          SmartStore CA1 Prototype
        </div>

      </aside>

      {/* Main Content */}
      <main className="main-content">

        <header className="topbar">

          <strong>SmartStore</strong>

          <span>
            {staff
              ? "Staff / Admin Portal"
              : "Customer Portal"}
          </span>

        </header>

        {/* Dashboard */}
        {page === "Dashboard" && (
          <Dashboard
            products={products}
            deliveries={deliveries}
            history={history}
            staff={staff}
          />
        )}

        {/* Stock Movement */}
        {staff && page === "Stock Movement" && (
          <StockMovement
            products={products}
            onRecord={handleRecord}
          />
        )}

        {/* Stock History */}
        {page === "Stock History" && (
          <StockHistory
            history={history}
          />
        )}

        {/* Customer Delivery Tracking */}
        {!staff && page === "Delivery Tracking" && (
          <DeliveryTracking
            deliveries={deliveries}
            statuses={statuses}
          />
        )}

        {/* Staff Manage Deliveries */}
        {staff && page === "Manage Deliveries" && (
          <ManageDeliveries
            deliveries={deliveries}
            statuses={statuses}
            onUpdate={handleUpdate}
          />
        )}

      </main>

    </div>
  );
}

export default App;