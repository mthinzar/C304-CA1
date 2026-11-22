function ViewAsSelector({ currentUser, companies, onUserChange }) {
  return (
    <div className="view-as-bar">
      <label>
        View as:{" "}
        <select value={currentUser} onChange={onUserChange}>
          <option value="admin">Admin (SmartStore staff)</option>
          {companies.map((company) => (
            <option key={company.id} value={company.id}>
              Customer: {company.name}
            </option>
          ))}
        </select>
      </label>
      <span className="view-as-note">Demo only. In CA2 this will come from login.</span>
    </div>
  );
}

export default ViewAsSelector;