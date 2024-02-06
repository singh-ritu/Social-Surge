import { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <div style={{ backgroundColor: "#F1EDF5" }}>
        <div>
          <NavBar />
        </div>
        <div>
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
