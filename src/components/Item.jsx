import React from 'react';

const Item = (props) => {
  const { level, fullname, photo } = props;
  const className = `slide__item item level${level}`;

  return (
      <a key={`index-${fullname}`} className={className} href='/'>
        <img src={photo} alt='' />
        <span>{fullname}</span>
      </a>
  );
};

export default Item;
