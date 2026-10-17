"use client";

import { useEffect, useState } from "react";
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
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-white/10 bg-ink/90 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:px-8">
        <a
          href="#home"
          className="font-display text-sm font-semibold tracking-wide text-white"
        >
          {t.brand}
        </a>

        <div className="flex items-center gap-4 md:gap-6">
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
            className="flex items-center rounded-md border border-white/15 bg-white/5 p-0.5 text-xs font-semibold tracking-wide"
            role="group"
            aria-label="Language"
          >
            <button
              type="button"
              className={cn(
                "rounded px-2.5 py-1.5 transition-colors",
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
              className={cn(
                "rounded px-2.5 py-1.5 transition-colors",
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
            className="inline-flex h-9 w-9 items-center justify-center text-white md:hidden"
            aria-expanded={open}
            aria-label={open ? t.closeMenu : t.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span
                className={cn(
                  "block h-px w-5 bg-white transition-transform",
                  open && "translate-y-[3.5px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "block h-px w-5 bg-white transition-opacity",
                  open && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-px w-5 bg-white transition-transform",
                  open && "-translate-y-[3.5px] -rotate-45"
                )}
              />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink/95 px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-1 text-base text-white/80"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
