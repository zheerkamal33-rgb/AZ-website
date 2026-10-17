"use client";

import { useLanguage } from "@/components/language-provider";
import { LatinText } from "@/components/latin-text";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="az-cv border-t border-slate-line bg-white text-ink">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p
            lang="en"
            className="az-latin font-display text-lg font-semibold text-ink"
          >
            {t.brand}
          </p>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            <LatinText text={t.footerBlurb} />
          </p>
        </div>
        <div
          className="az-latin flex flex-col gap-2 text-sm sm:items-end"
          dir="ltr"
          lang="en"
        >
          <a
            href="tel:+17741197770"
            className="az-latin text-ink/70 transition-colors hover:text-teal-deep"
          >
            Zheer — 774-119-7770
          </a>
          <a
            href="tel:+17708912007"
            className="az-latin text-ink/70 transition-colors hover:text-teal-deep"
          >
            Armand — 770-891-2007
          </a>
        </div>
      </div>
      <div className="border-t border-slate-line">
        <p className="mx-auto max-w-6xl px-5 py-4 text-xs text-muted-foreground sm:px-8">
          <LatinText text={t.footerCopy} />
        </p>
      </div>
    </footer>
  );
}
