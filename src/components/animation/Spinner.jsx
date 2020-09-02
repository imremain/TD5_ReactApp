import React from 'react';
import '../../assets/css/spinner.css';

const Spinner = () => {
  return (
    <div className='center'>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h1>Loading info!</h1>
    </div>
  );
};

export default Spinner;
