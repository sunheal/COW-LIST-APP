import React from 'react';
import CowItem from './CowItem.jsx';

const CowList = (props) => (
  <ul className='CowList'>
    {props.cows.map((cow, index) => (
      <CowItem cow={cow} key={cow.id} index={index} handleClick={props.handleClick} />
    ))}
  </ul>
);

export default CowList;