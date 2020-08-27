import React from 'react';

import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className='footer-page'>
      <div>
        <h1>Erik Guevara</h1>
        <div className='socials-footer'>

          <a href='/'><FontAwesomeIcon icon={faFacebook} /></a>
          <a href='/'><FontAwesomeIcon icon={faTwitter} /></a>
          <a href='/'><FontAwesomeIcon icon={faInstagram} /></a>
          <a href='/'><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href='/'><FontAwesomeIcon icon={faGithub} /></a>

          {/*  <a href="/"><span className="flaticon-001-facebook"></span></a>
                    <a href="/"><span className="flaticon-002-twitter"></span></a>
                    <a href="/"><span className="flaticon-011-instagram"></span></a>
                    <a href="/"><span className="flaticon-010-linkedin"></span></a>
                    <a href="/"><span className="flaticon-008-youtube"></span></a> */}

        </div>
      </div>
    </footer>
  );
};

export default Footer;
