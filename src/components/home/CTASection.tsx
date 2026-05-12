import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/constants";

const contactMethods = [
  {
    icon: Phone,
    label: "Telefon",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
    action: "Pozovite nas",
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    action: "Pošaljite poruku",
  },
  {
    icon: MapPin,
    label: "Adresa",
    value: siteConfig.address,
    href: null,
    action: null,
  },
];

export function CTASection() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Kontakt</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Za sve informacije o članstvu, probnom treningu ili bilo koje pitanje — tu smo.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {contactMethods.map((item) => {
              const Wrapper = item.href ? "a" : "div";
              return (
                <Wrapper
                  key={item.label}
                  {...(item.href ? { href: item.href } : {})}
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-white/10 bg-card hover:border-brand-500/30 hover:bg-brand-500/5 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center group-hover:bg-brand-500/20 transition-colors">
                    <item.icon className="h-6 w-6 text-brand-400" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-semibold text-foreground">{item.value}</p>
                  </div>
                  {item.action && (
                    <span className="text-xs text-brand-400 group-hover:text-brand-300 transition-colors">
                      {item.action} →
                    </span>
                  )}
                </Wrapper>
              );
            })}
          </div>

          <div className="mt-10 text-sm text-muted-foreground border border-white/10 rounded-xl p-4 max-w-md mx-auto bg-card">
            <p className="font-semibold text-foreground mb-1">Radno vrijeme</p>
            <p>{siteConfig.hours}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
