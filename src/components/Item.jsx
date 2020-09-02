import React from 'react';

const Item = (props) => {
  const { level, fullname, photo } = props;
  const className = `slide__item item level${level}`;
  { /*  <a key={`index-${fullname}`} className='slide__item' href='javascript:void(0)'> */ }
  return (
    <a key={`index-${'lol'}`} className={className} href='/'>
      <img src={photo} alt='' />
      <span>{fullname}</span>
    </a>
  );
};

export default Item;
