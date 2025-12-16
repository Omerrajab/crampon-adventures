"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 gradient-bg" />
      
      {/* Overlay Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mountains" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 100L25 50L50 80L75 30L100 100Z" fill="currentColor" opacity="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mountains)"/>
        </svg>
      </div>
      
      {/* Floating Orbs */}
      <motion.div 
        className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-80 h-80 bg-black/10 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container relative px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-amber-300" />
              <span className="text-sm font-medium text-white">Start Your Journey Today</span>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 max-w-4xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight">
              Ready to Conquer{" "}
              <span className="relative inline-block">
                <span className="relative z-10 italic">New Heights?</span>
                <motion.span 
                  className="absolute bottom-2 left-0 right-0 h-3 bg-amber-400/30 -skew-x-3 z-0"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg md:text-xl text-white/80 leading-relaxed">
              Join Crampon Adventures and become part of a community that values 
              exploration, conservation, and unforgettable experiences in the Himalayas.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Button 
              asChild 
              size="lg" 
              className="group bg-white text-teal-700 hover:bg-white/90 rounded-full px-8 py-6 text-base font-semibold shadow-xl shadow-black/20"
            >
              <Link href="/register">
                Join Now — It's Free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 rounded-full px-8 py-6 text-base"
            >
              <Link href="/adventures">
                View Adventures
              </Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 pt-8 text-white/60 text-sm"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>No membership fees</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Certified guides</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>24/7 support</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
