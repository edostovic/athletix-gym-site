"use client";

import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Send, Check, Loader2, Map } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/button";

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

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Direct mailto with form data — reliable, no backend needed
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const message = data.get("message");

    const body = [
      `Ime: ${name}`,
      `Email: ${email}`,
      `Telefon: ${phone || "nije naveden"}`,
      "",
      `Poruka:`,
      message,
    ].join("\n");

    window.location.href = `mailto:${siteConfig.email}?subject=Poruka sa Athletix sajta od ${name}&body=${encodeURIComponent(body)}`;
    setStatus("sent");

    setTimeout(() => setStatus("idle"), 4000);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Ime i prezime"
          required
          className="w-full h-12 rounded-xl border border-white/10 bg-card px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand-500/50 transition-colors"
        />
        <input
          type="email"
          name="email"
          placeholder="Email adresa"
          required
          className="w-full h-12 rounded-xl border border-white/10 bg-card px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand-500/50 transition-colors"
        />
      </div>
      <input
        type="tel"
        name="phone"
        placeholder="Broj telefona (opcionalno)"
        className="w-full h-12 rounded-xl border border-white/10 bg-card px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand-500/50 transition-colors"
      />
      <textarea
        name="message"
        placeholder="Tvoja poruka..."
        rows={4}
        required
        className="w-full rounded-xl border border-white/10 bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand-500/50 transition-colors resize-none"
      />
      <Button
        type="submit"
        disabled={status === "sending" || status === "sent"}
        className="w-full bg-brand-gradient text-white font-bold hover:opacity-90 shadow-lg shadow-brand-500/25 h-12"
      >
        {status === "sending" ? (
          <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Slanje...</>
        ) : status === "sent" ? (
          <><Check className="mr-2 h-4 w-4" /> Poslano!</>
        ) : (
          <><Send className="mr-2 h-4 w-4" /> Pošalji poruku</>
        )}
      </Button>
    </form>
  );
}

export function CTASection() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Kontakt</h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Za sve informacije o članstvu, probnom treningu ili bilo koje pitanje — tu smo.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {contactMethods.map((item) => {
              const isClickable = !!item.href;
              const Wrapper = isClickable ? "a" : "div";
              return (
                <Wrapper
                  key={item.label}
                  {...(isClickable ? { href: item.href, target: "_blank", rel: "noopener noreferrer" } : {})}
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

          {/* Contact Form */}
          <div className="mt-10 max-w-lg mx-auto">
            <h3 className="text-lg font-bold text-center mb-6">Pošalji poruku</h3>
            <ContactForm />
          </div>

          {/* Embedded Google Map — no API key needed */}
          <div className="mt-10 rounded-2xl overflow-hidden border border-white/10 h-64">
            <iframe
              src={`https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.address)}&output=embed&z=15`}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Athletix na Google Maps"
            />
          </div>

          <div className="mt-6 text-sm text-muted-foreground border border-white/10 rounded-xl p-4 max-w-md mx-auto bg-card text-center">
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
