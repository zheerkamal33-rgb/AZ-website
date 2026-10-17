"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function ProjectShot({
  src,
  alt,
  filename,
}: {
  src: string;
  alt: string;
  filename: string;
}) {
  const [status, setStatus] = useState<"loading" | "ready" | "missing">(
    "loading"
  );

  return (
    <div
      className="relative aspect-[16/10] w-full overflow-hidden rounded-md bg-ink ring-1 ring-slate-line"
      data-shot={filename}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={cn(
          "absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-300",
          status === "ready" ? "opacity-100" : "opacity-0"
        )}
        onLoad={() => setStatus("ready")}
        onError={() => setStatus("missing")}
      />

      {status !== "ready" && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[linear-gradient(145deg,var(--ink-soft)_0%,var(--ink)_100%)] px-6 text-center"
          aria-hidden={status === "loading"}
        >
          <div
            className="az-grid pointer-events-none absolute inset-0 opacity-30"
            aria-hidden
          />
          <span className="relative font-display text-sm font-medium tracking-wide text-teal uppercase">
            Screenshot slot
          </span>
          <span className="relative max-w-xs text-xs leading-relaxed text-white/55">
            Drop file at{" "}
            <code className="text-white/75">public/work/{filename}</code>
          </span>
        </div>
      )}
    </div>
  );
}
