import { Phone, Mail, MapPin, Map } from "lucide-react";
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
    href: `https://www.google.com/maps/search/${encodeURIComponent(siteConfig.address)}`,
    action: "Otvori mapu",
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
              const isClickable = !!item.href;
              const Wrapper = isClickable ? "a" : "div";
              return (
                <Wrapper
                  key={item.label}
                  {...(isClickable ? { href: item.href } : {})}
                  className={`flex flex-col items-center gap-3 p-6 rounded-2xl border border-white/10 bg-card select-none ${
                    isClickable
                      ? "hover:border-brand-500/30 hover:bg-brand-500/5 transition-all duration-200 group cursor-pointer"
                      : ""
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center transition-colors ${
                    isClickable ? "group-hover:bg-brand-500/20" : ""
                  }`}>
                    <item.icon className="h-6 w-6 text-brand-400" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-semibold text-foreground">{item.value}</p>
                  </div>
                  {item.action && (
                    <span className="text-xs text-brand-400 transition-colors">
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

          <div className="mt-4 text-center">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-brand-400 transition-colors"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600/10 text-blue-400">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </span>
              Fitness Centar Athletix na Facebooku · {siteConfig.facebookLikes} lajkova
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
