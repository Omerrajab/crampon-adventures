"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function LiveHeroAnimation() {
  const [elements, setElements] = useState<{ id: number; left: number; duration: number; delay: number; size: number }[]>([])

  useEffect(() => {
    // Generate random snowflakes
    const count = 50
    const newElements = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // Random horizontal position
      duration: Math.random() * 5 + 5, // Random fall duration between 5s and 10s
      delay: Math.random() * 5, // Random start delay
      size: Math.random() * 6 + 4, // Random size increased (4px to 10px)
    }))
    setElements(newElements)
  }, [])

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

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10" aria-hidden="true">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute rounded-full bg-white/70"
          style={{
            left: `${el.left}%`,
            width: el.size,
            height: el.size,
            top: -10,
          }}
          animate={{
            y: ["0vh", "100vh"],
            x: ["0px", `${Math.random() * 20 - 10}px`], // Slight horizontal drift
            opacity: [0, 1, 0], // Fade in/out
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: "linear",
          }}
        />
      ))}
      
      {/* Fog - Bottom Left */}
      <motion.div
        className="absolute -bottom-20 -left-20 w-[600px] h-[400px] bg-white/20 blur-[100px] rounded-full"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Fog - Bottom Right */}
      <motion.div
        className="absolute -bottom-20 -right-20 w-[600px] h-[400px] bg-white/20 blur-[100px] rounded-full"
        animate={{
          x: [0, -50, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Idle Full Screen Fog */}
      {!hasScrolled && (
        <motion.div
          className="absolute inset-0 bg-white/40 blur-[50px] z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0] }}
          transition={{
            duration: 8,
            times: [0, 0.4, 1], // Fade in slower, fade out faster
            delay: 3, // Start after 3 seconds of idleness
            ease: "easeInOut",
          }}
        />
      )}
    </div>
  )
}
