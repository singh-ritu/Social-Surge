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
      <div style={{ marginTop: "20px", width: "500px" }}>
        <h3>Social-Surge</h3>
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="search for inspirartions, creations and projects "
          className="input"
          ref={inputRef}
        />
      </div>
      <div style={{ display: "flex" }}>
        <button className="create-btn">Create</button>
        <Avatar />
      </div>
    </div>
  );
}

export default NavBar;
