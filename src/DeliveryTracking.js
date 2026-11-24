import React, { useState } from "react";

// Reusable delivery progress component
function DeliveryProgress(props) {

  const currentStep =
    props.statuses.indexOf(props.status);

  return (
    <div className="delivery-progress">

      {props.statuses.map((status, index) => (

        <div
          key={status}
          className="progress-step"
        >

          <div className={
            index <= currentStep
              ? "step-circle active-step"
              : "step-circle"
          }>

            {index < currentStep ||
              props.status === "Completed"
              ? "✓"
              : index + 1}

          </div>

          <p>{status}</p>

        </div>

      ))}

    </div>
  );
}

// Customer delivery tracking page
function DeliveryTracking(props) {

  const [deliveryId, setDeliveryId] =
    useState(props.deliveries[0].id);

  // Find selected delivery
  const delivery = props.deliveries.find(
    item => item.id === deliveryId
  );

  return (
    <div className="page">

      <h1>Delivery Tracking</h1>

      <p>
        Track the progress of your warehouse deliveries.
      </p>

      <div className="panel">

        <label htmlFor="delivery">
          Select Delivery
        </label>

        <select
          id="delivery"
          value={deliveryId}
          onChange={event =>
            setDeliveryId(event.target.value)
          }
        >

          {props.deliveries.map(item => (

            <option
              key={item.id}
              value={item.id}
            >
              {item.id} - {item.product}
            </option>

          ))}

        </select>

        {/* Delivery Information */}
        <div className="delivery-details">

          <h2>Delivery {delivery.id}</h2>

          <p>
            <strong>Product: </strong>
            {delivery.product}
          </p>

          <p>
            <strong>Quantity: </strong>
            {delivery.quantity} units
          </p>

          <p>
            <strong>Current Status: </strong>
            {delivery.status}
          </p>

          {/* Delivery Progress */}
          <DeliveryProgress
            status={delivery.status}
            statuses={props.statuses}
          />

          {/* Delivery Message */}
          {delivery.status === "Completed" ? (

            <p className="success-message">
              Your delivery has been completed.
            </p>

          ) : (

            <p>
              Your delivery is currently{" "}
              {delivery.status.toLowerCase()}.
            </p>

          )}

        </div>

      </div>

    </div>
  );
}

export default DeliveryTracking;