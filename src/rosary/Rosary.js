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

  const mysteries = {
    "1": {
      "days": ["Monday", "Saturday"]
    },
    "2": {
      "days": ["Tuesday", "Friday"]
    },
    "3": {
      "days": ["Sunday", "Wenesday"]
    },
    "4": {
      "days": ["Thursday"]
    }
  }

  const today = new Date();
  const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });

  const currentMystery = parseInt(Object.keys(mysteries).find(mystery =>
    mysteries[mystery].days.includes(dayName)
  ));

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
  const isRoot = (locationPathBase === "/mystic/rosary");
  let currentIndex = routes.findIndex(route => location.pathname.endsWith(`/${route}`));
  if (currentIndex===-1) {
    currentIndex = 0;
  }

  const handlePrevious = () => {
    if (!isRoot) {
      if (currentIndex > 0) {
        currentIndex = currentIndex - 1;
        const mysteryNum = `${(currentIndex===0)? '' : '/'}${routes[currentIndex]}`;
        currentLocation = `${locationPathBase}${mysteryNum}`;
        navigate(currentLocation);
      }
    }
  };

  const handleNext = () => {
    if (!isRoot) {
      if (currentIndex < routes.length - 1) {
        currentIndex = currentIndex + 1;
        currentLocation = `${locationPathBase}/${routes[currentIndex]}`;
        navigate(currentLocation);
      }
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
        <div className='buttonContainer'>
          <div className='buttonSubContainer'>          
            {titles.map((title, index) => {
                if (index > 0) {
                  return(                    
                    <button className={index === currentMystery ? "selectedMysteryButtons":"mysteryButtons"} key={index} onClick={()=>navigate(mysteryRoutes[index])} >
                      <div className='buttonTitle'>
                        {title}
                      </div>
                    </button>            
                  )
                } else {
                  return <></>
                }
              }
            )}
          </div>
        </div>
      <div className='mainRosary'>
        <Routes>
          <Route path="" element={<MainRosary />} />
          <Route path="joyful-mysteries/*" element={<JoyfulMysteries prev={()=>handlePrevious()} next={()=>handleNext()} />} />
          <Route path="sorrowful-mysteries/*" element={<SorrowfulMysteries prev={()=>handlePrevious()} next={()=>handleNext()} />} />
          <Route path="glorious-mysteries/*" element={<GloriousMysteries prev={()=>handlePrevious()} next={()=>handleNext()} />} />
          <Route path="luminous-mysteries/*" element={<LuminousMysteries prev={()=>handlePrevious()} next={()=>handleNext()} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Rosary;
