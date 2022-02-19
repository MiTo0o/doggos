import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'

function Footer() {
  <footer>
    <FontAwesomeIcon icon={faGithub}/>
    <FontAwesomeIcon icon={faLinkedin}/>
    <FontAwesomeIcon icon={faEnvelope}/>
  </footer>
}

export default Footer;