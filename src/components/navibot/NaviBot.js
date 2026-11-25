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

      {error !== "" && <p>{error}</p>}

      {submitted && (
        <div>
          <h4>Visit Request Details</h4>

          <p>Name: {customerName}</p>
          <p>Date: {visitDate}</p>
          <p>Purpose: {visitPurpose}</p>
          <p>Time: {visitTime}</p>

          <p>Your visit request details have been entered.</p>
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
      {selectedOption === "visit" && <VisitPlanner />}
      <MessageInput />
    </div>
  )
}

export default NaviBot;