"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#hero", label: "Početna" },
  { href: "#about", label: "O nama" },
  { href: "#trainers", label: "Treneri" },
  { href: "#pricing", label: "Cenovnik" },
  { href: "#contact", label: "Kontakt" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="size-8 rounded-lg bg-brand-gradient flex items-center justify-center font-bold text-white text-sm">
              A
            </div>
            <span className="font-bold text-lg">ATHLETIX</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link href="#contact">
              <Button className="bg-brand-gradient text-white font-bold hover:opacity-90 shadow-lg shadow-brand-500/25">
                Učlani se
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-background/98 backdrop-blur-md">
          <nav className="section-container py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link href="#contact" onClick={() => setMobileOpen(false)}>
              <Button className="w-full bg-brand-gradient text-white font-bold hover:opacity-90">
                Učlani se
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
