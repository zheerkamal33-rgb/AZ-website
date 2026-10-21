"use client";

import { ContactForm } from "@/components/contact-form";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";
import { SocialLinks } from "@/components/social-links";
import { ArrowUpRight, Mail } from "lucide-react";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="az-contact relative overflow-hidden bg-ink py-24 text-white sm:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22] az-grid"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-teal/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#b78a35]/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.05fr] lg:gap-20 lg:items-start">
          <Reveal>
            <p className="text-sm font-medium tracking-wide text-teal uppercase">
              {t.contactEyebrow}
            </p>
            <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              {t.contactTitle}
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/60 sm:text-lg">
              {t.contactBody}
            </p>

            <div className="mt-8 max-w-md space-y-3">
              <a
                href="mailto:rozhex.10@gmail.com"
                className="az-latin group flex min-h-16 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-sm font-medium text-white/90 transition duration-200 hover:border-white/25 hover:bg-white/[0.08] hover:shadow-lg hover:shadow-black/10 motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                dir="ltr"
                lang="en"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal text-ink shadow-sm">
                  <Mail className="h-[18px] w-[18px]" aria-hidden="true" />
                </span>
                <span className="min-w-0 break-all">rozhex.10@gmail.com</span>
                <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 opacity-35 transition-opacity group-hover:opacity-100" aria-hidden="true" />
              </a>
              <SocialLinks dark />
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <div className="lg:pt-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
