import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/mystic/home">Home</Link></li>
        <li><Link to="/mystic/rosary">Rosary</Link></li>
        <li><Link to="/mystic/divine-mercy">Divine Mercy</Link></li>
        <li><Link to="/mystic/prayers">Prayers</Link></li>
        <li><Link to="/mystic/bible">Bible</Link></li>
        <li><Link to="/mystic/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
