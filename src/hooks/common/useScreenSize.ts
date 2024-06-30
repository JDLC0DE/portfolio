import { useState, useEffect } from "react";

export const useScreenSize = () => {
  const isClient = typeof window === "object";
  const [width, setWidth] = useState(isClient ? window.innerWidth : 0);
  const [height, setHeight] = useState(isClient ? window.innerHeight : 0);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { width, height };
};
