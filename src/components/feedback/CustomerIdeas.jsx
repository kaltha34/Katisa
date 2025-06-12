import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMessageSquare, FiThumbsUp, FiLoader } from 'react-icons/fi';
import { getTestimonials } from '../../services/testimonialService';

const ClientTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Function to fetch testimonials from JSON server API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const data = await getTestimonials();
        setTestimonials(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching testimonials:', err);
        setError('Failed to load testimonials. Please try again later.');
        setLoading(false);
      }
    };
    
    fetchTestimonials();
    
    // Set up polling to check for new testimonials every 30 seconds
    const intervalId = setInterval(fetchTestimonials, 30000);
    
    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Function to render stars based on rating
  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients and interns have to say about their experience with Katisa Technologies.
          </p>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin mr-2">
              <svg className="w-8 h-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            <span className="text-gray-600 text-lg">Loading ideas...</span>
          </div>
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-red-500 mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {testimonials.map((idea, index) => (
              <motion.div
                key={idea.id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <span className={`p-2 rounded-full mr-3 ${idea.type === 'idea' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}>
                    {idea.type === 'idea' ? <FiMessageSquare /> : <FiThumbsUp />}
                  </span>
                  <div>
                    <span className="font-medium text-sm uppercase tracking-wider text-gray-500">
                      {idea.type === 'idea' ? 'Idea' : 'Collaboration'}
                    </span>
                    <div className="mt-1">
                      {renderStars(idea.rating)}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">"{idea.content}"</p>
                
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span className="font-medium">{idea.author}</span>
                  <span>{idea.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6 text-gray-400">
                <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Be the first to share an idea!</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                No ideas have been shared yet. Share your thoughts and help shape our future projects and collaborations.
              </p>
            </motion.div>
          </div>
        )}
        
        <div className="text-center mt-10">
          <p className="mb-4 text-gray-600">Have an idea you'd like to share with us?</p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            Share Your Ideas
          </a>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonials;
