import React from 'react';
import { motion } from 'framer-motion';

const Testimonial = ({ 
  quote, 
  name, 
  title, 
  avatar,
  className = '' 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`bg-white rounded-xl shadow-md p-6 ${className}`}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <svg className="h-8 w-8 text-primary opacity-50" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
        </div>
        <p className="text-gray-600 italic mb-6 flex-grow">{quote}</p>
        <div className="flex items-center mt-auto">
          {avatar ? (
            <img 
              src={avatar} 
              alt={name} 
              className="h-10 w-10 rounded-full mr-3 object-cover"
            />
          ) : (
            <div className="h-10 w-10 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-3">
              {name.charAt(0)}
            </div>
          )}
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-gray-500">{title}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;
