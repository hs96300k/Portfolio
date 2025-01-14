import React, { useEffect, useState } from "react";
import "./Loader.css";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust this timeout based on how long you want the loader to appear
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader-container ${!isLoading ? "fade-out" : ""}`}>
      {isLoading && (
        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      )}
    </div>
  );
};

export default Loader;
