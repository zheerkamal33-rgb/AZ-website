import { Fragment, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Product / brand Latin tokens that stay English in KU copy. */
const LATIN_TOKEN = /(Automated Zone|AZ Market)/g;

/**
 * Renders a string, wrapping always-English Latin tokens so RTL/KU
 * cannot swap them onto the Arabic font stack.
 */
export function LatinText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const parts = text.split(LATIN_TOKEN);
  if (parts.length === 1) return <>{text}</>;

  return (
    <>
      {parts.map((part, i) =>
        part === "Automated Zone" || part === "AZ Market" ? (
          <span key={i} className={cn("az-latin", className)} lang="en">
            {part}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}

/** Always-English inline span (names, phones, EN|KU, brand bits). */
export function Latin({
  children,
  className,
  display,
}: {
  children: ReactNode;
  className?: string;
  display?: boolean;
}) {
  return (
    <span
      lang="en"
      className={cn("az-latin", display && "font-display", className)}
    >
      {children}
    </span>
  );
}
