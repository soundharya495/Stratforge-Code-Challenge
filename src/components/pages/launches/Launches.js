import React from "react";
import axios from "axios";
import "./Launches.css";
import LaunchCards from "./LaunchCards";

const Launches = () => {
  const [state, setState] = React.useState({ launches: [], errors: "" });

  React.useEffect(() => {
    axios
      .get(`https://api.spacexdata.com/v3/launches`)
      .then((res) => setState({ ...state, launches: res.data }))
      .catch((err) => setState({ ...state, errors: err.message }));
  }, []);

  return <LaunchCards launchesArray={state.launches} />;
};

export default Launches;
