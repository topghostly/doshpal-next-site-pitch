import Image from "next/image";
import { NavMenu } from "./navigation-menu";
import { Button } from "../ui/button";
import { ModeToggle } from "../theme/mode-toggler";

export default function Navbar() {
  return (
    <nav className="py-[8px] px-[15px] bg-glassMorphNavBackground backdrop-blur-md w-max rounded-xl mx-auto fixed top-4 left-1/2 transform -translate-x-1/2 z-40 dark:border-[1px]">
      <div className="flex justify-center items-center gap-3">
        <div className="">
          <Image
            src={"/images/logo.png"}
            alt="doshpal logo"
            width={25}
            height={25}
          />
        </div>
        <div className="font-medium">
          <NavMenu />
        </div>
        <div className="flex gap-2 items-center">
          <Button>Book a call</Button>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
