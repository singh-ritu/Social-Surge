import React from "react";
import Avatar from "../Avatar";
import Button from "../Button";
import "./request.styles.css";
import story5 from "../../assets/story5.jpg";

function Requests() {
  return (
    <div className="request-container">
      <div className="request">
        <Avatar image={story5} />
        <div className="request-user">
          <b>Ruby_Charan</b>
          <span>+8 mutual friends </span>
        </div>
      </div>
      <div className="accept-btn">
        <Button buttonName="Accept" />
        <Button buttonName="Reject" />
      </div>
    </div>
  );
}

export default Requests;
