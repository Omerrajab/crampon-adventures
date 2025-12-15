import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AboutPreview() {
  return (
    <section className="py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Group hiking in nature"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              More Than Just a Hiking Club
            </h2>
            <p className="text-lg text-muted-foreground">
              At Crampon Adventures, we believe that exploring nature comes with a responsibility to protect it. Our mission extends beyond the trail—we are dedicated to environmental conservation and education.
            </p>
            <p className="text-lg text-muted-foreground">
              Every adventure we organize is an opportunity to learn about local ecosystems, participate in cleanup drives, and spread awareness about sustainable living.
            </p>
            <div className="flex gap-4">
              <Button asChild variant="outline">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
