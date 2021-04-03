import React from "react";
import axios from "axios";
import "./Rockets.css";
import RocketItem from "./RocketItem";

const Rockets = () => {
  const [state, setState] = React.useState({ rockets: [], errors: "" });

  React.useEffect(() => {
    axios
      .get(`https://api.spacexdata.com/v3/rockets`)
      .then((res) => setState({ ...state, rockets: res.data }))
      .catch((err) => setState({ ...state, errors: err.message }));
  }, []);

  console.log(state.rockets);

  return (
    <section className="rockets">
      {state.rockets.map((r) => (
        <RocketItem rocket={r} />
      ))}
    </section>
  );
};

export default Rockets;
