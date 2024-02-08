import { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Stories from "./Components/Stories/Stories";
import "./App.css";
function App() {
  return (
    <>
      <div className="top-container">
        <div>
          <NavBar />
        </div>
        <div className="bottom-container">
          <div className="left-container">
            <Sidebar />
          </div>
          <div className="middle-container">
            <div>
              <Stories />
            </div>
          </div>
          <div className="right-container"></div>
        </div>
      </div>
    </>
  );
}

export default App;
