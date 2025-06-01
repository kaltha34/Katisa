import React from 'react';
import { motion } from 'framer-motion';

const Spinner = ({ size = 'medium', color = 'primary', fullScreen = false }) => {
  // Size classes
  const sizeClasses = {
    small: 'w-6 h-6 border-2',
    medium: 'w-10 h-10 border-3',
    large: 'w-16 h-16 border-4'
  };
  
  // Color classes
  const colorClasses = {
    primary: 'border-primary',
    accent: 'border-accent',
    white: 'border-white'
  };
  
  const spinnerElement = (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className={`${sizeClasses[size]} ${colorClasses[color]} border-t-transparent rounded-full`}
    />
  );
  
  // If fullScreen is true, center the spinner in the viewport
  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
        {spinnerElement}
      </div>
    );
  }
  
  // Otherwise, just return the spinner
  return spinnerElement;
};

export default Spinner;
