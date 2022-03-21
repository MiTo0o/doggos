import React from 'react';
import './HomeCenter.scss';
import { Link } from "react-router-dom";

function HomeCenter() {
  return(
    <div className="center-container">
      <h1 className="title">Doggos</h1>
      <p className="text">Check out deez doggos</p>
      <div className="home-button-container">
        <button className="about-button" type="button">About</button>
        <Link
          to="/gallery"
        >
          <button type="button">Galleries</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeCenter;