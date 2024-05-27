import React from 'react';
import { Link } from 'react-router-dom';

const Mystery = ({details}) => {
  const {title, mystery} = details;
  return (
    <div class="mysteries">
      <h2>{title} - {mystery}</h2>
    </div>
  );
};

export default Mystery;
