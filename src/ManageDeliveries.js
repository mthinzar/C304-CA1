import React from "react";

function ManageDeliveries(props) {

  return (
    <div className="page">

      <h1>Manage Deliveries</h1>

      <p>
        Update the status of customer deliveries.
      </p>

      <div className="panel">

        <table>

          <thead>
            <tr>
              <th>Delivery ID</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Delivery Status</th>
            </tr>
          </thead>

          <tbody>

            {props.deliveries.map(delivery => (

              <tr key={delivery.id}>

                <td>{delivery.id}</td>

                <td>{delivery.product}</td>

                <td>{delivery.quantity}</td>

                <td>

                  <select
                    aria-label={
                      "Status for " + delivery.id
                    }
                    value={delivery.status}
                    onChange={event =>
                      props.onUpdate(
                        delivery.id,
                        event.target.value
                      )
                    }
                  >

                    {props.statuses.map(status => (

                      <option
                        key={status}
                        value={status}
                      >
                        {status}
                      </option>

                    ))}

                  </select>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ManageDeliveries;