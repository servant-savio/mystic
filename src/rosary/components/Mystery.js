import React from 'react';
import leftArrow from '../images/left.png';
import rightArrow from '../images/right.png';

const Mystery = ({details, handleNext, handlePrevious}) => {
  const {title, mystery, hero} = details;
  const next = () => {
    handleNext();
  };
  const prev = () => {
    handlePrevious();
  }
  return (
    <div className="image-container">
      <img className='heroImage' src={hero} alt={`${title} - ${mystery}`} />
      <div className="left-hotspot" onClick={() => prev()}>
        <img className="arrows" src={leftArrow} alt="left arrow" />
      </div>
      <div className="right-hotspot" onClick={() => next()}>
        <img className="arrows" src={rightArrow} alt="right arrow" />
      </div>
    </div>
  );
};

export default Mystery;
