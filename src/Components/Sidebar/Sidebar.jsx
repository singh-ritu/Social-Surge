import React from "react";
import Avatar from "../Avatar";
import { useState } from "react";
import Button from "../Button";
import "./sidebar.styles.css";
import girl from "../../assets/Girl.jpg";
import home from "../../assets/home.svg";
import search from "../../assets/search.svg";
import bell from "../../assets/bell.svg";
import messageSquare from "../../assets/message-square.svg";
import bookmark from "../../assets/bookmark.svg";
import activity from "../../assets/activity.svg";
import feather from "../../assets/feather.svg";
import settings from "../../assets/settings.svg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="user-info">
        <Avatar image={girl} />
        <div style={{ marginLeft: "20px" }}>
          <b>Ritu Singh</b>
          <p>@riitu</p>
        </div>
      </div>
      <div className="options">
        <div className="item ">
          <img src={home} style={{ marginRight: "10px" }} />
          <b>Home</b>
        </div>
        <div className="item">
          <img src={search} style={{ marginRight: "10px" }} />
          <b>Explore</b>
        </div>
        <div className="item">
          <img src={bell} style={{ marginRight: "10px" }} />
          <b>Notification</b>
        </div>
        <div className="item">
          <img src={messageSquare} style={{ marginRight: "10px" }} />
          <b>Message</b>
        </div>
        <div className="item">
          <img src={bookmark} style={{ marginRight: "10px" }} />
          <b>BookMarks</b>
        </div>
        <div className="item">
          <img src={activity} style={{ marginRight: "10px" }} />
          <b>Analytics</b>
        </div>
        <div className="item">
          <img src={feather} style={{ marginRight: "10px" }} />
          <b>Theme</b>
        </div>
        <div className="item">
          <img src={settings} style={{ marginRight: "10px" }} />
          <b>Settings</b>
        </div>
      </div>
      <div className="new-post">
        <Button buttonName="Create Post" />
      </div>
    </div>
  );
}

export default Sidebar;
