import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import MainRosary from './MainRosary';
import {joyfulTitle, JoyfulMysteries} from './joyful-mysteries';
import {sorrowfulTitle, SorrowfulMysteries} from './sorrowful-mysteries';
import {gloriousTitle, GloriousMysteries} from './glorious-mysteries';
import {luminousTitle, LuminousMysteries} from './luminous-mysteries';
import './Rosary.css';

const Rosary = () => {
  const titles = [
    "Rosary Guide", 
    joyfulTitle,
    sorrowfulTitle,
    gloriousTitle,
    luminousTitle
  ];
  const mysteryRoutes = [
    '/mystic/rosary', 
    '/mystic/rosary/joyful-mysteries', 
    '/mystic/rosary/sorrowful-mysteries',
    '/mystic/rosary/glorious-mysteries', 
    '/mystic/rosary/luminous-mysteries'
  ];

  const routes = [
      '',
      '1',
      '2',
      '3',
      '4',
      '5'
    ];
  
  let currentLocation;
    const navigate = useNavigate();
    const location = useLocation();
    const locationPathBase = location.pathname.replace(/\/\d+$/gi, "").replace(/\/\d+$/gi, "");
    let currentIndex = routes.findIndex(route => location.pathname.endsWith(`/${route}`));
    if (currentIndex==-1) {
      currentIndex = 0;
    }
    
    const handlePrevious = () => {
      if (currentIndex > 0) {
        currentIndex = currentIndex - 1;
        const mysteryNum = `${(currentIndex===0)? '' : '/'}${routes[currentIndex]}`;
        currentLocation = `${locationPathBase}${mysteryNum}`;
        navigate(currentLocation);
      }
    };
  
    const handleNext = () => {
      if (currentIndex < routes.length - 1) {
        currentIndex = currentIndex + 1;
        currentLocation = `${locationPathBase}/${routes[currentIndex]}`;
        navigate(currentLocation);
      }  
    };

    const swipeHandlers = useSwipeable({
      onSwipedLeft: () => handleNext(),
      onSwipedRight: () => handlePrevious(),
      preventDefaultTouchmoveEvent: true, // This helps prevent the default behavior
      trackTouch: true,
      trackMouse: true
    });
    titles.forEach((value, index) => <button>Rosary Guide</button>);

  return (
      <div {...swipeHandlers}>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
          {titles.map((title, index) => {
              if (index > 0) {
                return(
                  <button key={index} onClick={()=>navigate(mysteryRoutes[index])} >{title}</button>            
                )
              }
            }
          )}
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