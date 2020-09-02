import React from 'react';
import Carousel from './Carousel';

const Navbar = ({ members, itemSelected }) => <Carousel items={members} active={0} selected={(index) => itemSelected(index)} />;

export default Navbar;
