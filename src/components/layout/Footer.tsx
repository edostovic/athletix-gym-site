"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

/* Inline SVG icons for social media (not available in lucide-react) */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}

const footerLinks = [
  { label: "Početna", href: "#hero" },
  { label: "O nama", href: "#about" },
  { label: "Treneri", href: "#trainers" },
  { label: "Cenovnik", href: "#pricing" },
  { label: "Kontakt", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a12]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-black tracking-tight">
              <span className="text-brand-gradient">ATHLETIX</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {siteConfig.description}
            </p>
            <p className="text-xs text-brand-400 font-medium">
              &quot;{siteConfig.tagline}&quot;
            </p>
            <p className="text-xs text-muted-foreground">
              {siteConfig.instagramHandle} · {siteConfig.instagramFollowers} pratilaca
            </p>
            {/* Social */}
            <div className="flex gap-3 pt-2">
              <a
                href={siteConfig.social.instagram}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-muted-foreground transition-colors hover:bg-brand-500/20 hover:text-brand-400"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-muted-foreground transition-colors hover:bg-brand-500/20 hover:text-brand-400"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.youtube}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-muted-foreground transition-colors hover:bg-brand-500/20 hover:text-brand-400"
                aria-label="YouTube"
              >
                <YoutubeIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Radno vrijeme */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
              Radno vrijeme
            </h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><span className="text-brand-400 font-medium">Pon - Pet:</span> 06:00 - 22:00</p>
              <p><span className="text-brand-400 font-medium">Sub:</span> 08:00 - 20:00</p>
              <p><span className="text-brand-400 font-medium">Ned:</span> Zatvoreno</p>
            </div>
            <div className="space-y-2 pt-2 text-sm">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-brand-400 transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-brand-400 transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                {siteConfig.email}
              </a>
              <p className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                {siteConfig.address}
              </p>
            </div>
          </div>

          {/* Navigacija */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
              Navigacija
            </h3>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-brand-400"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
              Newsletter
            </h3>
            <p className="text-sm text-muted-foreground">
              Budi u toku sa našim promocijama i novostima.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
            >
              <Input
                type="email"
                placeholder="tvoj@email.com"
                className="h-10 bg-white/5 border-white/10"
              />
              <Button
                type="submit"
                className="h-10 bg-brand-gradient text-white font-semibold hover:opacity-90 shrink-0"
              >
                Pošalji
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/5 pt-6 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteConfig.fullName}. Sva prava
          zadržana.
        </div>
      </div>
    </footer>
  );
}
