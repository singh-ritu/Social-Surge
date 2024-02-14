import { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Stories from "./Components/MiddleContainer/Stories";
import Messages from "./Components/RightContainer/Messages";
import "./App.css";
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
            </div>
          </div>
          <div className="right-container">
            <div>
              <Messages />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
