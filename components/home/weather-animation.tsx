"use client"

import { useEffect, useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useKashmirWeather, WeatherCondition, Season } from "@/lib/hooks/use-kashmir-weather"
import { Cloud, CloudRain, Snowflake, Sun, Wind } from "lucide-react"

interface Particle {
  id: number
  left: number
  duration: number
  delay: number
  size: number
  rotation?: number
  opacity?: number
}

// Generate random particles
function generateParticles(count: number, sizeRange: [number, number] = [4, 10]): Particle[] {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    duration: Math.random() * 5 + 5,
    delay: Math.random() * 5,
    size: Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0],
    rotation: Math.random() * 360,
    opacity: Math.random() * 0.5 + 0.5
  }))
}

// Snow Animation Component
function SnowAnimation({ intensity = "normal" }: { intensity?: "light" | "normal" | "heavy" }) {
  const count = intensity === "heavy" ? 80 : intensity === "light" ? 30 : 50
  const particles = useMemo(() => generateParticles(count, [3, 8]), [count])

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${particle.left}%`,
            width: particle.size,
            height: particle.size,
            top: -10,
            boxShadow: "0 0 10px rgba(255,255,255,0.8)",
          }}
          animate={{
            y: ["0vh", "100vh"],
            x: [`0px`, `${Math.sin(particle.id) * 30}px`, `${Math.sin(particle.id + 1) * -20}px`],
            opacity: [0, 0.9, 0.7, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}
      
      {/* Snow accumulation effect at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/20 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />
    </>
  )
}

// Rain Animation Component
function RainAnimation({ intensity = "normal" }: { intensity?: "light" | "normal" | "heavy" }) {
  const count = intensity === "heavy" ? 100 : intensity === "light" ? 40 : 70
  const particles = useMemo(() => generateParticles(count, [2, 4]), [count])

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-blue-200/60"
          style={{
            left: `${particle.left}%`,
            width: 2,
            height: particle.size * 4,
            top: -20,
            borderRadius: "50%",
          }}
          animate={{
            y: ["0vh", "100vh"],
            opacity: [0, 0.7, 0.5, 0],
          }}
          transition={{
            duration: particle.duration * 0.4,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}
      
      {/* Rain splash effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-20"
        style={{
          background: "linear-gradient(to top, rgba(100,150,200,0.1), transparent)",
        }}
      />
    </>
  )
}

// Autumn Leaves Animation Component
function AutumnLeavesAnimation() {
  const particles = useMemo(() => generateParticles(25, [15, 30]), [])
  const leafColors = ["#D2691E", "#CD853F", "#DEB887", "#B8860B", "#8B4513", "#A0522D", "#F4A460"]

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.left}%`,
            top: -30,
          }}
        >
          <motion.svg
            width={particle.size}
            height={particle.size}
            viewBox="0 0 24 24"
            fill={leafColors[particle.id % leafColors.length]}
            style={{ opacity: particle.opacity }}
            animate={{
              y: ["0vh", "100vh"],
              x: [
                "0px",
                `${Math.sin(particle.id) * 100}px`,
                `${Math.sin(particle.id + 2) * -80}px`,
                `${Math.sin(particle.id + 4) * 60}px`,
              ],
              rotate: [0, 360, 720, 1080],
            }}
            transition={{
              duration: particle.duration * 1.5,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          >
            {/* Chinar leaf shape (iconic Kashmir leaf) */}
            <path d="M12 2C12 2 4 10 4 14C4 18 8 22 12 22C16 22 20 18 20 14C20 10 12 2 12 2ZM12 4C12 4 6 10 6 14C6 16.5 8.5 20 12 20C15.5 20 18 16.5 18 14C18 10 12 4 12 4Z" />
            <path d="M12 6V18M8 10L12 14L16 10" strokeWidth="0.5" stroke="currentColor" fill="none" />
          </motion.svg>
        </motion.div>
      ))}
    </>
  )
}

