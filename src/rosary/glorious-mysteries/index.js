import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mystery from '../components/Mystery';
import MainComponent from '../components/MainComponent';
import mystery1Image from '../images/glorious-1-800.png';
import mystery2Image from '../images/glorious-2-800.png';
import mystery3Image from '../images/glorious-3-800.png';
import mystery4Image from '../images/glorious-4-800.png';
import mystery5Image from '../images/glorious-5-800.png';

export const gloriousTitle = "Glorious Mysteries";
const title = gloriousTitle;
export const GloriousMysteries = () => {
  const schedule = "Wednesday, Sunday";
  const mysteries = [
    "Resurrection",
    "Ascension",
    "Descent of the Holy Spirit",
    "Assumption of Mary",
    "Coronation of Mary"
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
      <Route path="" element={<MainComponent mysteryInfo={{title, schedule, mysteries}} />} />
      <Route path="1" element={<Mystery details={{title, mystery: mysteries[0], hero: hero[0]}} />} />
      <Route path="2" element={<Mystery details={{title, mystery: mysteries[1], hero: hero[1]}} />} />
      <Route path="3" element={<Mystery details={{title, mystery: mysteries[2], hero: hero[2]}} />} />
      <Route path="4" element={<Mystery details={{title, mystery: mysteries[3], hero: hero[3]}} />} />
      <Route path="5" element={<Mystery details={{title, mystery: mysteries[4], hero: hero[4]}} />} />
    </Routes>
  );
};