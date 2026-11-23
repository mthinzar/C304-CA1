import { intents } from "../../naviData";
import { useState } from "react";

function NaviBot() {

  const [selectedOption, setSelectedOption] = useState("");

  // when the customer clicks "Check stock, we want to know that the selected ID is "stock"
  function handleOptionClick(id) {
    setSelectedOption(id);
  }

  return (
    <div>
      {intents.map((item) => {
        return (
          <div key={item.id}>
            <button onClick={() => handleOptionClick(item.id)}>
              {item.label}
            </button>
          </div>
        )
      })}
      {selectedOption === "stock" && <p>Stock information</p>}
      {selectedOption === "visit" && <p>Visit information</p>}
      {selectedOption === "hours" && <p>Opening Hours information</p>}
    </div>
  )
}

export default NaviBot;