// src/App.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import MainBody from './MainBody';

const routes = ['/', '/rosary', '/divine-mercy'];

const NavigationButtons = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentIndex = routes.indexOf(location.pathname);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      navigate(routes[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < routes.length - 1) {
      navigate(routes[currentIndex + 1]);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrevious()
  });

  return (
    <div {...swipeHandlers}>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
        <button onClick={handlePrevious} disabled={currentIndex === 0}>Previous</button>
        <button onClick={handleNext} disabled={currentIndex === routes.length - 1}>Next</button>
      </div>
    </div>
  );
};

export default NavigationButtons;
