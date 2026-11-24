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

  props.products.forEach(product => {
    totalStock += product.quantity;
  });

  // Calculate active deliveries
  let activeDeliveries = 0;

  props.deliveries.forEach(delivery => {

    if (delivery.status !== "Completed") {
      activeDeliveries++;
    }

  });

  return (
    <div className="page">

      <h1>
        {props.staff
          ? "Warehouse Staff Dashboard"
          : "Customer Dashboard"}
      </h1>

      <p>
        {props.staff
          ? "Manage your warehouse operations."
          : "Welcome to your warehouse overview."}
      </p>

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

        <table>

          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Stock Status</th>
            </tr>
          </thead>

          <tbody>

            {props.products.map(product => (

              <tr key={product.id}>

                <td>{product.id}</td>

                <td>{product.name}</td>

                <td>{product.quantity}</td>

                <td>
                  {product.quantity === 0
                    ? "Out of Stock"
                    : product.quantity < 20
                    ? "Low Stock"
                    : "Available"}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Recent Stock Movements */}
      <div className="panel">

        <h2>Recent Stock Movements</h2>

        {props.history.length === 0 ? (

          <p>No stock movements recorded yet.</p>

        ) : (

          <table>

            <thead>
              <tr>
                <th>Product</th>
                <th>Movement</th>
                <th>Quantity</th>
              </tr>
            </thead>

            <tbody>

              {props.history.slice(0, 5).map(item => (

                <tr key={item.id}>

                  <td>{item.product}</td>

                  <td>{item.type}</td>

                  <td>{item.quantity}</td>

                </tr>

              ))}

            </tbody>

          </table>

        )}

      </div>

    </div>
  );
}

export default Dashboard;