import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/ui/SEO';
import { Link } from 'react-router-dom';
import { FiHome, FiMail } from 'react-icons/fi';

import Button from '../components/ui/Button';

const NotFoundPage = () => {
  return (
    <>
      <SEO 
        title="Page Not Found" 
        description="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable." 
        keywords={['404', 'not found', 'error page']} 
      />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <div className="h-2 w-24 bg-accent mx-auto my-6"></div>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/" variant="primary" className="flex items-center justify-center">
            <FiHome className="mr-2" /> Back to Home
          </Button>
          <Button to="/contact" variant="outline" className="flex items-center justify-center">
            <FiMail className="mr-2" /> Contact Us
          </Button>
        </div>
      </motion.div>
      </div>
    </>
  );
};

export default NotFoundPage;
