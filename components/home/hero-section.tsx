"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Mountain, Compass, MapPin } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import { WeatherAnimation } from "./weather-animation"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section 
      ref={containerRef}
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/40 to-transparent z-10" />
        
        {/* Main Background Image */}
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
          alt="Majestic Mountain Landscape"
          className="h-full w-full object-cover"
        />
        
        {/* Dynamic Weather Animation */}
        <WeatherAnimation />
        
        {/* Noise Texture */}
        <div className="absolute inset-0 z-20 opacity-[0.015] mix-blend-overlay" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
          }}
        />
      </motion.div>

      {/* Floating Elements */}
      <motion.div 
        className="absolute top-[15%] right-[10%] z-30 hidden lg:block"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        <div className="glass glass-border rounded-2xl p-4 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
              <Mountain className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-white/60">Elevation</p>
              <p className="font-semibold text-white">4,200m</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-[25%] left-[8%] z-30 hidden lg:block"
        animate={{ 
          y: [0, 10, 0],
          rotate: [0, -3, 0]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1 
        }}
      >
        <div className="glass glass-border rounded-2xl p-4 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/20">
              <Compass className="h-5 w-5 text-amber-400" />
            </div>
            <div>
              <p className="text-xs text-white/60">Location</p>
              <p className="font-semibold text-white">Kashmir</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        style={{ opacity }}
        className="container relative z-20 flex flex-col items-center text-center px-4 md:px-6"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm mb-8 mt-20">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-white">Based in Srinagar, Kashmir</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-6"
        >
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block">Explore the</span>
            <span className="block mt-2 text-gradient-gold italic">Unseen Peaks</span>
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg text-white/80 md:text-xl leading-relaxed font-light">
            Journey through the majestic Himalayas of Kashmir and Ladakh. 
            Experience pristine alpine lakes, untouched meadows, and adventures 
            that will stay with you forever.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button 
            asChild 
            size="lg" 
            className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base rounded-full shadow-lg shadow-primary/25"
          >
            <Link href="/adventures">
              <span className="relative z-10 flex items-center gap-2">
                Explore Adventures 
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Button>
          <Button 
            asChild 
            size="lg" 
            variant="outline" 
            className="bg-white/10 text-white border-white/30 hover:bg-white/20 hover:text-white px-8 py-6 text-base rounded-full backdrop-blur-sm"
          >
            <Link href="/register">
              Join the Club
            </Link>
          </Button>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {[
            { value: "50+", label: "Treks Organized" },
            { value: "1200+", label: "Happy Trekkers" },
            { value: "6", label: "Years Experience" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-white/60 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/50 uppercase tracking-widest">Scroll</span>
          <div className="h-12 w-6 rounded-full border-2 border-white/30 p-1">
            <motion.div 
              className="h-2 w-2 rounded-full bg-white"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
