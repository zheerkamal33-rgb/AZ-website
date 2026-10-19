"use client";

import { useEffect, useState } from "react";
import { BrandMark } from "@/components/brand-mark";
import { useLanguage } from "@/components/language-provider";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#home", label: t.navHome },
    { href: "#work", label: t.navWork },
    { href: "#about", label: t.navAbout },
    { href: "#contact", label: t.navContact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      /* Keep chrome LTR so EN|KU + hamburger stay top-right even when page is RTL */
      dir="ltr"
      data-az-header
      className={cn(
        "pointer-events-auto fixed inset-x-0 top-0 z-[9999] isolate transition-colors duration-300",
        open && "az-menu-open",
        scrolled || open
          ? "border-b border-white/10 bg-ink/95 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav className="pointer-events-auto relative z-10 mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:px-8">
        <a
          href="#home"
          className="az-brand relative z-10 inline-flex items-center text-white"
          aria-label={t.brand}
          onClick={() => setOpen(false)}
        >
          <BrandMark className="w-[108px] sm:w-[124px]" />
          <span className="sr-only">{t.brand}</span>
        </a>

        <div className="relative z-10 flex items-center gap-3 sm:gap-4 md:gap-6">
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-teal"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div
            className="az-latin relative z-10 flex items-center rounded-md border border-white/15 bg-white/5 p-0.5 text-xs font-semibold tracking-wide"
            role="group"
            aria-label="Language"
            lang="en"
          >
            <button
              type="button"
              data-set-lang="en"
              className={cn(
                "az-latin relative z-10 touch-manipulation rounded px-2.5 py-1.5 transition-colors",
                lang === "en"
                  ? "bg-teal text-ink"
                  : "text-white/65 hover:text-white"
              )}
              aria-pressed={lang === "en"}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <button
              type="button"
              data-set-lang="ku"
              className={cn(
                "az-latin relative z-10 touch-manipulation rounded px-2.5 py-1.5 transition-colors",
                lang === "ku"
                  ? "bg-teal text-ink"
                  : "text-white/65 hover:text-white"
              )}
              aria-pressed={lang === "ku"}
              onClick={() => setLang("ku")}
            >
              KU
            </button>
          </div>

          <button
            type="button"
            data-menu-toggle
            className="relative z-10 inline-flex h-11 w-11 touch-manipulation items-center justify-center text-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
            aria-label={open ? t.closeMenu : t.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            {/* CSS .az-menu-open morphs lines → X (synced with drawer) */}
            <span className="pointer-events-none flex flex-col gap-1.5" aria-hidden>
              <span className="az-burger-1 block h-0.5 w-5 origin-center bg-white" />
              <span className="az-burger-2 block h-0.5 w-5 origin-center bg-white" />
              <span className="az-burger-3 block h-0.5 w-5 origin-center bg-white" />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav-panel"
        className="pointer-events-auto relative z-10 border-t border-white/10 bg-ink md:hidden"
        aria-hidden={!open}
      >
        <ul className="flex flex-col px-5 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-3 text-base text-white/85 touch-manipulation"
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
