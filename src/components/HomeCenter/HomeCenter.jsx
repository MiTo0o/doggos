import React from 'react';
import './HomeCenter.scss';

function HomeCenter() {
  return(
    <div className="center-container">
      <h1 className="title">Doggos</h1>
      <p className="text">Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur</p>
      <div className="home-button-container">
        <button className="about-button" type="button">About</button>
        <button type="button">Galleries</button>
      </div>
    </div>
  );
};

export default HomeCenter;