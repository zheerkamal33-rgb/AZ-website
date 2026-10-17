"use client";

import { useLanguage } from "@/components/language-provider";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="az-cv border-t border-white/10 bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-lg font-semibold">{t.brand}</p>
          <p className="mt-2 max-w-sm text-sm text-white/55">{t.footerBlurb}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm sm:items-end" dir="ltr">
          <a
            href="tel:+17741197770"
            className="text-white/70 transition-colors hover:text-teal"
          >
            Zheer — 774-119-7770
          </a>
          <a
            href="tel:+17708912007"
            className="text-white/70 transition-colors hover:text-teal"
          >
            Armand — 770-891-2007
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-4 text-xs text-white/40 sm:px-8">
          {t.footerCopy}
        </p>
      </div>
    </footer>
  );
}
