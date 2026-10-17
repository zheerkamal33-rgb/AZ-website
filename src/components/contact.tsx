import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";

const phones = [
  { name: "Zheer", number: "7741197770", display: "774-119-7770" },
  { name: "Armand", number: "7708912007", display: "770-891-2007" },
];

export function Contact() {
  return (
    <section id="contact" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="text-sm font-medium tracking-wide text-teal-deep uppercase">
              Contact
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Talk to us directly.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Call either founder, or send a short note. We keep the line short
              on purpose — you reach the people who do the work.
            </p>

            <ul className="mt-10 space-y-5">
              {phones.map((p) => (
                <li key={p.number}>
                  <p className="text-sm text-muted-foreground">{p.name}</p>
                  <a
                    href={`tel:+1${p.number}`}
                    className="az-cta mt-1 inline-block font-display text-xl font-semibold text-ink underline-offset-4 hover:text-teal-deep hover:underline"
                  >
                    {p.display}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delayMs={100}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
