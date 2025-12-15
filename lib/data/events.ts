export interface Event {
  id: string
  title: string
  slug: string
  description: string
  image: string
  date: string
  endDate?: string
  location: string
  difficulty: "beginner" | "intermediate" | "advanced" | "expert"
  maxParticipants: number
  currentParticipants: number
  price: number
  highlights: string[]
  itinerary: string[]
}

export const events: Event[] = [
  {
    id: "1",
    title: "Winter Skiing Course - Gulmarg",
    slug: "winter-skiing-gulmarg",
    description: "Experience world-class skiing in Gulmarg, one of the best ski destinations in Asia. Perfect for beginners and intermediates.",
    image: "https://images.unsplash.com/photo-1605540436563-5bca919ae763?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    date: "2025-01-10",
    endDate: "2025-01-17",
    location: "Gulmarg, Kashmir",
    difficulty: "beginner",
    maxParticipants: 15,
    currentParticipants: 5,
    price: 699,
    highlights: [
      "Professional ski instructors",
      "Equipment rental included",
      "Stay in heated cottages",
      "Gondola rides"
    ],
    itinerary: [
      "Day 1: Arrival in Gulmarg and equipment fitting",
      "Day 2-6: Ski lessons and practice sessions",
      "Day 7: Free skiing and departure"
    ]
  },
  {
    id: "2",
    title: "Snow Trek & Skiing - Sonamarg",
    slug: "snow-trek-skiing-sonamarg",
    description: "Combine the thrill of winter trekking with skiing in the golden meadows of Sonamarg. A unique winter adventure.",
    image: "https://images.unsplash.com/photo-1518182170546-07661fd94144?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    date: "2025-02-05",
    endDate: "2025-02-10",
    location: "Sonamarg, Kashmir",
    difficulty: "intermediate",
    maxParticipants: 12,
    currentParticipants: 4,
    price: 549,
    highlights: [
      "Snow camping experience",
      "Basic skiing lessons",
      "Thajiwas Glacier trek",
      "Winter survival skills"
    ],
    itinerary: [
      "Day 1: Arrival in Sonamarg",
      "Day 2: Trek to Thajiwas Glacier",
      "Day 3-4: Skiing and snow activities",
      "Day 5: Departure"
    ]
  },
  {
    id: "3",
    title: "Nun Kun Expedition (Future Event)",
    slug: "nun-kun-expedition",
    description: "An ambitious expedition to the twin peaks of Nun and Kun in the Zanskar range. For serious mountaineers only.",
    image: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    date: "2025-07-15",
    endDate: "2025-08-05",
    location: "Zanskar, Ladakh",
    difficulty: "expert",
    maxParticipants: 8,
    currentParticipants: 2,
    price: 2499,
    highlights: [
      "Summit attempt of Nun (7,135m)",
      "Technical climbing",
      "Glacier traversing",
      "High altitude acclimatization"
    ],
    itinerary: [
      "Day 1-5: Acclimatization in Leh and Kargil",
      "Day 6-10: Base camp setup and training",
      "Day 11-20: Camp rotation and summit push",
      "Day 21: Return to base camp"
    ]
  },
  {
    id: "4",
    title: "Kolhoi Glacier Expedition (Future Event)",
    slug: "kolhoi-glacier-expedition",
    description: "Trek to the 'Goddess of Light', the Kolhoi Glacier, the source of the Lidder River. A challenging and rewarding journey.",
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    date: "2025-08-25",
    endDate: "2025-09-02",
    location: "Pahalgam, Kashmir",
    difficulty: "advanced",
    maxParticipants: 10,
    currentParticipants: 0,
    price: 899,
    highlights: [
      "Glacier walk",
      "Lidder Valley views",
      "Technical terrain",
      "Remote camping"
    ],
    itinerary: [
      "Day 1: Aru to Lidderwat",
      "Day 2: Lidderwat to Satlanjan",
      "Day 3: Satlanjan to Kolhoi Base Camp",
      "Day 4: Glacier exploration",
      "Day 5-6: Return trek"
    ]
  }
]
