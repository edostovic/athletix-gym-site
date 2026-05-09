import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { FacilitiesGrid } from "@/components/home/FacilitiesGrid";
import { TrainersSection } from "@/components/home/TrainersSection";
import { PricingSection } from "@/components/home/PricingSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FacilitiesGrid />
      <TrainersSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
