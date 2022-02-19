import React from 'react';
import './Home.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'

function Home() {
  return(
  <div class="home-page">
    <div claa="center-container">
      <h1 class="title">Doggos</h1>
      <p class="text">Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur</p>
      <div className="home-button-container">
        <button className="about-button" type="button">About</button>
        <button type="button">Galleries</button>
      </div>

    </div>
    <footer class="home-footer">
      <FontAwesomeIcon icon={faGithub}/>
      <FontAwesomeIcon icon={faLinkedin}/>
      <FontAwesomeIcon icon={faEnvelope}/>
    </footer>
  </div>
  );
}

export default Home;