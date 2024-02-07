import React from "react";
import Avatar from "../NavBar/Avatar";
import { useState } from "react";
import "./styles.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="user-info">
        <Avatar />
        <div style={{ marginLeft: "20px" }}>
          <b>Ritu Singh</b>
          <p>@riitu</p>
        </div>
      </div>
      <div className="options">
        <div className="item ">
          <img src="home.svg" style={{ marginRight: "10px" }} />
          <b>Home</b>
        </div>
        <div className="item">
          <img src="search.svg" style={{ marginRight: "10px" }} />
          <b>Explore</b>
        </div>
        <div className="item">
          <img src="bell.svg" style={{ marginRight: "10px" }} />
          <b>Notification</b>
        </div>
        <div className="item">
          <img src="message-square.svg" style={{ marginRight: "10px" }} />
          <b>Message</b>
        </div>
        <div className="item">
          <img src="bookmark.svg" style={{ marginRight: "10px" }} />
          <b>BookMarks</b>
        </div>
        <div className="item">
          <img src="activity.svg" style={{ marginRight: "10px" }} />
          <b>Analytics</b>
        </div>
        <div className="item">
          <img src="feather.svg" style={{ marginRight: "10px" }} />
          <b>Theme</b>
        </div>
        <div className="item">
          <img src="settings.svg" style={{ marginRight: "10px" }} />
          <b>Settings</b>
        </div>
      </div>
      <div>
        <button className="new-post">Create Post</button>
      </div>
    </div>
  );
}

export default Sidebar;
