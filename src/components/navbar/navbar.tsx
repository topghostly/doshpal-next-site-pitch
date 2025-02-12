import Image from "next/image";
import { NavMenu } from "./navigation-menu";

export default function Navbar() {
  return (
    <nav className="py-[8px] px-[15px] bg-glassBackground backdrop-blur-md w-max rounded-lg mx-auto fixed top-4 left-1/2 transform -translate-x-1/2">
      <div className="flex justify-center items-center">
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
      </div>
    </nav>
  );
}
