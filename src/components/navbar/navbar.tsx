import Image from "next/image";
import { NavMenu } from "./navigation-menu";
import { Button } from "../ui/button";
import { ModeToggle } from "../theme/mode-toggler";

export default function Navbar() {
  return (
    <div className="w-[100%] grid place-content-center z-40 fixed right-0 top-4 ">
      <nav className="py-[8px] px-[15px] bg-glassMorphNavBackground backdrop-blur-md w-fit rounded-xl mx-auto dark:border-[1px]">
        <div className="flex justify-center items-center gap-3">
          <div>
            <Image
              src={"/images/logo.png"}
              alt="Payverge logo"
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
    </div>
  );
}
