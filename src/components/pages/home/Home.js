import React from "react";
import HomeSection from "./HomeSection";
import './Home.css'
import Main from './Home.jpg'

const Home = () => {
  return (
    <div className='home-page'>
      <section className="main">
        <div className="container">
          <div className="title">
            Space X
          </div>
          <div className="content">
          Starship, Spacecrafts and Super Heavy rockets design and manufacturer. Reduce space transportation costs and work with our world-class talent ready to tackle challenging projects.
          </div>
          <div className="btn">Know More</div>
        </div>
      </section>
      <HomeSection 
        name="main"
        image={Main}
        title="Space X"
        content="Starship, Spacecrafts and Super Heavy rockets design and manufacturer. Reduce space transportation costs and work with our world-class talent ready to tackle challenging projects."
        buttonText="Know More"
        buttonLink="/home"
      />
    </div>
  );
};

export default Home;
