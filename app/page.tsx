"use client"

import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { DashboardSection } from "@/components/dashboard-section"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ServicesSection />
      <DashboardSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}
