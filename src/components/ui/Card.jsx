import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Card = ({ 
  title, 
  description, 
  icon: Icon, 
  link, 
  linkText = 'Learn More',
  className = '' 
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`card ${className}`}
    >
      {Icon && (
        <div className="text-primary mb-4">
          <Icon size={40} />
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {link && (
        <Link 
          to={link} 
          className="text-primary font-medium hover:text-blue-700 transition-colors inline-flex items-center"
        >
          {linkText}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 ml-1" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </Link>
      )}
    </motion.div>
  );
};

export default Card;
