import React from "react";
import axios from "axios";
import TimeLine from "./TimeLine";
import "./LaunchHistory.css";

const LaunchHistory = () => {
  const [state, setState] = React.useState({ history: [], errors: "" });

  React.useEffect(() => {
    axios
      .get(`https://api.spacexdata.com/v3/history`)
      .then((res) => setState({ ...state, history: res.data }))
      .catch((err) => setState({ ...state, errors: err.message }));
  }, []);

  return <TimeLine timelineArray={[...state.history].reverse()} />;
};

export default LaunchHistory;
