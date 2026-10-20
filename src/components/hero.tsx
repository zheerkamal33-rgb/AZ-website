"use client";

import { useLanguage } from "@/components/language-provider";
import { LatinText } from "@/components/latin-text";
import { BrandMark } from "@/components/brand-mark";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="az-hero-wash relative z-0 flex min-h-[100svh] items-end overflow-hidden text-white"
    >
      <div
        className="az-grid pointer-events-none absolute inset-0 z-0 opacity-40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80"
        aria-hidden
      />

      <div className="relative z-[1] mx-auto w-full max-w-6xl px-5 pb-20 pt-32 sm:px-8 sm:pb-28">
        <div className="az-hero-enter" aria-label={t.brand}>
          <BrandMark
            width={460}
            className="w-64 sm:w-80 md:w-[420px] lg:w-[460px]"
          />
        </div>
        <h1 className="az-hero-enter az-hero-enter-delay-1 mt-6 max-w-3xl font-display text-2xl font-medium leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
          {t.heroHeadline}
        </h1>
        <p className="az-hero-enter az-hero-enter-delay-2 mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
          <LatinText text={t.heroBody} />
        </p>
        <div className="az-hero-enter az-hero-enter-delay-3 mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="az-cta inline-flex h-11 items-center justify-center rounded-md bg-teal px-6 text-sm font-semibold text-ink hover:bg-teal-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            {t.heroCtaWork}
          </a>
          <a
            href="#contact"
            className="az-cta inline-flex h-11 items-center justify-center rounded-md border border-white/25 px-6 text-sm font-medium text-white/90 hover:border-teal hover:text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            {t.heroCtaContact}
          </a>
        </div>
      </div>
    </section>
  );
}
