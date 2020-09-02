import React from 'react';

const Item = (props) => {
  const { level, fullname, photo } = props;
  const className = `item level${level}`;

  return (
    <div className={className}>
      <a key={`index-${fullname}`} className='slide__item' href='javascript:void(0)'>
        <img src={photo} alt='' />
        <span>{fullname}</span>
      </a>
    </div>
  );
};

export default Item;
