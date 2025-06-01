import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  to, 
  href, 
  variant = 'primary', 
  className = '', 
  onClick,
  ...props 
}) => {
  const baseClasses = variant === 'primary' 
    ? 'btn-primary' 
    : variant === 'secondary' 
      ? 'btn-secondary' 
      : 'btn-outline';
  
  const buttonContent = (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${className}`}
      {...props}
    >
      {children}
    </motion.span>
  );

  if (to) {
    return <Link to={to}>{buttonContent}</Link>;
  }

  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer">{buttonContent}</a>;
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
