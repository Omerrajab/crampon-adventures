"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Clock, MapPin, Mountain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const featuredAdventures = [
  {
    id: "1",
    title: "Kashmir Great Lakes Trek",
    slug: "kashmir-great-lakes-trek",
    excerpt: "The crown jewel of Kashmir trekking, featuring seven pristine alpine lakes.",
    image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    difficulty: "moderate",
    duration: "7 days",
    location: "Sonamarg",
    featured: true
  },
  {
    id: "2",
    title: "Tarsar Marsar Trek",
    slug: "tarsar-marsar-trek",
    excerpt: "Explore the twin lakes known for their almond shape and changing colors.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    difficulty: "moderate",
    duration: "6 days",
    location: "Pahalgam",
    featured: false
  },
  {
    id: "3",
    title: "Gangbal Lake Trek",
    slug: "gangbal-lake-trek",
    excerpt: "A spiritual journey to the foot of Mount Harmukh and sacred Gangbal Lake.",
    image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    difficulty: "moderate",
    duration: "5 days",
    location: "Naranag",
    featured: false
  }
]

const difficultyColors: Record<string, string> = {
  easy: "bg-green-500/10 text-green-600 dark:text-green-400",
  moderate: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  challenging: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  extreme: "bg-red-500/10 text-red-600 dark:text-red-400"
}

export function FeaturedAdventures() {
  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Featured Adventures
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Discover Our{" "}
              <span className="text-gradient italic">Popular Treks</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Button asChild variant="outline" className="group rounded-full">
              <Link href="/adventures">
                View All Adventures
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Adventures Grid */}
        <div className="grid gap-6 md:gap-8 lg:grid-cols-3">
          {/* Featured Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 lg:row-span-2"
          >
            <Link href={`/adventures/${featuredAdventures[0].slug}`} className="group block h-full">
              <div className="relative h-full min-h-[400px] lg:min-h-[600px] rounded-3xl overflow-hidden">
                {/* Image */}
                <div className="absolute inset-0">
                  <img
                    src={featuredAdventures[0].image}
                    alt={featuredAdventures[0].title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6 md:p-10">
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-sm border-0">
                      Featured
                    </Badge>
                    <Badge className={`${difficultyColors[featuredAdventures[0].difficulty]} border-0 capitalize`}>
                      {featuredAdventures[0].difficulty}
                    </Badge>
                  </div>

                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    {featuredAdventures[0].title}
                  </h3>

                  <p className="text-white/80 text-lg mb-6 max-w-xl">
                    {featuredAdventures[0].excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 text-white/70">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredAdventures[0].duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{featuredAdventures[0].location}</span>
                    </div>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="absolute top-6 right-6 md:top-10 md:right-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Smaller Cards */}
          {featuredAdventures.slice(1).map((adventure, index) => (
            <motion.div
              key={adventure.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <Link href={`/adventures/${adventure.slug}`} className="group block h-full">
                <div className="relative h-full min-h-[280px] rounded-2xl overflow-hidden border border-border bg-card">
                  {/* Image */}
                  <div className="absolute inset-0">
                    <img
                      src={adventure.image}
                      alt={adventure.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-6">
                    {/* Badge */}
                    <Badge className={`${difficultyColors[adventure.difficulty]} border-0 capitalize w-fit mb-3`}>
                      {adventure.difficulty}
                    </Badge>

                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {adventure.title}
                    </h3>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-white/70 text-sm">
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{adventure.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{adventure.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

