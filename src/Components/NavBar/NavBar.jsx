import React from "react";
import Avatar from "../Avatar";
import "./navbar.styles.css";
import girl from "../../assets/Girl.jpg";
import search from "../../assets/search.svg";

import Button from "../Button";
import { useEffect, useRef } from "react";

function NavBar() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Set the cursor position at the start when the component mounts
    inputRef.current.focus();
    inputRef.current.setSelectionRange(0, 0);
  }, []);
  return (
    <div className="navBar">
      <div className="project-name">
        <span className="heading">Social-Surge</span>
      </div>
      <div className="middle-nav-container">
        <div className="input-container">
          <img src={search} />
          <input
            type="text"
            placeholder="Search for inspirartions, creations and projects "
            className="input "
            ref={inputRef}
          />
        </div>
      </div>
      <div className="right-nav-container">
        <div className="create-btn">
          <Button buttonName="Create" color="#8a6aef" />
        </div>
        <div style={{ marginTop: "10px" }}>
          <Avatar image={girl} />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
