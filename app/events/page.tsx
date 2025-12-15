import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { events } from "@/lib/data/events"
import { Calendar, MapPin, Users, DollarSign } from "lucide-react"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | Crampon Adventures",
  description: "Join upcoming trekking events and workshops. Connect with the community.",
};

export default function EventsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-muted/50 py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Upcoming Events
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Join us on our next adventure. Every event combines exploration with environmental stewardship.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => (
                <Card key={event.id} className="overflow-hidden flex flex-col">
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                    {event.currentParticipants >= event.maxParticipants && (
                      <div className="absolute top-2 right-2">
                        <Badge variant="destructive">Sold Out</Badge>
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant={
                        event.difficulty === "beginner" ? "secondary" :
                        event.difficulty === "intermediate" ? "default" :
                        event.difficulty === "advanced" ? "destructive" : "outline"
                      }>
                        {event.difficulty}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold">{event.title}</h3>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground line-clamp-3">
                      {event.description}
                    </p>
                    <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(event.date).toLocaleDateString()} - {new Date(event.endDate || event.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {event.currentParticipants}/{event.maxParticipants} participants
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4" />
                        ${event.price}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={`/events/${event.slug}`}>
                        View Details
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
