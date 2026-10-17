import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  variant?: "white" | "ink";
  className?: string;
  size?: number;
};

/** Automated Zone mark — white for dark chrome, ink for light surfaces. */
export function BrandMark({
  variant = "white",
  className,
  size = 28,
}: BrandMarkProps) {
  const src =
    variant === "ink"
      ? "/brand/az-mark-ink.png"
      : "/brand/az-mark-white.png";

  return (
    <Image
      src={src}
      alt=""
      width={size}
      height={size}
      className={cn("shrink-0 select-none", className)}
      aria-hidden
      priority={variant === "white"}
    />
  );
}
