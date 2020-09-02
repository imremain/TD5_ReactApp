import React from 'react';
import Carousel from './Carousel';

function Navbar({members, itemSelected}) {
  /* <nav className="slide">
      <Carousel items={props.members} active={0} />
    </nav> */
  return (
        <Carousel items={members} active={0} selected={(index) => itemSelected(index)} />
  );
};

export default Navbar;
