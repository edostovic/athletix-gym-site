"use client";

import { useEffect, useRef } from "react";
import { Dumbbell, Users, Flame } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { img } from "@/lib/utils";

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
        <div className="reveal opacity-0 mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Zašto <span className="text-brand-gradient">ATHLETIX</span>?
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {siteConfig.fullDescription}
          </p>
        </div>

        {/* Split layout: image + text */}
        <div className="reveal opacity-0 grid md:grid-cols-2 gap-10 items-center mb-14">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img
                src={img("/athletix_gym_profile.jpg")}
                alt="ATHLETIX Gym Banovići"
                className="w-full h-auto object-cover"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            </div>
            {/* Decorative glow */}
            <div className="absolute -bottom-4 -right-4 w-48 h-48 rounded-full bg-brand-500/10 blur-[60px] pointer-events-none" />
          </div>

          <div className="space-y-5">
            <p className="text-muted-foreground leading-relaxed">
              Fitness Centar Athletix je vrhunski opremljeni, moderno dizajnirani fitness centar
              u Banovićima. Pružamo najkvalitetnije i najkompletnije usluge iz područja fitnessa
              za rekreativno i profesionalno bavljenje sportom.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Bilo da si početnik ili iskusan sportista, kod nas ćeš pronaći sve što ti treba
              za ozbiljan trening i stvarne rezultate. Nije potrebno iskustvo — svi nivoi su
              dobrodošli. Prvi trening je besplatan: dođi, probaj, pa odluči.
            </p>
            <div className="pt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-brand-500" />
              Pratite nas na Instagramu: {siteConfig.instagramHandle} —{' '}
              {siteConfig.instagramFollowers} pratilaca, {siteConfig.instagramPosts} objava
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="reveal opacity-0 grid gap-8 sm:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="card-hover text-center">
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
