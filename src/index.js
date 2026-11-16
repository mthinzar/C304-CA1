import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {

  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div>
      {currentPage === "home" && <Home onShopNow={() => setCurrentPage("shop")} />}

      {currentPage === "shop" && <Shop />}
      {currentPage === "dashboard" && <Dashboard />}

    </div>
  );
}

function Home({ onShopNow }) {
  return (
    <div>
      <h1> Freshly Baked in Singapore </h1>
      <p> Tagline </p>
      <button onClick={onShopNow}> browse menu </button>

      <BakeryIntro />
      <FeaturedProducts />
    </div>
  )
}

const description = [
  {
    title: "Handmade to Order",
    text: "Every bake is made fresh after you order."
  },
  {
    title: "Custom Event & Birthday Cakes",
    text: "Every bake is made fresh after you order"
  },
  {
    title: "Islandwide Delivery & Pickup",
    text: "Every bake is made fresh after you order"
  },
]

function BakeryIntro() {
  return (
    <div>
      <h2> Why BakeFlow? </h2>
      {description.map((item) => {
        return (
          <div key={item.title}>
            <h3> {item.title} </h3>
            <p> {item.text} </p>
          </div>
        )})}
    </div>
  );
}

const products = [
  {
    name: "Chocolate Cake",
    category: "Cakes",
    price: 45,
    isFeatured: false
  },
  {
    name: "Croissant",
    category: "Pastry",
    price: 3.5,
    isFeatured: true
  }
];

function FeaturedProducts() {

  // .filter() - select matching products , .map() - creates JSX from products
  const featuredProducts = products.filter((bread) => {
    return (
      bread.isFeatured === true
    );
    // return bread.isFeatured === true
  })

  return (
    <div>
      <h2> Feature Bakes </h2>

      {featuredProducts.map((bread) => {
        return (
          <div key={bread.name}>
            <h3> {bread.name} </h3>
            <p> {bread.price} </p>
          </div>
        );
      })}
    </div>
  )
}

function Shop() {
  return (
    <div>
      <h2> Welcome to the Shop </h2>
    </div>
  )
}

function Dashboard() {
  return (
    <div>
      <h2> Featured Bakes </h2>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

