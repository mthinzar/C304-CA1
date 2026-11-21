// SmartStore shared mock data (CA1)
// All companies, products and records below are made up for this prototype.
// Everyone imports from this file. Do not change field names without telling the team.

// ---------------------------------------------------------------------------
// 1. Warehouse site and the 3 warehouses
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
// 2. Storage plans (for the booking page)
// ---------------------------------------------------------------------------

export const storagePlans = [
  { id: "PLAN-S", size: "Small", warehouseId: "W-S", pricePerMonth: 350, description: "For small online shops" },
  { id: "PLAN-M", size: "Medium", warehouseId: "W-M", pricePerMonth: 900, description: "For growing retail businesses" },
  { id: "PLAN-L", size: "Large", warehouseId: "W-L", pricePerMonth: 2200, description: "For food and bulk distributors" },
];

// ---------------------------------------------------------------------------
// 3. Customer companies and their bookings
// ---------------------------------------------------------------------------

export const companies = [
  { id: "C001", name: "FreshBite Foods Pte Ltd", industry: "Food distribution", contactPerson: "Daniel Lim", email: "daniel@freshbite.example" },
  { id: "C002", name: "UrbanNest Home Living", industry: "Home and furniture", contactPerson: "Sarah Tan", email: "sarah@urbannest.example" },
  { id: "C003", name: "PixelCraft Electronics", industry: "Consumer electronics", contactPerson: "Ravi Kumar", email: "ravi@pixelcraft.example" },
];

export const bookings = [
  { id: "BK001", companyId: "C001", planId: "PLAN-L", warehouseId: "W-L", startDate: "2026-09-01", endDate: "2027-08-31", status: "Active" },
  { id: "BK002", companyId: "C002", planId: "PLAN-M", warehouseId: "W-M", startDate: "2026-10-01", endDate: "2027-03-31", status: "Active" },
  { id: "BK003", companyId: "C003", planId: "PLAN-S", warehouseId: "W-S", startDate: "2026-11-01", endDate: "2027-01-31", status: "Active" },
];

// ---------------------------------------------------------------------------
// 4. Products in storage
// location = where it sits inside the warehouse: zone, rack, shelf
// Status (In Stock / Low Stock / Out of Stock) is NOT stored here.
// It is worked out from quantity and minThreshold using getStockStatus().
// ---------------------------------------------------------------------------

