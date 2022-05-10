import React from "react";

import Info from "./Info.jsx";
import Folder from "./Folder.jsx";

const Focus = ({ switchDisplay }) => {
  return (
    <>
      <Info />
      <Folder switchDisplay={switchDisplay} />
    </>
  );
};

export default Focus;
