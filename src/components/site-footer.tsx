"use client";

import { BrandMark } from "@/components/brand-mark";
import { useLanguage } from "@/components/language-provider";
import { LatinText } from "@/components/latin-text";
import { SocialLinks } from "@/components/social-links";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="az-cv border-t border-slate-line bg-white text-ink">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <div className="inline-flex items-center rounded-lg bg-ink px-3 py-2">
            <BrandMark className="w-32" />
            <span className="sr-only">{t.brand}</span>
          </div>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            <LatinText text={t.footerBlurb} />
          </p>
          <div className="mt-5">
            <SocialLinks />
          </div>
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
            href="mailto:armandsoran820@gmail.com"
            className="az-latin text-ink/70 transition-colors hover:text-teal-deep break-all sm:break-normal"
          >
            Armand — armandsoran820@gmail.com
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
