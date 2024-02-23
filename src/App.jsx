import { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Stories from "./Components/MiddleContainer/Stories";
import Messages from "./Components/RightContainer/Messages";
import SearchBar from "./Components/MiddleContainer/SearchBar";
import "./App.css";
import Requests from "./Components/RightContainer/Requests";
function App() {
  return (
    <>
      <div className="parent-container">
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
