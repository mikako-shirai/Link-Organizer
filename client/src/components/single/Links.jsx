import React, { useState, useEffect } from "react";
import axios from "axios";

import Paths from "./Paths";

const Links = ({ switchDisplay }) => {
  const [links, setLinks] = useState([]);

  const getAllLinks = async () => {
    const linkIDs = switchDisplay.selectedFolder.linkIDs;
    const allLinks = await Promise.all(
      linkIDs.map(async (linkID) => {
        const res = await axios.get(`/links/${linkID}`);
        return res.data.data;
      })
    );
    setLinks(allLinks);
  };

  const handleClick = (link) => {

  };

  useEffect(() => {
    getAllLinks();
  }, []);

  return (
    <div className="links">
      <div className="grid-link">
        {links.map((link, index) => {
          return (
            <div onClick={() => {handleClick(link)}} key={index} className="grid-link-block">
              <Paths link={link.url} />
              <div className="grid-linkcaption">{link.caption}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Links;
