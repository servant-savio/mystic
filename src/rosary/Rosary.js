import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import MainRosary from './MainRosary';
import {joyfulTitle, JoyfulMysteries} from './joyful-mysteries';
import {sorrowfullTitle, SorrowfulMysteries} from './sorrowful-mysteries';
import {gloriousTitle, GloriousMysteries} from './glorious-mysteries';
import {luminousTitle, LuminousMysteries} from './luminous-mysteries';
import './Rosary.css';

const Rosary = () => {
  const titles = [
    "Rosary Guide", 
    joyfulTitle,
    sorrowfullTitle,
    gloriousTitle,
    luminousTitle
  ];
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
    let currentIndexX = routesX.indexOf(locationPathBase);
    let currentIndexY = routesY.findIndex(route => location.pathname.endsWith(`/${route}`));

    currentLocationX = routesX[currentIndexX];

    const handlePreviousX = () => {
      if (currentIndexX > 0) {
        currentIndexX = currentIndexX - 1;
        currentLocationX = routesX[currentIndexX];
        navigate(currentLocationX);
      }
    };
  
    const handleNextX = () => {
      if (currentIndexX < routesX.length - 1) {
        currentIndexX = currentIndexX + 1;
        currentLocationX = routesX[currentIndexX]
        navigate(currentLocationX);
      }
    };
  
    const handlePreviousY = () => {
      if (currentIndexX > 0) {
        if (currentIndexY > 0) {
          currentIndexY = currentIndexY - 1;
          currentLocationY = `${currentLocationX}/${routesY[currentIndexY]}`;
          navigate(currentLocationY);
        }
      }
    };
  
    const handleNextY = () => {
      if (currentIndexX > 0) {
        if (currentIndexY < routesY.length - 1) {
          currentIndexY = currentIndexY + 1;
          currentLocationY = `${currentLocationX}/${routesY[currentIndexY]}`;
          navigate(currentLocationY);
        }  
      }
    };

    const swipeHandlers = useSwipeable({
      onSwipedLeft: () => handleNextX(),
      onSwipedRight: () => handlePreviousX(),
      onSwipedUp: () => handleNextY(),
      onSwipedDown: () => handlePreviousY(),
      preventDefaultTouchmoveEvent: true, // This helps prevent the default behavior
      trackTouch: true,
      trackMouse: true
    });
    titles.forEach((value, index) => <button>Rosary Guide</button>);

  return (
      <div {...swipeHandlers}>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
        <button onClick={handlePreviousX} disabled={currentIndexX === 0}>&lt;&lt;</button>
        {titles.map((title, index) => (
        <button key={index} onClick={()=>navigate(routesX[index])} >{title}</button>
        ))}
        <button onClick={handleNextX} disabled={currentIndexX === routesX.length - 1}>&gt;&gt;</button>
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
