export default function Hero() {
  return (
    <section className="flex min-h-screen bg-bg pt-20">
      {/* Left Content */}
      <div className="flex flex-col justify-center px-section py-section-y w-[65%]">
        <p className="font-(family-name:--font-bebas-neue) text-green tracking-[1.0em] text-h3 uppercase mb-4">
          Hamlet Design
        </p>
        <h1 className="font-(family-name:--font-bebas-neue) text-heading text-display uppercase">
          Designed With Care
        </h1>
        <h1 className="font-(family-name:--font-bebas-neue) text-accent text-display uppercase mb-8">
          Built For You
        </h1>
        <p className="text-text text-body leading-relaxed mb-10">
          I design and build websites that are thoughtful, fast, and made for
          real people. From concept to code — I handle it all.
        </p>
        <div className="flex gap-4">
          <a
            href="#work"
            className="bg-accent text-white px-8 py-4 hover:opacity-90 transition-opacity rounded-sm"
          >
            View my Work
          </a>
          <a
            href="#about"
            className="border-2 border-heading text-heading px-8 py-4 hover:bg-heading hover:text-white transition-colors rounded-sm"
          >
            About Me
          </a>
        </div>
      </div>

      {/* Right Image Panel */}
      <div className="w-[35%] bg-panel mt-4 mb-0 mr-0" />
    </section>
  );
}
