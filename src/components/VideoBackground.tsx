"use client";

import React, { useState } from "react";
import Vimeo from "@u-wave/react-vimeo";
import Image from "next/image";

function VideoBackground() {
  const [loaded, setLoaded] = useState<boolean>(false);
  return (
    <>
      <Vimeo
        video="1056505834"
        autoplay
        muted
        loop
        background={true}
        responsive={true}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        onPlaying={() => {
          setLoaded(true);
          console.log("Loaded ");
        }}
      />
    </>
  );
}

export default VideoBackground;
