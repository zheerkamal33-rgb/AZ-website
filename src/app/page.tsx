import { About } from "@/components/about";
import { Capabilities } from "@/components/capabilities";
import { Contact } from "@/components/contact";
import { ForFun } from "@/components/for-fun";
import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/selected-work";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { UniBuild } from "@/components/uni-build";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <SelectedWork />
        <div className="az-section-blend az-blend-to-white" aria-hidden="true" />
        <Capabilities />
        <ForFun />
        <UniBuild />
        <About />
        <div className="az-section-blend az-blend-to-black" aria-hidden="true" />
        <Contact />
      </main>
      <div className="az-section-blend az-blend-to-white" aria-hidden="true" />
      <SiteFooter />
    </>
  );
}
