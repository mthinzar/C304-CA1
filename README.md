# LogiPulse – Warehouse Inventory & Support App

C304 Cloud App Development – CA1 (Frontend Prototype)

**Team members:** MayThinzarHtet, HeinThuNyiNyi, Jolin
**GitHub repository:** https://github.com/mthinzar/C304-CA1

---

## 1. Setup and Run Instructions

**Requirements:** Node.js and npm installed.

```bash
git clone https://github.com/mthinzar/C304-CA1.git
cd C304-CA1
npm install
npm start
```

The app opens at `http://localhost:3000`.

> Note: `node_modules` is not included in the repo or the submission zip. Run `npm install` first.

---

## 2. Problem Statement

Many small and medium logistics and storage companies in Singapore still track their stock using spreadsheets, paper delivery orders and WhatsApp messages. This causes three main problems:

1. **No clear record of stock movement.** Staff cannot easily see when stock came in or went out, who handled it, or how much is left.
2. **Too many repeated customer questions.** Customers keep messaging staff to ask "Do you have this item?" or "Has my shipment left?", which takes up a lot of staff time.
3. **Manual follow-ups.** When stock runs low, someone has to notice it and inform the team or customer by hand.

### Real-world trends (2026)

| Trend | How it relates to our problem | Feature we built |
|---|---|---|
| High warehouse rent and space constraints | Small warehouses cannot afford wasted rack space or misplaced items | Warehouse Zone Map showing how full each zone is |
| Faster delivery demand | Tracking stock on WhatsApp or Excel causes mistakes, overselling and late orders | Stock-In/Out timeline with automatic low-stock alerts |
| Connected software and smart support | SMEs need affordable all-in-one tools where a bot handles basic questions | Support chatbot with human handover |

Sources: Lalamove Singapore SME Survey, Enterprise Singapore EDGE Grant, EDB – CEVA Logistics & SIT Joint Innovation Lab.

---

## 3. Target Users and User Needs

| User | Needs |
|---|---|
| **Warehouse staff / admin** | See all stock and where it is stored, record stock in and out quickly, get alerted when stock is low, handle urgent customer chats |
| **Customers / clients** | Check if an item is in stock, check shipment status, get help from a staff member when needed |

### Why a web app?

Staff and customers can use it from any device with a browser, there is nothing to install, and everyone sees the same up-to-date data in one place instead of across spreadsheets and chats.

---

## 4. Features

| Page | Features |
|---|---|
| **Dashboard** | Summary cards (total items, low stock, movements today, tickets waiting), Zone Map with progress bars, low-stock list, recent movements |
| **Inventory** | Inventory table, search by name/SKU, filter by zone, stock status badges (In Stock / Low Stock / Out of Stock), Add Item form with validation |
| **Stock Movements** | Stock-In / Stock-Out form with validation, movement timeline (newest first), filter by All / IN / OUT, simulated n8n low-stock alert log |
| **Support Centre** | Customer view with chatbot and quick replies, "Talk to Human" handover, staff view with ticket queue, reply form, mark as resolved |

---

## 5. Page and Navigation Flow

Navigation is handled with a shared **Navbar** and a `currentView` state in `App.jsx` (React Router is not used in CA1).

```
Navbar:  Dashboard | Inventory | Movements | Support

Dashboard ──► Inventory (view low stock items)
          ──► Movements (view all movements)

Inventory ──► Add Item ──► item appears in table

Movements ──► Log Stock-In / Stock-Out
              ──► quantity updates on Inventory
              ──► low-stock alert added if below minimum

Support (Customer view) ──► Bot replies ──► Talk to Human
Support (Staff view)    ──► Select ticket ──► Reply ──► Mark as Resolved
```

---

## 6. Component Trees

### App

```
App  [State: items, movements, alerts, tickets, currentView]
 ├── Navbar                     props: currentView, onNavigate
 └── (one page shown based on currentView)
      ├── DashboardPage
      ├── InventoryPage
      ├── MovementTimelinePage
      └── SupportChatPage
```

### Navbar (Shared)

```
Navbar                          props: currentView, onNavigate
 ├── <span> Logo ("LogiPulse")
 └── <div> Nav Links (.map over links array)
      └── <button> × n → onNavigate(view)  [active class if currentView matches]
```

### DashboardPage

