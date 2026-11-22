// FreshBite Foods Pte Ltd: this company's data only
// (made-up data for the CA1 prototype)

const freshbite = {
  company: {
    id: "C001",
    name: "FreshBite Foods Pte Ltd",
    industry: "Food distribution",
    contactPerson: "Daniel Lim",
    email: "daniel@freshbite.example",
  },

  booking: {
    id: "BK001",
    companyId: "C001",
    planId: "PLAN-L",
    warehouseId: "W-L",
    startDate: "2026-09-01",
    endDate: "2027-08-31",
    status: "Active",
  },

  products: [
    { id: "P001", sku: "FB-FRZ-001", name: "Frozen Chicken Wings 1kg", category: "Frozen", companyId: "C001", warehouseId: "W-L", location: { zone: "A", rack: 1, shelf: 1 }, quantity: 120, minThreshold: 50, unit: "packs", lastUpdated: "2026-11-20" },
    { id: "P002", sku: "FB-FRZ-002", name: "Frozen Dumplings 500g", category: "Frozen", companyId: "C001", warehouseId: "W-L", location: { zone: "A", rack: 1, shelf: 2 }, quantity: 35, minThreshold: 40, unit: "packs", lastUpdated: "2026-11-19" },
    { id: "P003", sku: "FB-FRZ-003", name: "Ice Cream Tub 2L", category: "Frozen", companyId: "C001", warehouseId: "W-L", location: { zone: "A", rack: 2, shelf: 1 }, quantity: 0, minThreshold: 30, unit: "tubs", lastUpdated: "2026-11-18" },
    { id: "P004", sku: "FB-CHL-001", name: "Fresh Milk 1L", category: "Chilled", companyId: "C001", warehouseId: "W-L", location: { zone: "A", rack: 2, shelf: 2 }, quantity: 80, minThreshold: 60, unit: "cartons", lastUpdated: "2026-11-20" },
    { id: "P005", sku: "FB-DRY-001", name: "Jasmine Rice 5kg", category: "Dry Goods", companyId: "C001", warehouseId: "W-L", location: { zone: "B", rack: 1, shelf: 1 }, quantity: 200, minThreshold: 80, unit: "bags", lastUpdated: "2026-11-17" },
    { id: "P006", sku: "FB-DRY-002", name: "Cooking Oil 2L", category: "Dry Goods", companyId: "C001", warehouseId: "W-L", location: { zone: "B", rack: 1, shelf: 2 }, quantity: 45, minThreshold: 50, unit: "bottles", lastUpdated: "2026-11-20" },
    { id: "P007", sku: "FB-DRY-003", name: "Instant Noodles (carton of 30)", category: "Dry Goods", companyId: "C001", warehouseId: "W-L", location: { zone: "C", rack: 1, shelf: 1 }, quantity: 150, minThreshold: 60, unit: "cartons", lastUpdated: "2026-11-16" },
  ],

  stockMovements: [
    { id: "M001", productId: "P001", type: "IN", quantity: 60, party: "Supplier: Tyson Frozen Supply", handledBy: "Staff: Ahmad", timestamp: "2026-11-20T09:15" },
    { id: "M002", productId: "P003", type: "OUT", quantity: 30, party: "Customer order: FreshBite", handledBy: "Staff: Mei Ling", timestamp: "2026-11-18T14:40" },
  ],

  deliveries: [
    { id: "D001", companyId: "C001", description: "50 packs Frozen Chicken Wings", destination: "Tampines", scheduledDate: "2026-11-22", status: "Scheduled" },
  ],
};

export default freshbite;
