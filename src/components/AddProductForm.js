import { useState } from "react";

const initialForm = {
  name: "",
  sku: "",
  category: "",
  unit: "",
  companyId: "",
  quantity: "",
  minThreshold: "",
  zone: "",
  rack: "",
  shelf: "",
};

function AddProductForm({ products, companies, warehouses, bookings, onAddProduct }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Find the warehouse the chosen company rents, and the chosen zone
  const booking = bookings.find((b) => b.companyId === form.companyId);
  const selectedWarehouse = booking
    ? warehouses.find((w) => w.id === booking.warehouseId)
    : null;
  const selectedZone = selectedWarehouse
    ? selectedWarehouse.zones.find((z) => z.id === form.zone)
    : null;

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "companyId") {
      // A different company means a different warehouse, so clear the zone
      setForm((prev) => ({ ...prev, companyId: value, zone: "" }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }

    setSuccessMessage("");
  }

  function validateForm() {
    const newErrors = {};
    const quantity = Number(form.quantity);
    const minThreshold = Number(form.minThreshold);
    const rack = Number(form.rack);
    const shelf = Number(form.shelf);

    if (form.name.trim() === "") {
      newErrors.name = "Please enter a product name.";
    }

    if (form.sku.trim() === "") {
      newErrors.sku = "Please enter a SKU.";
    } else {
      const sameSku = products.filter(
        (p) => p.sku.toLowerCase() === form.sku.trim().toLowerCase()
      );
      if (sameSku.length > 0) {
        newErrors.sku = "This SKU already exists.";
      }
    }

    if (form.companyId === "") {
      newErrors.companyId = "Please choose a company.";
    }

    if (form.quantity === "") {
      newErrors.quantity = "Please enter a quantity.";
    } else if (quantity < 0) {
      newErrors.quantity = "Quantity cannot be negative.";
    }

    if (form.minThreshold === "") {
      newErrors.minThreshold = "Please enter a minimum level.";
    } else if (minThreshold < 1) {
      newErrors.minThreshold = "Minimum level must be at least 1.";
    }

    if (form.zone === "") {
      newErrors.zone = "Please choose a zone.";
    }

    if (selectedZone) {
      if (form.rack === "" || rack < 1 || rack > selectedZone.racks) {
        newErrors.rack = `Rack must be between 1 and ${selectedZone.racks}.`;
      }
      if (form.shelf === "" || shelf < 1 || shelf > selectedZone.shelvesPerRack) {
        newErrors.shelf = `Shelf must be between 1 and ${selectedZone.shelvesPerRack}.`;
      }
    }

    // Check that no other product is already on this shelf
    if (selectedZone && !newErrors.rack && !newErrors.shelf) {
      const shelfTaken = products.filter(
        (p) =>
          p.warehouseId === selectedWarehouse.id &&
          p.location.zone === form.zone &&
          p.location.rack === rack &&
          p.location.shelf === shelf
      );
      if (shelfTaken.length > 0) {
        newErrors.shelf = `This shelf is already used by ${shelfTaken[0].name}.`;
      }
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return; // stop here if there are errors
    }

    const newProduct = {
      id: "P" + Date.now(),
      sku: form.sku.trim().toUpperCase(),
      name: form.name.trim(),
      category: form.category.trim() || "General",
      companyId: form.companyId,
      warehouseId: selectedWarehouse.id,
      location: {
        zone: form.zone,
        rack: Number(form.rack),
        shelf: Number(form.shelf),
      },
      quantity: Number(form.quantity),
      minThreshold: Number(form.minThreshold),
      unit: form.unit.trim() || "units",
      lastUpdated: new Date().toISOString().slice(0, 10),
    };

    onAddProduct(newProduct);
    setSuccessMessage(`${newProduct.name} was added to ${selectedWarehouse.name}.`);
    setForm(initialForm);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Product name
          <input name="name" value={form.name} onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>

        <label>
          SKU
          <input name="sku" value={form.sku} onChange={handleChange} placeholder="e.g. PC-AUD-003" />
          {errors.sku && <span className="error">{errors.sku}</span>}
        </label>

        <label>
          Category
          <input name="category" value={form.category} onChange={handleChange} placeholder="e.g. Audio" />
        </label>

        <label>
          Unit
          <input name="unit" value={form.unit} onChange={handleChange} placeholder="e.g. boxes" />
        </label>

        <label>
          Company
          <select name="companyId" value={form.companyId} onChange={handleChange}>
            <option value="">Choose a company</option>
            {companies.map((company) => (
              <option key={company.id} value={company.id}>
                {company.name}
              </option>
            ))}
          </select>
          {errors.companyId && <span className="error">{errors.companyId}</span>}
          {selectedWarehouse && (
            <span className="form-hint">
              Stored in {selectedWarehouse.name} ({selectedWarehouse.size})
            </span>
          )}
        </label>

        <label>
          Quantity
          <input type="number" name="quantity" value={form.quantity} onChange={handleChange} />
          {errors.quantity && <span className="error">{errors.quantity}</span>}
        </label>

        <label>
          Minimum level
          <input type="number" name="minThreshold" value={form.minThreshold} onChange={handleChange} />
          {errors.minThreshold && <span className="error">{errors.minThreshold}</span>}
        </label>

        <label>
          Zone
          <select name="zone" value={form.zone} onChange={handleChange} disabled={!selectedWarehouse}>
            <option value="">Choose a zone</option>
            {selectedWarehouse &&
              selectedWarehouse.zones.map((zone) => (
                <option key={zone.id} value={zone.id}>
                  Zone {zone.id} ({zone.type})
                </option>
              ))}
          </select>
          {errors.zone && <span className="error">{errors.zone}</span>}
          {selectedZone && (
            <span className="form-hint">
              Racks 1–{selectedZone.racks}, Shelves 1–{selectedZone.shelvesPerRack}
            </span>
          )}
        </label>

        <label>
          Rack
          <input type="number" name="rack" value={form.rack} onChange={handleChange} />
          {errors.rack && <span className="error">{errors.rack}</span>}
        </label>

        <label>
          Shelf
          <input type="number" name="shelf" value={form.shelf} onChange={handleChange} />
          {errors.shelf && <span className="error">{errors.shelf}</span>}
        </label>
      </div>

      <button type="submit" className="submit-button">
        Add Product
      </button>

      {successMessage && <p className="success-message">{successMessage}</p>}
    </form>
  );
}

export default AddProductForm;