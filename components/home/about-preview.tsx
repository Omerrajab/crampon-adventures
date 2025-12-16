"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight, TreePine, Droplets, Mountain } from "lucide-react"

export function AboutPreview() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  const imageY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"])

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="container relative px-4 md:px-6">
        <div className="grid gap-12 lg:gap-20 lg:grid-cols-2 lg:items-center">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <motion.div 
                style={{ y: imageY }}
                className="absolute inset-0 scale-110"
              >
                <img
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Group hiking in nature"
                  className="h-full w-full object-cover"
                />
              </motion.div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Image Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass glass-border rounded-2xl p-4 backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-white/70 uppercase tracking-wider">Since</p>
                      <p className="text-2xl font-bold text-white">2019</p>
                    </div>
                    <div className="h-12 w-px bg-white/20" />
                    <div>
                      <p className="text-xs text-white/70 uppercase tracking-wider">Treks</p>
                      <p className="text-2xl font-bold text-white">50+</p>
                    </div>
                    <div className="h-12 w-px bg-white/20" />
                    <div>
                      <p className="text-xs text-white/70 uppercase tracking-wider">Trekkers</p>
                      <p className="text-2xl font-bold text-white">1200+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -right-4 md:-right-8 top-8 z-10"
            >
              <div className="bg-card border border-border rounded-2xl p-5 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <TreePine className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">100%</p>
                    <p className="text-sm text-muted-foreground">Eco-Friendly</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center"
          >
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Our Story
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              More Than Just a{" "}
              <span className="text-gradient italic">Hiking Club</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Crampon Adventures, we believe that exploring nature comes with a 
              responsibility to protect it. Our mission extends beyond the trail—we 
              are dedicated to environmental conservation and education.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every adventure we organize is an opportunity to learn about local ecosystems, 
              participate in cleanup drives, and spread awareness about sustainable living.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { icon: Mountain, label: "Expert Guides" },
                { icon: Droplets, label: "Leave No Trace" },
                { icon: TreePine, label: "Conservation" },
                { icon: ArrowUpRight, label: "Growth Mindset" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-muted/50"
                >
                  <item.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                asChild 
                size="lg"
                className="group rounded-full px-8"
              >
                <Link href="/about">
                  Learn Our Story
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="rounded-full px-8"
              >
                <Link href="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
