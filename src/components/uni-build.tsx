"use client";

import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";

export function UniBuild() {
  const { t } = useLanguage();

  return (
    <section
      id="uni"
      className="az-cv relative overflow-hidden border-y border-slate-line bg-mist py-24 sm:py-32"
    >
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="text-sm font-medium tracking-wide text-teal-deep uppercase">
              {t.uniEyebrow}
            </p>
            <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {t.uniTitle}
            </h2>
            <p className="mt-4 font-display text-lg font-medium text-ink/80 sm:text-xl">
              {t.uniProjectName}
            </p>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t.uniBody}
            </p>
          </Reveal>

          <Reveal delayMs={100}>
            <div className="az-stage relative mx-auto w-full max-w-xl pb-2">
              <div
                className="pointer-events-none absolute -inset-3 rounded-2xl bg-[radial-gradient(ellipse_at_50%_70%,rgba(14,168,148,0.12),transparent_65%)]"
                aria-hidden
              />
              <figure className="az-float relative z-20 overflow-hidden rounded-lg border border-slate-line bg-white p-1.5 shadow-[0_28px_60px_-32px_rgba(11,20,32,0.45)] sm:p-2">
                <div className="relative aspect-[910/698] overflow-hidden rounded-md bg-ink/5">
                  <Image
                    src="/work/smart-home/smart-home-gas-detection.jpg"
                    alt="Smart Home and Gas Detection System — university project model"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 560px"
                    quality={92}
                  />
                </div>
              </figure>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
