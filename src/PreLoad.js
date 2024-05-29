import React, { useEffect } from 'react';
import savioX from './images/ServantSavioX.png';
import mysticX from './images/ProjectMysticDVX.png';
import mystery11Image from './rosary/images/luminous-1-800.png';
import mystery12Image from './rosary/images/luminous-2-800.png';
import mystery13Image from './rosary/images/luminous-3-800.png';
import mystery14Image from './rosary/images/luminous-4-800.png';
import mystery15Image from './rosary/images/luminous-5-800.png';

import mystery21Image from './rosary/images/sorrowful-1-800.png';
import mystery22Image from './rosary/images/sorrowful-2-800.png';
import mystery23Image from './rosary/images/sorrowful-3-800.png';
import mystery24Image from './rosary/images/sorrowful-4-800.png';
import mystery25Image from './rosary/images/sorrowful-5-800.png';

import mystery31Image from './rosary/images/glorious-1-800.png';
import mystery32Image from './rosary/images/glorious-2-800.png';
import mystery33Image from './rosary/images/glorious-3-800.png';
import mystery34Image from './rosary/images/glorious-4-800.png';
import mystery35Image from './rosary/images/glorious-5-800.png';

import mystery41Image from './rosary/images/joyful-1-800.png';
import mystery42Image from './rosary/images/joyful-2-800.png';
import mystery43Image from './rosary/images/joyful-3-800.png';
import mystery44Image from './rosary/images/joyful-4-800.png';
import mystery45Image from './rosary/images/joyful-5-800.png';
import divineMercyImage from './images/divine-mercy.png';
import rosaryGuide from './images/rosary-800.png';
import mainHero1 from './rosary/images/glorious.png';
import mainHero2 from './rosary/images/luminous.png';
import mainHero3 from './rosary/images/joyful.png';
import mainHero4 from './rosary/images/sorrowful.png';
import banner from './images/mystic-header-main.png';

const PreLoad = () => {
  useEffect(() => {
    const images = [
      savioX,
      mysticX,
      mystery11Image,
      mystery12Image,
      mystery13Image,
      mystery14Image,
      mystery15Image,
      mystery21Image,
      mystery22Image,
      mystery23Image,
      mystery24Image,
      mystery25Image,
      mystery31Image,
      mystery32Image,
      mystery33Image,
      mystery34Image,
      mystery35Image,
      mystery41Image,
      mystery42Image,
      mystery43Image,
      mystery44Image,
      mystery45Image,
      divineMercyImage,
      rosaryGuide,
      mainHero1,
      mainHero2,
      mainHero3,
      mainHero4,
      banner
    ]
    images.map((img) => preloadImage(img)
      .then(() => console.log(`Image ${img} preloaded successfully`))
      .catch((error) => console.error('Failed to preload image', error)));
  }, []);

  return (
    <div></div>
  );
};

function preloadImage(imageSrc) {
  return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = imageSrc;
      img.onload = resolve;
      img.onerror = reject;
  });
}
export default PreLoad;
