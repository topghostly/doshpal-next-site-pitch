"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";

function LogoSlider() {
  // ANIMATION VARIALBLES
  let xPercent1 = 0;
  let xPercent2 = 35;
  // ANIMATION LOGIC
  const slideAnimation = () => {
    if (xPercent1 <= -114.99) {
      xPercent1 = 0;
      xPercent2 = 30;
    }
    gsap.set(".first-row", { xPercent: xPercent1 });
    gsap.set(".second-row", { xPercent: xPercent2 });
    xPercent1 -= 0.06;
    xPercent2 -= 0.1;
    requestAnimationFrame(slideAnimation);
  };
  useEffect(() => {
    requestAnimationFrame(slideAnimation);
  });

  return (
    <div className="relative overflow-hidden flex h-10 justify-between max-w-[300px] sm:max-w-[500px] md:max-w-full">
      <div className="w-[100px] h-full bg-gradient-to-r from-white dark:from-background to-transparent z-10" />
      <div className="flex gap-[120px] top-0 first-row dark:invert">
        <Image
          src={"/images/image1.webp"}
          alt="company logo"
          width={150}
          height={100}
        />
        <Image
          src={"/images/image2.webp"}
          alt="company logo"
          width={150}
          height={100}
        />
        <Image
          src={"/images/image3.webp"}
          alt="company logo"
          width={150}
          height={100}
        />
        <Image
          src={"/images/image4.webp"}
          alt="company logo"
          width={150}
          height={100}
        />
        <Image
          src={"/images/image5.webp"}
          alt="company logo"
          width={150}
          height={100}
        />
      </div>
      <div className="flex gap-[120px] top-0 absolute left-[100%] dark:invert second-row">
        <Image
          src={"/images/image1.webp"}
          alt="company logo"
          width={150}
          height={100}
        />
        <Image
          src={"/images/image2.webp"}
          alt="company logo"
          width={150}
          height={100}
        />
        <Image
          src={"/images/image3.webp"}
          alt="company logo"
          width={150}
          height={100}
        />
        <Image
          src={"/images/image4.webp"}
          alt="company logo"
          width={150}
          height={100}
        />
        <Image
          src={"/images/image5.webp"}
          alt="company logo"
          width={150}
          height={100}
        />
      </div>
      <div className="w-[100px] h-full bg-gradient-to-l from-white dark:from-background to-transparent z-10" />
    </div>
  );
}

export default LogoSlider;
