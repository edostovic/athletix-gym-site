import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export function CTASection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-background via-background to-brand-950/20">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-400">
            <span className="h-2 w-2 rounded-full bg-brand-500 animate-pulse" />
            Otvoreno 6 dana u sedmici
          </div>

          <h2 className="text-3xl md:text-4xl font-bold">Kontaktiraj nas</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Zainteresovan/a si za članstvo, probni trening ili imaš pitanje? 
            Javi nam se — tu smo da ti pomognemo.
          </p>

          {/* Contact cards */}
          <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-brand-500/30 hover:bg-brand-500/5 transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center group-hover:bg-brand-500/20 transition-colors">
                <Phone className="h-6 w-6 text-brand-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Telefon</p>
                <p className="font-semibold text-foreground">{siteConfig.phone}</p>
              </div>
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-brand-500/30 hover:bg-brand-500/5 transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center group-hover:bg-brand-500/20 transition-colors">
                <Mail className="h-6 w-6 text-brand-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-semibold text-foreground">{siteConfig.email}</p>
              </div>
            </a>

            <div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-white/10 bg-white/[0.03]">
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-brand-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Adresa</p>
                <p className="font-semibold text-foreground">{siteConfig.address}</p>
              </div>
            </div>
          </div>

          {/* WhatsApp / direct call button */}
          <div className="mt-8">
            <a
              href={`https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 text-base transition-all duration-200 shadow-lg shadow-green-600/25"
            >
              <MessageCircle className="h-5 w-5" />
              Pošalji poruku na WhatsApp
            </a>
          </div>

          {/* Working hours */}
          <div className="mt-10 text-sm text-muted-foreground border border-white/10 rounded-xl p-4 max-w-lg mx-auto bg-white/[0.02]">
            <p className="font-semibold text-foreground mb-1">Radno vrijeme</p>
            <p>{siteConfig.hours}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
