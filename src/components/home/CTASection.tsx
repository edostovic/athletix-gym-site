import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";

export function CTASection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-background via-background to-brand-950/20">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Spremni za promjenu?</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Pridruži se ATHLETIX zajednici danas i započni svoje putovanje ka boljoj verziji sebe.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#contact">
              <Button
                size="lg"
                className="bg-brand-gradient text-white font-bold text-base px-10 py-6 hover:opacity-90 shadow-xl shadow-brand-500/30"
              >
                Učlani se odmah
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="#contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-foreground text-base px-10 py-6 hover:bg-white/5"
              >
                Kontaktiraj nas
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            {siteConfig.fullName} — {siteConfig.address} | {siteConfig.phone}
          </p>
        </div>
      </div>
    </section>
  );
}
