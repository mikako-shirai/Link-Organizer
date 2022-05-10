import React, { useState } from "react";

import AddLink from "./AddLink.jsx";
import svg from "../../images/postkit2.svg";

const Info = ({ switchDisplay }) => {
  const [showAddLink, setShowAddLink] = useState(false);

  return (
    <div className="info">
      <div onClick={() => {switchDisplay.setSwitchDisplay(false)}} className="info-btn btn-child">Go Back</div>
      <div onClick={() => {setShowAddLink(true)}} className="info-btn">Add Link</div>
      <img src={svg} alt="" className="navbar-svg" />

      {showAddLink && <AddLink switchDisplay={switchDisplay} setShowAddLink={setShowAddLink} />}
    </div>
  );
};

export default Info;
