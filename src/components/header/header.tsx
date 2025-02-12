export default function Header() {
  return (
    <header className="">
      <div className="w-full h-[calc(100vh-100px)] bg-black rounded-3xl flex justify-center items-center">
        <div className="text-white text-7xl flex items-center flex-col gap-4 font-medium text-center sticky top-50 bottom-0">
          <h1>
            Join the <span className="font-instrumental">Journey</span>
          </h1>
          <h1>to Financial Growth.</h1>
        </div>
      </div>

      {/* DESCRIPTION AND CTA */}
      <div className="max-w-6xl mx-auto p-4 pt-10">
        <p className="max-w-4xl mx-auto text-xl text-center font-medium text-primary">
          At Doshpal, we take a personalized approach to lending working closely
          with you to understand your needs and goals. Whether you're looking to
          scale your business or achieve personal growth, we're here to support
          you every step of the way.
        </p>
      </div>
    </header>
  );
}
