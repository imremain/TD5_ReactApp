import React from 'react';
import Carousel from './Carousel';

function Navbar(props) {
  return (
    <nav className='slide'>
      <div className='slide__group'>
        <Carousel items={props.members} active={0} />
      </div>
    </nav>
  );
};

export default Navbar;
