import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainComponent from '../components/MainComponent';
import Mystery from '../components/Mystery';
import mystery1Image from '../images/joyful-1-800.png';
import mystery2Image from '../images/joyful-2-800.png';
import mystery3Image from '../images/joyful-3-800.png';
import mystery4Image from '../images/joyful-4-800.png';
import mystery5Image from '../images/joyful-5-800.png';
import mainHero from '../images/joyful.png';

export const joyfulTitle = "Joyful Mysteries";
const title = joyfulTitle;
export const JoyfulMysteries = () => {  
  const schedule = "Monday, Saturday"
  const mysteries = [
    "Annunciation",
    "Visitation",
    "Nativity",
    "Presentation",
    "Finding of Jesus in the Temple"
  ]

  const hero = [
    mystery1Image,
    mystery2Image,
    mystery3Image,
    mystery4Image,
    mystery5Image
  ];
  return (
    <Routes>
      <Route path="" element={<MainComponent title hero={mainHero} />} />
      <Route path="1" element={<Mystery details={{title, mystery: mysteries[0], hero: hero[0]}} />} />
      <Route path="2" element={<Mystery details={{title, mystery: mysteries[1], hero: hero[1]}} />} />
      <Route path="3" element={<Mystery details={{title, mystery: mysteries[2], hero: hero[2]}} />} />
      <Route path="4" element={<Mystery details={{title, mystery: mysteries[3], hero: hero[3]}} />} />
      <Route path="5" element={<Mystery details={{title, mystery: mysteries[4], hero: hero[4]}} />} />
    </Routes>
  );
};

