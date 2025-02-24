import React from 'react';
import leftArrow from '../images/left.png';
import rightArrow from '../images/right.png';
import youtubeLogo from '../images/youtube-logo.webp';
import Prayers from '../../Prayers';

const MainComponent = ({title, hero, handleNext, handlePrevious}) => {

  const next = () => {
    handleNext();
  };
  const prev = () => {
    handlePrevious();
  }

  console.log(`title: ${title}`);

  const youTube = () => {
    console.log(`title: ${title}`);
    let link = "https://www.youtube.com/watch?v=ckUJRg04jyg&t=0"; // Jooyful
    if (title === "Sorrowful Mysteries") {
      link = "https://www.youtube.com/watch?v=ry7FbjkN-p0&t=0";
    } else if (title === "Glorious Mysteries") {
      link = "https://youtu.be/WoJ1hQTVdSo?&t=0";
    } else if (title === "Luminous Mysteries") {
      link = "https://youtu.be/b2EjBt2PFpc&t=0";
    }
    window.open(link, "_blank");
  }
  return (
    <div>
      <div className="image-container">
        <img className='heroImage' src={hero} alt={`${title}`} />
        <div className="left-hotspot" onClick={() => prev()}>
          <img className="arrows" src={leftArrow} alt="left arrow" />
        </div>
        <div className="right-hotspot" onClick={() => next()}>
          <img className="arrows" src={rightArrow} alt="right arrow" />
        </div>
        <div className="youtube-hotspot" onClick={() => youTube()}>
          <img className="youtubeLogo" src={youtubeLogo} alt="right arrow" />
        </div>
      </div> 
      <div>
        <Prayers prayers="Apostle's Creed" />
      </div>
    </div>
  );
};

export default MainComponent;
