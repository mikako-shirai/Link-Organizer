import React from "react";

import Paths from "./Paths.jsx";

const Links = ({ links }) => {

  return (
    <div className="grid-folder-links">
      {links && links.slice(0, 4).map((link, index) => {
        return (
          <div key={index} className="grid-folder-links-block">
            <Paths link={link} />
          </div>
        );
      })}
    </div>
  );
};

export default Links;
