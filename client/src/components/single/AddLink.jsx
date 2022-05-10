import React, { useState } from "react";
import axios from "axios";

const AddLink = ({ switchDisplay, setShowAddLink }) => {
  const [form, setForm] = useState({ url: "", folderID: "", caption: "" });

  const addNewLink = async () => {
    const link = validateInput();
    if (!link) return;

    await axios.post("/links", {
      ...link,
      folderID: switchDisplay.selectedFolder._id
    });
    setShowAddLink(false);
  };

  const validateInput = () => {
    let url = form.url;
    let caption = form.caption;

    url = url.replace(/\s+/g, "") ? url : undefined;
    caption = caption.replace(/\s+/g, "") ? caption : undefined;

    return !url ? false : { url, caption };
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
    setShowAddLink(false);
  };

  return (
    <div className="form-bg">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit} className="form">
          <div className="form-title">Add New Link</div>
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

export default AddLink;
