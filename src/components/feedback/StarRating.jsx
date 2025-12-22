import React, { useState } from 'react';
import { FiStar } from 'react-icons/fi';

const StarRating = ({ rating, setRating }) => {
  const [hover, setHover] = useState(0);
  
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        
        return (
          <button
            type="button"
            key={index}
            className={`text-2xl mr-1 focus:outline-none ${
              ratingValue <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'
            }`}
            onClick={() => setRating(ratingValue)}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(0)}
            aria-label={`Rate ${ratingValue} out of 5 stars`}
          >
            <FiStar className="fill-current" />
          </button>
        );
      })}
      <span className="ml-2 text-sm text-gray-600">
        {rating ? `${rating} out of 5 stars` : 'Click to rate'}
      </span>
    </div>
  );
};

export default StarRating;
