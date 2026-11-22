// PixelCraft Electronics: this company's data only
// (made-up data for the CA1 prototype)

const pixelcraft = {
  company: {
    id: "C003",
    name: "PixelCraft Electronics",
    industry: "Consumer electronics",
    contactPerson: "Ravi Kumar",
    email: "ravi@pixelcraft.example",
  },

  booking: {
    id: "BK003",
    companyId: "C003",
    planId: "PLAN-S",
    warehouseId: "W-S",
    startDate: "2026-11-01",
    endDate: "2027-01-31",
    status: "Active",
  },

  products: [
    { id: "P014", sku: "PC-AUD-001", name: "Wireless Earbuds", category: "Audio", companyId: "C003", warehouseId: "W-S", location: { zone: "A", rack: 1, shelf: 1 }, quantity: 75, minThreshold: 30, unit: "units", lastUpdated: "2026-11-19" },
    { id: "P015", sku: "PC-ACC-001", name: "USB-C Charging Cable 1m", category: "Accessories", companyId: "C003", warehouseId: "W-S", location: { zone: "A", rack: 1, shelf: 2 }, quantity: 18, minThreshold: 50, unit: "units", lastUpdated: "2026-11-20" },
    { id: "P016", sku: "PC-PWR-001", name: "Power Bank 10000mAh", category: "Power", companyId: "C003", warehouseId: "W-S", location: { zone: "A", rack: 1, shelf: 3 }, quantity: 40, minThreshold: 25, unit: "units", lastUpdated: "2026-11-18" },
    { id: "P017", sku: "PC-AUD-002", name: "Bluetooth Speaker", category: "Audio", companyId: "C003", warehouseId: "W-S", location: { zone: "A", rack: 2, shelf: 1 }, quantity: 22, minThreshold: 15, unit: "units", lastUpdated: "2026-11-17" },
    { id: "P018", sku: "PC-ACC-002", name: "Phone Case (Assorted)", category: "Accessories", companyId: "C003", warehouseId: "W-S", location: { zone: "A", rack: 2, shelf: 2 }, quantity: 5, minThreshold: 40, unit: "units", lastUpdated: "2026-11-20" },
  ],

  stockMovements: [
    { id: "M004", productId: "P015", type: "OUT", quantity: 32, party: "Customer order: PixelCraft", handledBy: "Staff: Mei Ling", timestamp: "2026-11-20T16:20" },
  ],

  deliveries: [
    { id: "D003", companyId: "C003", description: "32 USB-C Charging Cables", destination: "Bishan", scheduledDate: "2026-11-19", status: "Completed" },
  ],
};

export default pixelcraft;
