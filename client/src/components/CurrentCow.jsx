import React from 'react';

const CurrentCow = (props) => (
  <div className='CurrentCow'>
    <h1>{props.currentCow}</h1>
    <h3>{props.currentDescription}</h3>
  </div>
);

export default CurrentCow;