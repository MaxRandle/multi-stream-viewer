import { useState, useLayoutEffect } from "react";

type ViewportSize = {
  width: number;
  height: number;
};

export const useViewportSize = () => {
  const [size, setSize] = useState<ViewportSize>({
    width: window?.innerWidth,
    height: window?.innerHeight,
  });

  useLayoutEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
};
