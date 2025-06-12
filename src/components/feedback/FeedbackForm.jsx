import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiThumbsUp, FiMessageSquare } from 'react-icons/fi';
import StarRating from './StarRating';
import { addTestimonial } from '../../services/testimonialService';

const FeedbackForm = () => {
  const [feedbackType, setFeedbackType] = useState('idea');
  const [feedbackText, setFeedbackText] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // Function to save testimonial to JSON server API
  const saveTestimonial = async (testimonial) => {
    try {
      await addTestimonial(testimonial);
      return true;
    } catch (err) {
      console.error('Error saving testimonial to API:', err);
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!feedbackText.trim() || !name.trim() || !email.trim()) {
      setError('Please fill in all required fields');
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    
    // Create a hidden iframe to handle the form submission
    const iframe = document.createElement('iframe');
    iframe.name = 'feedback-submit-iframe';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    
    // Set the form target to the iframe
    e.target.target = 'feedback-submit-iframe';
    
    // Handle iframe load event to detect submission completion
    iframe.onload = async () => {
      // Save to JSON server API for display in ClientTestimonials component
      const success = await saveTestimonial({
        type: feedbackType,
        content: feedbackText,
        author: name,
        rating: rating || 5, // Default to 5 if not rated
      });
      
      setIsSubmitting(false);
      
      if (success) {
        setSubmitted(true);
        setFeedbackText('');
        setName('');
        setEmail('');
        setRating(0);
      } else {
        setError('Failed to save your feedback. Please try again later.');
      }
      
      // Clean up iframe
      setTimeout(() => {
        document.body.removeChild(iframe);
      }, 1000);
    };
    
    // Handle errors
    iframe.onerror = () => {
      setIsSubmitting(false);
      setError('Something went wrong. Please try again.');
      
      // Clean up iframe
      setTimeout(() => {
        document.body.removeChild(iframe);
      }, 1000);
    };
    
    // Submit the form
    e.target.submit();
  };

  const feedbackTypes = [
    { id: 'idea', label: 'Share an Idea', icon: <FiMessageSquare className="mr-2" /> },
    { id: 'collaboration', label: 'Collaboration', icon: <FiThumbsUp className="mr-2" /> }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-bold mb-4">Share Your Ideas</h3>
      <p className="text-gray-600 mb-6">
        Have an idea for working with us? Share your thoughts and we'll get back to you!
      </p>
      
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 text-green-700 p-4 rounded-md mb-4"
        >
          <p className="font-medium">Thank you for your feedback!</p>
          <p>We appreciate your ideas and will review them soon.</p>
          <button 
            onClick={() => setSubmitted(false)} 
            className="mt-2 text-sm font-medium text-primary hover:underline"
          >
            Submit another idea
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} action="https://formsubmit.co/katisatechnologies@gmail.com" method="POST" encType="multipart/form-data">
          {error && (
            <div className="bg-red-50 text-red-700 p-3 rounded-md mb-4">
              {error}
            </div>
          )}
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">How would you rate your interest in working with us?</label>
            <StarRating rating={rating} setRating={setRating} />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Feedback Type</label>
            <div className="flex flex-wrap gap-3">
              {feedbackTypes.map(type => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setFeedbackType(type.id)}
                  className={`flex items-center px-4 py-2 rounded-md ${
                    feedbackType === type.id 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {type.icon} {type.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="feedbackText" className="block text-sm font-medium text-gray-700 mb-1">
              Your Idea or Feedback
            </label>
            <textarea
              id="feedbackText"
              name="message"
              rows="4"
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              placeholder="Share your ideas for collaboration or feedback..."
              required
            ></textarea>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                required
              />
            </div>
          </div>
          
          {/* Hidden FormSubmit fields */}
          <input type="hidden" name="_subject" value={`New ${feedbackType} submission from Katisa website`} />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_replyto" value={email} />
          <input type="hidden" name="feedback_type" value={feedbackType} />
          <input type="hidden" name="rating" value={rating} />
          <input type="hidden" name="_honey" value="" />
          <input type="hidden" name="_next" value="#" />
          
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </>
            ) : 'Submit Feedback'}
          </button>
        </form>
      )}
    </div>
  );
};

export default FeedbackForm;
