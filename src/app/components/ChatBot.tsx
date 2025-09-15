"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm here to help you learn about Afrocado's premium fruit and vegetable export services. How can I assist you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    // Company Information
    if (
      message.includes("company") ||
      message.includes("about") ||
      message.includes("who")
    ) {
      return "Afrocado is a premium fruit and vegetable export company specializing in high-quality African produce. We export to 25+ countries worldwide with over 15 years of experience and partnerships with 500+ farms across Africa.";
    }

    // Products
    if (
      message.includes("product") ||
      message.includes("fruit") ||
      message.includes("vegetable") ||
      message.includes("what do you sell")
    ) {
      return "We export a wide range of premium African produce including avocados, mangoes, citrus fruits, vegetables, and exotic fruits. All our products meet international quality standards and are sourced from certified partner farms.";
    }

    // Export Countries
    if (
      message.includes("export") ||
      message.includes("country") ||
      message.includes("where") ||
      message.includes("destination")
    ) {
      return "We export to over 25 countries worldwide, including major markets in Europe, North America, Asia, and the Middle East. Our global network ensures fresh delivery to your location.";
    }

    // Quality Standards
    if (
      message.includes("quality") ||
      message.includes("standard") ||
      message.includes("certification") ||
      message.includes("fresh")
    ) {
      return "We maintain the highest quality standards with state-of-the-art cold chain logistics, rigorous quality control processes, and international certifications. Our products are harvested at peak ripeness and delivered fresh to your doorstep.";
    }

    // Pricing/Quote
    if (
      message.includes("price") ||
      message.includes("cost") ||
      message.includes("quote") ||
      message.includes("how much")
    ) {
      return "For pricing information and quotes, please contact our sales team directly. We offer competitive rates based on volume, destination, and product specifications. You can request a quote through our contact form or reach out to us directly.";
    }

    // Contact Information
    if (
      message.includes("contact") ||
      message.includes("phone") ||
      message.includes("email") ||
      message.includes("reach")
    ) {
      return "You can contact us through our website contact form, email, or phone. Our team is available to discuss your export needs and provide personalized solutions for your business requirements.";
    }

    // Shipping/Logistics
    if (
      message.includes("shipping") ||
      message.includes("delivery") ||
      message.includes("logistics") ||
      message.includes("transport")
    ) {
      return "We use advanced cold chain logistics to ensure your products arrive fresh and in perfect condition. Our shipping methods are optimized for different destinations and product types, with real-time tracking available.";
    }

    // Partnership
    if (
      message.includes("partner") ||
      message.includes("farm") ||
      message.includes("supplier") ||
      message.includes("source")
    ) {
      return "We work with over 500 certified partner farms across Africa, ensuring consistent quality and supply. Our partnerships are built on trust, quality, and mutual benefit, supporting local communities while delivering premium products.";
    }

    // Default responses
    if (
      message.includes("hello") ||
      message.includes("hi") ||
      message.includes("hey")
    ) {
      return "Hello! Welcome to Afrocado. I'm here to help you learn about our premium fruit and vegetable export services. What would you like to know?";
    }

    if (message.includes("thank") || message.includes("thanks")) {
      return "You're welcome! I'm here to help. Is there anything else you'd like to know about Afrocado's services?";
    }

    if (message.includes("help") || message.includes("assist")) {
      return "I can help you with information about our products, export services, quality standards, pricing, shipping, and more. Just ask me anything about Afrocado!";
    }

    // Fallback response
    return "That's a great question! While I can provide general information about Afrocado's services, for specific details or personalized assistance, I'd recommend contacting our sales team directly. They can provide more detailed information tailored to your needs.";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "What products do you export?",
    "Which countries do you export to?",
    "What are your quality standards?",
    "How can I get a quote?",
  ];

  return (
    <>
      {/* Chat Button */}
      <motion.button
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg z-40"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? "✕" : "💬"}
        </motion.div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  🥑
                </div>
                <div>
                  <h3 className="font-semibold">Afrocado Assistant</h3>
                  <p className="text-xs text-green-100">Online now</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-green-200 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${
                    message.isUser ? "justify-end" : "justify-start"
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.isUser
                        ? "bg-green-600 text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="bg-gray-100 text-gray-800 p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="p-4 border-t">
                <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => setInputValue(question)}
                      className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full hover:bg-green-100 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about our services..."
                  className="flex-1 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <motion.button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ➤
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
