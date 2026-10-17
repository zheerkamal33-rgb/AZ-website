import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="about" className="bg-mist py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
          <Reveal>
            <p className="text-sm font-medium tracking-wide text-teal-deep uppercase">
              About
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Automated Zone is Zheer &amp; Armand.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              A small studio with high standards. We care about how software
              feels on first glance and how it behaves six months later — visual
              clarity, careful engineering, and direct communication. No agency
              maze. Two people who design, code, and stand behind the work.
            </p>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="space-y-8 border-l-2 border-teal pl-6">
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">
                  Zheer
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Co-founder — product sense, systems thinking, and an obsession
                  with getting the details right.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">
                  Armand
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Co-founder — craft on the surface, rigor underneath. Builds
                  experiences people trust on the first try.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
