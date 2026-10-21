import { cn } from "@/lib/utils";

const socials = [
  { name: "Instagram", href: "https://www.instagram.com/rozhex__/" },
  { name: "TikTok", href: "https://www.tiktok.com/@rozhex_" },
  { name: "Facebook", href: "https://www.facebook.com/share/1R2Y142t5W/" },
  { name: "WhatsApp", href: "https://wa.me/9647741197770" },
];

export function SocialLinks({ dark = false }: { dark?: boolean }) {
  return (
    <ul className="az-latin flex flex-wrap gap-2" dir="ltr" lang="en">
      {socials.map(({ name, href }) => (
        <li key={name}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`RozhEx on ${name} (opens in a new tab)`}
            className={cn(
              "inline-flex min-h-11 items-center rounded-md border px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2",
              dark
                ? "border-white/20 text-white/80 hover:border-teal hover:text-teal focus-visible:ring-offset-ink"
                : "border-slate-line text-ink/70 hover:border-teal-deep hover:text-teal-deep focus-visible:ring-offset-white",
            )}
          >
            {name}
            <span className="ml-2" aria-hidden="true">↗</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
