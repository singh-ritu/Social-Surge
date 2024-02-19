import React from "react";
import Avatar from "../Avatar";
import girl from "../../assets/Girl.jpg";
import Button from "../Button";
import "./search.style.css";

function SearchBar() {
  return (
    <div className="search-bar">
      <div style={{ display: "flex" }}>
        <Avatar image={girl} />
        <input
          type="text"
          placeholder="What's on your mind!!"
          className="search-bar"
        />
      </div>
      <div className="post-btn">
        <Button buttonName="Post" />
      </div>
    </div>
  );
}

export default SearchBar;
