"use client";

import { useLanguage } from "@/components/language-provider";
import { LatinText } from "@/components/latin-text";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="az-light az-cv border-t border-slate-line bg-card text-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div className="w-full sm:max-w-md">
          <p className="max-w-sm text-sm text-muted-foreground">
            <LatinText text={t.footerBlurb} />
          </p>
        </div>
        <div
          className="az-latin flex flex-col gap-2 text-sm sm:items-end"
          dir="ltr"
          lang="en"
        >
          <a
            href="mailto:rozhex.10@gmail.com"
            className="az-latin text-foreground/70 transition-colors hover:text-teal-deep break-all sm:break-normal"
          >
            rozhex.10@gmail.com
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
