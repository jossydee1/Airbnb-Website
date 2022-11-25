import React from "react";
import "./Hero.css";
import PhotoGrid from "../../Resources/Airbnb-photo-grid.png";

function Hero() {
  return (
    <div>
      <section className="hero">
        <img src={PhotoGrid} alt="" />
        <h1>Online Experience</h1>
        <p>Join the unique interactive events that will lighten you up</p>
      </section>
    </div>
  );
}

export default Hero;
