import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import Link from "next/link";
import { pricing } from "@/lib/constants";

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Cjenovnik</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Izaberi plan koji ti najviše odgovara. Svi planovi uključuju pristup vrhunskoj opremi.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricing.map((plan) => (
            <Card
              key={plan.name}
              className={`relative p-8 flex flex-col ${
                plan.popular ? "border-brand-500 shadow-xl shadow-brand-500/10 scale-105" : ""
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gradient text-white border-0 px-6 py-1">
                  Najpopularniji
                </Badge>
              )}
              <div className="mb-6">
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
              <Link href="#contact" className="mt-8 block">
                <Button
                  className={`w-full font-bold ${
                    plan.popular
                      ? "bg-brand-gradient text-white hover:opacity-90 shadow-lg shadow-brand-500/25"
                      : "border-white/20 text-foreground hover:bg-white/5"
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Učlani se
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
