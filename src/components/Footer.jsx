import React from 'react';

import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = (props) => {
  return (
    <footer className='footer-page'>
      <div>
        <h1>{props.social.fullname}</h1>
        <div className='socials-footer'>
          <a href={props.social.facebook} target='_blank'><FontAwesomeIcon icon={faFacebook} /></a>
          <a href={props.social.twitter} target='_blank'><FontAwesomeIcon icon={faTwitter} /></a>
          {/* <a href={props.social.facebook} target='_blank'><FontAwesomeIcon icon={faInstagram} /></a> */}
          <a href={props.social.linkedIn} target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href={props.social.gitHub} target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
