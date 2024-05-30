import React from 'react';
import prayersHeader from './images/prayers-header.png';
import prayerData from './data/prayer.json';

const Prayers = () => {
  return (
    <div>
      <img src={prayersHeader} alt="Prayers"/>
      <div>

      </div>
      <div className='outerPrayer'>
        <div className='prayerContainer'>
        {
        prayerData.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            {item.prayer.map((prayer, pIndex) => (
              <p key={pIndex}>{prayer}</p>
            ))}
          </div>
        ))
        }
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        </div>
      </div>
    </div>
  );
};

export default Prayers;
