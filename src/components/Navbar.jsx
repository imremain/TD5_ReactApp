import React from 'react';
import Carousel from './Carousel';

function Navbar({members, itemSelected}) {
  /* <nav className="slide">
      <Carousel items={props.members} active={0} />
    </nav> */
  return (
    <nav className='slide'>
      <div className='slide__group'>
        <Carousel items={members} active={0} selected={(index) => itemSelected(index)} />
      </div>
    </nav>
  );
};

export default Navbar;
