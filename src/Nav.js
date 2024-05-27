import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/mystic/home">Home</Link></li>
        <li><Link to="/mystic/rosary">Rosary</Link></li>
        <li><Link to="/mystic/divine-mercy">Divine Mercy</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
