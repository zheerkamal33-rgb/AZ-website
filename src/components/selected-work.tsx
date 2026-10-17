import { Reveal } from "@/components/reveal";

const projects = [
  {
    name: "Northline Commerce",
    type: "Website + catalog",
    summary:
      "A high-conversion storefront and editorial catalog for a specialty retailer — crisp merchandising hierarchy, fast collection pages, and a checkout path that feels effortless.",
    outcome: "Launch-ready marketing site with product browsing built for clarity on mobile and desktop.",
  },
  {
    name: "Harbor Ops Desk",
    type: "Internal application",
    summary:
      "An operations console for a logistics team: job boards, status pipelines, and exception handling in one calm interface — less spreadsheet chaos, more signal.",
    outcome: "Day-to-day workflows consolidated into a single app operators actually prefer to open.",
  },
  {
    name: "Pulse Sync Layer",
    type: "Systems & automation",
    summary:
      "A middleware layer that syncs CRM, billing, and support tools so records stay consistent without nightly spreadsheet merges or manual copy-paste.",
    outcome: "Reliable cross-tool sync with clear failure alerts when something needs a human.",
  },
];

export function SelectedWork() {
  return (
    <section id="work" className="bg-mist py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-medium tracking-wide text-teal-deep uppercase">
            Work
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Selected projects
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A look at the kind of work we ship — websites, applications, and
            systems with clear structure and careful execution.{" "}
            <span className="text-ink/80">
              Entries below are sample portfolio pieces that illustrate our
              craft.
            </span>
          </p>
        </Reveal>

        <ul className="mt-16 space-y-0 border-t border-slate-line">
          {projects.map((project, i) => (
            <Reveal key={project.name} delayMs={i * 80}>
              <li className="grid gap-4 border-b border-slate-line py-10 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] sm:gap-12 lg:grid-cols-[14rem_minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-10">
                <div>
                  <p className="text-xs font-medium tracking-wide text-teal-deep uppercase">
                    Sample work
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-ink sm:text-2xl">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.type}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {project.summary}
                </p>
                <p className="text-sm leading-relaxed text-ink/80 sm:col-span-2 lg:col-span-1">
                  <span className="font-medium text-ink">Result — </span>
                  {project.outcome}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
