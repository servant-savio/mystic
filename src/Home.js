import React from 'react';
import mysticLogo from './images/mystic-500.png';
import FollowUs from './FollowUs';

const Home = () => {
  return (
    <div>
      <img class="mysticLogo" src={mysticLogo} alt="Mystic Logo" />
      <FollowUs />
    </div>
  );
};

export default Home;
