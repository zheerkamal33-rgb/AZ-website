import Image from "next/image";
import { cn } from "@/lib/utils";

export function PhoneFrame({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "az-phone relative w-[min(42vw,11.5rem)] shrink-0 sm:w-[13.5rem] md:w-[15rem]",
        className
      )}
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#0a0e14] p-[0.35rem] shadow-[0_28px_60px_-20px_rgba(0,0,0,0.65)] ring-1 ring-black/40 sm:rounded-[2.35rem] sm:p-[0.4rem]">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-center pt-2 sm:pt-2.5">
          <div className="h-4 w-[28%] rounded-full bg-black sm:h-5" />
        </div>
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.65rem] bg-black sm:rounded-[1.9rem]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 42vw, 240px"
            className="object-cover object-top"
            priority={priority}
          />
        </div>
      </div>
    </div>
  );
}

export function TabletFrame({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative w-full max-w-xl", className)}>
      <div className="relative overflow-hidden rounded-[1.35rem] border border-white/18 bg-[#121212] p-[0.55rem] shadow-[0_30px_70px_-24px_rgba(0,0,0,0.75)] ring-1 ring-white/10 sm:rounded-[1.6rem] sm:p-[0.65rem]">
        <div className="pointer-events-none absolute left-1/2 top-[0.35rem] z-20 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-black/80 sm:top-[0.45rem]" />
        <div className="relative aspect-[4/3] overflow-hidden rounded-[0.95rem] bg-black sm:rounded-[1.1rem]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 90vw, 520px"
            className="object-cover object-top"
            priority={priority}
          />
        </div>
      </div>
      <div className="mx-auto mt-1 h-1 w-[28%] rounded-full bg-white/15" />
    </div>
  );
}

/** Wide monitor / dual-panel desktop frame — distinct from LaptopFrame */
export function MonitorFrame({
  src,
  alt,
  className,
  priority = false,
  label = "az-clinic · dispense",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  label?: string;
}) {
  return (
    <div className={cn("relative w-full", className)}>
      <div className="overflow-hidden rounded-md border border-[#2a4a55]/80 bg-[#071018] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.85)] ring-1 ring-[#7ec8c4]/25">
        <div className="flex items-center gap-3 border-b border-[#1e3348] bg-[#0b1520] px-3 py-2">
          <div className="h-2 w-2 rounded-sm bg-[#7ec8c4]/80" />
          <div className="flex-1 truncate font-mono text-[10px] tracking-wide text-[#8aa0b5] sm:text-xs">
            {label}
          </div>
        </div>
        <div className="relative aspect-[16/10] bg-[#0b1520]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 100vw, 800px"
            className="object-cover object-top"
            priority={priority}
          />
        </div>
      </div>
      <div className="mx-auto h-3 w-[18%] bg-gradient-to-b from-[#1a2a35] to-[#0a1218]" />
      <div className="mx-auto h-1.5 w-[42%] rounded-b-md bg-[#0a1218]" />
    </div>
  );
}

