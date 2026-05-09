"use client";

import { useEffect, useRef } from "react";
import { Dumbbell, Users, Flame } from "lucide-react";
import { siteConfig } from "@/lib/constants";

const features = [
  {
    icon: Dumbbell,
    title: "Moderna oprema",
    description:
      "Najnovije sprave i slobodni tegovi vrhunskih brendova za maksimalne rezultate.",
  },
  {
    icon: Users,
    title: "Stručni treneri",
    description:
      "Certificirani personalni treneri sa dugogodišnjim iskustvom koji će te voditi ka cilju.",
  },
  {
    icon: Flame,
    title: "Motivirajuća atmosfera",
    description:
      "Energično okruženje koje te gura naprijed. Svaki trening je korak ka boljoj verziji sebe.",
  },
];

export function AboutSection() {
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
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding">
      <div className="section-container">
        {/* Header */}
        <div className="reveal opacity-0 mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Zašto <span className="text-brand-gradient">ATHLETIX</span>?
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {siteConfig.fullName} je više od teretane. Mi smo zajednica
            posvećena tvojoj transformaciji. Vrhunska oprema, stručni treneri i
            atmosfera koja inspiriše — sve na jednom mjestu.
          </p>
        </div>

        {/* Features Grid */}
        <div className="reveal opacity-0 mt-12 grid gap-8 sm:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card-hover text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-500/10">
                <feature.icon className="h-7 w-7 text-brand-400" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
