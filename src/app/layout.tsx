import type { Metadata } from "next";
import { Figtree, Noto_Sans_Arabic, Syne } from "next/font/google";
import Script from "next/script";
import { LanguageProvider } from "@/components/language-provider";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Automated Zone — Studio of Zheer & Armand",
  description:
    "Automated Zone is Zheer and Armand — CS students who build websites, apps, and systems for anyone. Browse the work and say hello.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${figtree.variable} ${syne.variable} ${notoArabic.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var l=localStorage.getItem('az-lang');if(l==='ku'){var r=document.documentElement;r.lang='ckb';r.dir='rtl';r.dataset.lang='ku';}}catch(e){}})();`,
          }}
        />
        <Script src="/az-nav-boot.js" strategy="beforeInteractive" />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
