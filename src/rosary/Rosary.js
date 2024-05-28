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
  const routesX = [
      '/mystic/rosary', 
      '/mystic/rosary/joyful-mysteries', 
      '/mystic/rosary/sorrowful-mysteries',
      '/mystic/rosary/glorious-mysteries', 
      '/mystic/rosary/luminous-mysteries'
    ];
  const routesY = [
      '1',
      '2',
      '3',
      '4',
      '5'
    ];
  
  let currentLocationX;
  let currentLocationY;

    const navigate = useNavigate();
    const location = useLocation();
    const locationPathBase = location.pathname.replace(/\/\d+$/gi, "").replace(/\/\d+$/gi, "");
    const currentIndexX = routesX.indexOf(locationPathBase);
    const currentIndexY = routesY.findIndex(route => location.pathname.endsWith(`/${route}`));

    currentLocationX = routesX[currentIndexX];

    const handlePreviousX = () => {
      if (currentIndexX > 0) {
        currentLocationX = routesX[currentIndexX - 1];
        navigate(currentLocationX);
      }
    };
  
    const handleNextX = () => {
      if (currentIndexX < routesX.length - 1) {
        currentLocationX = routesX[currentIndexX + 1]
        navigate(currentLocationX);
      }
    };
  
    const handlePreviousY = () => {
      if (currentIndexY > 0) {
        currentLocationY = `${currentLocationX}/${routesY[currentIndexY - 1]}`;
        navigate();
      }
    };
  
    const handleNextY = () => {
      if (currentIndexY < routesY.length - 1) {
        currentLocationY = `${currentLocationX}/${routesY[currentIndexY + 1]}`;
        navigate(currentLocationY);
      }
    };

    const swipeHandlers = useSwipeable({
      onSwipedLeft: () => handleNextX(),
      onSwipedRight: () => handlePreviousX(),
      onSwipedUp: () => handleNextY(),
      onSwipedDown: () => handlePreviousY()
    });
  return (
      <div {...swipeHandlers}>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
        <button onClick={handlePreviousX} disabled={currentIndexX === 0}>Previous</button>
        <button onClick={handleNextX} disabled={currentIndexX === routesX.length - 1}>Next</button>
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
