import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/navigation/NavBar";
import Home from "./components/pages/home/Home";
import Launches from "./components/pages/launches/Launches";
import LaunchHistory from "./components/pages/history/LaunchHistory";
import Rockets from "./components/pages/rockets/Rockets";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/history" component={LaunchHistory} />
          <Route path="/launches" component={Launches} />
          <Route path="/rockets" component={Rockets} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
