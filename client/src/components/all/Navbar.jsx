import React, { useState, useEffect } from "react";

import NewFolder from "./NewFolder.jsx";
import NewLink from "./NewLink.jsx";
import svg from "../../images/postkit1.svg";

const Navbar = () => {
  const [showNewFolder, setShowNewFolder] = useState(false);
  const [showNewLink, setShowNewLink] = useState(false);

  return (
    <div className="navbar">
      <div onClick={() => {setShowNewFolder(true)}} className="navbar-btn navbar-child">New Folder</div>
      <div onClick={() => {setShowNewLink(true)}} className="navbar-btn">New Link</div>
      <img src={svg} alt="" className="navbar-svg" />

      {showNewFolder && <NewFolder />}
      {showNewLink && <NewLink />}
    </div>
  );
};

export default Navbar;