```
DashboardPage                   props: items, movements, tickets, zones, onNavigate
 ├── SummaryCards
 │    └── StatCard × 4          props: label, value
 ├── ZoneMap
 │    └── ZoneCard × 3 (.map)   props: zone, usedQty
 │         ├── Progress bar (used / capacity %)
 │         └── "Nearly full" [conditional, if ≥ 90%]
 ├── LowStockList               props: items (low stock only)
 │    └── "All items are well stocked." [if empty]
 └── RecentMovements            props: movements (latest 5)
      └── MovementItem × n (.map)
```

### InventoryPage (Member 1)

```
InventoryPage                   props: items, onAddItem
 ├── <h1> "Warehouse Inventory"
 ├── Summary Cards (Total Items, Low-Stock Items)
 ├── InventoryFilters           [State: searchText, selectedZone]
 │    ├── <input> Search by name / SKU
 │    └── <select> Zone filter (All, Zone A, Zone B, Zone C)
 ├── InventoryTable             props: items (filtered)
 │    ├── InventoryRow × n (.map)   props: item
 │    │    └── StockBadge        props: quantity, minThreshold
 │    └── "No items match your search." [if filtered list is empty]
 └── AddItemForm                [State: formData, errors, successMessage]
      ├── Inputs: SKU, Item Name, Storage Zone, Quantity, Min Threshold
      ├── Error messages per field [conditional]
      └── Success message [conditional]
```

### MovementTimelinePage (Member 2)

```
MovementTimelinePage            props: items, movements, alerts, onLogMovement
 ├── <h1> "Stock Movements"
 ├── LogMovementForm            props: items, onLogMovement
 │    │                         [State: itemId, type, quantity, party, errors]
 │    ├── Type toggle: Stock-In / Stock-Out
 │    ├── <select> Item (.map over items)
 │    ├── "Current stock: X units" [if an item is selected]
 │    ├── Quantity, Supplier / Customer inputs
 │    ├── Error message [conditional]
 │    └── Success message [conditional]
 ├── TimelineFilter             props: filterType, onFilterChange
 ├── MovementTimeline           props: movements (filtered, newest first)
 │    ├── MovementItem × n (.map)   props: movement
 │    │    └── TypeBadge         props: type ("IN" green / "OUT" red)
 │    └── "No movements yet." [if empty]
 └── AutomationLog              props: alerts
      ├── <li> × n (.map) LOW_STOCK_ALERT messages
      └── "No alerts triggered." [if empty]
```

### SupportChatPage (Member 3)

```
SupportChatPage                 props: tickets, items, onSendMessage, onEscalate, onResolve
 ├── <h1> "Support Centre"
 ├── ViewToggle                 [State: mode] Customer View / Staff View
 ├── CustomerChat  [if mode === "customer"]
 │    ├── Status bar (Bot / Waiting for staff / Resolved)
 │    ├── ChatMessage × n (.map)    props: message
 │    ├── QuickReplyButtons [if status is "Bot"]
 │    │    (Check stock, Storage rates, Shipment status)
 │    └── "Talk to Human" button [hidden once escalated]
 └── StaffQueue  [if mode === "staff"]
      │                         [State: selectedTicketId, replyText]
      ├── TicketCard × n (.map, only "Human Needed")   props: ticket, onSelect
      ├── "No tickets waiting." [if none escalated]
      └── Reply Panel [if a ticket is selected]
           ├── ChatMessage × n (.map)
           ├── Reply form + "Reply cannot be empty." [conditional]
           └── "Mark as Resolved" button
```

---

## 7. Mock Data

All starting data is stored in `src/data.js`. `App.jsx` imports it into state, and every page reads from that shared state through props. This means a change on one page (e.g. a Stock-Out) is shown on the other pages (Inventory, Dashboard).

| Mock array | Example fields |
|---|---|
| `items` | `id`, `sku`, `name`, `zone`, `quantity`, `minThreshold`, `lastUpdated` |
| `movements` | `id`, `itemId`, `type` (IN/OUT), `quantity`, `party`, `handledBy`, `timestamp` |
| `alerts` | `id`, `itemId`, `message`, `timestamp` |
| `tickets` | `id`, `customerName`, `status`, `messages` (array of `{ sender, text, time }`) |
| `zones` | `id`, `name`, `type` (Cold / Fragile / Bulk), `capacity` |

