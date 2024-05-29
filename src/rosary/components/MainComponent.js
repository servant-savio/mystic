import React from 'react';
import leftArrow from '../images/left.png';
import rightArrow from '../images/right.png';

const MainComponent = ({title, hero}) => {
  return (
    <div className="mysteries">
      <img className="arrows" src={leftArrow} alt='left arrow' />
      <img className='heroImage' src={hero} alt={`${title}`} />
      <img className="arrows" src={rightArrow} alt='left arrow' />
    </div>
  );
};

export default MainComponent;
