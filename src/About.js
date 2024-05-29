import React from 'react';
import FollowUs from './FollowUs';

const About = () => {
  const supportLink = "https://myslink.app/projectmysticdv";
  const prayerGuideLink = "https://x.com/ProjectMysticDV/status/1789896228253118721";
  return (
    <div>
      <h2>Support Project Mystic</h2>
      <a href={supportLink} target="_blank">{supportLink}</a>
      <h2>Prayer Guide</h2>
      <a href={prayerGuideLink} target="_blank">X Prayer Guide</a>
      <FollowUs />
    </div>
  );
};

export default About;
