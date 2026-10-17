"use client";

import { ContactForm } from "@/components/contact-form";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";

const phones = [
  { name: "Zheer", number: "7741197770", display: "774-119-7770" },
  { name: "Armand", number: "7708912007", display: "770-891-2007" },
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
              {phones.map((p) => (
                <li key={p.number}>
                  <a
                    href={`tel:+1${p.number}`}
                    className="az-phone-link group flex items-baseline justify-between gap-4 py-5 transition-colors"
                    dir="ltr"
                    lang="en"
                  >
                    <span className="az-latin shrink-0 text-sm text-white/45 transition-colors group-hover:text-teal">
                      {p.name}
                    </span>
                    <span className="az-latin az-cta font-display text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-teal sm:text-2xl md:text-3xl">
                      {p.display}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
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
