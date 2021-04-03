import React from "react";
import { Link } from "react-router-dom";
import YT from "./YT.png";
import Wiki from "./Wiki.png";
import Search from "./Search.png";

const LaunchCards = ({ launchesArray = [] }) => {
  const [state, setState] = React.useState({
    filteredData: [],
    search: "",
  });

  React.useMemo(() => {
    setState({
      ...state,
      filteredData: launchesArray.filter((l) =>
        l.mission_name.toLowerCase().includes(state.search.toLowerCase())
      ),
    });
  }, [state.search, launchesArray]);

  return (
    <section className="launches">
      <div className="container">
        <div className="filter">
          <div className="search">
            <img src={Search} height="20" style={{ margin: "0 0.5rem" }} />
            <input
              value={state.search}
              onChange={(e) => setState({ ...state, search: e.target.value })}
            />
          </div>
        </div>
        <div className="all-launches">
          {state.filteredData.length > 0 ? (
            state.filteredData.map((l, i) => <Card launch={l} key={i} />)
          ) : (
            <div
              style={{ textAlign: "center", width: "100%", padding: "5rem" }}
            >
              loading...
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LaunchCards;

const Card = ({ launch }) => {
  return (
    <div className="launch-card">
      <div className="title">{launch.mission_name}</div>
      <div className="content">{launch.details?.slice(0, 100)}...</div>
      <Link to="#" className="btn">
        Read More...
      </Link>
      <SocialLinks links={launch.links} />
    </div>
  );
};

const SocialLinks = ({ links }) => (
  <div className="links">
    {links.video_link !== (null || "") && (
      <a href={links.video_link} target="_blank">
        {" "}
        <img src={YT} height="32" alt="Video Link" />{" "}
      </a>
    )}
    {links.wikipedia !== (null || "") && (
      <a href={links.wikipedia} target="_blank">
        {" "}
        <img src={Wiki} height="32" alt="Wikipedia Link" />{" "}
      </a>
    )}
  </div>
);
