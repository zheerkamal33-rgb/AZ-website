import { Reveal } from "@/components/reveal";

const items = [
  {
    title: "Delivery platforms",
    body: "Two-sided ops — merchants create orders, riders pick up and deliver, customers receive. Built for real street-level coordination.",
  },
  {
    title: "Market POS",
    body: "Cashier systems for markets — fast checkout, multi-currency, product catalogs, and sales analysis that belongs on the counter.",
  },
  {
    title: "End-to-end craft",
    body: "From interface to architecture. We design, build, and ship — then stand behind how it looks and how it runs.",
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
            Production software for operators — sharp UX, solid engineering,
            direct founders.
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
