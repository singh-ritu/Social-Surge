import React from "react";
import Avatar from "../Avatar";
import "./post.styles.css";

import post1 from "../../assets/post1.jpg";
import pic1 from "../../assets/pic1.jpg";
import more from "../../assets/more.svg";
import heart from "../../assets/heart.svg";
import message from "../../assets/message.svg";
import share from "../../assets/share.svg";
import bookmarks from "../../assets/bookmark.svg";

function PostCard() {
  return (
    <div className="post-card">
      <div className="upper-part">
        <div className="post-user">
          <Avatar image={pic1} />
          <div>
            <b>Riya_agaarwal</b>
            <p>Dubai,15 Minutes Ago</p>
          </div>
        </div>
        <div>
          <img src={more} />
        </div>
      </div>
      <div className="middle-part">
        <div>
          <img src={post1} className="post-img" />
        </div>
        <div className="icons">
          <div>
            <img src={heart} />
            <img src={message} />
            <img src={share} />
          </div>
          <div>
            <img src={bookmarks} />
          </div>
        </div>
      </div>
      <div className="lower-part">
        <div>
          <div className="likes">
            <p>liked by</p>
            <b>igirjesh</b>
            <p>and</p>
            <b>233 others</b>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            itaque.
          </div>
          <p>view all 456 comments </p>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
