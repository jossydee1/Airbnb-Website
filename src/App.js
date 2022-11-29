import React from "react";
import "./App.css";
import Fill from "./Components/Card/Card";
import Card from "./Components/Card/Card";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Restaurants from "./Components/Restaurants/Restaurants";

function App() {
  return (
    <div className="app">
      <Navbar />
      {/* <Hero /> */}
      {/* <Fill /> */}
      <Restaurants />
    </div>
  );
}

export default App;
