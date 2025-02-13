"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

function Loader() {
  // Fuction to stop scrolling while loader is active
  const stopScrolling = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScrolling = () => {
    document.body.style.overflow = "";
  };

  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const svgHolderRef = useRef(null);

  // SVG ANIMATION
  useLayoutEffect(() => {
    if (svgRef.current) {
      const path = svgRef.current.querySelector("path");
      const pathLength = path.getTotalLength();

      const tl = gsap.timeline({});

      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      tl.to(path, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.inOut",
        delay: 2,
      })
        .to(svgHolderRef.current, {
          scale: 0,
          delay: 1.5,
          duration: 0.3,
        })
        .to(containerRef.current, {
          "--mask-size": "2%",
          duration: 0.4,
          ease: "power2.inOut",
        })
        .to(containerRef.current, {
          "--mask-size": "10%",
          duration: 0.5,
          ease: "power2.inOut",
          delay: 1,
        })
        .to(containerRef.current, {
          "--mask-size": "100%",
          duration: 0.7,
          ease: "power2.inOut",
          delay: 1.5,

          onComplete: () => {
            enableScrolling();
            containerRef.current.style.display = "none";
          },
        });
    }
  }, []);

  useEffect(() => {
    stopScrolling();
    return () => {
      enableScrolling();
    };
  }, []);
  return (
    <div
      className="bg-background w-full h-full fixed top-0 z-50 none overflow-hidden flex justify-center items-center"
      style={{
        "--mask-size": "0%",
        maskImage:
          "radial-gradient(circle, transparent var(--mask-size), black 0%)",
        WebkitMaskImage:
          "radial-gradient(circle, transparent var(--mask-size), black 0%)",
      }}
      ref={containerRef}
    >
      <div
        className="flex justify-center items-center w-10 h-10"
        ref={svgHolderRef}
      >
        <svg ref={svgRef} viewBox="0 0 210.14 210.14" className="w-64 h-64">
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="106.28"
              y1="190.95"
              x2="103.25"
              y2="17.75"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#a167ab" />
              <stop offset=".2" stopColor="#a569a8" />
              <stop offset=".43" stopColor="#b370a1" />
              <stop offset=".67" stopColor="#c97b96" />
              <stop offset=".91" stopColor="#e88b86" />
              <stop offset="1" stopColor="#f6927f" />
            </linearGradient>
          </defs>
          <path
            d="m83.77,26.59h47.03c10.63,0,21.14,2.72,30.24,8.23,4.34,2.63,7.89,5.54,10.38,8.34,7.89,8.87,11.24,20.91,11.24,32.79,0,0,0,25.69,0,25.69,0,14.7-6.27,28.86-17.6,38.22-7.56,6.24-16.86,10.15-27.08,10.15h-18.86c-4.48,0-8.89,1.06-12.88,3.09l-56.32,28.72c-11.81,6.02-25.21-4.7-21.92-17.54l30.12-117.77c3-11.73,13.56-19.93,25.67-19.93Z"
            fill="none"
            stroke="url(#linear-gradient)"
            strokeMiterlimit="10"
            strokeWidth="17"
          />
        </svg>
      </div>
    </div>
  );
}

export default Loader;
