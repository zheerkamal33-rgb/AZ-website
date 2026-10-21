"use client";

import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";

export function Capabilities() {
  const { t } = useLanguage();

  const items = [
    { title: t.capsWebTitle, body: t.capsWebBody },
    { title: t.capsAppsTitle, body: t.capsAppsBody },
    { title: t.capsSystemsTitle, body: t.capsSystemsBody },
  ];

  return (
    <section className="az-light az-cv border-b border-slate-line bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-medium tracking-wide text-teal-deep uppercase">
            {t.capsEyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t.capsTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.capsIntro}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-12 border-t border-slate-line pt-12 sm:grid-cols-3 sm:gap-10">
          {items.map((item, i) => (
            <Reveal key={item.title} delayMs={i * 90}>
              <h3 className="font-display text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
