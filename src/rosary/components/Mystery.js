import React from 'react';

const Mystery = ({details}) => {
  const {title, mystery} = details;
  return (
    <div class="mysteries">
      <h2>{title}</h2>
      <h1>{mystery}</h1>
    </div>
  );
};

export default Mystery;
