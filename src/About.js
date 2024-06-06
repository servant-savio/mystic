import React from 'react';
import FollowUs from './FollowUs';

const About = () => {
  const supportLink = "https://myslink.app/projectmysticdv";
  const prayerGuideLink = "https://x.com/ProjectMysticDV/status/1789896228253118721";
  return (
    <div className='generalOuterContainer'>
    <div className='generalContainer'>
      <h1>About</h1>
      <p>This website is currently an independent effort by <a href="https://x.com/ServantSavio" target="_blank" rel="noreferrer">Savio</a> drawing inspiration and guidance from the X Project Mystic apostolate lead by Arvin Lee using <a href="https://x.com/ProjectMysticDV"  target="_blank" rel="noreferrer">@ProjectMysticDV</a> handle. Arvin owns the Project Mystic logo and name</p>
      <p>The overall goal of this website is to become a tool that one can carry around that will have common prayers that one can use throughout the day, every day.</p>
      <p>So far, it's a one-man effort mostly done in one weekend. The hope that it will be more useful in the coming days or months.</p>
      <p>I built the site as a tool I can use but I think like-minded people might want find some use for it too.</p>
      <p>You can DM me, <a href="https://x.com/ServantSavio">@ServantSavio</a> if you have ideas on how to make this site better, more useful for you and your journey in prayer.</p>
      <h2>Support Project Mystic</h2>      
      <a href={supportLink} target="_blank" rel="noreferrer">{supportLink}</a>
      <h2>Prayer Guide</h2>
      <a href={prayerGuideLink} target="_blank" rel="noreferrer">X Prayer Guide</a>
      <FollowUs />
    </div>
    </div>
  );
};

export default About;
