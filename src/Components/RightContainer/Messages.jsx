import React from "react";
import "./messages.styles.css";
import Avatar from "../Avatar";
import search from "../../assets/search.svg";
import edit from "../../assets/edit.svg";

function Messages() {
  return (
    <div className="messages">
      <div className="title">
        <b>Messages</b>
        <img src={edit}></img>
      </div>
      <div className="user-search">
        <img src={search} alt="no-img" />
        <input type="text" placeholder="Search" className="user-search" />
      </div>
      <div className="message-category">
        <b className="text">Primary</b>
        <b className="text">General</b>
        <b className="text">Request(7)</b>
      </div>
      <div className="slider"></div>
      <div className="users-list">
        <div className="user">
          <Avatar />
          <div>
            <b className="text">Shashank_Gaur</b>
            <p>+4messages</p>
          </div>
        </div>
        <div className="user">
          <Avatar />
          <div>
            <b>Vaidehi</b>
            <p>Love u babe</p>
          </div>
        </div>
        <div className="user">
          <Avatar />
          <div>
            <b>Mahek</b>
            <p>+2messages</p>
          </div>
        </div>
        <div className="user">
          <Avatar />
          <div>
            <b>Ehssas_nagar</b>
            <p>Hey Bro!</p>
          </div>
        </div>
        <div className="user">
          <Avatar />
          <div>
            <b>igirjesh</b>
            <p>+3messages</p>
          </div>
        </div>
        <div className="user">
          <Avatar />
          <div>
            <b>shobbit</b>
            <p>funny</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
