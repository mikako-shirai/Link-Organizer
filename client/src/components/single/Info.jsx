import React, { useState } from "react";

import NewLink from "./NewLink.jsx";
import svg from "../../images/postkit2.svg";

const Info = ({ switchDisplay }) => {
  const [showNewLink, setShowNewLink] = useState(false);

  return (
    <div className="info">
      <div onClick={() => {switchDisplay.setSwitchDisplay(false)}} className="info-btn btn-child">Go Back</div>
      <div onClick={() => {setShowNewLink(true)}} className="info-btn">Add Link</div>
      <img src={svg} alt="" className="navbar-svg" />

      {showNewLink && <NewLink switchDisplay={switchDisplay} setShowNewLink={setShowNewLink} />}
    </div>
  );
};

export default Info;
