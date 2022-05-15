import React, { useState } from "react";

import Main from "./components/all/Main.jsx";
import Focus from "./components/single/Focus.jsx";
import "./styles/index.css";

export const UpdateData = React.createContext();

const App = () => {
  const [switchDisplay, setSwitchDisplay] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState({});
  const [updateData, setUpdateData] = useState(false);
  const update = { updateData, setUpdateData };

  return (
    <div className="app">
      <UpdateData.Provider value={update}>
        {!switchDisplay && <Main switchDisplay={{ setSwitchDisplay, setSelectedFolder }} />}
        {switchDisplay && <Focus switchDisplay={{ setSwitchDisplay, selectedFolder }} />}
      </UpdateData.Provider>
    </div>
  );
};

export default App;
