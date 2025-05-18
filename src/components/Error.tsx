import React from "react";
import Image from "next/image";
import { Frown } from "lucide-react";
import Glowy from "./Glowy";

function Error() {
  return (
    <main className=" relative w-full h-[100vh] max-h-[100vh] overflow-hidden flex justify-center items-center flex-col gap-10">
      <div className="pb-5 flex gap-2 items-center">
        <Image
          src={"/images/logo.png"}
          width={25}
          height={25}
          alt="Payverge logo image"
        />
        <p className=" font-semibold">
          Dosh<span className="font-medium">Pal</span>
        </p>
      </div>
      <div className="opacity-50">
        <Glowy size={700} animate={true} />
      </div>
      <div className="flex flex-col justify-center items-center gap-10">
        <Frown size={25} />
        <div className="flex flex-col justify-center items-center gap-2">
          <h2 className="text-3xl text-center font-semibold">
            Ooups, yeah this site isn&apos;t finished yet{" "}
          </h2>
          <p className="text-center">
            Try switching to a laptop or desktop and it might just work.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Error;
