import { intents, botResponses } from "../../naviData";
import { useState } from "react";
import "./NaviBot.css";

function ChatMessage({ message, sender }) {
  return (
    <div className={sender === "user" ? "user-message" : "bot-message"}>
      <p>{message}</p>
    </div>
  );
}

function MessageInput() {

  // stores what the customer is currently typing
  const [userInput, setUserInput] = useState("");

  //store multiple messages
  const [messages, setMessages] = useState([]);

  function handleSend() {

    if (userInput !== "") {

      const lowerInput = userInput.toLowerCase();

      const matchedResponse = botResponses.filter(
        (item) => lowerInput.includes(item.keyword)
      );

      if (matchedResponse.length > 0) {
        setMessages([...messages,
        { sender: "user", text: userInput },
        { sender: "bot", text: matchedResponse[0].reply }
        ]);
      } else {
        setMessages([...messages,
        { sender: "user", text: userInput },
        {
          sender: "bot",
          text: "Sorry, I don't understand your question."
        }
        ]);
      }
      setUserInput("");
    }
  }

  return (
    <div>
      <input value={userInput}
        onChange={(event) => setUserInput(event.target.value)} />
      {messages.map((message, index) => {
        return (
          <ChatMessage
            key={index}
            message={message.text}
            sender={message.sender}
          />
        );
      })}
      <button onClick={() => handleSend()}> Send </button>
    </div>
  )
}

function WarehouseLocation() {
  return (
    <div>
      <h3>SmartStore Warehouse</h3>
      <p>Location: Woodlands, Singapore</p>
      <p>Plan your journey before visiting our warehouse.</p>
    </div>
  );
}

function NaviBot() {

  const [selectedOption, setSelectedOption] = useState("");

  // item represents one entire object
  const selectedIntent = intents.filter((item) => item.id === selectedOption);

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
      {selectedIntent.map((item) => {
        return (
          <div key={item.id}>
            <ChatMessage message={item.desc} />
          </div>
        )
      })}
      {selectedOption === "visit" && <WarehouseLocation />}
      <MessageInput />
    </div>
  )
}

export default NaviBot;