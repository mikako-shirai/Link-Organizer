import React, { useState } from "react";

import NewFolder from "./NewFolder.jsx";
import svg from "../../images/postkit1.svg";

const Navbar = () => {
  const [showNewFolder, setShowNewFolder] = useState(false);

  return (
    <div className="navbar">
      <div onClick={() => {setShowNewFolder(true)}} className="navbar-btn btn-child">New Folder</div>
      <div className="navbar-btn">New Link</div>
      <img src={svg} alt="" className="navbar-svg" />

      {showNewFolder && <NewFolder setShowNewFolder={setShowNewFolder} />}
    </div>
  );
};

export default Navbar;
