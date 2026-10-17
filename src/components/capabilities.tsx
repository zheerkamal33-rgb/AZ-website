import { Reveal } from "@/components/reveal";

const items = [
  {
    title: "Operational apps",
    body: "Delivery flows, cashier systems, and day-to-day tools built for merchants, riders, and staff — not demo screens.",
  },
  {
    title: "Customer-facing surfaces",
    body: "Digital menus and clear interfaces that look sharp on the floor and stay easy to update.",
  },
  {
    title: "Domain systems",
    body: "Pharmacy and retail-adjacent software shaped around real inventory, counter work, and reliability.",
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
