import React from "react";

import Link from "./Link.jsx";

const Links = ({ links }) => {

  return (
    <div className="links-grid">
      {links && links.slice(0, 4).map((link, index) => {
        return (
          <div key={index} className="grid-link">
            <Link link={link} />
          </div>
        );
      })}
    </div>
  );
};

export default Links;
