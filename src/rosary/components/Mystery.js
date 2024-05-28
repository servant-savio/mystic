import React from 'react';

const Mystery = ({details}) => {
  const {title, mystery, hero} = details;
  return (
    <div class="mysteries">
      <img className='heroImage' src={hero} alt={`${title} - ${mystery}`} />
    </div>
  );
};

export default Mystery;
