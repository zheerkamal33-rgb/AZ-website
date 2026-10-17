export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-lg font-semibold">Automated Zone</p>
          <p className="mt-2 max-w-sm text-sm text-white/55">
            Studio of Zheer &amp; Armand — websites, applications, and systems
            with careful craft.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm sm:items-end">
          <a
            href="tel:+17741197770"
            className="text-white/70 transition-colors hover:text-teal"
          >
            Zheer — 774-119-7770
          </a>
          <a
            href="tel:+17708912007"
            className="text-white/70 transition-colors hover:text-teal"
          >
            Armand — 770-891-2007
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-4 text-xs text-white/40 sm:px-8">
          © 2026 Automated Zone. Built by Zheer &amp; Armand.
        </p>
      </div>
    </footer>
  );
}
