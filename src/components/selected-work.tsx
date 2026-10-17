import { ProjectShot } from "@/components/project-shot";
import { Reveal } from "@/components/reveal";

const projects = [
  {
    slug: "delivery-app",
    name: "Delivery operations app",
    type: "Two-sided delivery platform",
    problem:
      "Shops needed a clean way to create orders and get goods to their customers without juggling calls and spreadsheets.",
    built:
      "A delivery system where the merchant creates the order, a rider picks up from the shop, and delivers to the end customer — merchant, rider, and customer in one coordinated flow.",
    image: "/work/delivery-app.png",
    filename: "delivery-app.png",
  },
  {
    slug: "market-pos",
    name: "Market cashier / POS",
    type: "Point of sale",
    problem:
      "Market vendors needed fast, reliable checkout without clunky retail software.",
    built:
      "A cashier and POS system built for markets — quick sales, clear totals, and an interface that holds up on the floor.",
    image: "/work/market-pos.png",
    filename: "market-pos.png",
  },
  {
    slug: "cafe-menus",
    name: "Cafe menu systems",
    type: "Digital menus",
    problem:
      "Cafes needed menus that stay current and look sharp — without reprinting every price change.",
    built:
      "Digital menu systems for cafes: easy updates, clear layout, ready for screens and customer-facing displays.",
    image: "/work/cafe-menus.png",
    filename: "cafe-menus.png",
  },
  {
    slug: "pharmacy-systems",
    name: "Pharmacy systems",
    type: "Pharmacy operations",
    problem:
      "Pharmacies needed software that respects real inventory, prescriptions, and day-to-day counter work.",
    built:
      "Operational systems for pharmacies — structured for the workflows that matter behind the counter.",
    image: "/work/pharmacy-systems.png",
    filename: "pharmacy-systems.png",
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
            Real systems we&apos;ve designed and shipped — delivery ops, point of
            sale, cafe menus, and pharmacy software.
          </p>
        </Reveal>

        <ul className="mt-16 space-y-0 border-t border-slate-line">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delayMs={i * 70}>
              <li className="grid gap-6 border-b border-slate-line py-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-start lg:gap-14">
                <ProjectShot
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  filename={project.filename}
                />

                <div>
                  <p className="text-xs font-medium tracking-wide text-teal-deep uppercase">
                    {project.type}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-ink sm:text-2xl">
                    {project.name}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    <span className="font-medium text-ink">Problem — </span>
                    {project.problem}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/85 sm:text-base">
                    <span className="font-medium text-ink">Built — </span>
                    {project.built}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
