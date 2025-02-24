import React, { useState } from 'react';
import prayersHeader from './images/prayers-header.png';
import prayerData from './data/prayer.json';

const Prayers = ({ prayers }) => {
  const [searchTerm, setSearchTerm] = useState(prayers || '');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = prayerData.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.prayer.some(paragraph => paragraph.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      {!prayers && (
        <>
          <img src={prayersHeader} alt="Prayers"/>
          <div>
            <input className='searchBox'
              type="text" 
              placeholder="Search..." 
              value={searchTerm} 
              onChange={handleSearchChange}
            />
          </div>
        </>
      )}
      <div className='outerPrayer'>
        <div className='prayerContainer'>
        {
        filteredData.map((item, index) => (
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
