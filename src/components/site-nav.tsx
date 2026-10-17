"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#home"
          className="font-display text-sm font-semibold tracking-wide text-white"
        >
          Automated Zone
        </a>

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

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center text-white md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
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
