import React, { useState, useEffect } from "react";
import axios from "axios";

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

  useEffect(() => {
    getAllLinks();
  }, []);

  useEffect(() => {
    //
  }, [links]);

  return (
    <div>Links</div>
  );
};

export default Links;
