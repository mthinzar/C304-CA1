function StockBadge({ status }) {
  let badgeClass = "badge green";

  if (status === "Low Stock") {
    badgeClass = "badge orange";
  } else if (status === "Out of Stock") {
    badgeClass = "badge red";
  }

  return <span className={badgeClass}>{status}</span>;
}

export default StockBadge;