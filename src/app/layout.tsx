import type { Metadata } from "next";
import { Figtree, Noto_Sans_Arabic, Syne } from "next/font/google";
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
    "Automated Zone is Zheer and Armand — CS graduates who ship a delivery operations platform and AZ Market Cashier. Browse the work and get in touch.",
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
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
