function SummaryCard({ label, value, color = "default" }) {
  return (
    <div className={"summary-card " + color}>
      <p className="summary-label">{label}</p>
      <p className="summary-value">{value}</p>
    </div>
  );
}

export default SummaryCard;