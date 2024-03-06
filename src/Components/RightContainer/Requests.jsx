import React from "react";
import Avatar from "../Avatar";
import Button from "../Button";
import "./request.styles.css";
import story1 from "../../assets/story1.jpg";
import story6 from "../../assets/story6.jpg";
import story3 from "../../assets/story3.jpg";

function Requests() {
  const requests = [
    {
      avatar: story1,
      username: "Ruby_Charan",
      Friends: "+8mutual Friends",
    },
    {
      avatar: story6,
      username: "Shivam_shukla",
      Friends: "+4 mutual Friends",
    },
    {
      avatar: story3,
      username: "Sakshiii",
      Friends: "+2 mutual Friends",
    },
  ];

  return (
    <>
      {requests.map((request, index) => (
        <div className="request-container" key={index}>
          <div className="request">
            <Avatar image={request.avatar} />

            <div className="request-user">
              <b>{request.username} </b>
              <span>{request.Friends} </span>
            </div>
          </div>
          <div className="accept-btn">
            <Button buttonName="Accept" />

            <Button buttonName="Reject" />
          </div>
        </div>
      ))}
    </>
  );
}

export default Requests;
{
  /* <div className="request-container">
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
</div> */
}
