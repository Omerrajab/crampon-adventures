import { notFound } from "next/navigation"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { events } from "@/lib/data/events"
import { Calendar, MapPin, Users, DollarSign, ArrowLeft, CheckCircle2 } from "lucide-react"

export async function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }))
}

export default function EventDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const event = events.find((e) => e.slug === params.slug)

  if (!event) {
    notFound()
  }

  const spotsLeft = event.maxParticipants - event.currentParticipants
  const isSoldOut = spotsLeft <= 0

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <article className="py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <Button asChild variant="ghost" className="mb-8">
                <Link href="/events">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Events
                </Link>
              </Button>

              <div className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2 space-y-8">
                  <div className="aspect-video overflow-hidden rounded-xl">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant={
                        event.difficulty === "beginner" ? "secondary" :
                        event.difficulty === "intermediate" ? "default" :
                        event.difficulty === "advanced" ? "destructive" : "outline"
                      }>
                        {event.difficulty}
                      </Badge>
                      {isSoldOut && <Badge variant="destructive">Sold Out</Badge>}
                    </div>

                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                      {event.title}
                    </h1>

                    <p className="text-lg text-muted-foreground">
                      {event.description}
                    </p>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Highlights</h2>
                    <ul className="space-y-2">
                      {event.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Itinerary</h2>
                    <ul className="space-y-3">
                      {event.itinerary.map((item, index) => (
                        <li key={index} className="flex gap-3">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                            {index + 1}
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <Card className="sticky top-24">
                    <CardHeader>
                      <CardTitle>Event Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">Date</p>
                            <p className="text-sm text-muted-foreground">
                              {new Date(event.date).toLocaleDateString()} - {new Date(event.endDate || event.date).toLocaleDateString()}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">Location</p>
                            <p className="text-sm text-muted-foreground">{event.location}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Users className="h-5 w-5 text-muted-foreground mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">Availability</p>
                            <p className="text-sm text-muted-foreground">
                              {isSoldOut ? "Sold Out" : `${spotsLeft} spots left`}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <DollarSign className="h-5 w-5 text-muted-foreground mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">Price</p>
                            <p className="text-2xl font-bold">${event.price}</p>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <Button asChild className="w-full" disabled={isSoldOut}>
                        <Link href="/register">
                          {isSoldOut ? "Sold Out" : "Register Now"}
                        </Link>
                      </Button>

                      <p className="text-xs text-center text-muted-foreground">
                        Registration includes all activities, meals, and conservation materials.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
