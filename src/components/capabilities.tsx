import { Reveal } from "@/components/reveal";

const items = [
  {
    title: "Websites",
    body: "Marketing and portfolio surfaces with strong hierarchy, fast load, and copy that earns trust.",
  },
  {
    title: "Applications",
    body: "Web apps shaped around real workflows — clean UI, solid architecture, features that earn their place.",
  },
  {
    title: "Systems",
    body: "Integrations and automation that connect tools so teams spend less time stitching things by hand.",
  },
];

export function Capabilities() {
  return (
    <section className="border-y border-slate-line bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-medium tracking-wide text-teal-deep uppercase">
            Capabilities
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            What we&apos;re known for.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            End-to-end craft — from structure and interface to the engineering
            that keeps things reliable after launch.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-12 border-t border-slate-line pt-12 sm:grid-cols-3 sm:gap-10">
          {items.map((item, i) => (
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
