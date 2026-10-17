import { Reveal } from "@/components/reveal";

const steps = [
  {
    n: "01",
    title: "Discover",
    body: "We listen first — goals, constraints, and what success looks like for your users.",
  },
  {
    n: "02",
    title: "Design",
    body: "Structure and visuals that feel intentional. Clear flows before a single pixel of polish theater.",
  },
  {
    n: "03",
    title: "Build",
    body: "Modern stack, clean code, and shipping cadence you can actually track.",
  },
  {
    n: "04",
    title: "Ship",
    body: "Launch with confidence, then iterate. We stick around for the details that matter after go-live.",
  },
];

export function HowWeWork() {
  return (
    <section className="border-y border-slate-line bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-medium tracking-wide text-teal-deep uppercase">
            How we work
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Discover → design → build → ship.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A short loop, no ceremony. We move with clarity so you always know
            what comes next.
          </p>
        </Reveal>

        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, i) => (
            <Reveal key={step.n} delayMs={i * 80}>
              <li>
                <span className="font-display text-sm font-semibold text-teal-deep">
                  {step.n}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {step.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
