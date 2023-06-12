'use client';
import { useState } from 'react';

const StarRating = ({ rating }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (newRating) => {
    // handle click event here
  };

  const handleMouseEnter = (newRating) => {
    setHoverRating(newRating);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const starRating = index + 1;
        const isHalf = hoverRating === starRating - 0.5;
        const isFilled = starRating <= (hoverRating || rating);

        return (
          <span
            key={index}
            className={`star ${isHalf ? 'half' : ''} ${isFilled ? 'filled' : ''} text-yellow-200 text-2xl`}
            onClick={() => handleClick(starRating)}
            onMouseEnter={() => handleMouseEnter(starRating)}
            onMouseLeave={() => handleMouseLeave()}
          >
            &#9733; 
          </span>
        );
        
      })}
      { rating && <span className="ml-2 text-gray-600">{rating}</span> }
    </div>
  );
};

export default StarRating;