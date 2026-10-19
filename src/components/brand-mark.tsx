import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  width?: number;
};

export function BrandMark({
  className,
  width = 136,
}: BrandMarkProps) {
  return (
    <Image
      src="/brand/rozhex-logo.png"
      alt=""
      width={width}
      height={Math.round(width / 2)}
      className={cn("h-auto shrink-0 select-none", className)}
      aria-hidden
      priority
    />
  );
}
