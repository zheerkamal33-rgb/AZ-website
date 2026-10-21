"use client";

import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";

const GAME_URL = "https://zheera4aka.netlify.app/";

export function ForFun() {
  const { t } = useLanguage();

  return (
    <section
      id="for-fun"
      className="az-light az-cv relative overflow-hidden border-y border-slate-line bg-card py-24 sm:py-32"
    >
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="text-sm font-medium tracking-wide text-teal-deep uppercase">
              {t.gameEyebrow}
            </p>
            <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {t.gameTitle}
            </h2>
            <p
              lang="en"
              className="az-latin mt-4 font-display text-lg font-medium text-foreground/80 sm:text-xl"
            >
              {t.gameProjectName}
            </p>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t.gameBody}
            </p>
            <a
              href={GAME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="az-cta mt-8 inline-flex h-11 items-center justify-center rounded-md bg-ink px-6 text-sm font-semibold text-white transition-colors hover:bg-teal-deep hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
            >
              {t.gameCta}
              <span aria-hidden className="ms-2 text-base leading-none">
                ↗
              </span>
            </a>
          </Reveal>

          <Reveal delayMs={100}>
            <div className="az-stage relative mx-auto min-h-[18rem] w-full max-w-xl sm:min-h-[22rem]">
              <div
                className="pointer-events-none absolute -inset-3 rounded-2xl bg-[radial-gradient(ellipse_at_50%_70%,rgba(231,189,98,0.1),transparent_65%)]"
                aria-hidden
              />

              {/* Theme stack — red & purple peek behind */}
              <figure className="az-float-slow absolute left-[2%] top-[8%] z-10 w-[58%] -rotate-[8deg] opacity-95 sm:w-[52%]">
                <div className="overflow-hidden rounded-lg border border-slate-line bg-card p-1 shadow-[0_20px_50px_-28px_rgba(11,20,32,0.5)] sm:p-1.5">
                  <div className="relative aspect-[1180/900] overflow-hidden rounded-md bg-ink/5">
                    <Image
                      src="/work/game/preview-red.png"
                      alt="Pattern Memory Game — red theme"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 50vw, 280px"
                      quality={88}
                    />
                  </div>
                </div>
              </figure>

              <figure className="az-float-slow absolute right-[0%] top-[4%] z-10 w-[58%] rotate-[9deg] opacity-95 sm:w-[52%]">
                <div className="overflow-hidden rounded-lg border border-slate-line bg-card p-1 shadow-[0_20px_50px_-28px_rgba(11,20,32,0.5)] sm:p-1.5">
                  <div className="relative aspect-[1229/896] overflow-hidden rounded-md bg-ink/5">
                    <Image
                      src="/work/game/preview-purple.png"
                      alt="Pattern Memory Game — purple theme"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 50vw, 280px"
                      quality={88}
                    />
                  </div>
                </div>
              </figure>

              {/* Primary — light theme */}
              <figure className="az-float relative z-20 mx-auto mt-[18%] w-[78%] max-w-md sm:mt-[16%] sm:w-[72%]">
                <div className="overflow-hidden rounded-lg border border-slate-line bg-card p-1.5 shadow-[0_28px_60px_-32px_rgba(11,20,32,0.45)] sm:p-2">
                  <div className="relative aspect-[1180/900] overflow-hidden rounded-md bg-ink/5">
                    <Image
                      src="/work/game/preview-light.png"
                      alt="Pattern Memory Game — light theme"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 80vw, 420px"
                      quality={92}
                      priority
                    />
                  </div>
                </div>
              </figure>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
