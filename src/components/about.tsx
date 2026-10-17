"use client";

import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-mist py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
          <Reveal>
            <p className="text-sm font-medium tracking-wide text-teal-deep uppercase">
              {t.aboutEyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {t.aboutTitle}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t.aboutBody}
            </p>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="az-rtl-border space-y-8 border-l-2 border-teal pl-6">
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">
                  Zheer
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t.aboutZheerRole}
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">
                  Armand
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t.aboutArmandRole}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
