import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ 
  children, 
  className = '', 
  id, 
  bgColor = 'bg-white',
  animate = true
}) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  return animate ? (
    <motion.section
      id={id}
      className={`py-16 ${bgColor} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4 md:px-8">
        {children}
      </div>
    </motion.section>
  ) : (
    <section id={id} className={`py-16 ${bgColor} ${className}`}>
      <div className="container mx-auto px-4 md:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;
