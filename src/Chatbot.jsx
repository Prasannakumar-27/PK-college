import React, { useState } from "react";
import "./Chatbot.css";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Floating Toggle Button */}
      <div className="toggle">
        <button className="emoji" onClick={handleToggle}>🤖</button>
      </div>

      {/* Chatbox */}
      {isOpen && (
        <div id="chatbox" className={isOpen ? "active" : ""}>
          <div className="chatbox-header">
            <h2>Chatbot 🤖</h2>
            <span className="close-btn" onClick={handleToggle}>✖</span>
          </div>
          <div className="chatbox-messages">
            <p className="bot-msg">👋 Hi! How can I help you today?</p>
          </div>
          <div className="input-area">
            <input type="text" placeholder="Type your message..." />
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
