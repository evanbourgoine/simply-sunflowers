"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";

const posts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
    likes: 847,
    caption: "Golden hour never looked so good. ✨ #SimplySunflowers",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
    likes: 1203,
    caption: "New arrivals just dropped 🌻 #SummerEdit",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80",
    likes: 634,
    caption: "Bloom where you are planted 🌿 #SimplySunflowers",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80",
    likes: 921,
    caption: "Weekend mood 🍋 #SunflowerSummer",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
    likes: 512,
    caption: "The linen set you've been waiting for 🤍 #NewIn",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80",
    likes: 1456,
    caption: "Chasing sunsets & good vibes ☀️ #SimplySunflowers",
  },
];

export default function InstagramFeed() {
  return (
    <section className="bg-linen py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="flex flex-col items-center text-center mb-12 gap-3">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-amber">
            Follow Along
          </p>
          <h2 className="font-display text-5xl text-olive">
            @simplysunflowers
          </h2>
          <p className="font-body text-sm text-olive/60 max-w-sm leading-relaxed">
            Tag us in your looks for a chance to be featured. We love seeing you
            bloom.
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-xs tracking-widest uppercase text-olive border border-olive px-6 py-3 hover:bg-olive hover:text-linen transition-colors duration-300 mt-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
            Follow on Instagram
          </a>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {posts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-wheat"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.03, zIndex: 10 }}
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-olive/0 group-hover:bg-olive/60 transition-colors duration-300 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                <div className="flex items-center gap-1 text-linen">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span className="font-body text-sm font-medium">
                    {post.likes.toLocaleString()}
                  </span>
                </div>
                <p className="font-body text-xs text-linen/80 text-center px-3 line-clamp-2">
                  {post.caption}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
