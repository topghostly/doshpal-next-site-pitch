import Header from "@/components/header/header";
import LogoSlider from "@/components/LogoSlider";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-[65px]">
      <Header />
      <main className="max-w-6xl mx-auto p-4">
        {/* LOGO SLIDER */}
        <section className="flex flex-col gap-10 items-center">
          <p>You're in good hands</p>
          <LogoSlider />
        </section>
        {/* LOGO SLIDER */}
      </main>
    </div>
  );
}
