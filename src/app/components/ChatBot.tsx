"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import {
  IconMessageCircle,
  IconX,
  IconSend,
  IconPhone,
  IconMaximize,
  IconMinimize,
  IconRobot,
  IconSparkles,
  IconHeadset,
  IconChevronDown,
} from "@tabler/icons-react";
import Image from "next/image";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isCallHovered, setIsCallHovered] = useState(false);
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

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const getBotResponse = useCallback((userMessage: string): string => {
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
  }, []);

  const handleSendMessage = useCallback(async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    const currentInput = inputValue;
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(currentInput),
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  }, [inputValue, getBotResponse]);

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSendMessage();
      }
    },
    [handleSendMessage]
  );

  const quickQuestions = useMemo(
    () => [
      "What products do you export?",
      "Which countries do you export to?",
      "What are your quality standards?",
      "How can I get a quote?",
    ],
    []
  );

  return (
    <>
      {/* Call Button Container */}
      <motion.div
        className="fixed bottom-24 right-4 sm:right-6 z-40"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 2.2,
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <motion.button
          className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full shadow-2xl transition-all duration-300 overflow-hidden"
          onClick={() => window.open("tel:+1234567890", "_self")}
          onMouseEnter={() => setIsCallHovered(true)}
          onMouseLeave={() => setIsCallHovered(false)}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          title="Call us now"
        >
          {/* Background animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={{
              scale: isCallHovered ? [1, 1.2, 1] : 1,
              opacity: isCallHovered ? 0.1 : 0,
            }}
            transition={{ duration: 0.6, repeat: isCallHovered ? Infinity : 0 }}
          />

          {/* Main button content */}
          <div className="relative p-3">
            <motion.div
              animate={{ rotate: isCallHovered ? 360 : 0 }}
              transition={{ duration: 0.6 }}
            >
              <IconPhone size={20} />
            </motion.div>
          </div>

          {/* Pulse effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white/30"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.button>

        {/* Optimized single particle for call button */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute w-1 h-1 bg-blue-400 rounded-full will-change-transform"
            animate={{
              y: [0, -12, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: "50%",
              top: "75%",
            }}
          />
        </div>
      </motion.div>

      {/* Chat Button Container */}
      <motion.div
        className="fixed bottom-6 right-4 sm:right-6 z-40"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 2,
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <motion.button
          className="group relative bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-full shadow-2xl transition-all duration-300 overflow-hidden"
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          title="Chat with us"
        >
          {/* Background animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
              opacity: isHovered ? 0.1 : 0,
            }}
            transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0 }}
          />

          {/* Main button content */}
          <div className="relative p-4">
            <motion.div
              animate={{
                rotate: isOpen ? 180 : 0,
                scale: isHovered ? [1, 1.1, 1] : 1,
              }}
              transition={{
                rotate: { duration: 0.3 },
                scale: { duration: 0.6, repeat: isHovered ? Infinity : 0 },
              }}
            >
              {isOpen ? <IconX size={24} /> : <IconMessageCircle size={24} />}
            </motion.div>
          </div>

          {/* Pulse effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white/30"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Tooltip */}
          <motion.div
            className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            initial={{ x: 10, opacity: 0 }}
            animate={{
              x: isHovered ? 0 : 10,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.2 }}
          >
            <span>{isOpen ? "Close Chat" : "Chat with us"}</span>
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
          </motion.div>
        </motion.button>

        {/* Optimized single particle effect */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute w-1 h-1 bg-yellow-400 rounded-full will-change-transform"
            animate={{
              y: [0, -15, 0],
              opacity: [0, 0.9, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: "35%",
              top: "85%",
            }}
          />
        </div>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`fixed bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden border border-white/20 ${
              isFullSize
                ? "top-4 left-4 right-4 bottom-4"
                : "bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-96 max-w-sm h-[500px]"
            }`}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 text-white p-4 flex items-center justify-between relative overflow-hidden">
              {/* Animated background pattern */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-400/30 to-green-500/30"
                animate={{
                  x: [-100, 100, -100],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Logo and company info */}
              <div className="flex items-center space-x-3 min-w-0 flex-1 relative z-10">
                <motion.div
                  className="relative w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="relative w-6 h-6">
                    <Image
                      src="/about-img/logo1-removebg-preview.png"
                      alt="AFROCADDO Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
                <div className="min-w-0 flex-1">
                  <motion.h3
                    className="font-bold text-lg truncate flex items-center"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <IconSparkles size={16} className="mr-2 text-yellow-300" />
                    Afrocado Support
                  </motion.h3>
                  <motion.div
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.span
                      className="inline-block w-2 h-2 bg-green-300 rounded-full"
                      animate={{
                        opacity: [1, 0.3, 1],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <span className="text-sm text-green-100 font-medium">
                      Online • Expert Support
                    </span>
                  </motion.div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center space-x-2 flex-shrink-0 relative z-10">
                <motion.button
                  onClick={() => setIsFullSize(!isFullSize)}
                  className="text-white/80 hover:text-white transition-colors p-2 rounded-xl hover:bg-white/10 backdrop-blur-sm"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  title={isFullSize ? "Minimize" : "Maximize"}
                >
                  {isFullSize ? (
                    <IconMinimize size={18} />
                  ) : (
                    <IconMaximize size={18} />
                  )}
                </motion.button>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors p-2 rounded-xl hover:bg-white/10 backdrop-blur-sm"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  title="Close chat"
                >
                  <IconX size={18} />
                </motion.button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto bg-gradient-to-b from-gray-50/50 to-white p-4 space-y-4">
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
                    className={`max-w-[85%] sm:max-w-[80%] p-4 rounded-2xl shadow-sm border ${
                      message.isUser
                        ? "bg-gradient-to-br from-emerald-500 to-green-600 text-white border-emerald-200"
                        : "bg-white text-gray-800 border-gray-200"
                    }`}
                  >
                    <p className="text-sm leading-relaxed mb-2">
                      {message.text}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-xs opacity-70">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                      {message.isUser && (
                        <div className="flex items-center space-x-1">
                          <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                          <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                          <div className="w-1.5 h-1.5 bg-white/20 rounded-full"></div>
                        </div>
                      )}
                    </div>
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
                  <div className="bg-white text-gray-800 p-4 rounded-2xl shadow-sm border border-gray-200">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <motion.div
                          className="w-2 h-2 bg-emerald-400 rounded-full"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-emerald-400 rounded-full"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.2,
                          }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-emerald-400 rounded-full"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.4,
                          }}
                        />
                      </div>
                      <span className="text-sm text-gray-600 font-medium">
                        Afrocado is typing...
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length <= 2 && (
              <div className="p-3 border-t bg-gradient-to-r from-gray-50 to-white">
                <div className="flex items-center space-x-2 mb-3">
                  <IconChevronDown size={16} className="text-gray-500" />
                  <p className="text-xs font-medium text-gray-600">
                    Quick questions:
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {quickQuestions.map((question, index) => {
                    const handleQuestionClick = () => setInputValue(question);
                    return (
                      <motion.button
                        key={index}
                        onClick={handleQuestionClick}
                        className="text-xs bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 px-3 py-1.5 rounded-lg hover:from-emerald-100 hover:to-green-100 transition-all duration-200 border border-emerald-200 hover:border-emerald-300 break-words font-medium"
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {question}
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t bg-gradient-to-r from-gray-50 to-white">
              <div className="flex space-x-3">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <IconHeadset size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about our services..."
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm bg-white shadow-sm transition-all duration-200"
                  />
                </div>
                <motion.button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-gradient-to-r from-emerald-500 to-green-600 text-white p-4 rounded-2xl hover:from-emerald-600 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex-shrink-0 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title="Send message"
                >
                  <IconSend size={18} />
                </motion.button>
              </div>
              <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                <span>Press Enter to send</span>
                <span className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Expert support available</span>
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