Example:

```js
export const items = [
  { id: 1, sku: "PKG-001", name: "Bubble Wrap", zone: "B", quantity: 28, minThreshold: 20, lastUpdated: "2026-11-18" },
  { id: 2, sku: "CLD-014", name: "Frozen Seafood Crate", zone: "A", quantity: 6, minThreshold: 10, lastUpdated: "2026-11-17" },
];
```

---

## 8. Planned Backend Data Entities (CA2)

| Entity | Fields |
|---|---|
| **User** | id, name, email, password (hashed), role (staff / customer) |
| **Item** | id, sku, name, zoneId, quantity, minThreshold, lastUpdated |
| **Zone** | id, name, type, capacity |
| **Movement** | id, itemId, type (IN/OUT), quantity, party, handledBy (userId), timestamp |
| **Alert** | id, itemId, message, timestamp |
| **Ticket** | id, customerId, status (Bot / Human Needed / Resolved), createdAt |
| **Message** | id, ticketId, sender (bot / customer / staff), text, timestamp |

---

## 9. Planned API Endpoints (CA2)

| Method | Path | Purpose | Expected data |
|---|---|---|---|
| GET | `/api/items` | Get all inventory items | Returns array of items |
| POST | `/api/items` | Add a new item | `{ sku, name, zoneId, quantity, minThreshold }` |
| PUT | `/api/items/:id` | Update an item | Updated item fields |
| DELETE | `/api/items/:id` | Delete an item | – |
| GET | `/api/zones` | Get zones and capacity | Returns array of zones |
| GET | `/api/movements` | Get all stock movements | Optional `?type=IN` or `?type=OUT` |
| POST | `/api/movements` | Log a Stock-In or Stock-Out (also updates item quantity) | `{ itemId, type, quantity, party }` |
| GET | `/api/alerts` | Get low-stock alerts | Returns array of alerts |
| GET | `/api/tickets` | Get support tickets | Optional `?status=Human Needed` |
| POST | `/api/tickets` | Start a new chat | `{ customerId }` |
| POST | `/api/tickets/:id/messages` | Send a message | `{ sender, text }` |
| PATCH | `/api/tickets/:id` | Escalate or resolve a ticket | `{ status }` |
| POST | `/api/auth/register` | Register a user | `{ name, email, password, role }` |
| POST | `/api/auth/login` | Log in | `{ email, password }` |

In CA2, the low-stock alert will call a real **n8n webhook** when an item's quantity drops below its minimum.

---

## 10. Teamwork Distribution

| Member | Ownership |
|---|---|
| [Name 1] | InventoryPage – InventoryFilters, InventoryTable, InventoryRow, StockBadge, AddItemForm |
| [Name 2] | MovementTimelinePage – LogMovementForm, TimelineFilter, MovementTimeline, MovementItem, TypeBadge, AutomationLog |
| [Name 3] | SupportChatPage – ViewToggle, CustomerChat, ChatMessage, QuickReplyButtons, StaffQueue, TicketCard |
| [Name] | Shared setup – `index.js`, `App.jsx`, `Navbar`, `data.js`, README |
| [Name] | DashboardPage – SummaryCards, ZoneMap, ZoneCard, LowStockList, RecentMovements |

### Git workflow

Shared files (`index.js`, `App.jsx`, `data.js`, README) were pushed to `main`. Each member developed their page on their own branch and merged it into `main` through a pull request.

---

## 11. Individual Contribution Evidence

### [Name 1]
- **Contribution:** [What you built]
- **Code explanation video:** [Link]
- **Improvement made:** [What you changed after feedback/testing and why]
- **Commits / files:** [e.g. `src/components/InventoryTable.jsx`, commit link]

### [Name 2]
- **Contribution:**
- **Code explanation video:**
- **Improvement made:**
- **Commits / files:**

### [Name 3]
- **Contribution:**
- **Code explanation video:**
- **Improvement made:**
- **Commits / files:**

### GitHub Insights

[Insert screenshot of GitHub Insights → Contributors]

---

## 12. Screenshots

[Add screenshots of each page here]

---

## 13. AI Use Acknowledgement

[State which parts used AI assistance, e.g. "AI was used to help plan the README structure and brainstorm component layout. All code was written, tested and understood by the team."]
