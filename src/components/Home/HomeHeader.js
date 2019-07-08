import React from "react";
import { Link } from "react-router-dom";

import * as Header from "../../assets/img/headers/header.png";

const HeaderStyle = {
  backgroundImage: `url(${Header})`,
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "scroll",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundOrigin: "border-box"
};

function HomeHeader(props) {
  return (
    <header className="large-header light push" style={HeaderStyle}>
      <div className="header-container">
        <div className="content">
          <h1>Life-Changing CX</h1>
          <h2>(coaster experience)</h2>
          <Link to="/products" className="btn">
            I love lamp
          </Link>
        </div>
      </div>

      <div className="down-arrow" aria-hidden="true">
        <span className="arrow"> &#10095; </span>
      </div>
    </header>
  );
}

export default HomeHeader;
