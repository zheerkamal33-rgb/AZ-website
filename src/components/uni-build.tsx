"use client";

import Image from "next/image";
import { Fingerprint, Check, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";

export function UniBuild() {
  const { t } = useLanguage();

  return (
    <section
      id="uni"
      className="az-cv relative overflow-hidden border-b border-slate-line bg-mist py-24 sm:py-32"
    >
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-medium tracking-wide text-teal-deep uppercase">
            {t.uniEyebrow}
          </p>
          <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {t.uniTitle}
          </h2>
        </Reveal>

        <Reveal delayMs={100}>
          <article className="relative isolate mt-12 grid overflow-hidden rounded-2xl border border-slate-line bg-white p-6 shadow-sm sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
            <figure
              className="az-float-slow pointer-events-none absolute -right-16 -top-16 z-0 w-48 rotate-[7deg] overflow-hidden rounded-2xl border border-violet-300/30 bg-[#0a1326] opacity-20 shadow-[0_30px_70px_-22px_rgba(91,33,182,0.75)] sm:-right-10 sm:-top-24 sm:w-64 sm:opacity-35 lg:-right-12 lg:-top-28 lg:w-72 lg:opacity-75"
              aria-hidden="true"
            >
              <Image
                src="/work/attendance/attendfp-ai.png"
                alt=""
                width={992}
                height={1586}
                className="h-auto w-full"
                sizes="(max-width: 640px) 192px, (max-width: 1024px) 256px, 288px"
                quality={90}
              />
            </figure>
            <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-white via-white/95 to-white/25 lg:via-white/90 lg:to-transparent" aria-hidden="true" />

            <div className="relative z-10 lg:pr-4">
              <Fingerprint className="h-10 w-10 text-teal-deep" aria-hidden="true" />
              <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {t.attendanceName}
              </h3>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {t.attendanceBody}
              </p>
              <div className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                {["R307", "Pico 2 W", "Python", "Firestore", "Express", "React", "Gemini"].map((tech) => (
                  <span key={tech} className="rounded-full border border-slate-line px-3 py-1 text-xs font-medium text-ink/80" dir="ltr">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative z-10 mt-8 rounded-xl border border-slate-line bg-mist/95 p-6 shadow-sm backdrop-blur-sm lg:mt-0 lg:mr-16">
              <ul className="space-y-4">
                {t.attendanceFeatures.map((feature, index) => {
                  const Icon = index === 3 ? Sparkles : Check;
                  return (
                    <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-ink/85">
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-teal-deep" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-6 border-t border-slate-line pt-5 text-sm leading-relaxed text-muted-foreground">
                {t.attendancePolicy}
              </p>
            </div>
          </article>
        </Reveal>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              {t.uniProjectName}
            </h3>
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
