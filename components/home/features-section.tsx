import { Leaf, Map, Users } from "lucide-react"

const features = [
  {
    icon: Map,
    title: "Curated Adventures",
    description: "Expertly planned routes for all skill levels, from serene hikes to challenging climbs.",
  },
  {
    icon: Leaf,
    title: "Eco-Conscious",
    description: "We practice and preach Leave No Trace principles to protect our pristine environments.",
  },
  {
    icon: Users,
    title: "Vibrant Community",
    description: "Join a passionate group of outdoor enthusiasts who share your love for nature.",
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-muted/50 py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
