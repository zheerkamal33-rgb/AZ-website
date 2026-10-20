import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  width?: number;
  variant?: "full" | "mark";
};

export function BrandMark({
  className,
  width = 136,
  variant = "full",
}: BrandMarkProps) {
  const isMark = variant === "mark";

  return (
    <Image
      src={isMark ? "/brand/rozhex-mark.png" : "/brand/rozhex-logo.png"}
      alt=""
      width={width}
      height={isMark ? width : Math.round(width / 2)}
      className={cn("h-auto shrink-0 select-none", className)}
      aria-hidden
      priority
    />
  );
}
