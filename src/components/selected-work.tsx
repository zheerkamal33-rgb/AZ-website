"use client";

import {
  BarcodeScanner,
  LaptopFrame,
  MonitorFrame,
  PhoneFrame,
  TabletFrame,
} from "@/components/device-frames";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/reveal";

export function SelectedWork() {
  const { t } = useLanguage();

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-ink py-24 text-white sm:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18] az-grid"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-teal/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-40 h-80 w-80 rounded-full bg-[#3b82a0]/20 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-medium tracking-wide text-teal uppercase">
            {t.workEyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.workTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
            {t.workIntro}
          </p>
        </Reveal>

        {/* Delivery */}
        <article className="mt-20 border-t border-white/10 pt-16 lg:mt-24 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <Reveal>
              <p className="text-xs font-medium tracking-wide text-teal uppercase">
                {t.deliveryEyebrow}
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                {t.deliveryTitle}
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-white/60 sm:text-base">
                <span className="font-medium text-white/90">
                  {t.deliveryProblemLabel}
                </span>
                {t.deliveryProblem}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
                <span className="font-medium text-white">
                  {t.deliveryBuiltLabel}
                </span>
                {t.deliveryBuilt}
              </p>
            </Reveal>

            <Reveal delayMs={100}>
              <div className="az-stage relative mx-auto flex min-h-[22rem] items-end justify-center pb-4 sm:min-h-[26rem] md:min-h-[28rem]">
                <div
                  className="pointer-events-none absolute inset-x-8 bottom-0 h-24 rounded-[100%] bg-teal/15 blur-2xl"
                  aria-hidden
                />
                <PhoneFrame
                  src="/work/delivery/delivery-login.jpg"
                  alt="Delivery app login"
                  className="az-float-slow absolute left-[4%] top-[12%] z-10 -rotate-[14deg] opacity-90 sm:left-[8%] sm:top-[8%]"
                />
                <PhoneFrame
                  src="/work/delivery/delivery-deliveries.jpg"
                  alt="Delivery app deliveries list"
                  className="az-float relative z-30"
                  priority
                />
                <PhoneFrame
                  src="/work/delivery/delivery-home.jpg"
                  alt="Delivery app home"
                  className="az-float-slow absolute right-[2%] top-[18%] z-20 rotate-[12deg] opacity-95 sm:right-[6%] sm:top-[14%]"
                />
              </div>
            </Reveal>
          </div>
        </article>

        {/* Cashier */}
        <article className="mt-24 border-t border-white/10 pt-16 sm:mt-28 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <Reveal className="order-2 lg:order-1">
              <div className="az-stage relative pb-4">
                <div
                  className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-br from-teal/10 via-transparent to-[#3b82a0]/15 blur-xl"
                  aria-hidden
                />
                <LaptopFrame
                  src="/work/cashier/cashier-pos.png"
                  alt="AZ Market Cashier point of sale"
                  className="az-float relative z-20"
                  priority
                />
                <BarcodeScanner className="az-float-slow pointer-events-none absolute -bottom-2 -right-1 z-30 w-[34%] max-w-[11rem] rotate-[18deg] sm:-right-3 sm:bottom-0 sm:w-[30%] md:-right-5 lg:-bottom-4" />
              </div>
            </Reveal>

            <Reveal delayMs={80} className="order-1 lg:order-2">
              <p className="text-xs font-medium tracking-wide text-teal uppercase">
                {t.cashierEyebrow}
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                {t.cashierTitle}
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-white/60 sm:text-base">
                <span className="font-medium text-white/90">
                  {t.cashierProblemLabel}
                </span>
                {t.cashierProblem}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
                <span className="font-medium text-white">
                  {t.cashierBuiltLabel}
                </span>
                {t.cashierBuilt}
              </p>
            </Reveal>
          </div>
        </article>

        {/* Cafe */}
        <article className="mt-24 border-t border-white/10 pt-16 sm:mt-28 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <Reveal>
              <p className="text-xs font-medium tracking-wide text-teal uppercase">
                {t.cafeEyebrow}
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                {t.cafeTitle}
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-white/60 sm:text-base">
                <span className="font-medium text-white/90">
                  {t.cafeProblemLabel}
                </span>
                {t.cafeProblem}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
                <span className="font-medium text-white">{t.cafeBuiltLabel}</span>
                {t.cafeBuilt}
              </p>
            </Reveal>

            <Reveal delayMs={100}>
              <div className="az-stage relative mx-auto min-h-[22rem] w-full max-w-2xl sm:min-h-[26rem] lg:min-h-[28rem]">
                <div
                  className="pointer-events-none absolute inset-x-10 bottom-2 h-24 rounded-[100%] bg-[#d4a574]/15 blur-2xl"
                  aria-hidden
                />
                <TabletFrame
                  src="/work/cafe/cafe-tablet-home.png"
                  alt="Cafe tablet menu categories"
                  className="az-float-slow absolute left-0 top-[6%] z-10 w-[74%] -rotate-[9deg] sm:w-[70%]"
                />
                <TabletFrame
                  src="/work/cafe/cafe-tablet-items.png"
                  alt="Cafe tablet coffee menu"
                  className="az-float absolute right-0 top-[22%] z-20 w-[74%] rotate-[8deg] sm:w-[70%]"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </article>

        {/* Pharmacy */}
        <article className="mt-24 border-t border-white/10 pt-16 sm:mt-28 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
            <Reveal className="order-2 lg:order-1">
              <div className="az-stage relative overflow-visible pb-4 pt-2">
                <div
                  className="pointer-events-none absolute -inset-4 rounded-2xl bg-[radial-gradient(ellipse_at_30%_40%,rgba(126,200,196,0.16),transparent_55%)]"
                  aria-hidden
                />
                <MonitorFrame
                  src="/work/pharmacy/pharmacy-ops.png"
                  alt="Pharmacy Rx queue and dispense"
                  className="az-float relative z-20 mx-auto max-w-3xl"
                  label="az-clinic · rx queue"
                  priority
                />
              </div>
            </Reveal>

            <Reveal delayMs={80} className="order-1 lg:order-2">
              <p className="text-xs font-medium tracking-wide text-teal uppercase">
                {t.pharmacyEyebrow}
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                {t.pharmacyTitle}
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-white/60 sm:text-base">
                <span className="font-medium text-white/90">
                  {t.pharmacyProblemLabel}
                </span>
                {t.pharmacyProblem}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
                <span className="font-medium text-white">
                  {t.pharmacyBuiltLabel}
                </span>
                {t.pharmacyBuilt}
              </p>
            </Reveal>
          </div>
        </article>
      </div>
    </section>
  );
}
