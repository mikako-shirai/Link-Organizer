import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { UpdateData } from "../../App.jsx";
import Paths from "./Paths";

const Links = ({ switchDisplay }) => {
  const { updateData, setUpdateData } = useContext(UpdateData);
  const [links, setLinks] = useState([]);

  const getAllLinks = async () => {
    const linkIDs = switchDisplay.selectedFolder.linkIDs;
    const allLinks = await Promise.all(
      linkIDs.map(async (linkID) => {
        const res = await axios.get(`/links/${linkID}`);
        return res.data.data;
      })
    );
    setLinks(allLinks.reverse());
    setUpdateData(false);
  };

  useEffect(() => {
    getAllLinks();
  }, []);

  useEffect(() => {
    getAllLinks();
  }, [updateData]);

  return (
    <div className="links">
      <div className="grid-link">
        <div className="grid-link-title">{switchDisplay.selectedFolder.folderName}</div>
        {links.map((link, index) => {
          return (
            <div key={index} className="grid-link-block">
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
