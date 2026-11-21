import { useState } from "react";
import "./App.css";
import { products } from "./data";
import InventoryOverviewPage from "./components/InventoryOverviewPage";

function App() {
  const [productList, setProductList] = useState(products);

  function handleAddProduct(newProduct) {
    setProductList((prev) => [...prev, newProduct]);
  }

  return (
    <div className="App">
      <InventoryOverviewPage
        products={productList}
        onAddProduct={handleAddProduct}
      />
    </div>
  );
}

export default App;