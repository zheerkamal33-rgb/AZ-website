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
          <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t.uniTitle}
          </h2>
        </Reveal>

        <Reveal delayMs={100} className="relative isolate mt-28 sm:mt-40">
          <figure
            className="az-float-slow pointer-events-none absolute end-40 -top-16 z-0 w-40 rotate-[-6deg] overflow-hidden rounded-2xl border border-teal/30 bg-[#16130e] opacity-90 shadow-[0_30px_70px_-22px_rgba(183,138,53,0.75)] sm:end-64 sm:-top-24 sm:w-56 lg:end-72 lg:-top-28 lg:w-64"
            aria-hidden="true"
          >
            <Image
              src="/work/attendance/attendfp-insights.jpg"
              alt=""
              width={800}
              height={1280}
              className="h-auto w-full"
              sizes="(max-width: 640px) 160px, (max-width: 1024px) 224px, 256px"
              quality={90}
            />
          </figure>
          <figure
            className="az-float-slow pointer-events-none absolute end-2 -top-20 z-0 w-40 rotate-[7deg] overflow-hidden rounded-2xl border border-teal/30 bg-[#16130e] opacity-90 shadow-[0_30px_70px_-22px_rgba(183,138,53,0.75)] sm:end-4 sm:-top-28 sm:w-64 lg:end-8 lg:-top-32 lg:w-72"
            aria-hidden="true"
          >
            <Image
              src="/work/attendance/attendfp-ai.png"
              alt=""
              width={992}
              height={1586}
              className="h-auto w-full"
              sizes="(max-width: 640px) 160px, (max-width: 1024px) 256px, 288px"
              quality={90}
            />
          </figure>
          <article className="relative z-10 grid overflow-hidden rounded-2xl border border-slate-line bg-card p-6 shadow-sm sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
            <div className="relative z-10 lg:pe-4">
              <Fingerprint className="h-10 w-10 text-teal-deep" aria-hidden="true" />
              <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {t.attendanceName}
              </h3>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {t.attendanceBody}
              </p>
              <div className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                {["R307", "Pico 2 W", "Python", "Firestore", "Express", "React", "Gemini"].map((tech) => (
                  <span key={tech} className="rounded-full border border-slate-line px-3 py-1 text-xs font-medium text-foreground/80" dir="ltr">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative z-10 mt-8 rounded-xl border border-slate-line bg-mist/95 p-6 shadow-sm backdrop-blur-sm lg:mt-0 lg:me-16">
              <ul className="space-y-4">
                {t.attendanceFeatures.map((feature, index) => {
                  const Icon = index === 3 ? Sparkles : Check;
                  return (
                    <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85">
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
            <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {t.uniProjectName}
            </h3>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t.uniBody}
            </p>
          </Reveal>

          <Reveal delayMs={100}>
            <div className="az-stage relative mx-auto w-full max-w-xl pb-2">
              <div
                className="pointer-events-none absolute -inset-3 rounded-2xl bg-[radial-gradient(ellipse_at_50%_70%,rgba(231,189,98,0.12),transparent_65%)]"
                aria-hidden
              />
              <figure className="az-float relative z-20 overflow-hidden rounded-lg border border-slate-line bg-card p-1.5 shadow-[0_28px_60px_-32px_rgba(11,20,32,0.45)] sm:p-2">
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
