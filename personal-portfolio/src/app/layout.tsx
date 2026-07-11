import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteDescription =
  "Bilingual personal portfolio for Mai Long, focused on embodied intelligence, VLA models, computer vision, simulation, and web development.";

export const metadata: Metadata = {
  metadataBase: new URL("https://foreverlongdamai.github.io"),
  title: "Mai Long | Personal Portfolio",
  description: siteDescription,
  openGraph: {
    title: "Mai Long | Personal Portfolio",
    description: siteDescription,
    url: "/",
    siteName: "Mai Long",
    type: "website",
    locale: "en_US",
    alternateLocale: "zh_CN",
  },
  twitter: {
    card: "summary",
    title: "Mai Long | Personal Portfolio",
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#090d12] text-slate-100">{children}</body>
    </html>
  );
}
