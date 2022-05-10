import React, { useState, useEffect } from "react";

const Paths = ({ link }) => {
  const [paths, setPaths] = useState([]);

  const splitLink = () => {
    const trimmedUrl = link.split("://")[1];
    const pathAll = trimmedUrl.split("/");
    setPaths(pathAll);
  };

  useEffect(() => {
    splitLink();
  }, []);

  return (
    <div className="paths">
      {paths.length > 0 && paths.map((path, index) =>
        <div key={index}>{`${path}${index === paths.length-1 ? "" : "/\n"}`}</div>
      )}
    </div>
  );
};

export default Paths;
