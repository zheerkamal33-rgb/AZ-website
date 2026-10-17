"use client";

import { BrandMark } from "@/components/brand-mark";
import { useLanguage } from "@/components/language-provider";
import { LatinText } from "@/components/latin-text";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="az-cv border-t border-slate-line bg-white text-ink">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <BrandMark variant="ink" size={28} className="h-7 w-7 opacity-90" />
            <p
              lang="en"
              className="az-latin font-display text-lg font-semibold text-ink"
            >
              {t.brand}
            </p>
          </div>
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
            href="mailto:zheerkamal33@gmail.com"
            className="az-latin text-ink/70 transition-colors hover:text-teal-deep break-all sm:break-normal"
          >
            Zheer — zheerkamal33@gmail.com
          </a>
          <a
            href="mailto:armandsoran1@gmail.com"
            className="az-latin text-ink/70 transition-colors hover:text-teal-deep break-all sm:break-normal"
          >
            Armand — armandsoran1@gmail.com
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
