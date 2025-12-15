import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { adventures } from "@/lib/data/adventures"
import { Calendar, MapPin, Clock } from "lucide-react"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adventures | Crampon Adventures",
  description: "Explore our curated trekking adventures. From easy trails to challenging expeditions.",
};

export default function AdventuresPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-muted/50 py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Our Adventures
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Stories from the trail, lessons from nature, and our commitment to conservation.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {adventures.map((adventure) => (
                <Card key={adventure.id} className="overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={adventure.image}
                      alt={adventure.title}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant={
                        adventure.difficulty === "easy" ? "secondary" :
                        adventure.difficulty === "moderate" ? "default" :
                        adventure.difficulty === "challenging" ? "destructive" : "outline"
                      }>
                        {adventure.difficulty}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold">{adventure.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3">
                      {adventure.excerpt}
                    </p>
                    <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {adventure.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {adventure.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(adventure.date).toLocaleDateString()}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={`/adventures/${adventure.slug}`}>
                        Read More
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
