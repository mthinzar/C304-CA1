import React, { useState } from "react";

function StockHistory(props) {

  const [filter, setFilter] =
    useState("All");

  const [search, setSearch] =
    useState("");

  // Filter transaction records
  const records = props.history.filter(item => {

    const matchesType =
      filter === "All" ||
      item.type === filter;

    const matchesSearch =
      item.product
        .toLowerCase()
        .includes(search.toLowerCase());

    return matchesType && matchesSearch;

  });

  return (
    <div className="page">

      <h1>Stock Movement History</h1>

      <p>
        View previous warehouse stock transactions.
      </p>

      <div className="panel">

        {/* Search and Filter */}
        <div className="filter-container">

          <input
            type="text"
            aria-label="Search product"
            placeholder="Search product..."
            value={search}
            onChange={event =>
              setSearch(event.target.value)
            }
          />

          <select
            aria-label="Filter movement type"
            value={filter}
            onChange={event =>
              setFilter(event.target.value)
            }
          >

            <option value="All">
              All Movements
            </option>

            <option value="Stock In">
              Stock In
            </option>

            <option value="Stock Out">
              Stock Out
            </option>

          </select>

        </div>

        {/* Transaction Table */}
        {records.length === 0 ? (

          <p>No transactions found.</p>

        ) : (

          <table>

            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Product</th>
                <th>Movement</th>
                <th>Quantity</th>
                <th>Balance</th>
                <th>Remarks</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>

              {records.map(item => (

                <tr key={item.id}>

                  <td>{item.id}</td>

                  <td>{item.product}</td>

                  <td>

                    <span className={
                      item.type === "Stock In"
                        ? "stock-in"
                        : "stock-out"
                    }>
                      {item.type}
                    </span>

                  </td>

                  <td>
                    {item.type === "Stock In"
                      ? "+"
                      : "-"}
                    {item.quantity}
                  </td>

                  <td>{item.balance}</td>

                  <td>{item.remarks || "-"}</td>

                  <td>{item.date}</td>

                </tr>

              ))}

            </tbody>

          </table>

        )}

        <p>
          {records.length} transaction(s) found.
        </p>

      </div>

    </div>
  );
}

export default StockHistory;