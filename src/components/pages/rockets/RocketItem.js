import React from "react";
import { Link } from "react-router-dom";

const RocketItem = ({ rocket }) => {
  return (
    <div className="rocket-item">
      <div className="left">
        <div className="title">{rocket.rocket_name}</div>
        <div className="content">{rocket.description}</div>
        <a href={rocket.wikipedia} target="_blank" className="btn">
          Read More
        </a>
      </div>
      <div className="right overview">
        <div className="title">Overview</div>
        <span>
          <p>Height</p>{" "}
          <p>
            {rocket.height.meters} m / {rocket.height.feet} ft
          </p>
        </span>
        <span>
          <p>Diameter</p>{" "}
          <p>
            {rocket.diameter.meters} m / {rocket.diameter.feet} ft
          </p>
        </span>
        <span>
          <p>Mass</p>{" "}
          <p>
            {rocket.mass.kg} kg / {rocket.mass.lb} lb
          </p>
        </span>
        <span>
          <p>Payload Weight</p>{" "}
          <p>
            {rocket.payload_weights.kg} kg / {rocket.payload_weights.lb} lb
          </p>
        </span>
      </div>
    </div>
  );
};

export default RocketItem;
