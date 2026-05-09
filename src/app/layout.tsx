import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ATHLETIX Gym — Bez izgovora. Samo rezultati.",
  description:
    "Moderna teretana u Banovićima sa vrhunskim trenerima i opremom. Pridruži se ATHLETIX zajednici danas!",
  openGraph: {
    title: "ATHLETIX Gym — Bez izgovora. Samo rezultati.",
    description:
      "Moderna teretana u Banovićima sa vrhunskim trenerima i opremom.",
    locale: "bs_BA",
    type: "website",
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
