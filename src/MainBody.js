import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Rosary from './rosary/Rosary';
import DivineMercy from './DivineMercy';
import About from './About';
import YouTube from './YouTube';
import Prayers from './Prayers';
import BibleSearch from './BibleSearch';
import Customize from './Customize';

const MainBody = () => {
  return (
    <main>
      <Routes>
        <Route path="/mystic/" element={<Home />} />
        <Route path="/mystic/youtube" element={<YouTube />} />
        <Route path="/mystic/home" element={<Home />} />
        <Route path="/mystic/rosary/*" element={<Rosary />} />
        <Route path="/mystic/divine-mercy" element={<DivineMercy />} />
        <Route path="/mystic/about" element={<About />} />
        <Route path="/mystic/prayers" element={<Prayers />} />
        <Route path="/mystic/bible" element={<BibleSearch />} />
        <Route path="/mystic/customize" element={<Customize />} />
      </Routes>
    </main>
  );
};

export default MainBody;
