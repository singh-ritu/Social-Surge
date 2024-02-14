import React from "react";
import "./styles.css";

function Avatar({ image }) {
  return (
    <div>
      <img src={image} className="avatar" />
    </div>
  );
}

export default Avatar;
