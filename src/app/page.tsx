import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { HowWeWork } from "@/components/how-we-work";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { WhatWeBuild } from "@/components/what-we-build";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <WhatWeBuild />
        <HowWeWork />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
