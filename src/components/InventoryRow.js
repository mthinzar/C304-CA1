import StockBadge from "./StockBadge";
import { getStockStatus, formatLocation } from "../data";

function InventoryRow({ product, companyName, warehouseName }) {
  const status = getStockStatus(product);

  return (
    <tr>
      <td>{product.sku}</td>
      <td>{product.name}</td>
      <td>{companyName}</td>
      <td>
        {warehouseName}
        <br />
        <span className="location-text">{formatLocation(product.location)}</span>
      </td>
      <td>
        {product.quantity} {product.unit}
      </td>
      <td>{product.minThreshold}</td>
      <td>
        <StockBadge status={status} />
      </td>
    </tr>
  );
}

export default InventoryRow;