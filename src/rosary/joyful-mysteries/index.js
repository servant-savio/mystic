import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainComponent from '../components/MainComponent';
import Mystery from '../components/Mystery';

const JoyfulMysteries = () => {
  const title = "Joyful Mysteries";
  const schedule = "Monday, Saturday"
  const mysteries = [
    "Annunciation",
    "Visitation",
    "Nativity",
    "Presentation",
    "Finding of Jesus in the Temple"
  ]

  return (
    <Routes>
      <Route path="" element={<MainComponent mysteryInfo={{title, schedule, mysteries}} />} />
      <Route path="1" element={<Mystery details={{title, mystery: mysteries[0]}} />} />
      <Route path="2" element={<Mystery details={{title, mystery: mysteries[1]}} />} />
      <Route path="3" element={<Mystery details={{title, mystery: mysteries[2]}} />} />
      <Route path="4" element={<Mystery details={{title, mystery: mysteries[3]}} />} />
      <Route path="5" element={<Mystery details={{title, mystery: mysteries[4]}} />} />
    </Routes>
  );
};

export default JoyfulMysteries;
