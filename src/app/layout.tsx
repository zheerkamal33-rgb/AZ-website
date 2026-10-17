import type { Metadata } from "next";
import { Figtree, Syne } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Automated Zone — Product-minded engineering",
  description:
    "Automated Zone designs and builds websites, applications, and systems for anyone, anywhere. Founded by Zheer and Armand.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${syne.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
