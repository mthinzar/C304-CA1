import React, { useState } from "react";

function StockMovement(props) {

  // Form state
  const [productId, setProductId] =
    useState(props.products[0].id);

  const [type, setType] =
    useState("Stock In");

  const [quantity, setQuantity] =
    useState("");

  const [remarks, setRemarks] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [isError, setIsError] =
    useState(false);

  // Find selected product
  const product = props.products.find(
    item => item.id === productId
  );

  // Handle form submission
  function handleSubmit(event) {

    event.preventDefault();

    const amount = Number(quantity);

    // Validate quantity
    if (!Number.isInteger(amount) || amount <= 0) {

      setMessage(
        "Please enter a positive whole number."
      );

      setIsError(true);

      return;
    }

    // Prevent insufficient stock
    if (
      type === "Stock Out" &&
      amount > product.quantity
    ) {

      setMessage("Insufficient stock available.");

      setIsError(true);

      return;
    }

    // Send data to parent component
    props.onRecord(
      productId,
      type,
      amount,
      remarks
    );

    setMessage(
      "Stock movement recorded successfully."
    );

    setIsError(false);

    // Clear form
    setQuantity("");
    setRemarks("");
  }

  return (
    <div className="page">

      <h1>Stock-In / Stock-Out</h1>

      <p>
        Record incoming and outgoing warehouse goods.
      </p>

      <div className="panel">

        <form onSubmit={handleSubmit} noValidate>

          <label htmlFor="product">
            Product
          </label>

          <select
            id="product"
            value={productId}
            onChange={event =>
              setProductId(event.target.value)
            }
          >

            {props.products.map(item => (

              <option
                key={item.id}
                value={item.id}
              >
                {item.id} - {item.name}
              </option>

            ))}

          </select>

          {/* Current Stock */}
          <div className="stock-display">

            <p>Current Stock</p>

            <h2>{product.quantity} units</h2>

          </div>

          <label htmlFor="movement">
            Movement Type
          </label>

          <select
            id="movement"
            value={type}
            onChange={event =>
              setType(event.target.value)
            }
          >

            <option value="Stock In">
              Stock In
            </option>

            <option value="Stock Out">
              Stock Out
            </option>

          </select>

          <label htmlFor="quantity">
            Quantity
          </label>

          <input
            id="quantity"
            type="number"
            value={quantity}
            placeholder="Enter quantity"
            onChange={event =>
              setQuantity(event.target.value)
            }
          />

          <label htmlFor="remarks">
            Remarks
          </label>

          <textarea
            id="remarks"
            value={remarks}
            placeholder="Enter remarks"
            onChange={event =>
              setRemarks(event.target.value)
            }
          />

          <button
            type="submit"
            className="primary-button"
          >
            Confirm {type}
          </button>

        </form>

        {/* Feedback Message */}
        {message && (

          <p className={
            isError
              ? "error-message"
              : "success-message"
          }>
            {message}
          </p>

        )}

      </div>

    </div>
  );
}

export default StockMovement;