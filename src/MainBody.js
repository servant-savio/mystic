import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Rosary from './rosary/Rosary';
import DivineMercy from './DivineMercy';
import About from './About';
  
const MainBody = () => {
  return (
    <main>
      <Routes>
        <Route path="/mystic/" element={<Home />} />
        <Route path="/mystic/home" element={<Home />} />
        <Route path="/mystic/rosary/*" element={<Rosary />} />
        <Route path="/mystic/divine-mercy" element={<DivineMercy />} />
        <Route path="/mystic/about" element={<About />} />
      </Routes>
    </main>
  );
};

export default MainBody;
