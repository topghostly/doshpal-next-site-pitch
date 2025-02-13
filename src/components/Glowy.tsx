"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

type GlowyProp = {
  size: number;
  animate: boolean;
  newStyle?: React.CSSProperties;
};

const Glowy: React.FC<GlowyProp> = ({ size, animate, newStyle }) => {
  const containerRef = useRef(null);
  const holderRef = useRef(null);

  let INNER_DEGREE = 1;
  let OUTER_DEGREE = 1;

  /* ANIMATION LOGIC */
  useEffect(() => {
    gsap.set(containerRef.current, {
      background:
        "conic-gradient(from 0deg at 50% 50%, rgb(255, 217, 173) 0deg, rgb(19, 156, 229) 180deg, rgb(253, 134, 77) 360deg)",
      borderRadius: "50% 24% 36% 20%",
      opacity: 1,
      width: "80%",
      height: "80%",
      margin: "0px auto",
      filter: "blur(40px)",
    });
    gsap.set(holderRef.current, {
      background:
        "conic-gradient(from 0deg at 50% 50%, rgb(255, 0, 0) 0deg, rgb(255, 0, 26) 54.8916deg, rgb(0, 166, 255) 106.699deg, rgb(71, 151, 255) 162deg, rgb(0, 68, 255) 252deg, rgb(255, 128, 0) 306deg, rgb(255, 0, 0) 360deg)",
      borderRadius: "55% 42% 37% 20%",
      width: "100%",
      height: "100%",
      margin: "0px auto",
      filter: "blur(100px)",
    });

    if (animate) requestAnimationFrame(spinAnimationSmall);
  });

  const spinAnimationSmall = () => {
    gsap.set(containerRef.current, {
      transform: `translate(-50%, -50%) rotate(${INNER_DEGREE}deg) `,
    });
    gsap.set(holderRef.current, {
      transform: `translate(-50%, -50%) rotate(${OUTER_DEGREE}deg) `,
    });
    INNER_DEGREE += 0.1;
    OUTER_DEGREE += 0.2;

    requestAnimationFrame(spinAnimationSmall);
  };
  return (
    <div
      style={{
        ...newStyle,
        width: `${size}px`,
        height: `${size}px`,
        position: "absolute",
        margin: "0px auto",
        zIndex: -1,
      }}
    >
      <div
        ref={holderRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      ></div>
      <div
        ref={containerRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      ></div>
    </div>
  );
};

export default Glowy;
