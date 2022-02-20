import React from 'react';
import './Footer.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'

import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'

function Footer() {
  return(
    <footer className="home-footer">
        <a href="https://github.com/MiTo0o" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub}/>
        </a>
        <a href="https://www.linkedin.com/in/derzan/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin}/>
        </a>
        <a href="mailto:derzanchiang1800@gmail.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faEnvelope}/>
        </a>
    </footer>
  )

}

export default Footer;