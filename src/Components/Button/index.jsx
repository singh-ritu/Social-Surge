import React from "react";
import "./button.styles.css";

function Button({ buttonName, color = "#5731d3" }) {
  return (
    <button className="button" style={{ backgroundColor: color }}>
      {buttonName}
    </button>
  );
}

export default Button;
