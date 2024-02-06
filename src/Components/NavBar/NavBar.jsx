import React from "react";
import Avatar from "./Avatar";
import "./styles.css";
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
      <div className="middle-container">
        <div className="input-container">
          <img src="search.svg" />
          <input
            type="text"
            placeholder="search for inspirartions, creations and projects "
            className="input"
            ref={inputRef}
          />
        </div>
      </div>
      <div className="right-container">
        <button className="create-btn">Create</button>
        <Avatar />
      </div>
    </div>
  );
}

export default NavBar;
