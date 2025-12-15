import { notFound } from "next/navigation"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { adventures } from "@/lib/data/adventures"
import { Calendar, MapPin, Clock, User, ArrowLeft } from "lucide-react"

export async function generateStaticParams() {
  return adventures.map((adventure) => ({
    slug: adventure.slug,
  }))
}

export default function AdventureDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const adventure = adventures.find((a) => a.slug === params.slug)

  if (!adventure) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <article className="py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <Button asChild variant="ghost" className="mb-8">
                <Link href="/adventures">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Adventures
                </Link>
              </Button>

              <div className="space-y-8">
                <div className="aspect-video overflow-hidden rounded-xl">
                  <img
                    src={adventure.image}
                    alt={adventure.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant={
                      adventure.difficulty === "easy" ? "secondary" :
                      adventure.difficulty === "moderate" ? "default" :
                      adventure.difficulty === "challenging" ? "destructive" : "outline"
                    }>
                      {adventure.difficulty}
                    </Badge>
                    {adventure.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                    {adventure.title}
                  </h1>

                  <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {adventure.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(adventure.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {adventure.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {adventure.duration}
                    </div>
                  </div>

                  <p className="text-xl text-muted-foreground">
                    {adventure.excerpt}
                  </p>
                </div>

                <div className="prose prose-gray dark:prose-invert max-w-none">
                  {adventure.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                <div className="border-t pt-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="font-semibold">Ready for your own adventure?</h3>
                      <p className="text-sm text-muted-foreground">
                        Join Crampon Adventures and create memories that last a lifetime.
                      </p>
                    </div>
                    <Button asChild>
                      <Link href="/register">Join the Club</Link>
                    </Button>
                  </div>
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
