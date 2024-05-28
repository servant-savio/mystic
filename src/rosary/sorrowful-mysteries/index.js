import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mystery from '../components/Mystery';
import MainComponent from '../components/MainComponent';
import mystery1Image from '../images/sorrowful-1-800.png';
import mystery2Image from '../images/sorrowful-2-800.png';
import mystery3Image from '../images/sorrowful-3-800.png';
import mystery4Image from '../images/sorrowful-4-800.png';
import mystery5Image from '../images/sorrowful-5-800.png';

export const sorrowfullTitle = "Sorrowful Mysteries";
const title = sorrowfullTitle;
export const SorrowfulMysteries = () => {
  const schedule = "Tuesday, Friday";
  const mysteries = [
    "Agony in the Garden",
    "Scourging at the Pillar",
    "Crowning with Thorns",
    "Jesus Carries the Cross",
    "Crucifixion"
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
