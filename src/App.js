import {useState} from 'react';
import "./App.css";
import {products} from "./data";
import InventoryOverviewPage from "./components/InventoryOverviewPage";

function App() {
  const [productList, setProductList] = useState(products);

  return (
    <div className="App">
      <InventoryOverviewPage products={productList} />
    </div>
  );
}

export default App;

