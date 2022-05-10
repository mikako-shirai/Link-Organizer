import React from "react";

const Info = ({ switchDisplay }) => {
  return (
    <div className="info">
      <div onClick={() => {switchDisplay.setSwitchDisplay(false)}} className="info-btn">Go Back</div>
    </div>
  );
};

export default Info;
