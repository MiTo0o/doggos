import React from "react";
import "./HomeCenter.scss";
import { Link } from "react-router-dom";
import pawPrintLogo from "../../assets/logos/paw-print.svg";

function HomeCenter() {
  return (
    <div className="center-container">
      <h1 className="title">Doggos</h1>
      <p className="text">Doggos is a dog photo gallery website. Browse or add to the collection of dog photos!</p>
      
      <div className="home-button-container">
        <Link to="/about">
          <button className="about-button" type="button">
            About
          </button>
        </Link>
        <Link to="/galleries">
          <button className="galleries-button" type="button">
            Galleries
          </button>
        </Link>
      </div>
      <div className="App-logo">
        <img
          src={pawPrintLogo} 
          alt="paw-print-logo"
          style={{width: 100, height: 100}}
        />
      </div>
    </div>
  );
}

export default HomeCenter;
