"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Users, Award } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { img } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const stats = [
  { value: `+${siteConfig.instagramFollowers}`, label: "Pratilaca", icon: Users },
  { value: `${siteConfig.instagramPosts}+`, label: "Objave", icon: Users },
  { value: "6+", label: "Godina", icon: Award },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gym background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${img("/athletix_main.jpg")})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/40 to-background/80" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
        {/* Tagline */}
        <div className="reveal opacity-0 mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-400">
          <span className="h-2 w-2 rounded-full bg-brand-500 animate-pulse" />
          {siteConfig.location}
        </div>

        {/* Headline */}
        <h1 className="reveal opacity-0 text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05]">
          <span className="text-foreground">BEZ IZGOVORA.</span>
          <br />
          <span className="text-brand-gradient">SAMO REZULTATI.</span>
        </h1>

        {/* Subheadline */}
        <p className="reveal opacity-0 mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed">
          {siteConfig.fullName} — moderna teretana u {siteConfig.location} sa
          vrhunskim trenerima, najnovijom opremom i motivirajućom atmosferom
          koja će te pokrenuti.
        </p>

        {/* CTAs */}
        <div className="reveal opacity-0 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="#contact">
            <Button
              size="lg"
              className="bg-brand-gradient text-white font-bold text-base px-8 py-6 hover:opacity-90 shadow-xl shadow-brand-500/30"
            >
              Kontaktiraj nas
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link
            href="#about"
            className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-transparent px-8 py-6 text-base font-medium text-foreground transition-colors hover:bg-white/5"
          >
            Saznaj više
          </Link>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-brand-500/30 bg-brand-500/5 px-8 py-6 text-base font-medium text-brand-400 transition-colors hover:bg-brand-500/10"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2 h-5 w-5">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            Instagram
          </a>
        </div>

        {/* Stats */}
        <div className="reveal opacity-0 mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-10 max-w-lg mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="mx-auto h-5 w-5 text-brand-400 mb-2" />
              <div className="text-2xl font-black text-foreground">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
