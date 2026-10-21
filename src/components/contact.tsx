"use client";

import { ContactForm } from "@/components/contact-form";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";
import { SocialLinks } from "@/components/social-links";

const emails = [
  { name: "Zheer", email: "zheerkamal33@gmail.com" },
  { name: "Armand", email: "armandsoran820@gmail.com" },
];

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
        className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#3b82a0]/15 blur-3xl"
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

            <ul className="mt-12 space-y-0 divide-y divide-white/10 border-y border-white/10">
              {emails.map((p) => (
                <li key={p.email}>
                  <a
                    href={`mailto:${p.email}`}
                    className="az-contact-link group flex flex-col gap-1 py-5 transition-colors sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                    dir="ltr"
                    lang="en"
                  >
                    <span className="az-latin shrink-0 text-sm text-white/45 transition-colors group-hover:text-teal">
                      {p.name}
                    </span>
                    <span className="az-latin az-cta font-display text-base font-semibold tracking-tight text-white transition-colors group-hover:text-teal sm:text-lg md:text-xl break-all sm:break-normal sm:text-end">
                      {p.email}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8">
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
