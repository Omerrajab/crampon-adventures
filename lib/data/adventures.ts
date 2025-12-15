export interface Adventure {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  date: string
  author: string
  difficulty: "easy" | "moderate" | "challenging" | "extreme"
  duration: string
  location: string
  tags: string[]
}

export const adventures: Adventure[] = [
  {
    id: "1",
    title: "Kashmir Great Lakes Trek",
    slug: "kashmir-great-lakes-trek",
    excerpt: "The crown jewel of Kashmir trekking, featuring seven pristine alpine lakes and breathtaking meadows.",
    content: `The Kashmir Great Lakes Trek is arguably the most beautiful trek in India. Over 7 days, you will traverse high-altitude passes, walk through lush meadows filled with wildflowers, and camp beside crystal-clear alpine lakes.

Starting from Sonamarg and ending in Naranag, this trek takes you through the heart of the Kashmir Himalayas. You'll witness the majesty of Vishansar, Kishansar, Gadsar, Satsar, and the twin lakes of Gangbal and Nundkol.

We ensure a responsible trekking experience, adhering to strict environmental guidelines to preserve the fragile ecosystem of these high-altitude lakes.`,
    image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    date: "2025-07-10",
    author: "Crampon Team",
    difficulty: "moderate",
    duration: "7 days",
    location: "Sonamarg, Kashmir",
    tags: ["alpine lakes", "meadows", "trekking", "kashmir"]
  },
  {
    id: "2",
    title: "Gangbal Lake Trek",
    slug: "gangbal-lake-trek",
    excerpt: "A spiritual and scenic journey to the foot of Mount Harmukh, home to the sacred Gangbal Lake.",
    content: `Gangbal Lake, situated at the foothills of Mount Harmukh, is one of the largest and most significant alpine lakes in Kashmir. This trek offers a perfect blend of adventure and spirituality.

The trail takes you through dense pine forests and vast meadows before revealing the stunning turquoise waters of Gangbal. It's a popular spot for trout fishing and offers mesmerizing views of the Harmukh peak.

Our team ensures a comfortable and eco-friendly camping experience, allowing you to soak in the tranquility of this sacred landscape.`,
    image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    date: "2025-08-05",
    author: "Crampon Team",
    difficulty: "moderate",
    duration: "5 days",
    location: "Naranag, Kashmir",
    tags: ["lake", "harmukh", "fishing", "camping"]
  },
  {
    id: "3",
    title: "Tarsar Marsar Trek",
    slug: "tarsar-marsar-trek",
    excerpt: "Explore the twin lakes of Tarsar and Marsar, known for their almond shape and changing colors.",
    content: `The Tarsar Marsar trek takes you deep into the Aru Valley of Pahalgam. These twin lakes, separated by a mountain, are famous for their stunning beauty and serenity.

The trek offers a variety of landscapes, from the lush green meadows of Lidderwat to the rocky terrain near the lakes. It's an ideal trek for nature lovers and photographers.

We focus on sustainable trekking practices, ensuring that these pristine lakes remain unspoiled for future generations.`,
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    date: "2025-08-20",
    author: "Crampon Team",
    difficulty: "moderate",
    duration: "6 days",
    location: "Pahalgam, Kashmir",
    tags: ["twin lakes", "aru valley", "pahalgam", "nature"]
  },
  {
    id: "4",
    title: "Sheshnag Lake Trek",
    slug: "sheshnag-lake-trek",
    excerpt: "A pilgrimage and a trek combined, leading to the emerald waters of Sheshnag Lake.",
    content: `Sheshnag Lake is an oligotrophic lake situated on the track leading to the Amarnath Cave. It is surrounded by snow-clad mountains and is fed by streams arising from glaciers.

The trek is steep but rewarding, offering panoramic views of the surrounding peaks. The lake itself is a sight to behold, with its greenish waters reflecting the mountains.

This trek is perfect for those looking for a shorter but challenging adventure in the Pahalgam region.`,
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    date: "2025-09-01",
    author: "Crampon Team",
    difficulty: "moderate",
    duration: "3 days",
    location: "Pahalgam, Kashmir",
    tags: ["sheshnag", "pilgrimage", "glacier", "pahalgam"]
  },
  {
    id: "5",
    title: "Kousarnag Lake Trek",
    slug: "kousarnag-lake-trek",
    excerpt: "Discover the largest alpine lake in Kashmir, nestled in the Pir Panjal range.",
    content: `Kousarnag (or Kausar Nag) is a high-altitude oligotrophic lake located in the Kulgam district of Kashmir. It is roughly 3 km long and is the source of the Veshaw River.

The trek to Kousarnag is less commercialized, offering a raw and untouched experience of the Pir Panjal range. The trail passes through the famous Aharbal waterfall and vast meadows.

This is a trek for the true explorer who wants to go off the beaten path.`,
    image: "https://images.unsplash.com/photo-1605649487215-285f33869839?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    date: "2025-09-15",
    author: "Crampon Team",
    difficulty: "challenging",
    duration: "6 days",
    location: "Kulgam, Kashmir",
    tags: ["pir panjal", "offbeat", "alpine lake", "adventure"]
  },
  {
    id: "6",
    title: "Harmukh Summit",
    slug: "harmukh-summit",
    excerpt: "A challenging climb to the peak of Mount Harmukh, offering views of the entire Kashmir valley.",
    content: `Mount Harmukh (5,142m) is a sacred mountain for Hindus and a challenging climb for mountaineers. It is believed to be the abode of Lord Shiva.

The summit offers a 360-degree view of the Kashmir valley, including the Nanga Parbat on a clear day. The climb requires technical skills and previous mountaineering experience.

This expedition is led by our most experienced guides and includes technical gear and safety briefings.`,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    date: "2025-10-01",
    author: "Crampon Team",
    difficulty: "extreme",
    duration: "7 days",
    location: "Ganderbal, Kashmir",
    tags: ["summit", "mountaineering", "technical", "harmukh"]
  }
]
