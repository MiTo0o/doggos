import React from "react";
import "./AboutCenter.scss";
import { Link } from "react-router-dom";

function AboutCenter() {
  return (
    <div id="about-center-container">
      <h1 id="about-title">About</h1>
      <p id="about-info">
        Since I'm not in a position to own a dog, I found myself collecting dog
        photos from friends and family <br />
        This website was built to organize and display the dog photos in a
        gallery format <br />
      </p>
      <div className="about-button-container">
        <Link to="/">
          <button className="about-button" type="button">
            Home
          </button>
        </Link>
        <a
          href="https://github.com/MiTo0o/doggos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="source-button" type="button">
            Code
          </button>
        </a>
      </div>
    </div>
  );
}

export default AboutCenter;
