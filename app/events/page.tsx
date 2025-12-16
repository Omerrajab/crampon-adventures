"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, DollarSign } from "lucide-react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/lib/firebase"

export default function EventsPage() {
  const [events, setEvents] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "events"))
        const eventsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setEvents(eventsData)
      } catch (error) {
        console.error("Error fetching events:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

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
            {loading ? (
              <div className="text-center py-12">Loading upcoming events...</div>
            ) : events.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">No upcoming events scheduled at the moment.</div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {events.map((event) => (
                  <Card key={event.id} className="overflow-hidden flex flex-col">
                    <div className="aspect-video overflow-hidden relative bg-gray-100">
                      {event.imageUrl ? (
                        <img
                          src={event.imageUrl}
                          alt={event.title}
                          className="h-full w-full object-cover transition-transform hover:scale-105"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full text-gray-400">No Image</div>
                      )}
                      {/* 
                        Use dynamic logic for "Sold Out" if you had a participants field in Firestore.
                        For now, we omit it or assume false unless data is there.
                      */}
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                         {/* Fallback badge or dynamic if you add difficulty to admin panel */}
                        <Badge variant="outline">Adventure</Badge>
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
                          {event.subtitle || "Date TBA"}
                        </div>
                        {/* 
                           These fields (location, participants, price) were in the static data 
                           but not yet in the simple Admin Panel form. 
                           I will hide them gracefully if missing, or default them.
                        */}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link href={`/register`}>
                          Register Now
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
