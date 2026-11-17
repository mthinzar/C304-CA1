import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"

function App() {

  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div>      
      <NavBar 
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />
      
      {currentPage === "home" && <Home onShopNow={() => setCurrentPage("shop")} />}
      {currentPage === "shop" && <Shop />}
      {currentPage === "dashboard" && <Dashboard />}

    </div>
  );
}

const links = [
  { location: "home", label: "Home" },
  { location: "shop", label: "Shop" },
  { location: "dashboard", label: "Dashboard" }
];

function NavBar({currentPage, onNavigate}) {
  return (
    // used "nav" cuz it groups navigation links and buttons
    <nav>
      <h2> BakeFlow </h2>

      {links.map((nav_button) => {
        return (
          <button 
          key={nav_button.location}
          onClick={() => onNavigate(nav_button.location)} 
          className={currentPage === nav_button.location ? "active" : ""}> 
            {nav_button.label} 
          </button>
        )
      })}
    </nav>
  )
}

function Home({ onShopNow }) {
  return (
    <div>
      <h1> Freshly Baked in Singapore </h1>
      <p> Tagline </p>
      <button onClick={onShopNow}> 
        browse menu 
      </button>

      <BakeryIntro />
      <FeaturedProducts onShopNow={onShopNow}/>
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
        )
      })}
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
    category: "Pastries",
    price: 3.5,
    isFeatured: true
  }
];

const categories = ["All", "Cakes", "Cookies", "Pastries"];

function FeaturedProducts({onShopNow}) {

  const [selectedCategory, setSelectedCategory] = useState("All");

  // .filter() - select matching products , .map() - creates JSX from products
  const featuredProducts = products.filter((bread) => {
    return (
      bread.isFeatured === true
    );
    // return bread.isFeatured === true
  })

  // featured products matching the selected category
  const filteredProducts = featuredProducts.filter((bread) => {
    return selectedCategory === "All" || bread.category === selectedCategory;
  })

  return (
    <div>
      <h2> Feature Bakes </h2>

      {/* looping through the array of strings */}
      {categories.map((group) => {
        return (
          <button 
          key={group} 
          onClick={() => setSelectedCategory(group)}
          className={selectedCategory === group ? "active" : ""}
          >
            {group}
          </button>
        )
      })}

      {/* looping through the array of objects */}
      {/* {featuredProducts.map((bread) => {
        return (
          <div key={bread.name}>
            <h3> {bread.name} </h3>
            <p> {bread.price} </p>
          </div>
        );
      })} */}

      {filteredProducts.length === 0 && (
        <p> No featured bakes in this category </p>
      )}

      {filteredProducts.map((bread) => {
        return (
          // reuse the ProductCard component
          <ProductCard
          key= {bread.name}
          //ProductCard needs the entire object so it can access both name and price
          dessert={bread} 
          onShopNow={onShopNow}
          />
        )
      })}

    </div>
  )
}

function ProductCard({dessert , onShopNow}) {
  return (
    <div>
    <h3> {dessert.name} </h3>
    <p> ${dessert.price.toFixed(2)} </p>

    <button onClick={onShopNow}>
      Order in Shop
    </button>
    </div>
  );
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

