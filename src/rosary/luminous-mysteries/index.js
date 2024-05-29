import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mystery from '../components/Mystery';
import MainComponent from '../components/MainComponent';
import mystery1Image from '../images/luminous-1-800.png';
import mystery2Image from '../images/luminous-2-800.png';
import mystery3Image from '../images/luminous-3-800.png';
import mystery4Image from '../images/luminous-4-800.png';
import mystery5Image from '../images/luminous-5-800.png';
import mainHero from '../images/luminous.png';

export const luminousTitle = "Luminous Mysteries";
const title = luminousTitle;
export const LuminousMysteries = () => {
  const schedule = "Thursday";
  const mysteries = [
    "Baptism of the Lord",
    "Wedding at Cana",
    "Proclamation of the Kingdom of God",
    "Transfiguration",
    "Institution of the Eucharist"
  ];
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
