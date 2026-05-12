import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Phone, Mail, Info } from "lucide-react";
import { pricing, siteConfig } from "@/lib/constants";

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Cjenovnik</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Transparentne cijene — bez skrivenih troškova. Za upis ili probni trening, javi nam se putem telefona ili emaila.
          </p>
        </div>

        {/* Pricing cards — purely informational */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricing.map((plan) => (
            <Card
              key={plan.name}
              className={`relative p-8 flex flex-col ${
                plan.tag === "Najtraženija opcija"
                  ? "border-brand-500 shadow-xl shadow-brand-500/10 scale-105"
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

              {/* Price display */}
              <div className="mb-6 text-center">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="mt-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">/{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-brand-500 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Contact prompt instead of subscribe button */}
              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <p className="text-xs text-muted-foreground mb-3 flex items-center justify-center gap-1.5">
                  <Info className="h-3 w-3" />
                  Za upit ili prijavu, kontaktiraj nas
                </p>
                <div className="flex items-center justify-center gap-4 text-sm">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-center gap-1.5 text-brand-400 hover:text-brand-300 transition-colors font-medium"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    {siteConfig.phone}
                  </a>
                  <span className="text-muted-foreground">|</span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-1.5 text-brand-400 hover:text-brand-300 transition-colors font-medium"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    Pošalji email
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Info note at bottom */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground border border-white/10 rounded-xl p-4 max-w-2xl mx-auto bg-white/[0.02]">
            <span className="text-brand-400 font-medium">Prvi trening besplatan!</span> Nije potrebno iskustvo — dođi, probaj, pa odluči. 
            Svi nivoi su dobrodošli. Javi se na {siteConfig.phone} ili putem emaila za više informacija.
          </p>
        </div>
      </div>
    </section>
  );
}
