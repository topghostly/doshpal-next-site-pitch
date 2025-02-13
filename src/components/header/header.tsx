import { CirclePlay, Signature, Soup } from "lucide-react";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="px-4">
      <div className="w-full h-[calc(100vh-100px)] bg-black rounded-3xl flex justify-center items-center flex-col">
        <div className="text-white text-7xl flex items-center flex-col gap-4 font-medium text-center sticky top-50 bottom-0">
          <h1>
            Join the <span className="font-instrumental">Journey</span>
          </h1>
          <h1>to Financial Growth.</h1>
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
    </header>
  );
}
