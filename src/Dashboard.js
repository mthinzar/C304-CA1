import React from "react";

// Reusable summary card component
function SummaryCard(props) {
  return (
    <div className="summary-card">
      <p>{props.title}</p>
      <h2>{props.value}</h2>
    </div>
  );
}

function Dashboard(props) {

  // Calculate total stock
  let totalStock = 0;

  for (let i = 0; i < props.products.length; i++) {
    totalStock = totalStock + props.products[i].quantity;
  }

  // Calculate active deliveries
  let activeDeliveries = 0;

  for (let i = 0; i < props.deliveries.length; i++) {
    if (props.deliveries[i].status !== "Completed") {
      activeDeliveries++;
    }
  }

  // Display title and description based on user role
  let title;
  let description;

  if (props.staff === true) {
    title = "Warehouse Staff Dashboard";
    description = "Manage your warehouse operations.";
  } else {
    title = "Customer Dashboard";
    description = "Welcome to your warehouse overview.";
  }

  // Check stock status
  function getStockStatus(quantity) {
    if (quantity === 0) {
      return "Out of Stock";
    } else if (quantity < 20) {
      return "Low Stock";
    } else {
      return "Available";
    }
  }

  // Display stock movement history
  let stockHistory;

  if (props.history.length === 0) {
    stockHistory = <p>No stock movements recorded yet.</p>;
  } else {
    stockHistory = (
      <ul className="dashboard-list">
        {props.history.map(item => (
          <li key={item.id}>
            <h3>{item.product}</h3>
            <p>Movement: {item.type}</p>
            <p>Quantity: {item.quantity}</p>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="page">

      <h1>{title}</h1>
      <p>{description}</p>

      {/* Summary Cards */}
      <div className="summary-container">

        <SummaryCard
          title="Total Products"
          value={props.products.length}
        />

        <SummaryCard
          title="Total Stock"
          value={totalStock}
        />

        <SummaryCard
          title="Active Deliveries"
          value={activeDeliveries}
        />

        <SummaryCard
          title="Stock Transactions"
          value={props.history.length}
        />

      </div>

      {/* Inventory Overview */}
      <div className="panel">

        <h2>Inventory Overview</h2>

        <ul className="dashboard-list">

          {props.products.map(product => (

            <li key={product.id}>

              <h3>{product.name}</h3>

              <p>Product ID: {product.id}</p>

              <p>Quantity: {product.quantity}</p>

              <p>
                Stock Status: {getStockStatus(product.quantity)}
              </p>

            </li>

          ))}

        </ul>

      </div>

      {/* Recent Stock Movements */}
      <div className="panel">

        <h2>Stock Movements</h2>

        {stockHistory}

      </div>

    </div>
  );
}

export default Dashboard;