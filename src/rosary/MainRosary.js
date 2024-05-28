import React from 'react';
import { useNavigate } from 'react-router-dom';
import rosaryGuide from '../images/rosary.png';
const MainRosary = () => {
  const navigate = useNavigate();
  const handleHotSpotClick = (mysteries) => {
    navigate(`/mystic/rosary/${mysteries}-mysteries`);
  };
  return (
    <div className="image-container">
      <img class="rosaryGuide" alt="Rosary Guide" src={rosaryGuide} />
      <div className="joyful-mysteries-hotspot" onClick={() => handleHotSpotClick('joyful')}></div>
      <div className="sorrowful-mysteries-hotspot" onClick={() => handleHotSpotClick('sorrowful')}></div>
      <div className="luminous-mysteries-hotspot" onClick={() => handleHotSpotClick('luminous')}></div>
      <div className="glorious-mysteries-hotspot" onClick={() => handleHotSpotClick('glorious')}></div>
    </div>
  );
};

export default MainRosary;
