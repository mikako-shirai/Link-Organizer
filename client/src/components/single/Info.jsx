import React from "react";

import svg from "../../images/postkit2.svg";

const Info = ({ switchDisplay }) => {
  return (
    <div className="info">
      <div onClick={() => {switchDisplay.setSwitchDisplay(false)}} className="info-btn">Go Back</div>
      <img src={svg} alt="" className="navbar-svg" />
    </div>
  );
};

export default Info;
