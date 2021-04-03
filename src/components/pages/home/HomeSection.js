import React from "react";
import { Link } from "react-router-dom";

const HomeSection = ({
  name,
  image,
  title,
  content,
  buttonText,
  buttonLink,
  color = "rgba(255,255,255,1)",
  bgColor = "rgba(0,0,0,0.2)",
  position,
}) => {
  return (
    <section
      className={name}
      style={{ background: `url(${image})`, backgroundSize: "cover" }}
    >
      <div
        className="container"
        style={
          ({ color: color, backgroundColor: bgColor },
          position === "left"
            ? { left: 0 }
            : position === "right"
            ? { right: 0 }
            : {})
        }
      >
        <div className="title">{title}</div>
        <div className="content">{content}</div>
        {buttonText?.length > 0 && buttonLink?.length > 0 ? (
          <Link to={buttonLink} className="btn">
            {buttonText}
          </Link>
        ) : null}
      </div>
    </section>
  );
};

export default HomeSection;
