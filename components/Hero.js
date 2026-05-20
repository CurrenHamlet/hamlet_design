export default function Hero() {
  return (
    <section className="flex min-h-screen bg-[#F5F1E8]">
      {/* Left Content */}
      <div className="flex flex-col justify-center px-16 py-20 w-[58%]">
        <p className="text-[#2D5A27] tracking-[0.3em] text-sm font-semibold uppercase mb-4">
          Hamlet Design
        </p>
        <h1 className="font-(family-name:--font-bebas-neue) text-[#1C3320] text-9xl uppercase leading-none">
          Designed With Care
        </h1>
        <h1 className="font-(family-name:--font-bebas-neue) text-[#E8461E] text-9xl uppercase leading-none mb-8">
          Built For You
        </h1>
        <p className="text-[#1C3320] text-lg leading-relaxed mb-10 max-w-md">
          I design and build websites that are thoughtful, fast, and made for
          real people. From concept to code — I handle it all.
        </p>
        <div className="flex gap-4">
          <a
            href="#work"
            className="bg-[#E8461E] text-white px-8 py-4 font-semibold hover:opacity-90 transition-opacity"
          >
            View my Work
          </a>
          <a
            href="#about"
            className="border-2 border-[#1C3320] text-[#1C3320] px-8 py-4 font-semibold hover:bg-[#1C3320] hover:text-white transition-colors"
          >
            About Me
          </a>
        </div>
      </div>

      {/* Right Image Panel */}
      <div className="w-[42%] bg-[#C8D4BE] mt-4 mb-0 mr-0" />
    </section>
  );
}
