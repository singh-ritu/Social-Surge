import React from "react";
import Avatar from "../Avatar";
import { useContext, useState, useEffect } from "react";
import Button from "../Button";
import "./sidebar.styles.css";
import girl from "../../assets/Girl.jpg";
import home from "../../assets/home.svg";
import search from "../../assets/search.svg";
import bell from "../../assets/bell.svg";
import messageSquare from "../../assets/message-square.svg";
import bookmark from "../../assets/bookmark.svg";
import activity from "../../assets/activity.svg";
import feather from "../../assets/feather.svg";
import settings from "../../assets/settings.svg";
import Modal from "./Modal";
import { ThemeContext } from "../../Theme";

function Sidebar({ handleClick }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [visible, setVisible] = useState(false);

  const sibebarItems = [
    {
      logo: home,
      logoName: "Home",
    },
    {
      logo: search,
      logoName: "Explore",
    },
    {
      logo: bell,
      logoName: "Notification",
    },
    {
      logo: messageSquare,
      logoName: "Messages",
    },
    {
      logo: bookmark,
      logoName: "Bookmarks",
    },
    {
      logo: activity,
      logoName: "Analytics",
    },
    {
      logo: feather,
      logoName: "Theme",
    },
    {
      logo: settings,
      logoName: "Settings",
    },
  ];

  const handleItemClicked = (logoName) => {
    if (logoName === "Theme") {
      toggleTheme();
      setVisible(false);
      console.log({ theme });
    } else if (logoName === "Notification") {
      setVisible(!visible);
    } else if (logoName === "Messages") {
      handleClick();
      // useEffect(() => {
      //   const timeoutId = setTimeout(() => {
      //     setIsMessagesClicked(false);
      //   }, 2000);
      //   return () => clearTimeout(timeoutId);
      // }, []);
    } else {
      setVisible(false);
    }
  };
  return (
    <div className="sidebar">
      <div className="user-info">
        <Avatar image={girl} />
        <div style={{ marginLeft: "20px" }}>
          <b>Ritu Singh</b>
          <p>@riitu</p>
        </div>
      </div>
      <div className="options">
        {sibebarItems.map((option, index) => (
          <div
            key={index}
            className="item"
            onClick={() => {
              handleItemClicked(option.logoName);
            }}
          >
            <img
              src={option.logo}
              alt="no logo"
              style={{ marginRight: "10px" }}
            />
            <b>{option.logoName}</b>
          </div>
        ))}
      </div>
      <div className="new-post">
        <Button buttonName="Create Post" />
      </div>
      <div>{visible && <Modal visible={visible} />}</div>
    </div>
  );
}

export default Sidebar;
