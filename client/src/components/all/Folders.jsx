import React, { useState, useEffect } from "react";
import axios from "axios";

import Links from "./Links.jsx";

const Folders = ({ switchDisplay }) => {
  const [folders, setFolders] = useState([]);
  const [links, setLinks] = useState([]);

  const getAllFolders = async () => {
    const res = await axios.get("/folders");
    const allFolders = res.data.data;
    setFolders(allFolders.reverse());
  };

  const getURLsForFolder = () => {
    const urls = folders.map((folder) => folder.urls);
    setLinks(urls);
  };

  const handleClick = (folder) => {
    switchDisplay.setSelectedFolder(folder);
    switchDisplay.setSwitchDisplay(true);
  };

  useEffect(() => {
    getAllFolders();
  }, []);

  useEffect(() => {
    getURLsForFolder();
  }, [folders]);

  return (
    <div className="folders">
      <div className="grid-folder">
        {folders.map((folder, index) => {
          return (
            <div onClick={() => {handleClick(folder)}} key={index} className="grid-folder-block">
              <div className="grid-folder-name">{folder.folderName}</div>
              <Links links={links[index]} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Folders;
