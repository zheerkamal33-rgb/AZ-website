import { cn } from "@/lib/utils";
import { ArrowUpRight, MessageCircle, Music2 } from "lucide-react";
import type { SVGProps } from "react";

function Instagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Facebook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14 22v-9h3l.5-4H14V7c0-1.2.4-2 2-2h2V1.4A26 26 0 0 0 15 1c-3 0-5 1.8-5 5v3H7v4h3v9z" />
    </svg>
  );
}

const socials = [
  { name: "Instagram", href: "https://www.instagram.com/rozhex__/", icon: Instagram, color: "bg-teal/15 ring-1 ring-teal/30" },
  { name: "TikTok", href: "https://www.tiktok.com/@rozhex_", icon: Music2, color: "bg-teal/15 ring-1 ring-teal/30" },
  { name: "Facebook", href: "https://www.facebook.com/share/1R2Y142t5W/", icon: Facebook, color: "bg-teal/15 ring-1 ring-teal/30" },
  { name: "WhatsApp", href: "https://wa.me/9647741197770", icon: MessageCircle, color: "bg-teal/15 ring-1 ring-teal/30" },
];

export function SocialLinks({ dark = false }: { dark?: boolean }) {
  return (
    <ul className="az-latin grid w-full max-w-md grid-cols-2 gap-3" dir="ltr" lang="en">
      {socials.map(({ name, href, icon: Icon, color }) => (
        <li key={name}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`RozhEx on ${name} (opens in a new tab)`}
            className={cn(
              "group flex min-h-16 items-center gap-3 rounded-xl border p-3 text-sm font-medium transition duration-200 motion-safe:hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2",
              dark
                ? "border-white/10 bg-white/[0.04] text-white/90 hover:border-teal/40 hover:bg-teal/[0.08] hover:shadow-lg hover:shadow-black/10 focus-visible:ring-offset-ink"
                : "border-slate-line bg-card text-foreground/80 shadow-sm hover:border-ink/20 hover:bg-mist hover:shadow-md focus-visible:ring-offset-card",
            )}
          >
            <span className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-teal shadow-sm", color)}>
              <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
            </span>
            <span>{name}</span>
            <ArrowUpRight className="ml-auto hidden h-4 w-4 shrink-0 opacity-35 transition-opacity group-hover:opacity-100 sm:block" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
