import React, { useEffect, useState } from 'react';
import mysticLogo from './images/mystic-500.png';
import customize from './images/customize.png';
import FollowUs from './FollowUs';
import Hallow from './Hallow';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [storedLinks, setStoredLinks] = useState([]);

  const handleCustomize = () => {
    navigate("/mystic/customize");
  }
  useEffect(() => {
    const existingLinks = JSON.parse(localStorage.getItem('homeLinks')) || [];
    setStoredLinks(existingLinks);
  }, []);

  const ShowLogo = () => {
    if (storedLinks.length > 0) {
      return (
        <div></div>
      )
    } else {
      return (
        <div>
        <img className="mysticLogo" src={mysticLogo} alt="Mystic Logo" />
        <br/>
        <img className="customizeButton" onClick={handleCustomize} src={customize} alt="Customize Button" />
        </div>
      )
    }
  }
  return (
    <div className="image-container">
      <ShowLogo />

      {storedLinks.length > 0 && (
        <div>
          <h2>Quick Links</h2>
            {storedLinks.map((linkObj, index) => (
              <p>
                <a href={linkObj.link} target="_blank" rel="noopener noreferrer">{linkObj.name}</a>
              </p>
            ))}

          <p>.</p>
          <p><Link to="/mystic/customize">&gt;&gt; Customize Quick Links</Link></p>
        </div>
      )}

      <FollowUs />
      <Hallow />

    </div>
  );
};

export default Home;
