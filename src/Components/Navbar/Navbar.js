import React from "react";
import "./Navbar.css";
import Airbnb from "../../Resources/Airbnb logo.png";

function Navbar() {
    const date = new Date();
    const day = date.getDate()
  const hour = date.getHours();
  let timeOfDay;

    if (hour < 12) {
      timeOfDay = "Morning"
    }
    else if (hour >= 12 && hour< 17) {
        timeOfDay = "Afternoon"
    }
    else {
        timeOfDay = "Evening"
    }
    return (
      <div className="navbar">
        <img src={Airbnb} alt="" />
            <h1>Good {timeOfDay}</h1>
      </div>
    );
}

export default Navbar;
