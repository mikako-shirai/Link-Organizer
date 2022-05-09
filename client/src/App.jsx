import React from "react";

import Navbar from "./components/all/Navbar.jsx";
import Folders from "./components/all/Folders.jsx";
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
