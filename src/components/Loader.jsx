"use client";

import React, { useEffect } from "react";

function Loader() {
  // Fuction to stop scrolling while loader is active
  const stopScrolling = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScrolling = () => {
    document.body.style.overflow = "";
  };

  useEffect(() => {
    stopScrolling();

    return () => {
      enableScrolling();
    };
  }, []);
  return (
    <div
      className="bg-background w-full h-full fixed top-0 z-50 none"
      //   style={{
      //     display: "none",
      //   }}
    ></div>
  );
}

export default Loader;
