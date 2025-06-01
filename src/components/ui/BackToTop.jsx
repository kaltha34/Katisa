import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import { scaleUp, buttonHover } from '../../utils/animations';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top coordinate to 0
  // Make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Initial check on mount
    toggleVisibility();
    
    // Add scroll event listener
    window.addEventListener("scroll", toggleVisibility);
    
    // Clean up event listener
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={scaleUp.initial}
          animate={scaleUp.animate}
          exit={scaleUp.exit}
          transition={{ duration: 0.2 }}
          whileHover={buttonHover.whileHover}
          whileTap={buttonHover.whileTap}
          onClick={scrollToTop}
          className="fixed bottom-6 md:bottom-8 right-6 md:right-8 z-50 bg-primary-600 text-white p-3 rounded-full shadow-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          aria-label="Back to top"
        >
          <FiArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
