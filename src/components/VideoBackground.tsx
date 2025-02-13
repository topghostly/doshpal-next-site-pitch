"use client";

import React, { useState } from "react";
import Image from "next/image";

function VideoBackground() {
  const [loaded, setLoaded] = useState<boolean>(false);
  return (
    <>
      <video
        playsInline
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        onLoadedData={() => {
          setLoaded(true);
        }}
      >
        <source src="/video/video.webm" type="video/webm" />
      </video>
      {!loaded && (
        <Image
          src="/images/thumb.jpg"
          alt="background logo image"
          layout="fill"
          objectFit="cover"
          priority
          style={{
            opacity: 0,
          }}
        />
      )}
    </>
  );
}

export default VideoBackground;
