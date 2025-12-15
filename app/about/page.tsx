import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Leaf, Users, Mountain, Heart } from "lucide-react"
import Link from "next/link"

const values = [
  {
    icon: Mountain,
    title: "Adventure",
    description: "We believe in pushing boundaries and exploring the unknown, always with respect for nature."
  },
  {
    icon: Leaf,
    title: "Conservation",
    description: "Every adventure is an opportunity to protect and preserve the environments we explore."
  },
  {
    icon: Users,
    title: "Community",
    description: "We build a supportive community of like-minded adventurers who share our values."
  },
  {
    icon: Heart,
    title: "Responsibility",
    description: "We practice Leave No Trace principles and educate others about sustainable outdoor recreation."
  }
]

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & Lead Guide",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "15+ years of mountaineering experience and environmental advocacy."
  },
  {
    name: "Michael Chen",
    role: "Conservation Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Marine biologist passionate about coastal ecosystem protection."
  },
  {
    name: "Emma Rodriguez",
    role: "Community Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Building connections between adventurers and conservation initiatives."
  }
]

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Crampon Adventures",
  description: "Learn about our mission, values, and the team dedicated to sustainable trekking in Kashmir and Ladakh.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                About Crampon Adventures
              </h1>
              <p className="text-xl text-muted-foreground">
                Based in the heart of Srinagar, we are a movement dedicated to exploring the pristine beauty of Kashmir and Ladakh while protecting it for future generations.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                  Crampon Adventures was founded on the belief that outdoor exploration and environmental conservation are inseparable. We organize adventures that challenge participants physically while educating them about the ecosystems we traverse and the importance of protecting them.
                </p>
                <p className="text-lg text-muted-foreground">
                  Every trek, climb, and expedition we undertake includes a conservation component—whether it's trail maintenance, wildlife monitoring, or educational workshops on sustainable practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Our Values</h2>
                <p className="text-muted-foreground">
                  These principles guide everything we do
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {values.map((value, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6 space-y-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-bold">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Meet Our Team</h2>
                <p className="text-muted-foreground">
                  Passionate adventurers and conservationists
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                {team.map((member, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <CardContent className="pt-6 space-y-2">
                      <h3 className="font-bold">{member.name}</h3>
                      <Badge variant="secondary">{member.role}</Badge>
                      <p className="text-sm text-muted-foreground">{member.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Our Impact</h2>
                <p className="text-muted-foreground">
                  Together, we're making a difference
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Adventurers Trained</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-primary">2,000kg</div>
                  <div className="text-sm text-muted-foreground">Waste Removed</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Conservation Projects</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter">Join Our Movement</h2>
              <p className="text-lg text-muted-foreground">
                Become part of a community that values adventure and conservation equally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/register">Become a Member</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/events">View Upcoming Events</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
