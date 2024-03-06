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
                <p style={{ margin: 0 }}>liked by</p>
                <b>{card.otherUser}</b>
                <p style={{ margin: 0 }}>and</p>
                <b>{card.count} </b>
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
{
  /* 
      
      <div className="lower-part">
        <div>
          <div className="likes">
            <p style={{ margin: 0 }}>liked by</p>
            <b>igirjesh</b>
            <p style={{ margin: 0 }}>and</p>
            <b>233 others</b>
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
            dignissimos architecto molestiae, nisi amet quos? Temporibus commodi
            magnam necessitatibus modi! Ab omnis sint nobis hic ratione, quaerat
            vero similique earum. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Culpa reiciendis molestias nesciunt repellendus
            mollitia, impedit ut aliquam alias veritatis ad, magnam facilis
            exercitationem temporibus provident! Nobis sit quasi architecto
            inventore?
          </div>
          <p>view all 456 comments </p>
        </div>
      </div> */
}
