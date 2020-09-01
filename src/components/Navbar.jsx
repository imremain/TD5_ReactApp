import React from 'react';
import Carousel from './Carousel';

function Navbar(props) {
  return (
        <Carousel items={props.members} active={0} />
  );
};

export default Navbar;
