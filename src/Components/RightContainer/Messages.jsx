import React, { useState } from "react";
import "./messages.styles.css";
import Avatar from "../Avatar";
import search from "../../assets/search.svg";
import edit from "../../assets/edit.svg";
import story2 from "../../assets/story2.jpg";
import story3 from "../../assets/story3.jpg";
import story4 from "../../assets/story4.jpg";
import story6 from "../../assets/story6.jpg";
import girjesh from "../../assets/girjesh.jpg";
import shobbit from "../../assets/shobbit.jpg";

function Messages() {
  const items = [
    {
      avatar: story6,
      username: "Shashank_Gaur",
      text: "+4 Messages",
    },
    {
      avatar: story2,
      username: "Vaidehi",
      text: "Love u babe",
    },
    {
      avatar: story4,
      username: "Mahek",
      text: "+2 Messages",
    },
    {
      avatar: story3,
      username: "Ehsaas_nagar",
      text: "Hey Bro!",
    },
    {
      avatar: girjesh,
      username: "igirjesh",
      text: "+3 Messages",
    },
    {
      avatar: shobbit,
      username: "shobbit",
      text: "Funny",
    },
  ];
  const [input, setInput] = useState([]);
  const [users, setUsers] = useState(items);
  const handleChange = (e) => {
    setInput(e.target.value);

    if (e.target.value === "") {
      setUsers(items);
      return;
    }

    const filteredArr = users.filter((user) => {
      return user.username.toLowerCase().includes(e.target.value);
    });
    setUsers(filteredArr);
  };

  return (
    <div className="messages">
      <div className="title">
        <b>Messages</b>
        <img src={edit}></img>
      </div>
      <div className="user-search">
        <img src={search} alt="no-img" />
        <input
          value={input}
          onChange={handleChange}
          type="text"
          placeholder="Search"
          className="user-search"
        />
      </div>
      <div className="message-category">
        <b className="text">Primary</b>
        <b className="text">General</b>
        <b className="text">Request(7)</b>
      </div>
      <div className="slider"></div>
      <div>
        {users.map((value, index) => (
          <div className="user-list" key={index}>
            <div className="user">
              <Avatar image={value.avatar} />
              <div>
                <b>{value.username}</b>
                <p>{value.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Messages;
