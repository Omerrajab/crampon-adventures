import type { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section"
import { FeaturesSection } from "@/components/home/features-section"
import { AboutPreview } from "@/components/home/about-preview"
import { CTASection } from "@/components/home/cta-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Home | Crampon Adventures",
  description: "Welcome to Crampon Adventures. Discover your next trekking experience with us.",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <AboutPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
