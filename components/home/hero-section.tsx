"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { LiveHeroAnimation } from "./live-hero-animation"

export function HeroSection() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
          alt="Mountain Landscape"
          className="h-full w-full object-cover"
        />
        <LiveHeroAnimation />
      </div>

      <div className="container relative z-20 flex flex-col items-center text-center px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h1 className="text-4xl font-extrabold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Explore the Unseen. <br className="hidden md:inline" />
            <span className="text-primary">Protect the Wild.</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
            Based in Srinagar, we guide you through the majestic landscapes of Kashmir and Ladakh. Experience the thrill of the Himalayas with us.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 flex flex-col gap-4 sm:flex-row"
        >
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/register">
              Join the Club <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/20 hover:text-white">
            <Link href="/about">
              Our Mission
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
