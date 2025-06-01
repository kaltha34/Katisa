import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageSquare, FiX, FiSend } from 'react-icons/fi';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hi there! 👋 I'm Kati, the AI assistant from Katisa Technologies. How can I help you today?", 
      sender: 'bot' 
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user'
    };
    
    setMessages([...messages, userMessage]);
    setInputValue('');
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponses = [
        "Thanks for your message! Someone from our team will get back to you soon.",
        "That's a great question! Our AI services include chatbot development, automation tools, and more.",
        "Our internship program offers hands-on experience with real projects. You can apply on our internship page.",
        "We'd be happy to discuss your project! Please provide more details or schedule a consultation through our contact page.",
        "Katisa Technologies specializes in AI-powered software development while providing internship opportunities to aspiring tech professionals."
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const botMessage = {
        id: messages.length + 2,
        text: randomResponse,
        sender: 'bot'
      };
      
      setMessages(prevMessages => [...prevMessages, botMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg z-50 hover:bg-blue-600 transition-colors"
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Chat with us"
      >
        {isOpen ? <FiX size={24} /> : <FiMessageSquare size={24} />}
      </motion.button>
      
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-xl shadow-xl z-50 overflow-hidden flex flex-col"
            style={{ maxHeight: '500px' }}
          >
            {/* Chat Header */}
            <div className="bg-primary text-white p-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary font-bold mr-3">
                  K
                </div>
                <div>
                  <h3 className="font-bold">Kati - AI Assistant</h3>
                  <p className="text-xs opacity-80">Katisa Technologies</p>
                </div>
              </div>
            </div>
            
            {/* Chat Messages */}
            <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === 'user'
                          ? 'bg-primary text-white rounded-tr-none'
                          : 'bg-white shadow-md rounded-tl-none'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Chat Input */}
            <form onSubmit={handleSubmit} className="border-t border-gray-200 p-3 flex">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="flex-grow px-4 py-2 bg-gray-100 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition-colors"
                aria-label="Send message"
              >
                <FiSend />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
