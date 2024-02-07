import { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Stories from "./Components/Stories/Stories";
function App() {
  return (
    <>
      <div style={{ backgroundColor: "#F1EDF5" }}>
        <div>
          <NavBar />
        </div>
        <div>
          <div>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
