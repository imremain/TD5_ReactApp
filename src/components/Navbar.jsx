import React from 'react';

import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar(props) {
  return (
    <nav className='slide'>
      <div className='slide__group'>

        {props.members.map((member, index) => (
          <a key={`index-${member.fullname}`} className='slide__item' href='/'>
            <img src={member.photo} alt='' />
            <span>{member.fullname}</span>
          </a>
        ))}

        {/* <a className="slide__item fourth-position" href="/"><img src={avatar1} alt=""/>Jobana Garavito</a>
                <a className="slide__item third-position" href="/"><img src={avatar2} alt=""/>Omar Montoya</a>
                <a className="slide__item second-position" href="/"><img src={avatar3} alt=""/>María Andrea Perico</a>
                <a className="slide__item first-position" href="/"><img src={avatar2} alt=""/>Erik Manuel Guevara</a>
                <a className="slide__item second-position" href="/"><img src={avatar1} alt=""/>Paola Porras</a>
                <a className="slide__item third-position" href="/"><img src={avatar2} alt=""/>Sergio Ruiz</a>
                <a className="slide__item fourth-position" href="/"><img src={avatar1} alt=""/>Jaime Escobedo</a> */}
      </div>
      <div className='slide__buttons'>
        <button type='button' className='slide__buttons-single'><span><FontAwesomeIcon icon={faAngleLeft} /></span></button>
        <button type='button' className='slide__buttons-single'><span><FontAwesomeIcon icon={faAngleRight} /></span></button>
      </div>
    </nav>
  );
};

export default Navbar;
