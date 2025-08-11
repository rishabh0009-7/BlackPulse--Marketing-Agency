"use client"

import { HeroSection } from "@/components/hero-section"
import { TrustedBySection } from "@/components/trusted-by-section"
import { ServicesSection } from "@/components/services-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { StarsBackground } from "@/components/ui/star-background"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <StarsBackground
        starDensity={0.0002}
        allStarsTwinkle={true}
        minTwinkleSpeed={0.5}
        maxTwinkleSpeed={1.5}
        className="fixed inset-0 z-0"
      />

      <div className="relative z-10">
        <HeroSection />
        <TrustedBySection />
        <ServicesSection />
        <CaseStudiesSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  )
}
