import { Reveal } from "@/components/reveal";

const offerings = [
  {
    title: "Websites",
    body: "Marketing sites and product surfaces with clear hierarchy, fast load, and copy that converts — not template filler.",
  },
  {
    title: "Applications",
    body: "Web apps shaped around real workflows. Clean interfaces, solid architecture, and features that earn their place.",
  },
  {
    title: "Systems",
    body: "Integrations, internal tools, and automation that connect the pieces so your team spends less time stitching them by hand.",
  },
];

export function WhatWeBuild() {
  return (
    <section id="work" className="bg-mist py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-medium tracking-wide text-teal-deep uppercase">
            What we build
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Websites, applications, and systems — built end to end.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            From first conversation to launch, we own the craft: structure,
            interface, and the engineering that keeps it reliable.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-12 border-t border-slate-line pt-12 sm:grid-cols-3 sm:gap-10">
          {offerings.map((item, i) => (
            <Reveal key={item.title} delayMs={i * 90}>
              <h3 className="font-display text-xl font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
