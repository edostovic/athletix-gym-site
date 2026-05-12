"use client";

import { useEffect, useRef } from "react";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/constants";
import { img } from "@/lib/utils";

export function TestimonialsSection() {
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
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.04]"
        style={{ backgroundImage: `url(${img("/insta_post_6.jpg")})` }}
      />
      <div className="absolute inset-0 bg-background/90" />
      <div className="section-container">
        <div className="reveal opacity-0 mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Šta članovi <span className="text-brand-gradient">kažu</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Istinske priče naših članova koji su napravili promjenu.
          </p>
        </div>

        <div className="reveal opacity-0 mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="card-base">
              <Quote className="h-8 w-8 text-brand-500/30 mb-3" />
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-4 border-t border-white/10 pt-4">
                <div className="font-bold text-foreground text-sm">
                  {testimonial.author}
                </div>
                <div className="text-xs text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
