"use client";

import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";

const GAME_URL = "https://zheera4aka.netlify.app/";

export function ForFun() {
  const { t } = useLanguage();

  return (
    <section
      id="for-fun"
      className="border-b border-slate-line bg-white py-14 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
            <div className="max-w-xl">
              <p className="text-sm font-medium tracking-wide text-teal-deep uppercase">
                {t.gameEyebrow}
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {t.gameBody}
              </p>
            </div>
            <a
              href={GAME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="az-cta inline-flex h-11 shrink-0 items-center justify-center self-start rounded-md border border-ink/15 bg-ink px-6 text-sm font-semibold text-white transition-colors hover:bg-teal-deep hover:border-teal-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 sm:self-auto"
            >
              {t.gameCta}
              <span aria-hidden className="ms-2 text-base leading-none">
                ↗
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
