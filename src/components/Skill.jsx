import React from 'react';

const Skill = (props) => {
  const { percentage, name } = props;

  return (
    <li className={`bar-${percentage}0`}>{name}</li>
  );
};

export default Skill;
