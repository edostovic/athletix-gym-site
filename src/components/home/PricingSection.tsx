import { Check, Phone, Mail } from "lucide-react";
import { pricing, siteConfig } from "@/lib/constants";
import { img } from "@/lib/utils";

const planIcons = ["🕐", "📆", "📅"];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Gym background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-[0.07]"
        style={{ backgroundImage: `url(${img("/insta_post_3.jpg")})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      {/* Subtle background accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-brand-500/5 blur-[120px] pointer-events-none" />

      <div className="section-container relative">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">Članarine</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Pregled cijena i šta je uključeno. Za upis ili probni trening, kontaktirajte nas.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {pricing.map((plan, i) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-6 transition-all duration-200 ${
            plan.popular
                  ? "border-brand-500 bg-brand-500/[0.03] shadow-lg shadow-brand-500/10"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                {/* Icon + Name + Price */}
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <div className="text-2xl shrink-0">{planIcons[i]}</div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-lg">{plan.name}</h3>
{plan.popular && (
                        <span className="text-xs font-semibold text-brand-500 bg-brand-500/10 px-2.5 py-0.5 rounded-full">
                          Najtraženija
                        </span>
                      )}
                    </div>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-2xl font-black">{plan.price}</span>
                      <span className="text-sm text-muted-foreground">/{plan.period}</span>
                    </div>
                  </div>
                </div>

                {/* Features (inline on desktop) */}
                <div className="hidden sm:flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  {plan.features.slice(0, 3).map((f) => (
                    <span key={f} className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-brand-500 shrink-0" />
                      {f}
                    </span>
                  ))}
                  {plan.features.length > 3 && (
                    <span className="text-xs text-muted-foreground/60">
                      +{plan.features.length - 3} još
                    </span>
                  )}
                </div>
              </div>

              {/* Features (mobile) */}
              <div className="sm:hidden mt-3 flex flex-wrap gap-x-3 gap-y-1.5 text-sm text-muted-foreground">
                {plan.features.map((f) => (
                  <span key={f} className="flex items-center gap-1">
                    <Check className="h-3 w-3 text-brand-500 shrink-0" />
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="mt-10 text-center max-w-3xl mx-auto">
          <div className="rounded-2xl bg-gradient-to-r from-brand-500/10 via-brand-500/5 to-brand-500/10 border border-brand-500/20 p-6">
            <p className="text-sm font-medium mb-4">
              Prvi trening besplatan! Javi se za više informacija ili dogovori probni termin.
            </p>
            <div className="flex items-center justify-center gap-6">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 transition-colors font-semibold text-sm"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
              <span className="text-muted-foreground/30">|</span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 transition-colors font-semibold text-sm"
              >
                <Mail className="h-4 w-4" />
                Pošalji email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