/** Handheld USB/laser barcode scanner — reklamik product prop */
export function BarcodeScanner({ className }: { className?: string }) {
  return (
    <div
      className={cn("az-scanner relative select-none", className)}
      aria-hidden
    >
      <svg
        viewBox="0 0 220 280"
        className="h-auto w-full drop-shadow-[0_28px_40px_rgba(0,0,0,0.55)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sc-body" x1="40" y1="20" x2="180" y2="240" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3a4452" />
            <stop offset="0.45" stopColor="#1c2430" />
            <stop offset="1" stopColor="#0e131a" />
          </linearGradient>
          <linearGradient id="sc-grip" x1="90" y1="140" x2="160" y2="270" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2a3340" />
            <stop offset="1" stopColor="#121820" />
          </linearGradient>
          <linearGradient id="sc-nose" x1="30" y1="40" x2="120" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4a5565" />
            <stop offset="1" stopColor="#1a222e" />
          </linearGradient>
          <radialGradient id="sc-laser" cx="0.5" cy="0.5" r="0.5">
            <stop stopColor="#ff4d4d" stopOpacity="0.95" />
            <stop offset="1" stopColor="#ff4d4d" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* USB cable */}
        <path
          d="M118 248 C118 268 95 275 72 268 C48 260 38 278 28 272"
          stroke="#6b7788"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M118 248 C118 268 95 275 72 268 C48 260 38 278 28 272"
          stroke="#2a3340"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
        <rect x="18" y="266" width="18" height="10" rx="2" fill="#8a94a3" />
        <rect x="20" y="268" width="10" height="6" rx="1" fill="#1a222e" />
        {/* Head / nose */}
        <path
          d="M48 58 C42 42 52 28 78 24 L148 18 C168 16 182 28 178 48 L168 92 C164 108 148 118 128 120 L72 126 C54 128 46 110 48 92 Z"
          fill="url(#sc-nose)"
        />
        {/* Scan window */}
        <rect x="68" y="42" width="88" height="36" rx="6" fill="#0a0e14" stroke="#5a6575" strokeWidth="2" />
        <rect x="74" y="48" width="76" height="24" rx="3" fill="#151c26" />
        <line x1="78" y1="56" x2="146" y2="56" stroke="#ff3b3b" strokeWidth="2.5" opacity="0.85" />
        <line x1="78" y1="64" x2="146" y2="64" stroke="#ff3b3b" strokeWidth="1.2" opacity="0.35" />
        <ellipse cx="112" cy="60" rx="28" ry="10" fill="url(#sc-laser)" opacity="0.55" />
        {/* Body shell */}
        <path
          d="M70 118 C66 112 68 104 78 100 L140 88 C154 84 166 94 164 110 L152 168 C150 180 138 188 124 190 L86 198 C72 200 64 188 66 174 Z"
          fill="url(#sc-body)"
        />
        {/* Trigger */}
        <path
          d="M108 168 C108 168 118 172 124 186 C128 196 122 206 112 208 C102 210 96 200 98 190 C100 180 104 172 108 168 Z"
          fill="#0ea894"
        />
        {/* Grip */}
        <path
          d="M96 188 C92 186 90 190 92 200 L108 262 C110 270 122 272 130 266 L148 248 C154 242 152 232 146 228 L118 196 C112 190 102 190 96 188 Z"
          fill="url(#sc-grip)"
        />
        {/* Grip ridges */}
        <path d="M112 210 L132 224" stroke="#4a5565" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <path d="M116 222 L136 236" stroke="#4a5565" strokeWidth="2" strokeLinecap="round" opacity="0.45" />
        <path d="M120 234 L138 246" stroke="#4a5565" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
        {/* Brand plate */}
        <rect x="92" y="128" width="48" height="18" rx="3" fill="#0b1420" opacity="0.7" />
        <text
          x="116"
          y="140"
          textAnchor="middle"
          fill="#1ad4c0"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="8"
          fontWeight="700"
          letterSpacing="0.08em"
        >
          SCAN
        </text>
      </svg>
    </div>
  );
}

export function LaptopFrame({
  src,
  alt,
  className,
  priority = false,
  chromeLabel = "az-market · cashier",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  chromeLabel?: string;
}) {
  return (
    <div className={cn("az-laptop relative w-full max-w-3xl", className)}>
      <div className="overflow-hidden rounded-xl border border-white/12 bg-[#121820] shadow-[0_36px_80px_-28px_rgba(0,0,0,0.7)] ring-1 ring-black/30">
        <div className="flex items-center gap-2 border-b border-white/8 bg-[#1a222e] px-3 py-2.5 sm:px-4">
          <span className="size-2 rounded-full bg-[#ff5f57] sm:size-2.5" />
          <span className="size-2 rounded-full bg-[#febc2e] sm:size-2.5" />
          <span className="size-2 rounded-full bg-[#28c840] sm:size-2.5" />
          <div className="ml-2 flex-1 truncate rounded-md bg-black/35 px-3 py-1 text-[10px] tracking-wide text-white/35 sm:text-xs">
            {chromeLabel}
          </div>
        </div>
        <div className="relative aspect-[16/9] bg-white">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 100vw, 720px"
            className="object-cover object-top"
            priority={priority}
          />
        </div>
      </div>
      <div className="mx-auto h-2 w-[92%] rounded-b-md bg-gradient-to-b from-[#2a3340] to-[#151a22] shadow-md" />
      <div className="mx-auto h-1.5 w-[62%] rounded-b-lg bg-[#0d1118]" />
    </div>
  );
}
