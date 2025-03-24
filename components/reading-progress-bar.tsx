"use client";

import { useEffect, useState } from "react";

export const ReadingProgressBar = () => {
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far the user has scrolled through the page
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const windowScrollTop = window.scrollY;

      if(windowScrollTop === 0){
        setReadingProgress(0);
        return;
      }

      if(windowScrollTop === 100){
        setReadingProgress(100);
        return;
      }

      setReadingProgress(windowScrollTop/totalHeight * 100);

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <div
        className="fixed left-0 top-0 h-1 bg-primary z-50"
        style={{
            width: `${readingProgress}%`
        }}
    />
  )

};
