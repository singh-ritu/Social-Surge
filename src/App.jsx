import { useState, useContext } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Stories from "./Components/MiddleContainer/Stories";
import Messages from "./Components/RightContainer/Messages";
import SearchBar from "./Components/MiddleContainer/SearchBar";
import "./App.css";
import Requests from "./Components/RightContainer/Requests";

import { ThemeContext } from "./Theme";
function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={`parent-container ${theme}`}>
        <div>
          <NavBar />
        </div>
        <div className="bottom-container">
          <div className="left-container">
            <Sidebar />
          </div>
          <div className="middle-container">
            <div style={{ height: "100%" }}>
              <Stories />
              <div style={{ marginTop: "20px" }}>
                <SearchBar />
              </div>
            </div>
          </div>
          <div className="right-container">
            <div>
              <Messages />
            </div>
            <span>Requests</span>
            <div>
              <Requests />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
