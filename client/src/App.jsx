import React from "react";

import Navbar from "./components/main/Navbar.jsx";
import Folders from "./components/main/Folders.jsx";
import "./styles/index.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Folders />
    </div>
  );
};

export default App;
