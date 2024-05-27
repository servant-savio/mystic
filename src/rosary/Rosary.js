import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import MainRosary from './MainRosary';
import JoyfulMysteries from './joyful-mysteries';
import SorrowfulMysteries from './sorrowful-mysteries';
import GloriousMysteries from './glorious-mysteries';
import LuminousMysteries from './luminous-mysteries';

const Rosary = () => {
  const routes = [
    '/mystic/rosary', 
    '/mystic/rosary/joyful-mysteries', 
    '/mystic/rosary/sorrowful-mysteries',
    '/mystic/rosary/glorious-mysteries', 
    '/mystic/rosary/luminous-mysteries'
  ];

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
      <div>
        <Routes>
          <Route path="" element={<MainRosary />} />
          <Route path="joyful-mysteries/*" element={<JoyfulMysteries />} />
          <Route path="sorrowful-mysteries/*" element={<SorrowfulMysteries />} />
          <Route path="glorious-mysteries/*" element={<GloriousMysteries />} />
          <Route path="luminous-mysteries/*" element={<LuminousMysteries />} />
        </Routes>
      </div>
    </div>
  );
};

export default Rosary;
