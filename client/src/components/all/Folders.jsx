import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { UpdateData } from "../../App.jsx";
import Links from "./Links.jsx";

const Folders = ({ switchDisplay }) => {
  const { updateData, setUpdateData } = useContext(UpdateData);
  const [folders, setFolders] = useState([]);
  const [linksForFolders, setLinksForFolders] = useState([]);

  const getAllFolders = async () => {
    const res = await axios.get("/folders");
    const allFolders = res.data.data;
    setFolders(allFolders.reverse());
    setUpdateData(false);
  };

  const getURLsForFolder = () => {
    const urls = folders.map((folder) => folder.urls);
    setLinksForFolders(urls);
  };

  const handleClick = (folder) => {
    switchDisplay.setSelectedFolder(folder);
    switchDisplay.setSwitchDisplay(true);
  };

  useEffect(() => {
    getAllFolders();
  }, []);

  useEffect(() => {
    getAllFolders();
  }, [updateData]);

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
              <Links links={linksForFolders[index]} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Folders;
