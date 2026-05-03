export interface Event {
  id: number;
  title: string;
  date: string;
  day: string;
  month: string;
  year: string;
  time: string;
  location: string;
  city: string;
  description: string;
  image: string;
  tag: string;
}

export const events: Event[] = [
  {
    id: 1,
    title: "Summer Solstice Pop-Up",
    date: "2025-06-21",
    day: "21",
    month: "JUN",
    year: "2025",
    time: "11:00 AM – 6:00 PM",
    location: "The Garden Market, 14 Bloom St",
    city: "Portland, ME",
    description:
      "Celebrate the longest day of the year with us. Shop the full summer collection, enjoy live music, and sip on complimentary lemonade while you browse.",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    tag: "Pop-Up Shop",
  },
  {
    id: 2,
    title: "Golden Hour Market",
    date: "2025-07-12",
    day: "12",
    month: "JUL",
    year: "2025",
    time: "3:00 PM – 8:00 PM",
    location: "Harborside Pavilion",
    city: "Bar Harbor, ME",
    description:
      "An open-air evening market timed perfectly with golden hour. New arrivals, exclusive bundles, and a chance to meet the team behind the brand.",
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80",
    tag: "Market",
  },
  {
    id: 3,
    title: "Sunflower Sunday",
    date: "2025-07-27",
    day: "27",
    month: "JUL",
    year: "2025",
    time: "10:00 AM – 4:00 PM",
    location: "Riverside Farmers Market",
    city: "Brunswick, ME",
    description:
      "Our most relaxed event of the season. Find us at the farmers market alongside local makers, fresh flowers, and weekend energy.",
    image:
      "https://images.unsplash.com/photo-1470753937643-efeb931202a9?w=800&q=80",
    tag: "Farmers Market",
  },
  {
    id: 4,
    title: "End of Summer Edit",
    date: "2025-08-16",
    day: "16",
    month: "AUG",
    year: "2025",
    time: "12:00 PM – 7:00 PM",
    location: "The Loft at Foundry Row",
    city: "Kennebunk, ME",
    description:
      "A curated indoor pop-up featuring end-of-season styles, sample sales, and a first look at our upcoming autumn collection.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    tag: "Pop-Up Shop",
  },
  {
    id: 5,
    title: "Harvest & Style Fair",
    date: "2025-09-06",
    day: "06",
    month: "SEP",
    year: "2025",
    time: "10:00 AM – 5:00 PM",
    location: "Coastal Commons",
    city: "Rockland, ME",
    description:
      "As summer fades into autumn, join us for a transitional edit blending warm tones and lighter layering pieces perfect for the season ahead.",
    image:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=800&q=80",
    tag: "Seasonal Fair",
  },
  {
    id: 6,
    title: "Autumn Bloom Pop-Up",
    date: "2025-09-20",
    day: "20",
    month: "SEP",
    year: "2025",
    time: "11:00 AM – 6:00 PM",
    location: "The Old Mill Gallery",
    city: "Freeport, ME",
    description:
      "Our final outdoor event of the year. Autumn tones, cozy knits, and the full new-season collection on display in a stunning gallery setting.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    tag: "Pop-Up Shop",
  },
  {
    id: 7,
    title: "Holiday Preview Night",
    date: "2025-11-08",
    day: "08",
    month: "NOV",
    year: "2025",
    time: "5:00 PM – 9:00 PM",
    location: "Studio Eleven, 3 Pine Ave",
    city: "Portland, ME",
    description:
      "An exclusive evening preview of our holiday collection. Drinks, live acoustic music, and early access to gifting bundles before they go online.",
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80",
    tag: "Exclusive Preview",
  },
  {
    id: 8,
    title: "Winter Market",
    date: "2025-12-13",
    day: "13",
    month: "DEC",
    year: "2025",
    time: "10:00 AM – 5:00 PM",
    location: "The Exchange Hall",
    city: "Bath, ME",
    description:
      "Close out the year with us at our annual winter market. Gift wrapping, seasonal treats, and the warmest pieces from the full collection.",
    image:
      "https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?w=800&q=80",
    tag: "Winter Market",
  },
];
