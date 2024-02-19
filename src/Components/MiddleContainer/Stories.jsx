import React from "react";
import Avatar from "../Avatar";
import "./stories.styles.css";
import { stories } from "./constants";

function Stories() {
  return (
    <div className="stories-container">
      {stories.map((story, index) => (
        <div
          key={index}
          className="story"
          style={{ backgroundImage: `url(${story.photo})` }}
        >
          <Avatar image={story.avatar} />
          <span className="username">{story.username}</span>
        </div>
      ))}
    </div>
  );
}

export default Stories;
