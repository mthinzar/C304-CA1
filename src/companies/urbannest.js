// UrbanNest Home Living: this company's data only
// (made-up data for the CA1 prototype)

const urbannest = {
  company: {
    id: "C002",
    name: "UrbanNest Home Living",
    industry: "Home and furniture",
    contactPerson: "Sarah Tan",
    email: "sarah@urbannest.example",
  },

  booking: {
    id: "BK002",
    companyId: "C002",
    planId: "PLAN-M",
    warehouseId: "W-M",
    startDate: "2026-10-01",
    endDate: "2027-03-31",
    status: "Active",
  },

  products: [
    { id: "P008", sku: "UN-FRG-001", name: "Ceramic Dinner Plate Set", category: "Kitchenware", companyId: "C002", warehouseId: "W-M", location: { zone: "B", rack: 1, shelf: 1 }, quantity: 24, minThreshold: 20, unit: "sets", lastUpdated: "2026-11-18" },
    { id: "P009", sku: "UN-FRG-002", name: "Glass Table Lamp", category: "Lighting", companyId: "C002", warehouseId: "W-M", location: { zone: "B", rack: 1, shelf: 2 }, quantity: 8, minThreshold: 10, unit: "units", lastUpdated: "2026-11-20" },
    { id: "P010", sku: "UN-FRG-003", name: "Wall Mirror 60cm", category: "Decor", companyId: "C002", warehouseId: "W-M", location: { zone: "B", rack: 2, shelf: 1 }, quantity: 12, minThreshold: 5, unit: "units", lastUpdated: "2026-11-15" },
    { id: "P011", sku: "UN-GEN-001", name: "Cotton Bedsheet Set (Queen)", category: "Linen", companyId: "C002", warehouseId: "W-M", location: { zone: "A", rack: 1, shelf: 1 }, quantity: 60, minThreshold: 25, unit: "sets", lastUpdated: "2026-11-19" },
    { id: "P012", sku: "UN-GEN-002", name: "Foldable Study Chair", category: "Furniture", companyId: "C002", warehouseId: "W-M", location: { zone: "A", rack: 2, shelf: 1 }, quantity: 0, minThreshold: 10, unit: "units", lastUpdated: "2026-11-20" },
    { id: "P013", sku: "UN-GEN-003", name: "Rattan Storage Basket", category: "Decor", companyId: "C002", warehouseId: "W-M", location: { zone: "A", rack: 2, shelf: 2 }, quantity: 40, minThreshold: 15, unit: "units", lastUpdated: "2026-11-14" },
  ],

  stockMovements: [
    { id: "M003", productId: "P009", type: "OUT", quantity: 6, party: "Customer order: UrbanNest", handledBy: "Staff: Ahmad", timestamp: "2026-11-20T11:05" },
    { id: "M005", productId: "P011", type: "IN", quantity: 30, party: "Supplier: CottonCo", handledBy: "Staff: Ahmad", timestamp: "2026-11-19T10:00" },
  ],

  deliveries: [
    { id: "D002", companyId: "C002", description: "6 Glass Table Lamps", destination: "Jurong East", scheduledDate: "2026-11-20", status: "In Transit" },
  ],
};

export default urbannest;
