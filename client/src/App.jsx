import React, { useState } from "react";

import Main from "./components/all/Main.jsx";
import Focus from "./components/single/Focus.jsx";
import "./styles/index.css";

const App = () => {
  const [switchDisplay, setSwitchDisplay] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState({});

  return (
    <div className="app">
      {!switchDisplay && <Main switchDisplay={{ setSwitchDisplay, setSelectedFolder }} />}
      {switchDisplay && <Focus switchDisplay={{ setSwitchDisplay, selectedFolder }} />}
    </div>
  );
};

export default App;
