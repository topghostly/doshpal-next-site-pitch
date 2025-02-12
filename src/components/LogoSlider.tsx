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
    xPercent1 -= 0.043;
    xPercent2 -= 0.1;
    requestAnimationFrame(slideAnimation);
  };
  useEffect(() => {
    requestAnimationFrame(slideAnimation);
  });

  return (
    <div className="relative overflow-hidden flex">
      <div className="flex gap-[120px] top-0 first-row ">
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
      <div className="flex gap-[120px] top-0 absolute left-[100%] second-row">
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
    </div>
  );
}

export default LogoSlider;
