import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const StarRating = ({ rating }) => {
  const [starsArr, setStarsArr] = useState([]);
  useEffect(() => {
    switch (rating) {
      case 0: setStarsArr([0, 0, 0, 0, 0]); break;
      case 0.5: setStarsArr([0.5, 0, 0, 0, 0]); break;
      case 1: setStarsArr([1, 0, 0, 0, 0]); break;
      case 1.5: setStarsArr([1, 0.5, 0, 0, 0]); break;
      case 2: setStarsArr([1, 1, 0, 0, 0]); break;
      case 2.5: setStarsArr([1, 1, 0.5, 0, 0]); break;
      case 3: setStarsArr([1, 1, 1, 0, 0]); break;
      case 3.5: setStarsArr([1, 1, 1, 0.5, 0]); break;
      case 4: setStarsArr([1, 1, 1, 1, 0]); break;
      case 4.5: setStarsArr([1, 1, 1, 1, 0.5]); break;
      case 5: setStarsArr([1, 1, 1, 1, 1]); break;
      default: break;
    }
  }, []);

  return (
    <div>
      {starsArr.map((star) => {
        if (star === 0) {
          return <i className="far fa-star" />;
        }
        if (star === 0.5) {
          return <i className="fas fa-star-half-alt" />;
        }
        if (star === 1) {
          return <i className="fas fa-star" />;
        }
        return undefined;
      })}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;
