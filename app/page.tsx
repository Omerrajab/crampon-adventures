import type { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section"
import { FeaturesSection } from "@/components/home/features-section"
import { FeaturedAdventures } from "@/components/home/featured-adventures"
import { AboutPreview } from "@/components/home/about-preview"
import { CTASection } from "@/components/home/cta-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Crampon Adventures | Explore Kashmir & Ladakh Treks",
  description: "Join Crampon Adventures for unforgettable trekking experiences through the majestic Himalayas of Kashmir and Ladakh. Expert guides, eco-conscious expeditions.",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <FeaturedAdventures />
        <AboutPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
