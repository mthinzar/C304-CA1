import { useState } from "react";
import "./App.css";
import { products, companies } from "./data";
import ViewAsSelector from "./components/ViewAsSelector";
import InventoryOverviewPage from "./components/InventoryOverviewPage";
import NaviBot from "./components/navibot/NaviBot";


function App() {
  const [productList, setProductList] = useState(products);
  const [currentUser, setCurrentUser] = useState("admin");

  function handleAddProduct(newProduct) {
    setProductList((prev) => [...prev, newProduct]);
  }

  function handleUserChange(e) {
    setCurrentUser(e.target.value);
  }

  return (
    <div className="App">
      <ViewAsSelector
        currentUser={currentUser}
        companies={companies}
        onUserChange={handleUserChange}
      />
      <InventoryOverviewPage
        products={productList}
        currentUser={currentUser}
        onAddProduct={handleAddProduct}
      />
      <h1>SmartStore ViraBot</h1>
      <NaviBot />
    </div>
  );
}

export default App;