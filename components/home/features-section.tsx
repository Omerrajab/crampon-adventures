"use client"

import { motion } from "framer-motion"
import { Leaf, Map, Users, Shield, Compass, Heart } from "lucide-react"

const features = [
  {
    icon: Map,
    title: "Curated Adventures",
    description: "Expertly planned routes for all skill levels, from serene alpine walks to challenging summit climbs.",
    color: "from-teal-500 to-emerald-500",
    bgColor: "bg-teal-500/10",
    delay: 0
  },
  {
    icon: Leaf,
    title: "Eco-Conscious",
    description: "We practice and preach Leave No Trace principles to protect Kashmir's pristine environments.",
    color: "from-green-500 to-lime-500",
    bgColor: "bg-green-500/10",
    delay: 0.1
  },
  {
    icon: Users,
    title: "Vibrant Community",
    description: "Join a passionate group of outdoor enthusiasts who share your love for nature and adventure.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    delay: 0.2
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Certified guides, proper equipment, and comprehensive safety protocols on every expedition.",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500/10",
    delay: 0.3
  },
  {
    icon: Compass,
    title: "Local Expertise",
    description: "Deep knowledge of Kashmir's trails, culture, and hidden gems that only locals know.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    delay: 0.4
  },
  {
    icon: Heart,
    title: "Unforgettable Memories",
    description: "Create lasting bonds and stories worth telling around campfires for years to come.",
    color: "from-rose-500 to-red-500",
    bgColor: "bg-rose-500/10",
    delay: 0.5
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
}

export function FeaturesSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50 dark:opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--muted-foreground) / 0.15) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />

      <div className="container relative px-4 md:px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Adventure with{" "}
            <span className="text-gradient italic">Purpose</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're not just guides—we're storytellers, conservationists, and fellow adventurers 
            committed to showing you Kashmir's hidden wonders responsibly.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
            >
              <div className="relative h-full rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                {/* Gradient Border Effect on Hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl ${feature.bgColor} transition-transform duration-500 group-hover:scale-110`}>
                  <feature.icon className={`h-7 w-7 bg-gradient-to-br ${feature.color} bg-clip-text`} style={{ color: 'hsl(var(--primary))' }} />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 transition-colors group-hover:text-primary">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Corner */}
                <div className="absolute top-4 right-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`w-full h-full rounded-full bg-gradient-to-br ${feature.color} opacity-20 blur-lg`} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
