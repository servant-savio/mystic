import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mystery from '../components/Mystery';
import MainComponent from '../components/MainComponent';

const GloriousMysteries = () => {
  const title = "Glorious mysteries";
  const schedule = "Wednesday, Sunday";
  const mysteries = [
    "Resurrection",
    "Ascension",
    "Descent of the Holy Spirit",
    "Assumption of Mary",
    "Coronation of Mary"
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

export default GloriousMysteries;
