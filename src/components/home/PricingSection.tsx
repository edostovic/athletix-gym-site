"use client";

import { useEffect, useRef } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { pricing } from "@/lib/constants";

export function PricingSection() {
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
      id="pricing"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-background to-[#0a0a12]"
    >
      <div className="section-container">
        <div className="reveal opacity-0 mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Naši <span className="text-brand-gradient">planovi</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Izaberi plan koji ti najviše odgovara. Nema skrivenih troškova.
          </p>
        </div>

        <div className="reveal opacity-0 mt-12 grid gap-8 lg:grid-cols-3 items-start">
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-brand-500/50 bg-brand-500/5 shadow-[0_0_40px_-10px_rgba(249,115,22,0.3)] scale-105 lg:scale-110"
                  : "border-white/10 bg-card hover:border-white/20"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gradient text-white font-bold border-0">
                  Najpopularniji
                </Badge>
              )}

              <h3 className="text-lg font-bold text-foreground">
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-black text-foreground">
                  {plan.price}
                </span>
                <span className="text-sm text-muted-foreground">
                  /{plan.period}
                </span>
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`mt-8 w-full font-bold ${
                  plan.popular
                    ? "bg-brand-gradient text-white hover:opacity-90 shadow-lg shadow-brand-500/25"
                    : "border-white/20 text-foreground hover:bg-white/5"
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                Učlani se
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
