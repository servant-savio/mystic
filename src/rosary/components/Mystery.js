import React from 'react';
import leftArrow from '../images/left.png';
import rightArrow from '../images/right.png';

const Mystery = ({details}) => {
  const {title, mystery, hero} = details;
  return (
    <div className="mysteries">
      <img className="arrows" src={leftArrow} alt='left arrow' />
      <img className='heroImage' src={hero} alt={`${title} - ${mystery}`} />
      <img className="arrows" src={rightArrow} alt='left arrow' />
    </div>
  );
};

export default Mystery;
