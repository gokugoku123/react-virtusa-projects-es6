import React, { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationchange = () => {
      // alert("location change");
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationchange);
    return () => {
      window.removeEventListener("popstate", onLocationchange);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;