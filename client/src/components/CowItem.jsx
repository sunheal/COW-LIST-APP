import React from 'react';

const CowItem = (props) => (
  <li className='CowItem' onClick={() => props.handleClick(props.index)}>
    {props.cow.name}
  </li>
);

export default CowItem;