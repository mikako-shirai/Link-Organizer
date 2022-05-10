import React from "react";

const Links = ({ links }) => {

  return (
    <div className="links-grid">
      {links && links.map((link, index) => {
        return (
          <>
            <div key={index} className="grid-link">
              <div>{link}</div>
            </div>
            <div key={index} className="grid-link">
              <div>{link}</div>
            </div>
            <div key={index} className="grid-link">
              <div>{link}</div>
            </div>
            <div key={index} className="grid-link">
              <div>{link}</div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Links;
