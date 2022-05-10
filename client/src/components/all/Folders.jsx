import React, { useState, useEffect } from "react";
import axios from "axios";

const Folders = () => {
  const [folders, setFolders] = useState([]);

  const getAllFolders = async () => {
    const res = await axios.get("/folders");
    const allFolders = res.data.data;
    setFolders(allFolders);
  };

  useEffect(() => {
    getAllFolders();
  }, []);

  return (
    <div className="folders">
      <div className="folders-grid">
        {folders.map((folder, index) => {
          return (
            <div key={index} className="grid-folder">{folder.folderName}</div>
          );
        })}
      </div>
    </div>
  );
};

export default Folders;
