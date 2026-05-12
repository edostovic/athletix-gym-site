"use client";

import { useEffect, useRef } from "react";
import { trainers } from "@/lib/constants";
import { img } from "@/lib/utils";

export function TrainersSection() {
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
    <section id="trainers" ref={sectionRef} className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.04]"
        style={{ backgroundImage: `url(${img("/insta_post_4.jpg")})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background/85" />
      <div className="section-container">
        <div className="reveal opacity-0 mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Upoznaj naše <span className="text-brand-gradient">trenere</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Stručni tim posvećen tvojim rezultatima.
          </p>
        </div>

        <div className="reveal opacity-0 mt-12 grid gap-8 sm:grid-cols-3">
          {trainers.map((trainer) => (
            <div
              key={trainer.name}
              className="card-hover text-center"
            >
              {/* Trainer photo */}
              <div className="mx-auto mb-5 h-28 w-28 rounded-full overflow-hidden border-2 border-brand-500/30">
                <img
                  src={img(trainer.image)}
                  alt={trainer.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    target.parentElement!.classList.add("bg-gradient-to-br", "from-brand-500/30", "to-brand-700/30");
                  }}
                />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                {trainer.name}
              </h3>
              <p className="text-sm font-medium text-brand-400">
                {trainer.title}
              </p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {trainer.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
