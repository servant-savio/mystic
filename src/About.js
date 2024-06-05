import React from 'react';
import FollowUs from './FollowUs';

const About = () => {
  const supportLink = "https://myslink.app/projectmysticdv";
  const prayerGuideLink = "https://x.com/ProjectMysticDV/status/1789896228253118721";
  return (
    <div className='generalOuterContainer'>
    <div className='generalContainer'>
      <h1>About Project Mystic</h1>
      <p>This website is currently an independent effort by <a href="https://x.com/ServantSavio" target="_blank" rel="noreferrer">Savio</a> drawing inspiration from the X Project Mystic apostolate lead by Arvin Lee using <a href="https://x.com/ProjectMysticDV"  target="_blank" rel="noreferrer">@ProjectMysticDV</a> handle. Arvin owns the Project Mystic logo and name</p>
      <p>The overall goal of this website is to become a tool that one can carry around that will have common prayers that one can use throughout the day, every day.</p>
      <p>So far, it's a one-man effort mostly done in one weekend. The hope that it will be more useful in the coming days or months.</p>
      <p>The goal is to pray consciously and subconciously, similar to breathing. Being somewhat aware of God's presence every second of every day. All within the spirit of the Project Mystic apostolate.</p>
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
