import React, { useState, useEffect, useRef } from "react";
import ChatbotBubble from "./components/ChatbotBubble";
import ChatWindow from "./components/ChatWindow";
import Message from "./components/Messages";
import matchIntent from "./utils/matchIntent";
import QuickActions from "./components/QuickActions";

import './Chatbot.scss'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Start with empty messages to trigger the animated greeting later
  const [messages, setMessages] = useState([]);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [input, setInput] = useState("");

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  const openChat = () => setIsOpen(true);
  const closeChat = () => setIsOpen(false);

  // 1. Initial Greeting Animation Logic
  useEffect(() => {
    if (isOpen && !hasGreeted) {
      setHasGreeted(true);
      
      // Show typing dots for the initial greeting
      const typingMessage = { text: "typing", sender: "bot", typing: true };
      setMessages([typingMessage]);

      // Delay to simulate "thinking" then show greeting
      setTimeout(() => {
        setMessages([
          { text: "Hi! I’m Raj’s portfolio assistant. How can I help you?", sender: "bot" }
        ]);
      }, 1500); 
    }
  }, [isOpen, hasGreeted]);

  // 2. Auto-scroll to bottom whenever messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 3. Auto-focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const getBotResponse = (userInput) => {
    // Add typing indicator
    const typingMessage = { text: "typing", sender: "bot", typing: true };
    setMessages((prev) => [...prev, typingMessage]);

    // Simulate natural response delay
    const randomDelay = Math.floor(Math.random() * (3000 - 1500 + 1)) + 1500;

    setTimeout(() => {
      setMessages((prev) => {
        // Remove typing dots and add the actual response
        const withoutTyping = prev.filter((msg) => !msg.typing);
        return [
          ...withoutTyping,
          { text: matchIntent(userInput), sender: "bot" }
        ];
      });
    }, randomDelay);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    getBotResponse(input);
    setInput("");
  };

  const handleQuickAction = (value) => {
    const userMessage = { text: value, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    getBotResponse(value);
  };

  return (
    <>
      {/* Aria-label added for Accessibility score boost */}
      <ChatbotBubble onClick={openChat} aria-label="Open chat assistant" />

      <ChatWindow isOpen={isOpen} onClose={closeChat}>
        {/* Quick Actions at the top */}
        <div className="chatbot__top-static">
          <QuickActions onSelect={handleQuickAction} />
        </div>

        {/* Message Display Area */}
        <div className="chatbot__body">
          {messages.map((msg, index) => (
            <Message 
              key={index} 
              text={msg.text} 
              sender={msg.sender} 
              typing={msg.typing} 
            />
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Footer */}
        <div className="chatbot-input">
          <input
            type="text"
            placeholder="Ask about skills or resume..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            ref={inputRef}
          />
          <button 
            onClick={handleSend} 
            type="button" 
            aria-label="Send message"
          >
            Send
          </button>
        </div>
      </ChatWindow>
    </>
  );
};

export default Chatbot;