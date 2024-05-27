import React from 'react';
import savioX from './images/ServantSavioX.png';
import mysticX from './images/ProjectMysticDVX.png';
const FollowUs = () => {
  return (
    <div>
      Follow us:
      <div>
        <a href="https://x.com/ServantSavio" target='_blank' rel="noreferrer"><img src={savioX} /></a>
      </div>
      <div>
        <a href="https://x.com/ProjectMysticDV" target='_blank' rel="noreferrer"><img src={mysticX} /></a>
      </div>
    </div>
  );
};

export default FollowUs;
