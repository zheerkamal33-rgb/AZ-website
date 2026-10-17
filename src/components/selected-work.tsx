import {
  LaptopFrame,
  MonitorFrame,
  PhoneFrame,
  TabletFrame,
} from "@/components/device-frames";
import { Reveal } from "@/components/reveal";

export function SelectedWork() {
  return (
    <section id="work" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
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
            Work
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Selected projects
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
            Production systems we designed and shipped — delivery, market POS,
            cafe menus, and pharmacy ops.
          </p>
        </Reveal>

        {/* Delivery */}
        <article className="mt-20 border-t border-white/10 pt-16 lg:mt-24 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <Reveal>
              <p className="text-xs font-medium tracking-wide text-teal uppercase">
                Two-sided delivery platform
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Delivery operations app
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-white/60 sm:text-base">
                <span className="font-medium text-white/90">Problem — </span>
                Shops needed one place to create orders and get goods to their
                customers without juggling calls and spreadsheets.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
                <span className="font-medium text-white">Built — </span>
                Merchant creates the order; a rider picks up from the shop and
                delivers to the end customer — merchant, rider, and customer in
                one coordinated flow.
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
              <div className="az-stage relative">
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
                <div className="pointer-events-none absolute -bottom-6 -right-2 z-30 hidden w-[48%] rotate-[6deg] sm:block md:-right-4 lg:-bottom-8">
                  <div className="overflow-hidden rounded-lg border border-white/12 bg-[#121820] shadow-[0_24px_50px_-20px_rgba(0,0,0,0.65)] ring-1 ring-black/25">
                    <div className="relative aspect-[16/10]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/work/cashier/cashier-analysis.png"
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute -left-3 top-[18%] z-10 hidden w-[36%] -rotate-[8deg] opacity-90 md:block">
                  <div className="overflow-hidden rounded-lg border border-white/10 bg-[#121820] shadow-xl ring-1 ring-black/20">
                    <div className="relative aspect-[16/10]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/work/cashier/cashier-products.png"
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={80} className="order-1 lg:order-2">
              <p className="text-xs font-medium tracking-wide text-teal uppercase">
                Point of sale · AZ Market
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Market Cashier
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-white/60 sm:text-base">
                <span className="font-medium text-white/90">Problem — </span>
                Market vendors needed fast, reliable checkout without clunky
                retail software.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
                <span className="font-medium text-white">Built — </span>
                AZ Market Cashier — scan or pick products, manage sales in IQD
                or USD, track inventory and analysis, and complete sales on the
                floor.
              </p>
            </Reveal>
          </div>
        </article>

        {/* Cafe menu — tablet guest menu */}
        <article className="mt-24 border-t border-white/10 pt-16 sm:mt-28 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <Reveal>
              <p className="text-xs font-medium tracking-wide text-teal uppercase">
                Table-side tablet menu
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Cafe menu system
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-white/60 sm:text-base">
                <span className="font-medium text-white/90">Problem — </span>
                Cafes needed a guest-facing menu waitstaff can bring to the
                table — always current, never reprinted.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
                <span className="font-medium text-white">Built — </span>
                An iPad digital menu for the table: categories, items, and live
                IQD prices with KU · AR · EN — handed to guests like a menu,
                updated like software.
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

        {/* Pharmacy — clinical dual-panel, not Cashier clone */}
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
                Clinical dispense ops
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Pharmacy system
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-white/60 sm:text-base">
                <span className="font-medium text-white/90">Problem — </span>
                Pharmacies needed software built around prescriptions, stock
                expiry, and controlled drugs — not a generic checkout grid.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
                <span className="font-medium text-white">Built — </span>
                A clinical dispense console: Rx queue with lot/expiry checks,
                stock watchlists, and counter workflows shaped for pharmacy
                staff.
              </p>
            </Reveal>
          </div>
        </article>
      </div>
    </section>
  );
}
