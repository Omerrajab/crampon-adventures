"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock } from "lucide-react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/lib/firebase"

export default function AdventuresPage() {
  const [adventures, setAdventures] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAdventures = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "adventures"))
        const adventuresData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setAdventures(adventuresData)
      } catch (error) {
        console.error("Error fetching adventures:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchAdventures()
  }, [])

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
            {loading ? (
              <div className="text-center py-12">Loading adventures...</div>
            ) : adventures.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">No recent adventures found.</div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {adventures.map((adventure) => (
                  <Card key={adventure.id} className="overflow-hidden">
                    <div className="aspect-video overflow-hidden bg-gray-100">
                      {adventure.imageUrl ? (
                        <img
                          src={adventure.imageUrl}
                          alt={adventure.title}
                          className="h-full w-full object-cover transition-transform hover:scale-105"
                        />
                      ) : (
                         <div className="flex items-center justify-center h-full text-gray-400">No Image</div>
                      )}
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">Adventure</Badge>
                      </div>
                      <h3 className="text-xl font-bold">{adventure.title}</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground line-clamp-3">
                        {adventure.description}
                      </p>
                      <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                         <div className="flex items-center gap-2">
                           <Clock className="h-4 w-4" />
                           {adventure.subtitle || "Duration N/A"}
                         </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                         {/* Link to a generic details page or back to register if no details page exists yet */}
                         <Link href={`/register`}>
                           Join Us
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
