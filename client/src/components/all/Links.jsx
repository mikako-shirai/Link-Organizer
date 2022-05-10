import React from "react";

import Paths from "./Paths.jsx";

const Links = ({ links }) => {

  return (
    <div className="grid-folder-link">
      {(links && links.length > 0) ?
        links.slice(0, 4).map((link, index) => {
          return (
            <div key={index} className="grid-folder-link-block">
              <Paths link={link} />
            </div>
          );
        })
        :
        [""].map((link, index) => {
          return (
            <div key={index} className="grid-folder-link-block empty">
              <Paths link={link} />
            </div>
          );
        })
      }
    </div>
  );
};

export default Links;
