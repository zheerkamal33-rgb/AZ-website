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

export function LaptopFrame({
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
    <div className={cn("az-laptop relative w-full max-w-3xl", className)}>
      <div className="overflow-hidden rounded-xl border border-white/12 bg-[#121820] shadow-[0_36px_80px_-28px_rgba(0,0,0,0.7)] ring-1 ring-black/30">
        <div className="flex items-center gap-2 border-b border-white/8 bg-[#1a222e] px-3 py-2.5 sm:px-4">
          <span className="size-2 rounded-full bg-[#ff5f57] sm:size-2.5" />
          <span className="size-2 rounded-full bg-[#febc2e] sm:size-2.5" />
          <span className="size-2 rounded-full bg-[#28c840] sm:size-2.5" />
          <div className="ml-2 flex-1 truncate rounded-md bg-black/35 px-3 py-1 text-[10px] tracking-wide text-white/35 sm:text-xs">
            az-market · cashier
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
