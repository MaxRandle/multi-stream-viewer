import { useState, useLayoutEffect } from "react";

type ViewportSize = {
  width: number;
  height: number;
};

export const useViewportSize = () => {
  const [size, setSize] = useState<ViewportSize | undefined>();

  useLayoutEffect(() => {
    if (window === null || typeof window === "undefined") return;

    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
};
