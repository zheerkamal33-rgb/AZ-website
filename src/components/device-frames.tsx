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
            quality={90}
            className="object-cover object-top"
            priority={priority}
            loading={priority ? undefined : "lazy"}
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
            sizes="(max-width: 1024px) 100vw, 960px"
            quality={95}
            className="object-cover object-top"
            priority={priority}
            loading={priority ? undefined : "lazy"}
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
            sizes="(max-width: 1024px) 100vw, 1400px"
            quality={95}
            className="object-cover object-top"
            priority={priority}
            loading={priority ? undefined : "lazy"}
          />
        </div>
      </div>
      <div className="mx-auto h-3 w-[18%] bg-gradient-to-b from-[#1a2a35] to-[#0a1218]" />
      <div className="mx-auto h-1.5 w-[42%] rounded-b-md bg-[#0a1218]" />
    </div>
  );
}

/** Handheld USB laser barcode scanner — product-photo prop */
export function BarcodeScanner({ className }: { className?: string }) {
  return (
    <div
      className={cn("az-scanner relative select-none", className)}
      aria-hidden
    >
      <Image
        src="/work/cashier/barcode-scanner.png"
        alt=""
        width={382}
        height={682}
        quality={92}
        className="h-auto w-full drop-shadow-[0_28px_48px_rgba(0,0,0,0.7)]"
        loading="lazy"
      />
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
            sizes="(max-width: 1024px) 100vw, 1400px"
            quality={95}
            className="object-cover object-top"
            priority={priority}
            loading={priority ? undefined : "lazy"}
          />
        </div>
      </div>
      <div className="mx-auto h-2 w-[92%] rounded-b-md bg-gradient-to-b from-[#2a3340] to-[#151a22] shadow-md" />
      <div className="mx-auto h-1.5 w-[62%] rounded-b-lg bg-[#0d1118]" />
    </div>
  );
}
