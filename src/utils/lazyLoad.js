/**
 * Utility functions for lazy loading images and components
 */

/**
 * Creates an intersection observer to lazy load images
 * @param {HTMLElement} imageElement - The image element to observe
 * @param {string} src - The source URL of the image
 */
export const lazyLoadImage = (imageElement, src) => {
  if (!imageElement || !src) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // When the image is in the viewport, set the src
        imageElement.src = src;
        
        // Stop observing once loaded
        observer.unobserve(imageElement);
      }
    });
  }, {
    rootMargin: '100px', // Start loading when image is 100px from viewport
    threshold: 0.1 // Trigger when at least 10% of the image is visible
  });
  
  observer.observe(imageElement);
};

/**
 * Creates a placeholder image URL with specified dimensions and text
 * @param {number} width - Width of the placeholder image
 * @param {number} height - Height of the placeholder image
 * @param {string} text - Text to display on the placeholder
 * @returns {string} - Placeholder image URL
 */
export const createPlaceholder = (width = 400, height = 300, text = 'Loading...') => {
  return `https://via.placeholder.com/${width}x${height}?text=${encodeURIComponent(text)}`;
};

/**
 * Formats a date string to a more readable format
 * @param {string} dateString - Date string to format
 * @returns {string} - Formatted date string
 */
export const formatDate = (dateString) => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

/**
 * Truncates text to a specified length and adds ellipsis
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length before truncation
 * @returns {string} - Truncated text
 */
export const truncateText = (text, maxLength = 150) => {
  if (!text || text.length <= maxLength) return text;
  
  return text.substring(0, maxLength).trim() + '...';
};
