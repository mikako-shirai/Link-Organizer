import React from "react";

import Info from "./Info.jsx";
import Links from "./Links.jsx";

const Focus = ({ switchDisplay }) => {

  return (
    <>
      <Info switchDisplay={switchDisplay} />
      <Links switchDisplay={switchDisplay} />
    </>
  );
};

export default Focus;
