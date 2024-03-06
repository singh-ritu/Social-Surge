import React from "react";
import Avatar from "../Avatar";
import "./post.styles.css";
import { postCards } from "./cards";

import more from "../../assets/more.svg";
import heart from "../../assets/heart.svg";
import message from "../../assets/message.svg";
import share from "../../assets/share.svg";
import bookmarks from "../../assets/bookmark.svg";

function PostCard() {
  return (
    <>
      {postCards.map((card, index) => (
        <div className="post-card" key={index}>
          <div className="upper-part">
            <div className="post-user">
              <Avatar image={card.avatar} />
              <div>
                <b>{card.username}</b>
                <p style={{ margin: 0 }}>{card.location} </p>
              </div>
            </div>
            <div>
              <img src={more} />
            </div>
          </div>
          <div className="middle-part">
            <div>
              <img src={card.post} className="post-img" />
            </div>
            <div className="icon">
              <div>
                <img src={heart} style={{ paddingRight: "8px" }} />
                <img src={message} style={{ paddingRight: "8px" }} />
                <img src={share} style={{ paddingRight: "8px" }} />
              </div>
              <div>
                <img src={bookmarks} />
              </div>
            </div>
          </div>
          <div className="lower-part">
            <div>
              <div className="likes">
                <p style={{ margin: 0, marginRight: "4px" }}>liked by</p>
                <b style={{ marginRight: "4px" }}>{card.otherUser}</b>
                <p style={{ margin: 0, marginRight: "4px" }}>and</p>
                <b style={{ marginRight: "4px" }}>{card.count} </b>
              </div>
              <div>{card.caption}</div>
              <p>{card.comments} </p>
              <div />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default PostCard;
