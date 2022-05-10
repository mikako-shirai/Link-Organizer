import React from "react";

import Navbar from "./Navbar.jsx";
import Folders from "./Folders.jsx";

const Main = ({ switchDisplay }) => {
  return (
    <>
      <Navbar />
      <Folders switchDisplay={switchDisplay} />
    </>
  );
};

export default Main;
