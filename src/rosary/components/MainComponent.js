import React from 'react';
import { Link } from 'react-router-dom';

const MainComponent = ({mysteryInfo}) => {
  const {title, schedule, mysteries} = mysteryInfo;
  return (
    <div class="mysteries">
      <h2>{title}</h2>
      <p>{schedule}</p>
      <ul class="unordered-list">
        <li><Link to="1">{mysteries[0]}</Link></li>
        <li><Link to="2">{mysteries[1]}</Link></li>
        <li><Link to="3">{mysteries[2]}</Link></li>
        <li><Link to="4">{mysteries[3]}</Link></li>
        <li><Link to="5">{mysteries[4]}</Link></li>
      </ul>
    </div>
  );
};

export default MainComponent;
