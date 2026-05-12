import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Phone, Mail } from "lucide-react";
import { pricing, siteConfig } from "@/lib/constants";

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Cjenovnik</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Transparentne cijene — bez skrivenih troškova. Prvi trening besplatan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricing.map((plan) => (
            <Card
              key={plan.name}
              className={`relative p-8 flex flex-col ${
                plan.tag === "Najtraženija opcija"
                  ? "border-brand-500 shadow-xl shadow-brand-500/10 md:scale-105"
                  : ""
              }`}
            >
              {plan.tag && (
                <Badge
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 border-0 px-6 py-1 ${
                    plan.tag === "Najtraženija opcija"
                      ? "bg-brand-gradient text-white"
                      : "bg-white/10 text-muted-foreground"
                  }`}
                >
                  {plan.tag}
                </Badge>
              )}

              <div className="mb-6 text-center">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="mt-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-brand-500 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Single contact prompt below all cards */}
        <div className="mt-10 text-center border border-white/10 rounded-2xl p-6 max-w-xl mx-auto bg-white/[0.02]">
          <p className="text-sm text-muted-foreground mb-4">
            Zainteresovan/a si? Javi nam se na broj ili email — dogovori probni trening ili upit za članstvo.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 transition-colors font-semibold"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
            <span className="text-muted-foreground/40">|</span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 transition-colors font-semibold"
            >
              <Mail className="h-4 w-4" />
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
