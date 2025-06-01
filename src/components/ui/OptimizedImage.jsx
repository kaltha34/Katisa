import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  objectFit = 'cover',
  loading = 'lazy',
  animation = true
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Reset states when src changes
    setIsLoaded(false);
    setError(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
  };

  // Default placeholder for error state
  const errorPlaceholder = 'https://via.placeholder.com/400x300?text=Image+Not+Available';

  // Style for the image container
  const containerStyle = {
    width: width || '100%',
    height: height || 'auto',
    position: 'relative',
    overflow: 'hidden'
  };

  // Style for the image
  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: objectFit
  };

  return (
    <div style={containerStyle} className={className}>
      {/* Skeleton loader */}
      {!isLoaded && !error && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
      )}
      
      {/* Actual image */}
      <motion.img
        src={error ? errorPlaceholder : src}
        alt={alt}
        style={imageStyle}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        initial={animation ? { opacity: 0 } : { opacity: 1 }}
        animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default OptimizedImage;
