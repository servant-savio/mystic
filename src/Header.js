import React from 'react';
import banner from './images/mystic-header-main.png';
const Header = () => {
  return (
    <header>
      <img className="mysticBannerImage" src={banner} alt="Project Mystic Banner" />
    </header>
  );
};

export default Header;
