import React from "react";
import "./App.css";
import Fill from "./Components/Card/Card";
import Card from "./Components/Card/Card";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      {/* <Hero /> */}
      {/* <Card title="Cape Town, South Africa" /> */}
      <Fill />
    </div>
  );
}

export default App;
