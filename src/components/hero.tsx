export function Hero() {
  return (
    <section
      id="home"
      className="az-hero-wash relative flex min-h-[100svh] items-end overflow-hidden text-white"
    >
      <div
        className="az-grid pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-20 pt-32 sm:px-8 sm:pb-28">
        <p className="az-hero-enter font-display text-4xl font-semibold tracking-tight text-teal sm:text-5xl md:text-6xl lg:text-7xl">
          Automated Zone
        </p>
        <h1 className="az-hero-enter az-hero-enter-delay-1 mt-6 max-w-3xl font-display text-2xl font-medium leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
          Software that looks sharp and works hard.
        </h1>
        <p className="az-hero-enter az-hero-enter-delay-2 mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
          We design and build websites, applications, and systems for anyone,
          anywhere — product-minded engineering for teams who need to ship.
        </p>
        <div className="az-hero-enter az-hero-enter-delay-3 mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="az-cta inline-flex h-11 items-center justify-center rounded-md bg-teal px-6 text-sm font-semibold text-ink hover:bg-teal-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            Start a project
          </a>
          <a
            href="#work"
            className="az-cta inline-flex h-11 items-center justify-center rounded-md border border-white/25 px-6 text-sm font-medium text-white/90 hover:border-teal hover:text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            See what we build
          </a>
        </div>
      </div>
    </section>
  );
}
