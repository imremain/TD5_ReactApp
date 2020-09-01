import React from 'react';
import Carousel from './Carousel';

function Navbar(props) {
  return (
      <nav className="slide">
             <Carousel items={props.members} active={0} />
      </nav>
       
  );
};

export default Navbar;
