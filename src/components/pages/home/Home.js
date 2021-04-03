import React from "react";
import HomeSection from "./HomeSection";

import "./Home.css";

import Main from "./images/Home.jpg";
import History from "./images/History.jpg";
import Launches from "./images/Launches.jpg";
import Rocket from "./images/Rocket.jpg";

const Home = () => {
  return (
    <div className="home-page">
      <HomeSection
        name="main"
        position="left"
        image={Main}
        title="Space X"
        content="Starship, Spacecrafts and Super Heavy rockets design and manufacturer. Reduce space transportation costs and work with our world-class talent ready to tackle challenging projects."
      />
      <HomeSection
        name="history"
        position="right"
        image={History}
        title="History"
        content="Starship, Spacecrafts and Super Heavy rockets design and manufacturer. Reduce space transportation costs and work with our world-class talent ready to tackle challenging projects."
        buttonText="Know More"
        buttonLink="/history"
      />
      <HomeSection
        name="launches"
        position="left"
        image={Launches}
        title="Launches"
        content="Starship, Spacecrafts and Super Heavy rockets design and manufacturer. Reduce space transportation costs and work with our world-class talent ready to tackle challenging projects."
        buttonText="Know More"
        buttonLink="/launches"
      />
      <HomeSection
        name="rocket"
        position="right"
        image={Rocket}
        title="Rocket"
        content="Starship, Spacecrafts and Super Heavy rockets design and manufacturer. Reduce space transportation costs and work with our world-class talent ready to tackle challenging projects."
        buttonText="Know More"
        buttonLink="/rockets"
      />
    </div>
  );
};

export default Home;
