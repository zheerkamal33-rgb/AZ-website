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
        <Capabilities />
        <UniBuild />
        <ForFun />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
