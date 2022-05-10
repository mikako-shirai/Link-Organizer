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
    <a href={link}>
      <div className="paths grid-link-paths">
        {paths.length > 0 && paths.map((path, index) =>
          <div key={index}>{`${path}${index === paths.length-1 ? "" : "/\n"}`}</div>
        )}
      </div>
    </a>
  );
};

export default Paths;
