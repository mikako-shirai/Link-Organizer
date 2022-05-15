import React, { useState, useContext } from "react";
import axios from "axios";

import { UpdateData } from "../../App.jsx";

const NewFolder = ({ setShowNewFolder }) => {
  const { setUpdateData } = useContext(UpdateData);
  const [form, setForm] = useState({ folderName: "", description: "" });

  const createNewFolder = async () => {
    const folder = validateInput();
    if (!folder) return;

    await axios.post("/folders", folder);
    setUpdateData(true);
    setShowNewFolder(false);
  };

  const validateInput = () => {
    let folderName = form.folderName;
    let description = form.description;

    folderName = folderName.replace(/\s+/g, "") ? folderName : undefined;
    description = description.replace(/\s+/g, "") ? description : undefined;

    return !folderName ? false : { folderName, description };
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createNewFolder();
  };

  const handleCancel = () => {
    setForm({ folderName: "", description: "" });
    setShowNewFolder(false);
  };

  return (
    <div className="form-bg">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit} className="form">
          <div className="form-title">Create Note</div>
          <input
            name="folderName"
            onChange={handleChange}
            type="text"
            placeholder="Folder Name"
            required
          />
          <textarea
            name="description"
            onChange={handleChange}
            placeholder="Description"
            rows="4"
          />
          <div className="form-btns">
            <button type="submit">Create</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>  
  );
};

export default NewFolder;