// Sunny/Clear Animation Component
function SunnyAnimation() {
  const particles = useMemo(() => generateParticles(15, [3, 6]), [])

  return (
    <>
      {/* Sun rays */}
      <motion.div
        className="absolute top-10 right-10 w-40 h-40"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-radial from-yellow-200/40 via-orange-200/20 to-transparent blur-2xl" />
      </motion.div>

      {/* Floating dust particles / pollen */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-yellow-200/50"
          style={{
            left: `${particle.left}%`,
            top: `${Math.random() * 100}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-15, 15, -15],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  )
}

// Mist/Fog Animation Component
function MistAnimation() {
  return (
    <>
      {/* Multiple fog layers */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-full h-[60%] blur-3xl"
          style={{
            background: `linear-gradient(to top, rgba(255,255,255,${0.15 + i * 0.05}), transparent)`,
            bottom: `${i * 10}%`,
          }}
          animate={{
            x: [i % 2 === 0 ? -50 : 50, i % 2 === 0 ? 50 : -50],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}

      {/* Rolling fog clouds */}
      <motion.div
        className="absolute bottom-0 left-0 w-[150%] h-[40%]"
        style={{
          background: "linear-gradient(to top, rgba(255,255,255,0.3), transparent)",
          filter: "blur(40px)",
        }}
        animate={{
          x: ["-25%", "0%", "-25%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  )
}

// Clouds Animation Component
function CloudsAnimation() {
  const clouds = useMemo(() => [
    { id: 1, size: 200, top: 10, duration: 60, delay: 0 },
    { id: 2, size: 150, top: 25, duration: 45, delay: 10 },
    { id: 3, size: 180, top: 5, duration: 55, delay: 20 },
    { id: 4, size: 120, top: 35, duration: 50, delay: 30 },
  ], [])

  return (
    <>
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          className="absolute"
          style={{
            top: `${cloud.top}%`,
            width: cloud.size,
            height: cloud.size * 0.5,
          }}
          initial={{ left: "-20%" }}
          animate={{ left: "120%" }}
          transition={{
            duration: cloud.duration,
            repeat: Infinity,
            delay: cloud.delay,
            ease: "linear",
          }}
        >
          <div 
            className="w-full h-full rounded-full bg-white/20 blur-xl"
            style={{
              boxShadow: "0 0 60px rgba(255,255,255,0.3)",
            }}
          />
        </motion.div>
      ))}
    </>
  )
}

// Weather Badge Component
function WeatherBadge({ 
  condition, 
  temperature, 
  description 
}: { 
  condition: WeatherCondition
  temperature: number
  description: string
}) {
  const getIcon = () => {
    switch (condition) {
      case "snow": return <Snowflake className="h-4 w-4" />
      case "rain":
      case "drizzle":
      case "thunderstorm": return <CloudRain className="h-4 w-4" />
      case "clouds": return <Cloud className="h-4 w-4" />
      case "mist": return <Wind className="h-4 w-4" />
      case "clear": return <Sun className="h-4 w-4" />
      default: return <Cloud className="h-4 w-4" />
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="absolute top-[15%] left-[8%] z-30 hidden lg:block"
    >
      <div className="glass glass-border rounded-2xl p-4 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
            {getIcon()}
          </div>
          <div>
            <p className="text-xs text-white/60">Kashmir Weather</p>
            <p className="font-semibold text-white">{temperature}°C</p>
            <p className="text-xs text-white/50 capitalize">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Main Weather Animation Component
export function WeatherAnimation() {
  const { weather, loading } = useKashmirWeather()
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Determine which animation to show based on weather
  const renderAnimation = () => {
    if (!weather) {
      // Default to snow while loading (winter vibes)
      return <SnowAnimation intensity="light" />
    }

    switch (weather.condition) {
      case "snow":
        return <SnowAnimation intensity={weather.temperature < -5 ? "heavy" : "normal"} />
      case "rain":
        return <RainAnimation intensity="normal" />
      case "drizzle":
        return <RainAnimation intensity="light" />
      case "thunderstorm":
        return <RainAnimation intensity="heavy" />
      case "mist":
        return <MistAnimation />
      case "clouds":
        return <CloudsAnimation />
      case "clear":
        // In autumn with clear weather, show leaves
        if (weather.season === "autumn") {
          return <AutumnLeavesAnimation />
        }
        return <SunnyAnimation />
      default:
        // Fallback based on season
        switch (weather.season) {
          case "winter": return <SnowAnimation />
          case "autumn": return <AutumnLeavesAnimation />
          case "summer": return <SunnyAnimation />
          default: return <MistAnimation />
        }
    }
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10" aria-hidden="true">
      <AnimatePresence mode="wait">
        <motion.div
          key={weather?.condition || "loading"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {renderAnimation()}
        </motion.div>
      </AnimatePresence>
      
      {/* Atmospheric Fog - Always present */}
      <motion.div
        className="absolute -bottom-20 -left-20 w-[600px] h-[400px] bg-white/15 blur-[100px] rounded-full"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-20 -right-20 w-[600px] h-[400px] bg-white/15 blur-[100px] rounded-full"
        animate={{
          x: [0, -50, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Dramatic entrance fog effect */}
      {!hasScrolled && (
        <motion.div
          className="absolute inset-0 bg-white/30 blur-[50px] z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{
            duration: 6,
            times: [0, 0.4, 1],
            delay: 2,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Weather Badge */}
      {weather && (
        <WeatherBadge 
          condition={weather.condition}
          temperature={weather.temperature}
          description={weather.description}
        />
      )}
    </div>
  )
}

