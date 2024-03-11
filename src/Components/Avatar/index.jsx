import React from "react";
import "./styles.css";

function Avatar({ image, border }) {
  return (
    <div>
      <img src={image} className="avatar" style={border} />
    </div>
  );
}

export default Avatar;
