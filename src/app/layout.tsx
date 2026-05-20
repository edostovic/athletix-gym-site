import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fitness Centar Athletix Banovići — Bez izgovora. Samo rezultati.",
  description: siteConfig.fullDescription,
  keywords: [
    "teretana Banovići",
    "fitness centar Banovići",
    "Athletix",
    "gym Banovići",
    "personalni trening",
    "fitness Bosna",
  ],
  openGraph: {
    title: `${siteConfig.fullName} — ${siteConfig.tagline}`,
    description: siteConfig.fullDescription,
    url: "https://athletix-gym.ba",
    siteName: siteConfig.fullName,
    locale: "bs_BA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bs"
      className={`${inter.variable} h-full antialiased dark`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
