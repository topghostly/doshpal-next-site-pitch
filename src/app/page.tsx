import Header from "@/components/header/header";
import LogoSlider from "@/components/LogoSlider";
import Image from "next/image";

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
          <p className="bg-accent w-fit py-2 px-4 rounded-lg mx-auto">
            Our products
          </p>
          <div className="w-full">
            <div className="grid grid-cols-2 gap-4">
              <div className=" bg-red-400 h-60 flex justify-center items-center rounded-3xl">
                <div className="max-w-[350px] flex flex-col justify-center items-center gap-6">
                  <h1 className="text-5xl font-medium">DoshFlex</h1>
                  <p className="text-sm text-center">
                    Corporate financing and personalized loan solutions tailored
                    to your needs.
                  </p>
                </div>
              </div>
              <div className="bg-red-400 h-60 flex justify-center items-center rounded-3xl">
                <div className="max-w-[350px] flex flex-col justify-center items-center gap-6">
                  <h1 className="text-5xl font-medium">DoshFlex</h1>
                  <p className="text-sm text-center text-primary">
                    Small and Medium Enterprise (SME's) Development Loans
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS SECTION */}
      </main>
    </div>
  );
}
