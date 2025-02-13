"use client";

import { CirclePlay, Signature, Soup } from "lucide-react";
import { Button } from "../ui/button";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import VideoBackground from "../VideoBackground";

export default function Header() {
  useLayoutEffect(() => {
    const text = document.querySelectorAll(".header--text");

    gsap.set(text, {
      opacity: 0,
      filter: "blur(10px)",
    });

    const tl = gsap.timeline([]);

    tl.to(text, {
      opacity: 1,
      stagger: 0.1,
      delay: 9.7,
    }).to(
      text,
      {
        filter: "blur(0px)",
        stagger: 0.1,
      },
      "-=0.4"
    );
  }, []);
  return (
    <header className="px-4">
      <div className=" relative w-full h-[calc(100vh-100px)] bg-black rounded-3xl flex justify-center items-center flex-col overflow-hidden ">
        <VideoBackground />
        <div className="text-white text-7xl flex items-center flex-col gap-4 font-medium text-center sticky top-50 bottom-0">
          <h1 className="header--text">
            Join the <span className="font-instrumental">Journey</span>
          </h1>
          <h1 className="header--text">to Financial Growth.</h1>
        </div>
        <div className="absolute bottom-10 flex gap-3 hover:cursor-pointer">
          <CirclePlay /> Play video
        </div>
      </div>

      {/* DESCRIPTION AND CTAs */}
      <div className="max-w-6xl mx-auto p-4 pt-10 flex flex-col gap-5">
        <p className="max-w-4xl mx-auto text-xl text-center font-medium text-primary">
          At Doshpal, we take a personalized approach to lending working closely
          with you to understand your needs and goals. Whether you're looking to
          scale your business or achieve personal growth, we're here to support
          you every step of the way.
        </p>
        <div className="flex justify-center items-center gap-3">
          <Button className="p-6">
            <Soup />
            Get started
          </Button>
          <Button variant={"secondary"} className="p-6">
            <Signature />
            Contact sales
          </Button>
        </div>
      </div>
      {/* DESCRIPTION AND CTAs */}
      {/* <div style="padding:56.25% 0 0 0;position:relative;">
        <iframe
          src="https://player.vimeo.com/video/1056505834?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          style="position:absolute;top:0;left:0;width:100%;height:100%;"
          title="Untitled"
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script> */}
    </header>
  );
}
