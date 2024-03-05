import React, { useRef, useContext } from "react";
import "./modal.styles.css";
import story2 from "../../assets/story2.jpg";
import story6 from "../../assets/story6.jpg";
import girjesh from "../../assets/girjesh.jpg";
import Avatar from "../Avatar";
import pic1 from "../../assets/pic1.jpg";
import pic3 from "../../assets/pic3.jpg";
import pic6 from "../../assets/pic6.jpg";

function Modal({ visible }) {
  const notifications = [
    {
      avatar: pic1,
      username: "Aditya_sharma",
      comment: "accepted your request.",
      time: "1 DAY AGO",
    },
    {
      avatar: story2,
      username: "Vaidehi",
      comment: "Commented on your post.",
      time: "3 DAYS AGO",
    },
    {
      avatar: pic3,
      username: "Priyanshi",
      comment: "Liked your posts.",
      time: "2 DAYS AGO",
    },
    {
      avatar: girjesh,
      username: "igirjesh",
      comment: "tagged in a post.",
      time: "1 DAY AGO",
    },
    {
      avatar: story6,
      username: "Shashank_Gaur",
      comment: "tagged you in a post.",
      time: "4 DAYS AGO",
    },
    {
      avatar: pic6,
      username: "Shanaya",
      comment: "wants to Follow you.",
      time: "1 DAY AGO",
    },
  ];
  return (
    <>
      {visible ? (
        <div className="content-div">
          {notifications.map((content, index) => (
            <div key={index} className="details">
              <div>
                <Avatar image={content.avatar} />
              </div>
              <div>
                <div className="comment-details">
                  <b>{content.username}</b>
                  <p style={{ margin: 0 }}>{content.comment} </p>
                </div>
                <div className="time">
                  <span>{content.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Modal;
