import React, { useState, useEffect } from "react";
import axios from "axios";

import Links from "./Links.jsx";

const Folders = () => {
  const [folders, setFolders] = useState([]);
  const [links, setLinks] = useState([]);

  const getAllFolders = async () => {
    const res = await axios.get("/folders");
    const allFolders = res.data.data;
    setFolders(allFolders);
  };

  const getURLsForFolder = () => {
    const urls = folders.map((folder) => folder.urls);
    setLinks(urls);
  };

  useEffect(() => {
    getAllFolders();
  }, []);

  useEffect(() => {
    getURLsForFolder();
  }, [folders]);

  return (
    <div className="folders">
      <div className="folders-grid">
        {folders.map((folder, index) => {
          return (
            <div key={index} className="grid-folder">
              <div className="grid-foldername">{folder.folderName}</div>
              <Links links={links[index]} index={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Folders;
