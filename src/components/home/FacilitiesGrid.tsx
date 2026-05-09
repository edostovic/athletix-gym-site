"use client";

import { useEffect, useRef } from "react";
import { facilities } from "@/lib/constants";

export function FacilitiesGrid() {
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
    <section
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-background to-[#0a0a12]"
    >
      <div className="section-container">
        <div className="reveal opacity-0 mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Naši <span className="text-brand-gradient">sadržaji</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Sve što ti treba za kompletan trening na jednom mjestu.
          </p>
        </div>

        <div className="reveal opacity-0 mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => (
            <div
              key={facility.name}
              className="card-hover flex items-start gap-4"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-2xl">
                {facility.icon}
              </span>
              <div>
                <h3 className="font-bold text-foreground">{facility.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {facility.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
