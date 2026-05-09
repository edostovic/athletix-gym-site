import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";

export function CTASection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/5 py-24"
    >
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-500/15 blur-[100px]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
          Spremni za <span className="text-brand-gradient">promjenu</span>?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Pridruži se ATHLETIX zajednici danas i započni svoje putovanje ka
          boljoj verziji sebe.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-brand-gradient text-white font-bold text-base px-10 py-6 hover:opacity-90 shadow-xl shadow-brand-500/30"
          >
            Učlani se odmah
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/20 text-foreground text-base px-10 py-6 hover:bg-white/5"
          >
            Kontaktiraj nas
          </Button>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          {siteConfig.fullName} — {siteConfig.address} | {siteConfig.phone}
        </p>
      </div>
    </section>
  );
}
