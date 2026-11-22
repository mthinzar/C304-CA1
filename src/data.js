// SmartStore shared mock data (CA1)
// All companies, products and records are made up for this prototype.
//
// Each customer company's data is kept in its own file in src/companies/.
// This file holds the shared warehouse info and combines the 3 companies,
// so everyone can keep importing from "./data" (or "../data") as before.
//
// Note: separate files are for organisation only. Real data security
// (each company only receiving its own data) is done by the backend in CA2.

import freshbite from "./companies/freshbite";
import urbannest from "./companies/urbannest";
import pixelcraft from "./companies/pixelcraft";

// ---------------------------------------------------------------------------
// 1. Warehouse site and the 3 warehouses (shared)
// ---------------------------------------------------------------------------

export const site = {
  name: "SmartStore Woodlands Hub",
  area: "Woodlands, Singapore",
  operatingHours: "Mon–Sat, 8:00 AM – 6:00 PM",
  contact: "6123 4567",
};

// Each warehouse has zones -> racks -> shelves.
// Used by the Storage Map to draw the layout.
export const warehouses = [
  {
    id: "W-L",
    name: "Warehouse L",
    size: "Large",
    entrance: "Loading Bay 1",
    zones: [
      { id: "A", type: "Cold", aisle: 1, racks: 4, shelvesPerRack: 3 },
      { id: "B", type: "General", aisle: 2, racks: 4, shelvesPerRack: 3 },
      { id: "C", type: "Bulk", aisle: 3, racks: 4, shelvesPerRack: 3 },
    ],
  },
  {
    id: "W-M",
    name: "Warehouse M",
    size: "Medium",
    entrance: "Loading Bay 2",
    zones: [
      { id: "A", type: "General", aisle: 1, racks: 3, shelvesPerRack: 3 },
      { id: "B", type: "Fragile", aisle: 2, racks: 3, shelvesPerRack: 3 },
    ],
  },
  {
    id: "W-S",
    name: "Warehouse S",
    size: "Small",
    entrance: "Side Door",
    zones: [
      { id: "A", type: "General", aisle: 1, racks: 2, shelvesPerRack: 3 },
    ],
  },
];

// ---------------------------------------------------------------------------
// 2. Storage plans (shared, for the booking page)
// ---------------------------------------------------------------------------

export const storagePlans = [
  { id: "PLAN-S", size: "Small", warehouseId: "W-S", pricePerMonth: 350, description: "For small online shops" },
  { id: "PLAN-M", size: "Medium", warehouseId: "W-M", pricePerMonth: 900, description: "For growing retail businesses" },
  { id: "PLAN-L", size: "Large", warehouseId: "W-L", pricePerMonth: 2200, description: "For food and bulk distributors" },
];

// ---------------------------------------------------------------------------
// 3. Combine the 3 companies' data into single lists
// ---------------------------------------------------------------------------

const allCompanyData = [freshbite, urbannest, pixelcraft];

export const companies = allCompanyData.map((data) => data.company);

export const bookings = allCompanyData.map((data) => data.booking);

export const products = [
  ...freshbite.products,
  ...urbannest.products,
  ...pixelcraft.products,
];

export const stockMovements = [
  ...freshbite.stockMovements,
  ...urbannest.stockMovements,
  ...pixelcraft.stockMovements,
];

export const deliveries = [
  ...freshbite.deliveries,
  ...urbannest.deliveries,
  ...pixelcraft.deliveries,
];

// ---------------------------------------------------------------------------
// Helpers (shared so everyone shows the same status)
// ---------------------------------------------------------------------------

export function getStockStatus(product) {
  if (product.quantity === 0) return "Out of Stock";
  if (product.quantity <= product.minThreshold) return "Low Stock";
  return "In Stock";
}

// e.g. "Zone A, Rack 1, Shelf 2"
export function formatLocation(location) {
  return `Zone ${location.zone}, Rack ${location.rack}, Shelf ${location.shelf}`;
}
