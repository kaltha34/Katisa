import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { isValidEmail } from '../../utils/validation';

const NewsletterSubscribe = ({ 
  title = 'Subscribe to Our Newsletter', 
  description = 'Stay updated with our latest news, articles, and tech insights.',
  buttonText = 'Subscribe',
  darkMode = false
}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Reset states
    setError('');
    
    // Validate email
    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Submit form
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    }, 1500);
  };
  
  const textColorClass = darkMode ? 'text-white' : 'text-gray-800';
  const textSecondaryClass = darkMode ? 'text-gray-300' : 'text-gray-600';
  const bgClass = darkMode ? 'bg-gray-800' : 'bg-white';
  const borderClass = darkMode ? 'border-gray-700' : 'border-gray-200';
  
  return (
    <div className={`${bgClass} rounded-lg p-6 ${borderClass} border`}>
      <div className="text-center mb-6">
        <h3 className={`text-2xl font-bold mb-2 ${textColorClass}`}>{title}</h3>
        <p className={`${textSecondaryClass}`}>{description}</p>
      </div>
      
      {isSubscribed ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-100 text-green-700 p-4 rounded-lg flex items-center justify-center"
        >
          <FiCheck className="mr-2" />
          <span>Thank you for subscribing to our newsletter!</span>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiMail className={textSecondaryClass} />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full pl-10 pr-4 py-3 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-primary`}
              placeholder="Enter your email address"
            />
          </div>
          
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-2 text-red-500 flex items-center"
            >
              <FiAlertCircle className="mr-1" />
              <span className="text-sm">{error}</span>
            </motion.div>
          )}
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-4 bg-primary text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Subscribing...
              </>
            ) : buttonText}
          </button>
        </form>
      )}
    </div>
  );
};

export default NewsletterSubscribe;
