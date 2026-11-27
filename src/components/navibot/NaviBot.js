import { intents, botResponses, openingHours } from "../../naviData";
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

  const [showChat, setShowChat] = useState(true);

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

  function handleClearChat() {
    setMessages([]);
    setUserInput("");
  }

  return (
    <div className="navibot-chat">

      <div className="navibot-chat-header">
        <h3>NaviBot Chat</h3>
        <p>SmartStore Assistant</p>

        <button onClick={handleClearChat}>
          Clear Chat
        </button>

        <button onClick={() => setShowChat(!showChat)}>
          {showChat ? "Hide Chat" : "Show Chat"}
        </button>
      </div>


      {showChat && (
        <div>

          <div className="navibot-conversation">
            {messages.length === 0 ? (
              <p>Start a conversation with NaviBot!</p>
            ) : (
              messages.map((message, index) => {
                return (
                  <ChatMessage
                    key={index}
                    message={message.text}
                    sender={message.sender}
                  />
                );
              })
            )}
          </div>

          <div className="navibot-input-row">
            <input
              value={userInput}
              onChange={(event) => setUserInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleSend();
                }
              }}
              placeholder="Type your message..."
            />

            <button onClick={() => handleSend()}>
              Send
            </button>
          </div>

        </div>
      )}

    </div>
  );

}

function WarehouseLocation() {
  return (
    <div>
      <h3>SmartStore Warehouse</h3>
      <p>Location: Woodlands, Singapore</p>
      <p>Plan your journey before visiting our warehouse.</p>

      <a
        href="https://www.google.com/maps/dir/?api=1&destination=Woodlands%2C+Singapore"
        target="_blank"
        rel="noopener noreferrer"
      >
        Get Directions
      </a>
    </div>
  );
}

function VisitPlanner() {
  const [customerName, setCustomerName] = useState("");
  const [visitDate, setVisitDate] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [visitPurpose, setVisitPurpose] = useState("stock");
  const [visitTime, setVisitTime] = useState("10:00");

  function handleSubmit() {
    if (customerName === "" || visitDate === "") {
      setError("Please fill in both fields.");
      setSubmitted(false);
    } else {
      setError("");
      setSubmitted(true);
    }
  }

  function handleReset() {
    setCustomerName("");
    setVisitDate("");
    setVisitPurpose("stock");
    setVisitTime("10:00");
    setSubmitted(false);
    setError("");
  }

  return (
    <div>
      <h3>Plan Your Warehouse Visit</h3>

      <p>Your Name:</p>
      <input
        value={customerName}
        onChange={(event) => {
          setCustomerName(event.target.value);
          setSubmitted(false);
        }}
        placeholder="Enter your name"
      />

      <p>Preferred Visit Date:</p>
      <input
        type="date"
        value={visitDate}
        onChange={(event) => {
          setVisitDate(event.target.value);
          setSubmitted(false);
        }}
      />

      <p>Purpose of Visit:</p>
      <select
        value={visitPurpose}
        onChange={(event) => {
          setVisitPurpose(event.target.value);
          setSubmitted(false);
        }}
      >
        <option value="stock">Check Stock</option>
        <option value="pickup">Collect Items</option>
        <option value="other">General Enquiry</option>
      </select>

      <p>Preferred Time:</p>
      <select
        value={visitTime}
        onChange={(event) => {
          setVisitTime(event.target.value);
          setSubmitted(false);
        }}
      >
        <option value="10:00">10:00 AM</option>
        <option value="11:00">11:00 AM</option>
        <option value="14:00">2:00 PM</option>
        <option value="15:00">3:00 PM</option>
      </select>

      <button onClick={handleSubmit}>
        Submit Visit Request
      </button>

      <button onClick={handleReset}>
        Reset Form
      </button>

      {error !== "" && <p>{error}</p>}

      {submitted && (
        <div>
          <h4>Visit Request Details</h4>

          <p>Name: {customerName}</p>
          <p>Date: {visitDate}</p>

          <p>
            Purpose: {
              visitPurpose === "stock"
                ? "Check Stock"
                : visitPurpose === "pickup"
                  ? "Collect Items"
                  : "General Enquiry"
            }
          </p>

          <p>Time: {visitTime}</p>

          <p>Your visit request details have been entered.</p>
          <p>This is not a confirmed booking.</p>
        </div>
      )}
    </div>
  );
}


function StockInformation() {

  const [productName, setProductName] = useState("");
  const [searchedProduct, setSearchedProduct] = useState("");
  const [error, setError] = useState("");

  function handleCheckStock() {

    if (productName === "") {
      setError("Please enter a product name.");
      setSearchedProduct("");
    } else {
      setSearchedProduct(productName);
      setError("");
    }
  }

  return (
    <div>
      <h3>Check Stock Availability</h3>

      <p>Enter the product you want to check.</p>

      <input
        value={productName}
        onChange={(event) => {
          setProductName(event.target.value);
          setSearchedProduct("");
          setError("");
        }}
        placeholder="Enter product name"
      />

      <button onClick={handleCheckStock}>
        Check Stock
      </button>

      {error !== "" && <p>{error}</p>}

      {searchedProduct !== "" && (
        <div>
          <h4>Stock Enquiry</h4>
          <p>Product: {searchedProduct}</p>
          <p>Live stock information is not available yet.</p>
        </div>
      )}
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

  function handleBack() {
    setSelectedOption("");
  }

  return (

    <div className="navibot-container">

      <div className="navibot-header">
        <h2>NaviBot</h2>
        <p>Your SmartStore Warehouse Assistant</p>
      </div>

      <div className="navibot-welcome">
        <p>Hello! Welcome to SmartStore.</p>
        <p>How can I help you today?</p>
      </div>

      <div>
        <div className="navibot-options">
          {intents.map((item) => {
            return (
              <button
                key={item.id}
                className={
                  selectedOption === item.id
                    ? "navibot-option active"
                    : "navibot-option"
                }
                onClick={() => handleOptionClick(item.id)}
              >
                <span>{item.label}</span>
                <span>{item.desc}</span>
              </button>
            );
          })}
        </div>
        {selectedIntent.map((item) => {
          return (
            <div key={item.id}>
              <ChatMessage message={item.desc} />
            </div>
          )
        })}
        {selectedOption === "stock" && <StockInformation />}

        {selectedOption === "visit" && <WarehouseLocation />}
        {selectedOption === "visit" && <VisitPlanner />}

        {selectedOption === "hours" && <OpeningHours />}

        {selectedOption !== "" && (
          <button className="navibot-back-button" onClick={handleBack}>
            Back to Main Menu
          </button>
        )}

        <MessageInput />
      </div>
    </div>
  );
}


function OpeningHours() {
  return (
    <div>
      <h3>SmartStore Opening Hours</h3>

      <p>Here are our warehouse operating hours:</p>

      {openingHours.map((item, index) => {
        return (
          <div key={index}>
            <p>
              <strong>{item.day}</strong>: {item.time}
            </p>
          </div>
        );
      })}

      <p>Please check our hours before planning your visit.</p>
    </div>
  );
}


export default NaviBot;