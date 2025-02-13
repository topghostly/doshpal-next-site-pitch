import { AccordionDemo } from "@/components/Accordian";
import Header from "@/components/header/header";
import LogoSlider from "@/components/LogoSlider";
import { Button } from "@/components/ui/button";
import { ArrowRight, Signature } from "lucide-react";

export default function Home() {
  return (
    <div className="mt-[65px] flex flex-col gap-16">
      <Header />
      <main className="max-w-6xl mx-auto p-4 flex flex-col gap-20">
        {/* LOGO SLIDER */}
        <section className="flex flex-col gap-12 items-center">
          <p className="text-primary font-medium">You're in good hands</p>
          <LogoSlider />
        </section>
        {/* LOGO SLIDER */}
        {/* PRODUCTS SECTION */}
        <section className="flex flex-col gap-12 items-center">
          <p className="bg-accent w-fit py-2 px-4 rounded-lg mx-auto dark:bg-background dark:border-[1px]">
            Our products
          </p>
          <div className="w-full grid grid-rows-2 gap-4">
            <div className="grid grid-cols-2 gap-4">
              <article className=" bg-glassBackgroundBody backdrop-blur-md h-60 flex justify-center items-center rounded-3xl dark:border-[1px]">
                <div className="max-w-[350px] flex flex-col justify-center items-center gap-6">
                  <h1 className="text-5xl font-medium">DoshFlex</h1>
                  <p className="text-sm text-center">
                    Corporate financing and personalized loan solutions tailored
                    to your needs.
                  </p>
                </div>
              </article>
              <article className="bg-glassBackgroundBody backdrop-blur-md h-60 flex justify-center items-center rounded-3xl dark:border-[1px]">
                <div className="max-w-[350px] flex flex-col justify-center items-center gap-6">
                  <h1 className="text-5xl font-medium">DoshLyft</h1>
                  <p className="text-sm text-center text-primary">
                    Small and Medium Enterprise (SME's) Development Loans
                  </p>
                </div>
              </article>
            </div>
            {/* LONG PRODUCT */}
            <article className="bg-glassBackgroundBody backdrop-blur-md h-60 flex justify-center items-center rounded-3xl dark:border-[1px]">
              <div className="max-w-[350px] flex flex-col justify-center items-center gap-6">
                <h1 className="text-5xl font-medium">DoshInvest</h1>
                <p className="text-sm text-center text-primary">
                  Get up to 24% return on investment with us
                </p>
              </div>
            </article>
          </div>
        </section>
        {/* PRODUCTS SECTION */}
        {/* MID ABOUT */}
        <section className="w-full flex justify-center flex-col gap-12 items-center">
          <div className="max-w-5xl flex justify-center items-center">
            <p className="text-center text-4xl font-medium">
              Doshpal offers loans with competitive rates, flexible terms, and
              quick access to cash—whether personal, business, payroll, or asset
              financing. Apply today and achieve your financial goals!
            </p>
          </div>
          <Button className="p-6">
            Book a 15-min call <ArrowRight />
          </Button>
        </section>
        {/* MID ABOUT */}
        {/* FREQUESTLY ASKED SHII */}
        <section className="w-full flex justify-center flex-col gap-12 items-center">
          <div className="w-[650px]">
            <AccordionDemo />
          </div>
        </section>
        {/* FREQUESTLY ASKED SHII */}
        {/* LAST CTA */}
        <section className="flex flex-col gap-12 items-center">
          <div className="bg-glassBackgroundBody backdrop-blur-md flex justify-center items-center rounded-3xl dark:border-[1px] py-20 px-34 flex-col gap-6">
            <div className=" flex flex-col justify-center items-center gap-8">
              <div className="text-7xl">
                <h1 className="font-medium">Ready to become</h1>
                <h1 className="font-medium">
                  Financially{" "}
                  <span className="font-instrumental">Fearless?</span>
                </h1>
              </div>
              <p className="text-lg text-center text-primary w-[75%]">
                If you're ready to unlock new financial opportunities and grow
                with flexible loan solutions, you're in the right place.
              </p>
            </div>
            <div>
              <Button className="p-6">
                <Signature />
                Book a call
              </Button>
            </div>
          </div>
        </section>
        {/* LAST CTA */}
        {/* FOOTER */}
        <footer className="bg-glassBackgroundBody backdrop-blur-md dark:border-t-[1px]">
          <div>
            {/* LEFT SIDE */}
            <div></div>
            {/* LEFT SIDE */}
            {/* RIGHT SIDE */}
            <div></div>
            {/* RIGHT SIDE */}
          </div>
        </footer>
        {/* FOOTER */}
      </main>
    </div>
  );
}
