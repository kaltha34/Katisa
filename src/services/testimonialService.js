/**
 * Service for handling testimonial data operations with the JSON server
 */

const API_URL = 'http://localhost:3004';

/**
 * Get all testimonials from the server
 * @returns {Promise<Array>} Array of testimonials
 */
export const getTestimonials = async () => {
  try {
    const response = await fetch(`${API_URL}/testimonials`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    throw error;
  }
};

/**
 * Add a new testimonial to the server
 * @param {Object} testimonial - The testimonial object to add
 * @returns {Promise<Object>} The added testimonial with server-generated ID
 */
export const addTestimonial = async (testimonial) => {
  try {
    const response = await fetch(`${API_URL}/testimonials`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...testimonial,
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      }),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error adding testimonial:', error);
    throw error;
  }
};
