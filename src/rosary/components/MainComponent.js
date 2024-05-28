import React from 'react';
import { Link } from 'react-router-dom';

const MainComponent = ({mysteryInfo}) => {
  const {title, schedule, mysteries} = mysteryInfo;
  return (
    <div class="mysteries">
      <h2>{title}</h2>
      <p>{schedule}</p>
        <p><Link to="1">{mysteries[0]}</Link></p>
        <p><Link to="2">{mysteries[1]}</Link></p>
        <p><Link to="3">{mysteries[2]}</Link></p>
        <p><Link to="4">{mysteries[3]}</Link></p>
        <p><Link to="5">{mysteries[4]}</Link></p>
    </div>
  );
};

export default MainComponent;
