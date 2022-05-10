import React from "react";

const Links = ({ links }) => {

  return (
    <div className="links-grid">
      {links && links.map((link, index) => {
        return (
          <>
            <div key={index} className="grid-link">
              {/* <div>{link}</div> */}
              <object data="https://duckduckgo.com/?q=js+Refused+to+frame+%27%3CURL%3E%27+because+an+ancestor+violates+the+following+Content+Security+Policy+directive%3A+%22frame-ancestors+%27none%27%22.&t=brave&ia=web">
                <embed src="https://duckduckgo.com/?q=js+Refused+to+frame+%27%3CURL%3E%27+because+an+ancestor+violates+the+following+Content+Security+Policy+directive%3A+%22frame-ancestors+%27none%27%22.&t=brave&ia=web" />
              </object>
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
