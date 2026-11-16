const products = [
  { id: 1, name: "Strawberry Shortcake", category: "Cakes", price: 38.0,
    description: "Light sponge layered with fresh cream and strawberries.",
    imageUrl: "/images/strawberry-shortcake.jpg", isFeatured: true },
  { id: 2, name: "Pandan Gula Melaka Cake", category: "Cakes", price: 42.0,
    description: "Fluffy pandan chiffon with gula melaka cream.",
    imageUrl: "/images/pandan-cake.jpg", isFeatured: true },
  { id: 3, name: "Dark Chocolate Fudge Cake", category: "Cakes", price: 45.0,
    description: "Rich chocolate layers for birthdays and celebrations.",
    imageUrl: "/images/chocolate-cake.jpg", isFeatured: false },
  { id: 4, name: "Brown Butter Choc Chip Cookies (6 pcs)", category: "Cookies", price: 12.0,
    description: "Crispy edges, chewy centre, sea salt on top.",
    imageUrl: "/images/choc-chip-cookies.jpg", isFeatured: true },
  { id: 5, name: "Matcha White Chocolate Cookies (6 pcs)", category: "Cookies", price: 14.0,
    description: "Uji matcha cookies with white chocolate chunks.",
    imageUrl: "/images/matcha-cookies.jpg", isFeatured: false },
  { id: 6, name: "Butter Croissant", category: "Pastries", price: 3.5,
    description: "Flaky, buttery croissant baked fresh every morning.",
    imageUrl: "/images/croissant.jpg", isFeatured: true },
  { id: 7, name: "Portuguese Egg Tart", category: "Pastries", price: 2.8,
    description: "Caramelised custard in a crisp puff pastry shell.",
    imageUrl: "/images/egg-tart.jpg", isFeatured: true },
  { id: 8, name: "Kaya Puff", category: "Pastries", price: 2.5,
    description: "Golden puff pastry filled with homemade kaya.",
    imageUrl: "/images/kaya-puff.jpg", isFeatured: false },
];

const highlights = [
  { id: 1, title: "Handmade to Order",
    text: "Every bake is made fresh after you order. No day-old stock." },
  { id: 2, title: "Custom Event & Birthday Cakes",
    text: "Tell us the occasion, message and design you want." },
  { id: 3, title: "Islandwide Delivery & Pickup",
    text: "Collect from our kitchen or get it delivered anywhere in Singapore." },
];

const categories = ["All", "Cakes", "Cookies", "Pastries"];

const navLinks = [
  { id: "home", label: "Home" },
  { id: "shop", label: "Shop" },
  { id: "dashboard", label: "Dashboard" },
];