export const products = [
  // FreshBite Foods (Warehouse L)
  { id: "P001", sku: "FB-FRZ-001", name: "Frozen Chicken Wings 1kg", category: "Frozen", companyId: "C001", warehouseId: "W-L", location: { zone: "A", rack: 1, shelf: 1 }, quantity: 120, minThreshold: 50, unit: "packs", lastUpdated: "2026-11-20" },
  { id: "P002", sku: "FB-FRZ-002", name: "Frozen Dumplings 500g", category: "Frozen", companyId: "C001", warehouseId: "W-L", location: { zone: "A", rack: 1, shelf: 2 }, quantity: 35, minThreshold: 40, unit: "packs", lastUpdated: "2026-11-19" },
  { id: "P003", sku: "FB-FRZ-003", name: "Ice Cream Tub 2L", category: "Frozen", companyId: "C001", warehouseId: "W-L", location: { zone: "A", rack: 2, shelf: 1 }, quantity: 0, minThreshold: 30, unit: "tubs", lastUpdated: "2026-11-18" },
  { id: "P004", sku: "FB-CHL-001", name: "Fresh Milk 1L", category: "Chilled", companyId: "C001", warehouseId: "W-L", location: { zone: "A", rack: 2, shelf: 2 }, quantity: 80, minThreshold: 60, unit: "cartons", lastUpdated: "2026-11-20" },
  { id: "P005", sku: "FB-DRY-001", name: "Jasmine Rice 5kg", category: "Dry Goods", companyId: "C001", warehouseId: "W-L", location: { zone: "B", rack: 1, shelf: 1 }, quantity: 200, minThreshold: 80, unit: "bags", lastUpdated: "2026-11-17" },
  { id: "P006", sku: "FB-DRY-002", name: "Cooking Oil 2L", category: "Dry Goods", companyId: "C001", warehouseId: "W-L", location: { zone: "B", rack: 1, shelf: 2 }, quantity: 45, minThreshold: 50, unit: "bottles", lastUpdated: "2026-11-20" },
  { id: "P007", sku: "FB-DRY-003", name: "Instant Noodles (carton of 30)", category: "Dry Goods", companyId: "C001", warehouseId: "W-L", location: { zone: "C", rack: 1, shelf: 1 }, quantity: 150, minThreshold: 60, unit: "cartons", lastUpdated: "2026-11-16" },

  // UrbanNest Home Living (Warehouse M)
  { id: "P008", sku: "UN-FRG-001", name: "Ceramic Dinner Plate Set", category: "Kitchenware", companyId: "C002", warehouseId: "W-M", location: { zone: "B", rack: 1, shelf: 1 }, quantity: 24, minThreshold: 20, unit: "sets", lastUpdated: "2026-11-18" },
  { id: "P009", sku: "UN-FRG-002", name: "Glass Table Lamp", category: "Lighting", companyId: "C002", warehouseId: "W-M", location: { zone: "B", rack: 1, shelf: 2 }, quantity: 8, minThreshold: 10, unit: "units", lastUpdated: "2026-11-20" },
  { id: "P010", sku: "UN-FRG-003", name: "Wall Mirror 60cm", category: "Decor", companyId: "C002", warehouseId: "W-M", location: { zone: "B", rack: 2, shelf: 1 }, quantity: 12, minThreshold: 5, unit: "units", lastUpdated: "2026-11-15" },
  { id: "P011", sku: "UN-GEN-001", name: "Cotton Bedsheet Set (Queen)", category: "Linen", companyId: "C002", warehouseId: "W-M", location: { zone: "A", rack: 1, shelf: 1 }, quantity: 60, minThreshold: 25, unit: "sets", lastUpdated: "2026-11-19" },
  { id: "P012", sku: "UN-GEN-002", name: "Foldable Study Chair", category: "Furniture", companyId: "C002", warehouseId: "W-M", location: { zone: "A", rack: 2, shelf: 1 }, quantity: 0, minThreshold: 10, unit: "units", lastUpdated: "2026-11-20" },
  { id: "P013", sku: "UN-GEN-003", name: "Rattan Storage Basket", category: "Decor", companyId: "C002", warehouseId: "W-M", location: { zone: "A", rack: 2, shelf: 2 }, quantity: 40, minThreshold: 15, unit: "units", lastUpdated: "2026-11-14" },

  // PixelCraft Electronics (Warehouse S)
  { id: "P014", sku: "PC-AUD-001", name: "Wireless Earbuds", category: "Audio", companyId: "C003", warehouseId: "W-S", location: { zone: "A", rack: 1, shelf: 1 }, quantity: 75, minThreshold: 30, unit: "units", lastUpdated: "2026-11-19" },
  { id: "P015", sku: "PC-ACC-001", name: "USB-C Charging Cable 1m", category: "Accessories", companyId: "C003", warehouseId: "W-S", location: { zone: "A", rack: 1, shelf: 2 }, quantity: 18, minThreshold: 50, unit: "units", lastUpdated: "2026-11-20" },
  { id: "P016", sku: "PC-PWR-001", name: "Power Bank 10000mAh", category: "Power", companyId: "C003", warehouseId: "W-S", location: { zone: "A", rack: 1, shelf: 3 }, quantity: 40, minThreshold: 25, unit: "units", lastUpdated: "2026-11-18" },
  { id: "P017", sku: "PC-AUD-002", name: "Bluetooth Speaker", category: "Audio", companyId: "C003", warehouseId: "W-S", location: { zone: "A", rack: 2, shelf: 1 }, quantity: 22, minThreshold: 15, unit: "units", lastUpdated: "2026-11-17" },
  { id: "P018", sku: "PC-ACC-002", name: "Phone Case (Assorted)", category: "Accessories", companyId: "C003", warehouseId: "W-S", location: { zone: "A", rack: 2, shelf: 2 }, quantity: 5, minThreshold: 40, unit: "units", lastUpdated: "2026-11-20" },
];

// ---------------------------------------------------------------------------
// 5. Stock movements (for the Stock-In / Stock-Out page)
// ---------------------------------------------------------------------------

export const stockMovements = [
  { id: "M001", productId: "P001", type: "IN", quantity: 60, party: "Supplier: Tyson Frozen Supply", handledBy: "Staff: Ahmad", timestamp: "2026-11-20T09:15" },
  { id: "M002", productId: "P003", type: "OUT", quantity: 30, party: "Customer order: FreshBite", handledBy: "Staff: Mei Ling", timestamp: "2026-11-18T14:40" },
  { id: "M003", productId: "P009", type: "OUT", quantity: 6, party: "Customer order: UrbanNest", handledBy: "Staff: Ahmad", timestamp: "2026-11-20T11:05" },
  { id: "M004", productId: "P015", type: "OUT", quantity: 32, party: "Customer order: PixelCraft", handledBy: "Staff: Mei Ling", timestamp: "2026-11-20T16:20" },
  { id: "M005", productId: "P011", type: "IN", quantity: 30, party: "Supplier: CottonCo", handledBy: "Staff: Ahmad", timestamp: "2026-11-19T10:00" },
];

// ---------------------------------------------------------------------------
// 6. Deliveries (for the delivery tracking page)
// ---------------------------------------------------------------------------

export const deliveries = [
  { id: "D001", companyId: "C001", description: "50 packs Frozen Chicken Wings", destination: "Tampines", scheduledDate: "2026-11-22", status: "Scheduled" },
  { id: "D002", companyId: "C002", description: "6 Glass Table Lamps", destination: "Jurong East", scheduledDate: "2026-11-20", status: "In Transit" },
  { id: "D003", companyId: "C003", description: "32 USB-C Charging Cables", destination: "Bishan", scheduledDate: "2026-11-19", status: "Completed" },
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
