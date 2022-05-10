import React, { useState, useEffect } from "react";
import axios from "axios";

const NewLink = ({ setShowNewLink }) => {
  const [form, setForm] = useState({ url: "", folderID: "", caption: "" });
  const [folderIDs, setFolderIDs] = useState([]);
  const [folderNames, setFolderNames] = useState([]);

  const getAllFolders = async () => {
    const res = await axios.get("/folders");
    const allFolders = res.data.data;

    const allFolderIDs = allFolders.map((folder) => folder._id);
    const allFolderNames = allFolders.map((folder) => folder.folderName);

    setFolderIDs(allFolderIDs.reverse());
    setFolderNames(allFolderNames.reverse());
  };

  const addNewLink = async () => {
    const link = validateInput();
    if (!link) return;

    await axios.post("/links", link);
    setShowNewLink(false);
  };

  const validateInput = () => {
    const folderNameIndex = folderNames.indexOf(form.folderName);
    let folderID = folderIDs[folderNameIndex];
    let url = form.url;
    let caption = form.caption;

    folderID = folderID ? folderID : undefined;
    url = url.replace(/\s+/g, "") ? url : undefined;
    caption = caption.replace(/\s+/g, "") ? caption : undefined;

    return (!folderID || !url) ? false : { folderID, url, caption };
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addNewLink();
  };

  const handleCancel = () => {
    setForm({ url: "", caption: "" });
    setShowNewLink(false);
  };

  useEffect(() => {
    getAllFolders();
  }, []);

  return (
    <div className="form-bg">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit} className="form">
          <div className="form-title">Add New Link</div>
          <select name="folderName" onChange={handleChange}>
            <option hidden>-- item --</option>
            {folderNames.map((folderName, index) => {
              return <option key={index}>{folderName}</option>;
            })}
          </select>
          <input
            name="url"
            onChange={handleChange}
            type="text"
            placeholder="URL"
            required
          />
          <textarea
            name="caption"
            onChange={handleChange}
            placeholder="Caption"
            rows="4"
          />
          <div className="form-btns">
            <button type="submit">Add</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>  
  );
};

export default NewLink;
